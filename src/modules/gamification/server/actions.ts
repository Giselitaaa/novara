import "server-only";

import { db } from "@/lib/db";

const XP_REWARDS = {
  leccion_completada: 10,
  examen_aprobado: 50,
  curso_completado: 100,
  racha_semanal: 25,
} as const;

export type XPReason = keyof typeof XP_REWARDS;

/**
 * Registra una transacción de XP (nunca sobrescribe un total — ver
 * razonamiento en el modelo de datos) y devuelve el nuevo total.
 * Se llama desde cualquier acción que represente progreso real:
 * completar una lección, aprobar un examen, terminar un curso.
 */
export async function awardXP(
  userId: string,
  reason: XPReason,
  relatedEntityType?: string,
  relatedEntityId?: string
) {
  await db.xPTransaction.create({
    data: {
      userId,
      amount: XP_REWARDS[reason],
      reason,
      relatedEntityType,
      relatedEntityId,
    },
  });
}

export async function getTotalXP(userId: string) {
  const result = await db.xPTransaction.aggregate({
    where: { userId },
    _sum: { amount: true },
  });
  return result._sum.amount ?? 0;
}

export async function getCurrentLevel(userId: string) {
  const xp = await getTotalXP(userId);
  const levels = await db.userLevel.findMany({ orderBy: { minXp: "desc" } });
  const current = levels.find((level) => xp >= level.minXp) ?? levels[levels.length - 1];
  const next = levels.filter((l) => l.minXp > xp).sort((a, b) => a.minXp - b.minXp)[0];
  return { xp, current, next };
}

/**
 * Actualiza la racha de estudio. Se llama una vez por sesión de
 * actividad real (al completar una lección o aprobar un examen), no
 * en cada petición — para no inflar la racha con simples visitas.
 */
export async function touchStreak(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const streak = await db.streak.findUnique({ where: { userId } });

  if (!streak) {
    await db.streak.create({
      data: {
        userId,
        currentStreakDays: 1,
        longestStreakDays: 1,
        lastActivityDate: today,
      },
    });
    return;
  }

  const last = streak.lastActivityDate ? new Date(streak.lastActivityDate) : null;
  if (last) last.setHours(0, 0, 0, 0);

  if (last && last.getTime() === today.getTime()) {
    return; // ya contabilizada hoy
  }

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isConsecutive = last && last.getTime() === yesterday.getTime();
  const newCurrent = isConsecutive ? streak.currentStreakDays + 1 : 1;

  await db.streak.update({
    where: { userId },
    data: {
      currentStreakDays: newCurrent,
      longestStreakDays: Math.max(newCurrent, streak.longestStreakDays),
      lastActivityDate: today,
    },
  });
}

/**
 * Logros — reglas simples basadas en hechos ya persistidos (no
 * requiere IA ni heurísticas complejas, tal como pide esta fase).
 * Idempotente: si el alumno ya tiene la insignia, no la duplica.
 */
export async function getUserBadges(userId: string) {
  return db.userBadge.findMany({
    where: { userId },
    orderBy: { awardedAt: "desc" },
    include: { badge: true },
  });
}

export async function checkAndAwardAchievements(userId: string) {
  const [completedLessonsCount, completedCoursesCount, streak, certificatesCount] =
    await Promise.all([
      db.lessonProgress.count({ where: { userId, status: "completado" } }),
      db.courseProgressSummary.count({ where: { userId, percentComplete: 100 } }),
      db.streak.findUnique({ where: { userId } }),
      db.certificate.count({ where: { userId } }),
    ]);

  const rules: { key: string; name: string; description: string; met: boolean }[] = [
    {
      key: "primera_leccion",
      name: "Primer paso",
      description: "Completa tu primera lección.",
      met: completedLessonsCount >= 1,
    },
    {
      key: "primer_curso_completado",
      name: "Meta cumplida",
      description: "Completa tu primer curso.",
      met: completedCoursesCount >= 1,
    },
    {
      key: "racha_7_dias",
      name: "Constancia",
      description: "Estudia 7 días seguidos.",
      met: (streak?.currentStreakDays ?? 0) >= 7,
    },
    {
      key: "primer_certificado",
      name: "Verificado",
      description: "Obtén tu primer certificado.",
      met: certificatesCount >= 1,
    },
  ];

  const metKeys = rules.filter((r) => r.met).map((r) => r.key);
  if (metKeys.length === 0) return [];

  const achievements = await db.achievement.findMany({ where: { key: { in: metKeys } } });
  const badgeIds = achievements.map((a) => a.badgeId).filter((id): id is string => !!id);

  // Una sola consulta para saber qué insignias ya tiene, en vez de
  // una consulta por logro dentro del bucle (N+1 detectado en la
  // auditoría de la Fase 7).
  const existingBadges = await db.userBadge.findMany({
    where: { userId, badgeId: { in: badgeIds } },
    select: { badgeId: true },
  });
  const alreadyHasSet = new Set(existingBadges.map((b) => b.badgeId));

  const toAward = achievements.filter((a) => a.badgeId && !alreadyHasSet.has(a.badgeId));
  if (toAward.length === 0) return [];

  await db.$transaction([
    db.userBadge.createMany({
      data: toAward.map((a) => ({ userId, badgeId: a.badgeId! })),
    }),
    db.notification.createMany({
      data: toAward.map((a) => ({
        userId,
        type: "logro",
        title: `Logro desbloqueado: ${a.name}`,
        body: a.description ?? "",
        relatedEntityType: "Achievement",
        relatedEntityId: a.id,
      })),
    }),
  ]);

  return toAward.map((a) => ({ key: a.key, name: a.name }));
}
