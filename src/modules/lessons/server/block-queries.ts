import "server-only";

import { db } from "@/lib/db";

/** Lección con su curso/módulo (para cabecera) y sus bloques ordenados. */
export async function getLessonWithBlocks(lessonId: string) {
  return db.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: { include: { course: { select: { id: true, title: true, slug: true } } } },
      blocks: { orderBy: { order: "asc" }, include: { deck: { select: { title: true } } } },
    },
  });
}

/** Mazos disponibles para el selector del bloque de flashcards. */
export async function listDeckOptions() {
  const decks = await db.flashcardDeck.findMany({
    orderBy: { title: "asc" },
    select: { id: true, title: true, _count: { select: { cards: true } } },
  });
  return decks.map((d) => ({ id: d.id, title: d.title, cards: d._count.cards }));
}

/** Ejercicios de la propia lección, para el selector del bloque EXERCISE. */
export async function listLessonExerciseOptions(lessonId: string) {
  const exercises = await db.exercise.findMany({
    where: { lessonId },
    orderBy: { sortOrder: "asc" },
    select: { id: true, title: true, category: true },
  });
  return exercises.map((e) => ({ id: e.id, title: e.title, category: e.category }));
}

/** Plantillas de lección disponibles (esqueletos reutilizables). */
export async function listTemplates() {
  const templates = await db.lessonTemplate.findMany({ orderBy: { createdAt: "desc" } });
  return templates.map((t) => ({
    id: t.id,
    name: t.name,
    blockCount: Array.isArray(t.blocks) ? (t.blocks as unknown[]).length : 0,
  }));
}

/** Exámenes del curso de la lección, para el selector del bloque EXAM. */
export async function listCourseExamOptions(lessonId: string) {
  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    select: { module: { select: { courseId: true } } },
  });
  const courseId = lesson?.module?.courseId;
  const exams = await db.exam.findMany({
    where: courseId ? { OR: [{ courseId }, { lessonId }] } : { lessonId },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true },
  });
  return exams.map((e) => ({ id: e.id, title: e.title }));
}
