import "server-only";

import { db } from "@/lib/db";

/** Ejercicios de una lección (con recuento de preguntas), ordenados. */
export async function getLessonExercises(lessonId: string) {
  const exercises = await db.exercise.findMany({
    where: { lessonId },
    orderBy: { sortOrder: "asc" },
    include: { _count: { select: { questions: true } } },
  });
  return exercises.map((e) => ({
    id: e.id,
    category: e.category,
    title: e.title,
    instructions: e.instructions,
    questionCount: e._count.questions,
  }));
}

/** Un ejercicio con su config y preguntas ordenadas. */
export async function getExercise(exerciseId: string) {
  return db.exercise.findUnique({
    where: { id: exerciseId },
    include: {
      questions: { orderBy: { order: "asc" } },
      lesson: {
        include: { module: { include: { course: { select: { id: true, title: true } } } } },
      },
    },
  });
}
