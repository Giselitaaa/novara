"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/lib/db";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

const correctSchema = z.object({
  submissionId: z.string().uuid(),
  score: z.coerce.number().min(0).max(100),
  feedback: z.string().trim().min(1, "Escribe un feedback.").max(4000),
});

/**
 * Corrección manual de una entrega de ejercicio por un administrador —
 * la vía para las entregas que quedaron "pendiente" (sin IA) o
 * "error_correccion". Fija nota y feedback, marca la entrega como
 * corregida y avisa al alumno.
 */
export async function correctExerciseSubmissionManually(
  submissionId: string,
  score: number,
  feedback: string
) {
  const session = await requireAdmin();

  const parsed = correctSchema.safeParse({ submissionId, score, feedback });
  if (!parsed.success) {
    return {
      status: "error" as const,
      message: parsed.error.issues[0]?.message ?? "Datos inválidos.",
    };
  }

  const submission = await db.exerciseSubmission.findUnique({
    where: { id: parsed.data.submissionId },
    include: { lesson: { select: { title: true } } },
  });
  if (!submission)
    return { status: "error" as const, message: "La entrega ya no existe." };

  await db.$transaction([
    db.exerciseSubmission.update({
      where: { id: submission.id },
      data: {
        status: "corregido",
        aiScore: parsed.data.score,
        aiFeedback: parsed.data.feedback,
        correctedAt: new Date(),
      },
    }),
    db.notification.create({
      data: {
        userId: submission.userId,
        type: "curso",
        title: "Ejercicio corregido",
        body: `Tu ejercicio de "${submission.lesson.title}" ya tiene corrección (${parsed.data.score}/100).`,
        relatedEntityType: "ExerciseSubmission",
        relatedEntityId: submission.id,
      },
    }),
  ]);

  await logAdminAction(
    session.user.id,
    "exercises.correct_manual",
    "ExerciseSubmission",
    submission.id,
    { score: parsed.data.score }
  );
  revalidatePath("/admin/ejercicios");
  revalidatePath(`/admin/ejercicios/${submission.id}`);
  return { status: "success" as const };
}
