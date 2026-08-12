import "server-only";

import { db } from "@/lib/db";

/**
 * Preguntas listas para presentarse al alumno — SIN revelar qué
 * opción es correcta. La corrección solo ocurre en el servidor, al
 * enviar el intento (`gradeAndSubmitAttempt`).
 */
export async function getExamForTaking(examId: string) {
  const exam = await db.exam.findUnique({
    where: { id: examId },
    include: {
      questions: {
        orderBy: { sortOrder: "asc" },
        include: {
          question: {
            include: { questionType: true, options: { orderBy: { sortOrder: "asc" } } },
          },
        },
      },
    },
  });
  if (!exam) return null;

  return {
    id: exam.id,
    title: exam.title,
    passingScore: Number(exam.passingScore),
    timeLimitMinutes: exam.timeLimitMinutes,
    maxAttempts: exam.maxAttempts,
    questions: exam.questions.map((eq) => ({
      questionId: eq.question.id,
      points: Number(eq.points),
      statement: eq.question.statement,
      typeKey: eq.question.questionType.key,
      options: eq.question.options.map((o) => ({ id: o.id, text: o.text })),
    })),
  };
}

export async function getUserAttemptCount(examId: string, userId: string) {
  return db.examAttempt.count({ where: { examId, userId } });
}

export async function getAttemptHistory(examId: string, userId: string) {
  return db.examAttempt.findMany({
    where: { examId, userId },
    orderBy: { startedAt: "desc" },
  });
}

export async function getAttemptResult(attemptId: string, userId: string) {
  const attempt = await db.examAttempt.findUnique({
    where: { id: attemptId },
    include: {
      exam: true,
      answers: {
        include: {
          question: { include: { options: true, questionType: true } },
        },
      },
    },
  });
  if (!attempt || attempt.userId !== userId) return null;
  return attempt;
}
