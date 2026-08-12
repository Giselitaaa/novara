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

export async function getLatestSubmission(userId: string, lessonId: string) {
  return db.exerciseSubmission.findFirst({
    where: { userId, lessonId },
    orderBy: { submittedAt: "desc" },
  });
}
