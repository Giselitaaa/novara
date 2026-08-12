"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/lib/db";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

const reviewSchema = z.object({
  submissionId: z.string().uuid(),
  decision: z.enum(["aprobado", "rechazado"]),
  feedback: z.string().trim().max(4000).optional(),
});

/**
 * Un administrador revisa una entrega de proyecto final: la aprueba o
 * la rechaza con feedback, notifica al alumno y deja rastro. El feedback
 * es obligatorio al rechazar — un rechazo sin explicación no ayuda a
 * nadie a mejorar.
 */
export async function reviewProjectSubmission(
  submissionId: string,
  decision: "aprobado" | "rechazado",
  feedback?: string
) {
  const session = await requireAdmin();

  const parsed = reviewSchema.safeParse({ submissionId, decision, feedback });
  if (!parsed.success) {
    return { status: "error" as const, message: "Datos inválidos." };
  }
  if (parsed.data.decision === "rechazado" && !parsed.data.feedback) {
    return { status: "error" as const, message: "Explica al alumno por qué se rechaza." };
  }

  const submission = await db.courseFinalProjectSubmission.findUnique({
    where: { id: parsed.data.submissionId },
    include: { finalProject: { include: { course: { select: { title: true } } } } },
  });
  if (!submission)
    return { status: "error" as const, message: "La entrega ya no existe." };

  const courseTitle = submission.finalProject.course.title;
  const approved = parsed.data.decision === "aprobado";

  await db.$transaction([
    db.courseFinalProjectSubmission.update({
      where: { id: submission.id },
      data: { status: parsed.data.decision, feedback: parsed.data.feedback ?? null },
    }),
    db.notification.create({
      data: {
        userId: submission.userId,
        type: "curso",
        title: approved ? "Proyecto final aprobado" : "Proyecto final revisado",
        body: approved
          ? `¡Enhorabuena! Tu proyecto de "${courseTitle}" ha sido aprobado.`
          : `Tu proyecto de "${courseTitle}" necesita cambios. Revisa el feedback.`,
        relatedEntityType: "CourseFinalProjectSubmission",
        relatedEntityId: submission.id,
      },
    }),
  ]);

  await logAdminAction(
    session.user.id,
    "projects.review",
    "CourseFinalProjectSubmission",
    submission.id,
    { decision: parsed.data.decision }
  );
  revalidatePath("/admin/proyectos");
  revalidatePath(`/admin/proyectos/${submission.id}`);
  return { status: "success" as const };
}
