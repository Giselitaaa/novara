"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";


import { db } from "@/lib/db";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";
import { QUESTION_KINDS, type QuestionKind } from "@/modules/exercises/shared/question-types";

const CATEGORIES = ["reading", "writing", "listening", "speaking"] as const;
type Category = (typeof CATEGORIES)[number];

function revalidateEditor(exerciseId: string, lessonId: string) {
  revalidatePath(`/admin/lecciones/${lessonId}/ejercicios`);
  revalidatePath(`/admin/ejercicios-editor/${exerciseId}`);
}

// ─── Ejercicio ───────────────────────────────────────────────────────

export async function createExercise(lessonId: string, category: string) {
  const session = await requireAdmin();
  if (!CATEGORIES.includes(category as Category)) {
    throw new Error("Categoría de ejercicio no válida.");
  }
  const count = await db.exercise.count({ where: { lessonId } });
  const titles: Record<Category, string> = {
    reading: "Nuevo ejercicio de comprensión lectora",
    writing: "Nuevo ejercicio de expresión escrita",
    listening: "Nuevo ejercicio de comprensión auditiva",
    speaking: "Nuevo ejercicio de expresión oral",
  };
  const exercise = await db.exercise.create({
    data: {
      lessonId,
      category,
      title: titles[category as Category],
      sortOrder: count,
    },
  });
  await logAdminAction(session.user.id, "exercises.create", "Exercise", exercise.id, {
    category,
  });
  revalidatePath(`/admin/lecciones/${lessonId}/ejercicios`);
  return exercise;
}

export async function updateExercise(
  exerciseId: string,
  patch: { title?: string; instructions?: string | null; config?: unknown }
) {
  await requireAdmin();
  const data: Prisma.ExerciseUpdateInput = {};
  if (patch.title !== undefined) data.title = patch.title;
  if (patch.instructions !== undefined) data.instructions = patch.instructions;
  if (patch.config !== undefined) {
    data.config =
      patch.config === null ? Prisma.JsonNull : (patch.config as Prisma.InputJsonValue);
  }
  const ex = await db.exercise.update({ where: { id: exerciseId }, data });
  revalidateEditor(exerciseId, ex.lessonId);
  return { status: "success" as const };
}

export async function deleteExercise(exerciseId: string) {
  const session = await requireAdmin();
  const ex = await db.exercise.delete({ where: { id: exerciseId } });
  await logAdminAction(session.user.id, "exercises.delete", "Exercise", exerciseId);
  revalidatePath(`/admin/lecciones/${ex.lessonId}/ejercicios`);
}

// ─── Preguntas (motor reutilizable) ──────────────────────────────────

function defaultQuestionData(kind: QuestionKind): Prisma.InputJsonValue {
  switch (kind) {
    case "multiple_choice":
      return { kind, prompt: "", options: ["", ""], correct: [] };
    case "true_false":
      return { kind, prompt: "", correct: true };
    case "fill_blank":
      return { kind, prompt: "", blanks: [{ accepted: [""] }] };
    case "matching":
      return { kind, prompt: "", pairs: [{ left: "", right: "" }] };
    case "ordering":
      return { kind, prompt: "", items: ["", ""] };
    case "open":
      return { kind, prompt: "" };
  }
}

export async function addQuestion(exerciseId: string, kind: string) {
  await requireAdmin();
  if (!(QUESTION_KINDS as readonly string[]).includes(kind)) {
    throw new Error("Tipo de pregunta no válido.");
  }
  const ex = await db.exercise.findUnique({ where: { id: exerciseId } });
  if (!ex) throw new Error("Ejercicio no encontrado.");
  const count = await db.exerciseQuestion.count({ where: { exerciseId } });
  await db.exerciseQuestion.create({
    data: {
      exerciseId,
      order: count,
      kind,
      data: defaultQuestionData(kind as QuestionKind),
    },
  });
  revalidateEditor(exerciseId, ex.lessonId);
}

export async function updateQuestion(questionId: string, data: unknown) {
  await requireAdmin();
  const q = await db.exerciseQuestion.update({
    where: { id: questionId },
    data: { data: data as Prisma.InputJsonValue },
    include: { exercise: true },
  });
  revalidateEditor(q.exerciseId, q.exercise.lessonId);
}

export async function deleteQuestion(questionId: string) {
  await requireAdmin();
  const q = await db.exerciseQuestion.delete({
    where: { id: questionId },
    include: { exercise: true },
  });
  revalidateEditor(q.exerciseId, q.exercise.lessonId);
}

export async function moveQuestion(questionId: string, direction: "up" | "down") {
  await requireAdmin();
  const q = await db.exerciseQuestion.findUnique({ where: { id: questionId } });
  if (!q) return;
  const siblings = await db.exerciseQuestion.findMany({
    where: { exerciseId: q.exerciseId },
    orderBy: { order: "asc" },
  });
  const index = siblings.findIndex((s) => s.id === questionId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= siblings.length) return;
  const a = siblings[index]!;
  const b = siblings[swapWith]!;
  await db.$transaction([
    db.exerciseQuestion.update({ where: { id: a.id }, data: { order: b.order } }),
    db.exerciseQuestion.update({ where: { id: b.id }, data: { order: a.order } }),
  ]);
  const ex = await db.exercise.findUnique({ where: { id: q.exerciseId } });
  if (ex) revalidateEditor(q.exerciseId, ex.lessonId);
}
