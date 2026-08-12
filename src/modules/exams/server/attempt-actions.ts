"use server";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { computeWeightedExamScore, isPassing } from "@/modules/exams/shared/scoring";
import { gradeExercise } from "@/modules/exercises/shared/grade";
import type { Question, Response } from "@/modules/exercises/shared/question-types";

export type ComposedExamResult = {
  finalScore: number;
  passed: boolean;
  passingScore: number;
  needsManualReview: boolean;
  sections: { title: string; category: string; score: number; weight: number }[];
};

/**
 * Corrige un examen compuesto (Fase 6): puntúa cada sección con el motor
 * `gradeExercise` y combina con la puntuación ponderada testeada. Todo en
 * el servidor; el cliente solo envía respuestas.
 */
export async function submitComposedExam(
  examId: string,
  sectionResponses: { sectionId: string; responses: (Response | null)[] }[]
): Promise<ComposedExamResult> {
  const session = await requireSession();

  const exam = await db.exam.findUnique({
    where: { id: examId },
    include: {
      sections: {
        orderBy: { order: "asc" },
        include: { exercise: { include: { questions: { orderBy: { order: "asc" } } } } },
      },
    },
  });
  if (!exam) throw new Error("Examen no encontrado.");

  const bySection = new Map(sectionResponses.map((s) => [s.sectionId, s.responses]));

  let needsManualReview = false;
  const perSection = exam.sections.map((sec) => {
    const questions = sec.exercise.questions.map((q) => q.data as unknown as Question);
    const responses = bySection.get(sec.id) ?? [];
    const g = gradeExercise(questions, responses);
    if (g.needsManualReview) needsManualReview = true;
    return {
      title: sec.exercise.title,
      category: sec.exercise.category,
      score: g.score,
      weight: Number(sec.weight),
    };
  });

  const finalScore = computeWeightedExamScore(
    perSection.map((s) => ({ weight: s.weight, score: s.score }))
  );
  const passingScore = Number(exam.passingScore);
  const passed = isPassing(finalScore, passingScore);

  // Persistir el intento (reutiliza el modelo ExamAttempt existente).
  if (session?.user?.id) {
    await db.examAttempt.create({
      data: {
        examId,
        userId: session.user.id,
        score: finalScore,
        passed,
        submittedAt: new Date(),
      },
    });
  }

  return {
    finalScore,
    passed,
    passingScore,
    needsManualReview,
    sections: perSection,
  };
}
