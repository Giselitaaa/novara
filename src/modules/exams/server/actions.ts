"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

export async function createQuestion(formData: FormData) {
  await requireAdmin();

  const statement = String(formData.get("statement") ?? "").trim();
  const questionTypeId = String(formData.get("questionTypeId") ?? "");
  const explanation = String(formData.get("explanation") ?? "").trim() || null;
  const optionTexts = formData.getAll("optionText").map(String);
  const correctIndexes = formData.getAll("optionCorrect").map(String);

  if (!statement || !questionTypeId) throw new Error("Faltan campos obligatorios.");

  const question = await db.question.create({
    data: {
      statement,
      questionTypeId,
      explanation,
      options: {
        create: optionTexts
          .map((text, index) => ({ text, index }))
          .filter((o) => o.text.trim())
          .map((o) => ({
            text: o.text,
            isCorrect: correctIndexes.includes(String(o.index)),
            sortOrder: o.index,
          })),
      },
    },
  });

  revalidatePath("/admin/examenes/preguntas");
  return question;
}

export async function updateQuestion(questionId: string, formData: FormData) {
  await requireAdmin();

  const statement = String(formData.get("statement") ?? "").trim();
  const explanation = String(formData.get("explanation") ?? "").trim() || null;
  const optionIds = formData.getAll("optionId").map(String);
  const optionTexts = formData.getAll("optionText").map(String);
  const correctIndexes = formData.getAll("optionCorrect").map(String);

  await db.$transaction(async (tx) => {
    await tx.question.update({
      where: { id: questionId },
      data: { statement, explanation },
    });

    await Promise.all(
      optionIds.map((optionId, index) =>
        tx.questionOption.update({
          where: { id: optionId },
          data: {
            text: optionTexts[index] ?? "",
            isCorrect: correctIndexes.includes(String(index)),
          },
        })
      )
    );
  });

  revalidatePath("/admin/examenes/preguntas");
  return { status: "success" as const, message: "Pregunta actualizada." };
}

export async function deleteQuestion(questionId: string) {
  await requireAdmin();
  await db.question.delete({ where: { id: questionId } });
  revalidatePath("/admin/examenes/preguntas");
}

// ─── Exámenes ────────────────────────────────────────────────────────

export async function createExam(formData: FormData) {
  const session = await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const courseId = String(formData.get("courseId") ?? "") || null;
  const passingScore = Number(formData.get("passingScore") ?? 70);
  const timeLimitMinutes = formData.get("timeLimitMinutes")
    ? Number(formData.get("timeLimitMinutes"))
    : null;
  const maxAttempts = formData.get("maxAttempts")
    ? Number(formData.get("maxAttempts"))
    : null;

  if (!title) throw new Error("El título es obligatorio.");

  const exam = await db.exam.create({
    data: { title, courseId, passingScore, timeLimitMinutes, maxAttempts },
  });

  await logAdminAction(session.user.id, "exams.create", "Exam", exam.id, { title });
  revalidatePath("/admin/examenes");
  return exam;
}

export async function updateExamSettings(examId: string, formData: FormData) {
  await requireAdmin();

  await db.exam.update({
    where: { id: examId },
    data: {
      title: String(formData.get("title") ?? ""),
      passingScore: Number(formData.get("passingScore") ?? 70),
      timeLimitMinutes: formData.get("timeLimitMinutes")
        ? Number(formData.get("timeLimitMinutes"))
        : null,
      maxAttempts: formData.get("maxAttempts")
        ? Number(formData.get("maxAttempts"))
        : null,
    },
  });

  revalidatePath(`/admin/examenes/${examId}`);
  return { status: "success" as const, message: "Examen actualizado." };
}

export async function attachQuestionToExam(
  examId: string,
  questionId: string,
  points = 1
) {
  await requireAdmin();
  const count = await db.examQuestion.count({ where: { examId } });
  await db.examQuestion.upsert({
    where: { examId_questionId: { examId, questionId } },
    create: { examId, questionId, points, sortOrder: count },
    update: {},
  });
  revalidatePath(`/admin/examenes/${examId}`);
}

export async function detachQuestionFromExam(examId: string, questionId: string) {
  await requireAdmin();
  await db.examQuestion.delete({ where: { examId_questionId: { examId, questionId } } });
  revalidatePath(`/admin/examenes/${examId}`);
}

export async function deleteExam(examId: string) {
  await requireAdmin();
  await db.exam.delete({ where: { id: examId } });
  revalidatePath("/admin/examenes");
}

/**
 * Crea varias preguntas en el banco a partir de una lista ya generada
 * y revisada por el administrador (misma exigencia que el resto del
 * asistente de IA: nunca se persiste sin pasar por revisión humana).
 */
export async function createQuestionsFromGenerated(
  questions: {
    statement: string;
    explanation: string;
    options: { text: string; isCorrect: boolean }[];
  }[]
) {
  await requireAdmin();

  const opcionMultiple = await db.questionType.findUnique({
    where: { key: "opcion_multiple" },
  });
  if (!opcionMultiple) throw new Error("Catálogos base sin sembrar.");

  await db.$transaction(
    questions.map((q) =>
      db.question.create({
        data: {
          statement: q.statement,
          explanation: q.explanation || null,
          questionTypeId: opcionMultiple.id,
          options: {
            create: q.options.map((o, i) => ({
              text: o.text,
              isCorrect: o.isCorrect,
              sortOrder: i,
            })),
          },
        },
      })
    )
  );

  revalidatePath("/admin/examenes/preguntas");
  return {
    status: "success" as const,
    message: `${questions.length} pregunta(s) añadida(s) al banco.`,
  };
}
