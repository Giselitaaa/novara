"use server";

import type { Prisma } from "@prisma/client";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { gradeExercise } from "@/modules/exercises/shared/grade";
import type { Question, Response } from "@/modules/exercises/shared/question-types";

export type ExerciseResult = {
  score: number;
  correctCount: number;
  total: number;
  needsManualReview: boolean;
  perQuestion: {
    correct: boolean;
    autoGradable: boolean;
    explanation: string | null;
  }[];
};

/**
 * Corrige las respuestas del alumno a un ejercicio. La corrección se hace
 * SIEMPRE en el servidor con el motor puro `gradeExercise` (nunca se confía
 * en el cliente para la nota). Las preguntas se releen de la base de datos.
 */
export async function submitExercise(
  exerciseId: string,
  responses: (Response | null)[]
): Promise<ExerciseResult> {
  const session = await requireSession();

  const exercise = await db.exercise.findUnique({
    where: { id: exerciseId },
    include: { questions: { orderBy: { order: "asc" } } },
  });
  if (!exercise) throw new Error("Ejercicio no encontrado.");

  const questions = exercise.questions.map((q) => q.data as unknown as Question);
  const result = gradeExercise(questions, responses);

  // Persistir el intento (seguimiento del alumno + analítica).
  if (session?.user?.id) {
    await db.exerciseAttempt.create({
      data: {
        exerciseId,
        userId: session.user.id,
        score: result.score,
        correctCount: result.correctCount,
        total: questions.length,
        needsManualReview: result.needsManualReview,
        responses: responses as unknown as Prisma.InputJsonValue,
      },
    });
  }

  return {
    score: result.score,
    correctCount: result.correctCount,
    total: questions.length,
    needsManualReview: result.needsManualReview,
    perQuestion: result.perQuestion.map((g, i) => ({
      correct: g.correct,
      autoGradable: g.autoGradable,
      explanation:
        typeof (questions[i] as { explanation?: unknown })?.explanation === "string"
          ? ((questions[i] as { explanation?: string }).explanation ?? null)
          : null,
    })),
  };
}
