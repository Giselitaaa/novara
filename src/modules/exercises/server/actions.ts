"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { requireSession } from "@/lib/require-session";
import { correctExerciseSubmission } from "@/modules/ai/server/generation";
import { AIProviderError } from "@/modules/ai/server/provider";

/**
 * Entrega de un ejercicio + intento de corrección inteligente.
 *
 * Si hay un proveedor de IA configurado, se corrige al instante y se
 * guarda la nota + el feedback. Si no lo hay (el caso de este
 * entorno, sin claves de API), la entrega queda en estado
 * "pendiente" — nunca se inventa una nota ni un feedback falsos. El
 * alumno ve honestamente "pendiente de revisión" en vez de una
 * corrección que no ha ocurrido de verdad.
 */
export async function submitExercise(
  lessonId: string,
  courseSlug: string,
  content: string
) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión para entregar el ejercicio.");
  if (!content.trim()) throw new Error("Escribe tu entrega antes de enviarla.");

  // La corrección con IA tiene coste real: limitamos las entregas por
  // alumno para evitar abuso/bucles.
  const rl = checkRateLimit(`exercise:${session.user.id}`, 15, 60 * 60);
  if (!rl.allowed) {
    throw new Error(
      `Has enviado demasiados ejercicios seguidos. Espera ${Math.ceil(rl.resetInSeconds / 60)} minutos.`
    );
  }

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: { exercise: true },
  });
  if (!lesson?.exercise) throw new Error("Esta lección no tiene un ejercicio asociado.");

  const submission = await db.exerciseSubmission.create({
    data: { userId: session.user.id, lessonId, content },
  });

  try {
    const correction = await correctExerciseSubmission(
      lesson.exercise.instructions,
      content
    );
    await db.exerciseSubmission.update({
      where: { id: submission.id },
      data: {
        status: "corregido",
        aiScore: correction.score,
        aiFeedback: correction.feedback,
        correctedAt: new Date(),
      },
    });
    revalidatePath(`/cursos/${courseSlug}/aprender/${lessonId}`);
    return {
      status: "corrected" as const,
      score: correction.score,
      feedback: correction.feedback,
    };
  } catch (error) {
    // Sin proveedor de IA configurado (u otro fallo de la API): la
    // entrega queda registrada y pendiente de revisión manual, nunca
    // se finge una corrección.
    const isNotConfigured =
      error instanceof AIProviderError && error.code === "not_configured";
    await db.exerciseSubmission.update({
      where: { id: submission.id },
      data: { status: isNotConfigured ? "pendiente" : "error_correccion" },
    });
    revalidatePath(`/cursos/${courseSlug}/aprender/${lessonId}`);
    return { status: "pending" as const };
  }
}

/**
 * Envío de un ejercicio de WRITING para CORRECCIÓN MANUAL de la profesora.
 * A diferencia de `submitExercise`, no intenta autocorregir con IA: la entrega
 * queda "pendiente" y aparece en el panel de revisión (/admin/ejercicios),
 * donde la profesora la califica según los criterios de Cambridge y le envía
 * al alumno la nota + su mensaje. Avisa a las administradoras al recibirse.
 */
export async function submitWritingForReview(lessonId: string, content: string) {
  const session = await requireSession();
  if (!session?.user?.id) {
    return { status: "error" as const, message: "Inicia sesión para enviar tu texto." };
  }
  const text = content.trim();
  if (text.length < 10) {
    return { status: "error" as const, message: "Escribe tu texto antes de enviarlo." };
  }
  const rl = checkRateLimit(`writing:${session.user.id}`, 15, 60 * 60);
  if (!rl.allowed) {
    return { status: "error" as const, message: "Has enviado demasiados textos seguidos. Espera un poco." };
  }

  const lesson = await db.lesson.findUnique({ where: { id: lessonId }, select: { id: true, title: true } });
  if (!lesson) return { status: "error" as const, message: "Lección no encontrada." };

  const submission = await db.exerciseSubmission.create({
    data: { userId: session.user.id, lessonId, content: text, status: "pendiente" },
  });

  const admins = await db.user.findMany({
    where: { roles: { some: { role: { name: "administrador" } } } },
    select: { id: true },
  });
  if (admins.length) {
    await db.notification.createMany({
      data: admins.map((a) => ({
        userId: a.id,
        type: "sistema",
        title: "Nuevo Writing por corregir",
        body: `Un alumno ha enviado su texto de "${lesson.title}".`,
        relatedEntityType: "ExerciseSubmission",
        relatedEntityId: submission.id,
      })),
    });
  }

  revalidatePath("/admin/ejercicios");
  return { status: "success" as const };
}

export async function getLatestSubmission(userId: string, lessonId: string) {
  return db.exerciseSubmission.findFirst({
    where: { userId, lessonId },
    orderBy: { submittedAt: "desc" },
  });
}
