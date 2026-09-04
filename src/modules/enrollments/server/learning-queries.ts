import "server-only";

import { db } from "@/lib/db";
import { lessonScheduleGate, type ModuleGate } from "@/modules/enrollments/shared/pacing";

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
                // Cargamos las cartas del mazo AQUÍ (servidor) para que las
                // flashcards se rendericen al instante como props, sin depender
                // de un fetch del cliente (que en algunos navegadores no
                // llegaba a completarse y dejaba el visor en "Cargando…").
                include: {
                  deck: {
                    include: { cards: { orderBy: { sortOrder: "asc" } } },
                  },
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

  // Bloqueo por TEST de módulo (comportamiento existente).
  const testLockedModuleIds = new Set<string>();
  let blockedFromHere = false;
  for (const mod of course.modules) {
    if (blockedFromHere) testLockedModuleIds.add(mod.id);
    const moduleTest = mod.exams[0];
    if (moduleTest && !passedExamIds.has(moduleTest.id)) {
      blockedFromHere = true;
    }
  }

  // Bloqueo por RITMO (drip): el contenido se libera semana a semana desde la
  // matrícula, para que un nivel no se pueda completar en unos días. La
  // administración queda EXENTA (previsualiza todo). Los cursos de niños (YLE)
  // no se limitan por tiempo — son lúdicos, no una preparación cronometrada.
  const adminRole = await db.userRole.findFirst({
    where: { userId, role: { name: "administrador" } },
    select: { userId: true },
  });
  const isAdmin = Boolean(adminRole);
  const isYoungLearners = ["pre-a1-starters", "a1-movers", "a2-flyers"].includes(course.slug);
  const applyPacing = !isAdmin && !isYoungLearners;

  const now = new Date();

  // #4 — BLOQUEO DIARIO SECUENCIAL: el contenido se libera de UNA lección en una
  // (un día lectivo Lun–Vie tras otro desde la matrícula) y EN ORDEN: para abrir
  // una lección hay que haber completado la anterior. Así cada día es una clase
  // de academia y no se puede saltar ni terminar el nivel de golpe. La guía
  // (isPreview) está siempre disponible. Se combina con el bloqueo por test de
  // módulo ya existente. Admin y cursos infantiles (YLE) quedan exentos del ritmo.
  let seqIndex = 0; // índice de lección de CONTENIDO (excluye la guía/preview)
  let prevContentDone = true; // la primera lección no tiene anterior

  const flatLessons = course.modules.flatMap((m) => {
    const moduleTestLocked = testLockedModuleIds.has(m.id);
    return m.lessons.map((lesson) => {
      let scheduleGate: ModuleGate = { locked: false, availableAt: null, daysUntil: 0 };
      let sequentialLocked = false;

      if (!lesson.isPreview) {
        if (applyPacing) {
          scheduleGate = lessonScheduleGate(enrollment.enrolledAt, seqIndex, now);
          // Secuencial: bloqueada si la lección de contenido anterior no está completada.
          if (seqIndex > 0 && !prevContentDone) sequentialLocked = true;
        }
        seqIndex++;
        prevContentDone = progressByLessonId.get(lesson.id)?.status === "completado";
      }

      const isLocked = moduleTestLocked || scheduleGate.locked || sequentialLocked;
      const lockReason: "test" | "schedule" | "sequence" | null = moduleTestLocked
        ? "test"
        : scheduleGate.locked
          ? "schedule"
          : sequentialLocked
            ? "sequence"
            : null;

      return {
        ...lesson,
        moduleId: m.id,
        moduleTitle: m.title,
        isLocked,
        lockReason,
        availableAt: scheduleGate.availableAt,
      };
    });
  });

  // Para compatibilidad: módulos bloqueados = solo los bloqueados por test.
  const lockedModuleIds = new Set<string>(testLockedModuleIds);

  return {
    course,
    enrolled: true as const,
    lessons: flatLessons,
    progressByLessonId,
    lockedModuleIds,
    moduleGates: new Map<string, ModuleGate>(),
  };
}

export async function getLessonNote(userId: string, lessonId: string) {
  return db.lessonNote.findUnique({ where: { userId_lessonId: { userId, lessonId } } });
}
