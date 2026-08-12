import "server-only";

import { db } from "@/lib/db";
import { getCurrentLevel } from "@/modules/gamification/server/actions";

export type NextObjective = {
  kind: "lessons" | "level" | "certificate" | "start";
  label: string;
  href: string;
};

/**
 * "Próximos objetivos" del alumno: 2–4 metas CONCRETAS derivadas de
 * datos reales (nunca inventadas). Prioriza terminar el curso más
 * avanzado, reclamar certificados pendientes y el siguiente nivel de
 * XP. Si el alumno no tiene cursos, el objetivo es empezar uno.
 */
export async function getNextObjectives(userId: string): Promise<NextObjective[]> {
  const objectives: NextObjective[] = [];

  const enrollments = await db.enrollment.findMany({
    where: { userId, status: "activo" },
    include: { course: { select: { id: true, slug: true, title: true } } },
  });

  if (enrollments.length === 0) {
    return [
      {
        kind: "start",
        label: "Empieza tu primer curso para poner en marcha tu aprendizaje.",
        href: "/cursos",
      },
    ];
  }

  const courseIds = enrollments.map((e) => e.courseId);

  const [progress, totalByCourse, completed, certificates] = await Promise.all([
    db.courseProgressSummary.findMany({ where: { userId, courseId: { in: courseIds } } }),
    db.lesson.groupBy({
      by: ["moduleId"],
      where: { module: { courseId: { in: courseIds } } },
      _count: { _all: true },
    }),
    db.lessonProgress.findMany({
      where: {
        userId,
        completedAt: { not: null },
        lesson: { module: { courseId: { in: courseIds } } },
      },
      select: { lesson: { select: { module: { select: { courseId: true } } } } },
    }),
    db.certificate.findMany({ where: { userId }, select: { courseId: true } }),
  ]);

  // Mapa moduleId -> courseId, para agregar el conteo de lecciones por curso.
  const modules = await db.module.findMany({
    where: { courseId: { in: courseIds } },
    select: { id: true, courseId: true },
  });
  const courseByModule = new Map(modules.map((m) => [m.id, m.courseId]));

  const totalLessonsByCourse = new Map<string, number>();
  for (const row of totalByCourse) {
    const courseId = courseByModule.get(row.moduleId);
    if (courseId) {
      totalLessonsByCourse.set(
        courseId,
        (totalLessonsByCourse.get(courseId) ?? 0) + row._count._all
      );
    }
  }

  const completedByCourse = new Map<string, number>();
  for (const row of completed) {
    const courseId = row.lesson.module.courseId;
    completedByCourse.set(courseId, (completedByCourse.get(courseId) ?? 0) + 1);
  }

  const percentByCourse = new Map(
    progress.map((p) => [p.courseId, Number(p.percentComplete)])
  );
  const certifiedCourseIds = new Set(certificates.map((c) => c.courseId));

  // 1) Terminar el curso más avanzado pero aún no completado.
  const inProgress = enrollments
    .map((e) => ({
      course: e.course,
      percent: percentByCourse.get(e.courseId) ?? 0,
      total: totalLessonsByCourse.get(e.courseId) ?? 0,
      done: completedByCourse.get(e.courseId) ?? 0,
    }))
    .filter((c) => c.percent < 100)
    .sort((a, b) => b.percent - a.percent);

  const closest = inProgress[0];
  if (closest) {
    const remaining = Math.max(0, closest.total - closest.done);
    objectives.push({
      kind: "lessons",
      label:
        remaining > 0
          ? `Te ${remaining === 1 ? "queda 1 lección" : `quedan ${remaining} lecciones`} para terminar «${closest.course.title}».`
          : `Estás a punto de terminar «${closest.course.title}».`,
      href: `/cursos/${closest.course.slug}/aprender`,
    });
  }

  // 2) Reclamar certificado de un curso completado sin certificado emitido.
  const completedWithoutCert = enrollments.find(
    (e) =>
      (percentByCourse.get(e.courseId) ?? 0) >= 100 && !certifiedCourseIds.has(e.courseId)
  );
  if (completedWithoutCert) {
    objectives.push({
      kind: "certificate",
      label: `Reclama tu certificado de «${completedWithoutCert.course.title}».`,
      href: `/cursos/${completedWithoutCert.course.slug}`,
    });
  }

  // 3) Siguiente nivel de XP.
  const level = await getCurrentLevel(userId);
  if (level.next) {
    const missing = level.next.minXp - level.xp;
    if (missing > 0) {
      objectives.push({
        kind: "level",
        label: `${missing} XP para alcanzar el nivel «${level.next.name}».`,
        href: "/mi-aprendizaje",
      });
    }
  }

  return objectives.slice(0, 4);
}
