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

export async function startExamAttempt(examId: string) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión para hacer el examen.");
  const userId = session.user.id;

  const exam = await db.exam.findUnique({ where: { id: examId } });
  if (!exam) throw new Error("Examen no encontrado.");

  if (exam.maxAttempts) {
    const attemptsUsed = await db.examAttempt.count({ where: { examId, userId } });
    if (attemptsUsed >= exam.maxAttempts) {
      throw new Error("Has agotado el número máximo de intentos permitidos.");
    }
  }

  const attempt = await db.examAttempt.create({ data: { examId, userId } });
  return attempt;
}

type SubmittedAnswer = {
  questionId: string;
  selectedOptionIds?: string[];
  freeTextAnswer?: string;
};

/**
 * Corrección automática. Para opción múltiple / verdadero-falso /
 * ordenar / relacionar: correcto si el conjunto de opciones marcadas
 * coincide exactamente con el conjunto de opciones correctas. Para
 * respuesta corta: correcto si el texto (normalizado) coincide con
 * alguna opción marcada como correcta — así el banco de preguntas
 * puede admitir varias respuestas válidas para el mismo hueco.
 */
export async function gradeAndSubmitAttempt(
  attemptId: string,
  answers: SubmittedAnswer[],
  courseSlug?: string
) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión.");
  const userId = session.user.id;

  const attempt = await db.examAttempt.findUnique({
    where: { id: attemptId },
    include: {
      exam: {
        include: { questions: { include: { question: { include: { options: true } } } } },
      },
    },
  });
  if (!attempt || attempt.userId !== userId) throw new Error("Intento no encontrado.");
  if (attempt.submittedAt) throw new Error("Este intento ya se envió.");

  let totalPoints = 0;
  let earnedPoints = 0;
  const answerRecords: {
    questionId: string;
    selectedOptionIds: string[] | undefined;
    freeTextAnswer: string | null;
    isCorrect: boolean;
    pointsAwarded: number;
  }[] = [];

  for (const examQuestion of attempt.exam.questions) {
    const points = Number(examQuestion.points);
    totalPoints += points;

    const submitted = answers.find((a) => a.questionId === examQuestion.questionId);
    const correctOptionIds = examQuestion.question.options
      .filter((o) => o.isCorrect)
      .map((o) => o.id);

    let isCorrect = false;
    if (examQuestion.question.questionTypeId && submitted?.freeTextAnswer) {
      const normalized = submitted.freeTextAnswer.trim().toLowerCase();
      isCorrect = examQuestion.question.options.some(
        (o) => o.isCorrect && o.text.trim().toLowerCase() === normalized
      );
    } else if (submitted?.selectedOptionIds) {
      const submittedSet = new Set(submitted.selectedOptionIds);
      isCorrect =
        submittedSet.size === correctOptionIds.length &&
        correctOptionIds.every((id) => submittedSet.has(id));
    }

    const pointsAwarded = isCorrect ? points : 0;
    earnedPoints += pointsAwarded;

    answerRecords.push({
      questionId: examQuestion.questionId,
      selectedOptionIds: submitted?.selectedOptionIds ?? undefined,
      freeTextAnswer: submitted?.freeTextAnswer ?? null,
      isCorrect,
      pointsAwarded,
    });
  }

  const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
  const passed = score >= Number(attempt.exam.passingScore);
  const timeSpentSeconds = Math.round((Date.now() - attempt.startedAt.getTime()) / 1000);

  await db.$transaction([
    db.examAttempt.update({
      where: { id: attemptId },
      data: { submittedAt: new Date(), score, passed, timeSpentSeconds },
    }),
    db.examAnswer.createMany({
      data: answerRecords.map((a) => ({ attemptId, ...a })),
    }),
  ]);

  if (passed) {
    await awardXP(userId, "examen_aprobado", "Exam", attempt.examId);
    await touchStreak(userId);
    if (attempt.exam.courseId) {
      await issueCertificateIfEligible(userId, attempt.exam.courseId);
    }
    await checkAndAwardAchievements(userId);
  }

  if (courseSlug) revalidatePath(`/cursos/${courseSlug}`);
  revalidatePath("/mi-aprendizaje");

  return { attemptId, score, passed };
}
