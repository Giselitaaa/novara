import "server-only";

import { db } from "@/lib/db";

export type WeeklySummary = {
  lessonsThisWeek: number;
  lessonsLastWeek: number;
  xpThisWeek: number;
  xpLastWeek: number;
  minutesThisWeek: number;
  currentStreak: number;
  /** Si el alumno ya tenía actividad antes de esta semana (para comparar honestamente). */
  hasHistory: boolean;
};

/**
 * Resumen semanal honesto: lecciones completadas y XP ganado ESTA
 * semana frente a la ANTERIOR. Se usan métricas con marca de tiempo
 * real (`LessonProgress.completedAt`, `XPTransaction.createdAt`), no
 * acumulados que no se puedan bucketizar. Si no hay semana previa con
 * actividad, `hasHistory` es false y la UI lo dice en vez de inventar
 * un "+0%".
 */
export async function getWeeklySummary(userId: string): Promise<WeeklySummary> {
  const startOfThisWeek = new Date();
  startOfThisWeek.setDate(startOfThisWeek.getDate() - startOfThisWeek.getDay());
  startOfThisWeek.setHours(0, 0, 0, 0);

  const startOfLastWeek = new Date(startOfThisWeek);
  startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);

  const [
    lessonsThisWeek,
    lessonsLastWeek,
    xpThisWeek,
    xpLastWeek,
    minutesThisWeekAgg,
    priorXpCount,
    streak,
  ] = await Promise.all([
    db.lessonProgress.count({ where: { userId, completedAt: { gte: startOfThisWeek } } }),
    db.lessonProgress.count({
      where: { userId, completedAt: { gte: startOfLastWeek, lt: startOfThisWeek } },
    }),
    db.xPTransaction.aggregate({
      where: { userId, createdAt: { gte: startOfThisWeek } },
      _sum: { amount: true },
    }),
    db.xPTransaction.aggregate({
      where: { userId, createdAt: { gte: startOfLastWeek, lt: startOfThisWeek } },
      _sum: { amount: true },
    }),
    db.lessonProgress.aggregate({
      where: { userId, lastActivityAt: { gte: startOfThisWeek } },
      _sum: { watchedSeconds: true },
    }),
    db.xPTransaction.count({ where: { userId, createdAt: { lt: startOfThisWeek } } }),
    db.streak.findUnique({ where: { userId } }),
  ]);

  return {
    lessonsThisWeek,
    lessonsLastWeek,
    xpThisWeek: xpThisWeek._sum.amount ?? 0,
    xpLastWeek: xpLastWeek._sum.amount ?? 0,
    minutesThisWeek: Math.round((minutesThisWeekAgg._sum.watchedSeconds ?? 0) / 60),
    currentStreak: streak?.currentStreakDays ?? 0,
    hasHistory: priorXpCount > 0,
  };
}
