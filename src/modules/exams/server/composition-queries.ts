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
    where: exam.courseId ? { lesson: { module: { courseId: exam.courseId } } } : {},
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

/**
 * Examen compuesto para que el ALUMNO lo realice. Devuelve solo el
 * "esqueleto" de navegación (id/peso/categoría/título/nº de preguntas
 * por sección) — SIN el contenido pesado (texto de lectura, audio,
 * preguntas). Un examen real puede tener cientos de secciones y miles
 * de preguntas (el final de C2 Proficiency: 600 secciones, 3.776
 * preguntas, ~2,3 MB si se mandara todo de una vez); el contenido de
 * cada sección se carga aparte, solo cuando el alumno llega a ella
 * (ver `getExamSectionDetail`), para no descargar ni renderizar nunca
 * más de una sección a la vez.
 */
export async function getComposedExamForStudent(examId: string) {
  const exam = await db.exam.findUnique({
    where: { id: examId },
    include: {
      sections: {
        orderBy: { order: "asc" },
        include: { exercise: { include: { _count: { select: { questions: true } } } } },
      },
    },
  });
  if (!exam) return null;

  return {
    ...exam,
    sections: exam.sections.map((s) => ({
      id: s.id,
      weight: s.weight,
      category: s.exercise.category,
      exerciseTitle: s.exercise.title,
      questionCount: s.exercise._count.questions,
    })),
  };
}

/**
 * Contenido completo de UNA sección (instrucciones, texto/audio y
 * preguntas) — cargado a demanda cuando el alumno navega a ella.
 * Comprueba que la sección pertenece de verdad a `examId` (nunca se
 * confía en una combinación arbitraria de IDs del cliente).
 */
export async function getExamSectionDetail(examId: string, sectionId: string) {
  const section = await db.examSection.findUnique({
    where: { id: sectionId },
    include: {
      exercise: { include: { questions: { orderBy: { order: "asc" } } } },
    },
  });
  if (!section || section.examId !== examId) return null;

  return {
    id: section.id,
    instructions: section.exercise.instructions,
    config: section.exercise.config,
    questions: section.exercise.questions.map((q) => ({
      id: q.id,
      kind: q.kind,
      data: q.data,
    })),
  };
}
