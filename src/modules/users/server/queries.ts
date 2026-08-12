import "server-only";

import { db } from "@/lib/db";

/**
 * Consultas de lectura del módulo de usuarios. Separadas de
 * `actions.ts` (que muta datos) siguiendo el mismo criterio que el
 * resto de módulos: las pantallas de servidor importan `queries`,
 * los formularios importan `actions`.
 */

export async function getProfileByUserId(userId: string) {
  return db.user.findUnique({
    where: { id: userId },
    include: {
      profile: true,
      status: true,
      roles: { include: { role: true } },
    },
  });
}

/**
 * Datos agregados para /perfil: cursos inscritos con su progreso y
 * certificados obtenidos. Una sola función de consulta por pantalla,
 * para no repartir `db.*` sueltos por los componentes de página.
 */
export async function getLearningDashboard(userId: string) {
  const [enrollments, certificates] = await Promise.all([
    db.enrollment.findMany({
      where: { userId, status: "activo" },
      orderBy: { enrolledAt: "desc" },
      include: {
        course: {
          select: {
            id: true,
            slug: true,
            title: true,
            coverImageUrl: true,
            durationMinutes: true,
            category: { select: { name: true } },
          },
        },
      },
    }),
    db.certificate.findMany({
      where: { userId },
      orderBy: { issuedAt: "desc" },
      include: { course: { select: { title: true, slug: true } } },
    }),
  ]);

  const courseIds = enrollments.map((e) => e.courseId);
  const progressSummaries = courseIds.length
    ? await db.courseProgressSummary.findMany({
        where: { userId, courseId: { in: courseIds } },
      })
    : [];

  const progressByCourseId = new Map(
    progressSummaries.map((p) => [p.courseId, Number(p.percentComplete)])
  );

  return {
    enrollments: enrollments.map((enrollment) => ({
      id: enrollment.id,
      enrolledAt: enrollment.enrolledAt,
      percentComplete: progressByCourseId.get(enrollment.courseId) ?? 0,
      course: enrollment.course,
    })),
    certificates,
  };
}

/**
 * Vista agregada para `/mi-aprendizaje`. Reutiliza `getLearningDashboard`
 * (misma consulta de inscripciones/certificados que ya usa `/perfil`)
 * y añade lo que ese dashboard resumido no necesita: continuar donde
 * lo dejó, favoritos, tiempo estudiado, racha, XP/nivel, actividad
 * reciente, notificaciones recientes y un calendario de estudio de
 * los últimos 14 días.
 */
export async function getStudentOverview(userId: string) {
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 13);
  fourteenDaysAgo.setHours(0, 0, 0, 0);

  const [
    dashboard,
    favorites,
    allWatchedSeconds,
    weekWatchedSeconds,
    streak,
    recentActivity,
    recentNotifications,
    activityLast14Days,
    examStats,
  ] = await Promise.all([
    getLearningDashboard(userId),
    db.favorite.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            id: true,
            slug: true,
            title: true,
            category: { select: { name: true } },
          },
        },
      },
    }),
    db.lessonProgress.aggregate({ where: { userId }, _sum: { watchedSeconds: true } }),
    db.lessonProgress.aggregate({
      where: { userId, lastActivityAt: { gte: startOfWeek } },
      _sum: { watchedSeconds: true },
    }),
    db.streak.findUnique({ where: { userId } }),
    db.activityLog.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 8,
    }),
    db.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    db.activityLog.findMany({
      where: { userId, createdAt: { gte: fourteenDaysAgo } },
      select: { createdAt: true },
    }),
    db.examAttempt.aggregate({
      where: { userId, submittedAt: { not: null } },
      _avg: { score: true },
      _count: true,
    }),
  ]);

  const inProgress = dashboard.enrollments.filter(
    (e) => e.percentComplete > 0 && e.percentComplete < 100
  );
  const completed = dashboard.enrollments.filter((e) => e.percentComplete >= 100);
  const continueCourse = inProgress[0] ?? dashboard.enrollments[0] ?? null;

  // Calendario de estudio: nº de eventos de actividad por día, últimos 14 días.
  const activityByDay = new Map<string, number>();
  for (const log of activityLast14Days) {
    const dayKey = log.createdAt.toISOString().slice(0, 10);
    activityByDay.set(dayKey, (activityByDay.get(dayKey) ?? 0) + 1);
  }
  const studyCalendar = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(fourteenDaysAgo);
    date.setDate(date.getDate() + i);
    const key = date.toISOString().slice(0, 10);
    return { date: key, count: activityByDay.get(key) ?? 0 };
  });

  return {
    enrollments: dashboard.enrollments,
    certificates: dashboard.certificates,
    inProgressCourses: inProgress,
    completedCourses: completed,
    favoriteCourses: favorites.map((f) => f.course),
    continueCourse,
    totalMinutesStudied: Math.round((allWatchedSeconds._sum.watchedSeconds ?? 0) / 60),
    weekMinutesStudied: Math.round((weekWatchedSeconds._sum.watchedSeconds ?? 0) / 60),
    streak: {
      current: streak?.currentStreakDays ?? 0,
      longest: streak?.longestStreakDays ?? 0,
    },
    recentActivity,
    recentNotifications,
    studyCalendar,
    examsTaken: examStats._count,
    averageScore: examStats._avg.score ? Number(examStats._avg.score) : null,
  };
}
