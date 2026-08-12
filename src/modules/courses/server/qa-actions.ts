"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { requireSession } from "@/lib/require-session";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

const askSchema = z.object({
  courseId: z.string().uuid(),
  body: z.string().trim().min(5, "Escribe tu pregunta.").max(1000),
});

/** Un alumno inscrito publica una pregunta sobre el curso (estado "abierta"). */
export async function askCourseQuestion(courseId: string, body: string) {
  const session = await requireSession();
  if (!session?.user?.id) {
    return { status: "error" as const, message: "Inicia sesión para preguntar." };
  }

  const rl = checkRateLimit(`question:${session.user.id}`, 10, 60 * 60);
  if (!rl.allowed) {
    return {
      status: "error" as const,
      message: "Demasiadas preguntas seguidas. Inténtalo más tarde.",
    };
  }

  const parsed = askSchema.safeParse({ courseId, body });
  if (!parsed.success) {
    return {
      status: "error" as const,
      message: parsed.error.issues[0]?.message ?? "Pregunta inválida.",
    };
  }

  const enrollment = await db.enrollment.findUnique({
    where: {
      userId_courseId: { userId: session.user.id, courseId: parsed.data.courseId },
    },
  });
  if (!enrollment) {
    return {
      status: "error" as const,
      message: "Solo puedes preguntar en cursos en los que estás inscrito.",
    };
  }

  const openStatus = await db.status.findUnique({ where: { key: "abierta" } });
  if (!openStatus)
    return { status: "error" as const, message: "No se pudo publicar la pregunta." };

  const course = await db.course.findUnique({
    where: { id: parsed.data.courseId },
    select: { slug: true },
  });

  await db.courseQuestion.create({
    data: {
      courseId: parsed.data.courseId,
      userId: session.user.id,
      body: parsed.data.body,
      statusId: openStatus.id,
    },
  });

  revalidatePath("/admin/preguntas");
  if (course) revalidatePath(`/cursos/${course.slug}`);
  return {
    status: "success" as const,
    message: "Pregunta publicada. Te avisaremos cuando la respondan.",
  };
}

const answerSchema = z.object({
  questionId: z.string().uuid(),
  body: z.string().trim().min(1, "Escribe una respuesta.").max(4000),
});

/** Un admin responde a una pregunta: crea la respuesta, marca "respondida" y notifica. */
export async function answerCourseQuestion(questionId: string, body: string) {
  const session = await requireAdmin();

  const parsed = answerSchema.safeParse({ questionId, body });
  if (!parsed.success) {
    return {
      status: "error" as const,
      message: parsed.error.issues[0]?.message ?? "Respuesta inválida.",
    };
  }

  const question = await db.courseQuestion.findUnique({
    where: { id: parsed.data.questionId },
    include: { course: { select: { slug: true, title: true } } },
  });
  if (!question)
    return { status: "error" as const, message: "La pregunta ya no existe." };

  const answeredStatus = await db.status.findUnique({ where: { key: "respondida" } });

  await db.$transaction([
    db.courseQuestionAnswer.create({
      data: { questionId: question.id, userId: session.user.id, body: parsed.data.body },
    }),
    ...(answeredStatus
      ? [
          db.courseQuestion.update({
            where: { id: question.id },
            data: { statusId: answeredStatus.id },
          }),
        ]
      : []),
    db.notification.create({
      data: {
        userId: question.userId,
        type: "curso",
        title: "Respuesta a tu pregunta",
        body: `Han respondido tu pregunta en "${question.course.title}".`,
        relatedEntityType: "CourseQuestion",
        relatedEntityId: question.id,
      },
    }),
  ]);

  await logAdminAction(session.user.id, "qa.answer", "CourseQuestion", question.id);
  revalidatePath("/admin/preguntas");
  revalidatePath(`/cursos/${question.course.slug}`);
  return { status: "success" as const };
}
