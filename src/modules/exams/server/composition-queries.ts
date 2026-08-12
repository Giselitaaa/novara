import "server-only";

import { db } from "@/lib/db";

/** Examen con su composición (secciones ordenadas + el ejercicio de cada una). */
export async function getExamComposition(examId: string) {
  const exam = await db.exam.findUnique({
    where: { id: examId },
    include: {
      course: { select: { id: true, title: true } },
      sections: {
        orderBy: { order: "asc" },
        include: {
          exercise: {
            select: {
              id: true,
              title: true,
              category: true,
              _count: { select: { questions: true } },
            },
          },
        },
      },
    },
  });
  return exam;
}

/**
 * Ejercicios que el profesor puede añadir como sección: los del curso del
 * examen (a través de módulos→lecciones). Si el examen no está ligado a un
 * curso, se ofrecen todos. Se excluyen los ya añadidos.
 */
export async function listAvailableExercises(examId: string) {
  const exam = await db.exam.findUnique({
    where: { id: examId },
    include: { sections: { select: { exerciseId: true } } },
  });
  if (!exam) return [];
  const already = new Set(exam.sections.map((s) => s.exerciseId));

  const exercises = await db.exercise.findMany({
    where: exam.courseId
      ? { lesson: { module: { courseId: exam.courseId } } }
      : {},
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      category: true,
      lesson: { select: { title: true } },
      _count: { select: { questions: true } },
    },
  });

  return exercises
    .filter((e) => !already.has(e.id))
    .map((e) => ({
      id: e.id,
      title: e.title,
      category: e.category,
      lessonTitle: e.lesson.title,
      questionCount: e._count.questions,
    }));
}

/** Examen compuesto para que el ALUMNO lo realice: secciones + ejercicios + preguntas. */
export async function getComposedExamForStudent(examId: string) {
  return db.exam.findUnique({
    where: { id: examId },
    include: {
      sections: {
        orderBy: { order: "asc" },
        include: {
          exercise: { include: { questions: { orderBy: { order: "asc" } } } },
        },
      },
    },
  });
}
