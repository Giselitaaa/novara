"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { issueCertificateIfEligible } from "@/modules/certificates/server/actions";
import {
  awardXP,
  checkAndAwardAchievements,
  touchStreak,
} from "@/modules/gamification/server/actions";

export type EnrollActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Inscripción directa a un curso gratuito. Los cursos premium NO
 * pasan por aquí — su acceso se concede desde el módulo de pagos
 * (Fase 4: aprobación manual de Bizum/transferencia), fuera del
 * alcance de esta fase.
 */
export async function enrollInFreeCourse(
  courseId: string,
  courseSlug: string
): Promise<EnrollActionState> {
  const session = await requireSession();
  if (!session?.user?.id) {
    return { status: "error", message: "Inicia sesión para inscribirte." };
  }

  const course = await db.course.findUnique({
    where: { id: courseId },
    include: { accessType: true },
  });

  if (!course || course.accessType.key !== "gratis") {
    return {
      status: "error",
      message: "Este curso no está disponible para inscripción directa.",
    };
  }

  const gratisSource = await db.enrollmentSource.findUnique({ where: { key: "gratis" } });
  if (!gratisSource) {
    return { status: "error", message: "No se pudo completar la inscripción." };
  }

  await db.enrollment.upsert({
    where: { userId_courseId: { userId: session.user.id, courseId } },
    create: { userId: session.user.id, courseId, sourceId: gratisSource.id },
    update: {},
  });

  revalidatePath(`/cursos/${courseSlug}`);
  return { status: "success", message: "Te has inscrito correctamente." };
}

// ─── Progreso de aprendizaje ─────────────────────────────────────────

/**
 * Guardado automático de posición/tiempo visto — se llama con
 * debounce desde el reproductor mientras el alumno avanza, no espera
 * a que termine la lección.
 */
export async function saveLessonProgress(
  lessonId: string,
  data: { watchedSeconds?: number; lastPositionSeconds?: number }
) {
  const session = await requireSession();
  if (!session?.user?.id) return;

  await db.lessonProgress.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    create: {
      userId: session.user.id,
      lessonId,
      status: "en_progreso",
      watchedSeconds: data.watchedSeconds ?? 0,
      lastPositionSeconds: data.lastPositionSeconds ?? 0,
    },
    update: {
      status: "en_progreso",
      ...(data.watchedSeconds !== undefined
        ? { watchedSeconds: data.watchedSeconds }
        : {}),
      ...(data.lastPositionSeconds !== undefined
        ? { lastPositionSeconds: data.lastPositionSeconds }
        : {}),
    },
  });
}

/**
 * Marca una lección como completada, recalcula el resumen de progreso
 * del curso, otorga XP, actualiza la racha, comprueba logros y —si
 * corresponde— emite el certificado. Es la acción central de toda la
 * experiencia de aprendizaje: todo lo demás (gamificación,
 * certificación) reacciona a este único evento.
 */
export async function markLessonComplete(lessonId: string, courseSlug: string) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión.");
  const userId = session.user.id;

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: { module: { select: { courseId: true } } },
  });
  if (!lesson) throw new Error("Lección no encontrada.");
  const courseId = lesson.module.courseId;

  const alreadyCompleted = await db.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
  });
  const wasAlreadyDone = alreadyCompleted?.status === "completado";

  await db.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    create: { userId, lessonId, status: "completado", completedAt: new Date() },
    update: { status: "completado", completedAt: new Date() },
  });

  const [totalLessons, completedLessons] = await Promise.all([
    db.lesson.count({ where: { module: { courseId } } }),
    db.lessonProgress.count({
      where: { userId, status: "completado", lesson: { module: { courseId } } },
    }),
  ]);
  const percentComplete = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  await db.courseProgressSummary.upsert({
    where: { userId_courseId: { userId, courseId } },
    create: { userId, courseId, percentComplete },
    update: { percentComplete },
  });

  await db.activityLog.create({
    data: {
      userId,
      eventType: "leccion_completada",
      description: `Completó la lección "${lesson.title}"`,
      relatedEntityType: "Lesson",
      relatedEntityId: lessonId,
    },
  });

  let newBadges: { key: string; name: string }[] = [];
  if (!wasAlreadyDone) {
    await awardXP(userId, "leccion_completada", "Lesson", lessonId);
    await touchStreak(userId);

    if (percentComplete >= 100) {
      await awardXP(userId, "curso_completado", "Course", courseId);
      await issueCertificateIfEligible(userId, courseId);
    }

    newBadges = await checkAndAwardAchievements(userId);
  }

  revalidatePath(`/cursos/${courseSlug}/aprender/${lessonId}`);
  revalidatePath("/mi-aprendizaje");
  return { status: "success" as const, percentComplete, newBadges };
}

export async function saveLessonNote(lessonId: string, body: string) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión.");

  await db.lessonNote.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    create: { userId: session.user.id, lessonId, body },
    update: { body },
  });

  return { status: "success" as const, message: "Nota guardada." };
}
