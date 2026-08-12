import "server-only";

import { db } from "@/lib/db";

/**
 * Estructura completa de aprendizaje de un curso para un alumno:
 * módulos/lecciones en orden, con el progreso real de CADA lección
 * fusionado, la pedagogía de cada lección (estándar NOVARA de 10
 * puntos) y el estado de bloqueo por test de módulo. Es la única
 * consulta que necesita la página del reproductor — evita N+1
 * consultas por lección.
 *
 * Regla de desbloqueo: un módulo con test (`Exam.moduleId`) bloquea
 * las lecciones de los módulos SIGUIENTES hasta que el alumno tenga
 * un intento aprobado de ese test. Un módulo sin test no bloquea
 * nada — así los cursos simples (sin tests de módulo) no cambian de
 * comportamiento.
 */
export async function getCourseLearningData(courseSlug: string, userId: string) {
  const course = await db.course.findFirst({
    where: { slug: courseSlug },
    include: {
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          exams: true,
          lessons: {
            orderBy: { sortOrder: "asc" },
            include: {
              contentType: true,
              content: true,
              blocks: {
                orderBy: {
                  order: "asc",
                },
              },
              exercise: true,
              exercises: {
                orderBy: { sortOrder: "asc" },
                include: { questions: { orderBy: { order: "asc" } } },
              },
              pedagogy: true,
              resources: { include: { resource: { include: { resourceType: true } } } },
            },
          },
        },
      },
      exams: { include: { _count: { select: { questions: true } } } },
      finalProject: true,
    },
  });
  if (!course) return null;

  const enrollment = await db.enrollment.findUnique({
    where: { userId_courseId: { userId, courseId: course.id } },
  });
  if (!enrollment) {
    return {
      course,
      enrolled: false as const,
      lessons: [],
      progressByLessonId: new Map(),
      lockedModuleIds: new Set<string>(),
    };
  }

  const allLessonIds = course.modules.flatMap((m) => m.lessons.map((l) => l.id));
  const progress = allLessonIds.length
    ? await db.lessonProgress.findMany({
        where: { userId, lessonId: { in: allLessonIds } },
      })
    : [];
  const progressByLessonId = new Map(progress.map((p) => [p.lessonId, p]));

  // Calcular qué módulos están bloqueados: un módulo se bloquea si
  // CUALQUIER módulo anterior tiene un test y el alumno no lo ha
  // aprobado todavía.
  const moduleExamIds = course.modules.flatMap((m) => m.exams.map((e) => e.id));
  const passedAttempts = moduleExamIds.length
    ? await db.examAttempt.findMany({
        where: { userId, examId: { in: moduleExamIds }, passed: true },
        select: { examId: true },
      })
    : [];
  const passedExamIds = new Set(passedAttempts.map((a) => a.examId));

  const lockedModuleIds = new Set<string>();
  let blockedFromHere = false;
  for (const mod of course.modules) {
    if (blockedFromHere) lockedModuleIds.add(mod.id);
    const moduleTest = mod.exams[0];
    if (moduleTest && !passedExamIds.has(moduleTest.id)) {
      blockedFromHere = true;
    }
  }

  const flatLessons = course.modules.flatMap((m) =>
    m.lessons.map((lesson) => ({
      ...lesson,
      moduleId: m.id,
      moduleTitle: m.title,
      isLocked: lockedModuleIds.has(m.id),
    }))
  );

  return {
    course,
    enrolled: true as const,
    lessons: flatLessons,
    progressByLessonId,
    lockedModuleIds,
  };
}

export async function getLessonNote(userId: string, lessonId: string) {
  return db.lessonNote.findUnique({ where: { userId_lessonId: { userId, lessonId } } });
}
