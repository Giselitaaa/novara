import "server-only";

import { unstable_cache } from "next/cache";

import { db } from "@/lib/db";

export type RankingPeriod = "week" | "month" | "all";

export type RankingRow = {
  rank: number;
  userId: string;
  name: string;
  avatarUrl: string | null;
  xp: number;
};

function periodStart(period: RankingPeriod): Date | null {
  const now = new Date();
  if (period === "week") {
    const d = new Date(now);
    d.setDate(d.getDate() - d.getDay());
    d.setHours(0, 0, 0, 0);
    return d;
  }
  if (period === "month") {
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
  return null;
}

/**
 * Ranking de alumnos por XP en un periodo (semana / mes / histórico),
 * calculado sobre `XPTransaction` (agregación con `groupBy`, sin traer
 * miles de filas a memoria). RESPETA la privacidad EN LA CONSULTA: los
 * alumnos con `showInRanking = false` se excluyen de verdad, no solo en
 * la interfaz. Pensado para cachearse con `revalidate` en la página.
 */
async function computeRanking(period: RankingPeriod, limit = 50): Promise<RankingRow[]> {
  const since = periodStart(period);

  const grouped = await db.xPTransaction.groupBy({
    by: ["userId"],
    where: since ? { createdAt: { gte: since } } : {},
    _sum: { amount: true },
    orderBy: { _sum: { amount: "desc" } },
    take: limit * 2, // margen para descartar a quienes optan por no aparecer
  });

  if (grouped.length === 0) return [];

  const users = await db.user.findMany({
    where: { id: { in: grouped.map((g) => g.userId) }, profile: { showInRanking: true } },
    select: {
      id: true,
      email: true,
      profile: { select: { firstName: true, lastName: true, avatarUrl: true } },
    },
  });
  const userById = new Map(users.map((u) => [u.id, u]));

  const rows: RankingRow[] = [];
  for (const g of grouped) {
    const user = userById.get(g.userId);
    if (!user) continue; // excluido por privacidad o sin perfil visible
    rows.push({
      rank: 0,
      userId: user.id,
      name: user.profile
        ? `${user.profile.firstName} ${user.profile.lastName[0]}.`
        : "Alumno",
      avatarUrl: user.profile?.avatarUrl ?? null,
      xp: g._sum.amount ?? 0,
    });
    if (rows.length >= limit) break;
  }

  return rows.map((r, i) => ({ ...r, rank: i + 1 }));
}

/**
 * Ranking cacheado: la agregación se computa como mucho cada 2 min (no
 * en cada visita — no escala con miles de alumnos) y se invalida al
 * instante cuando alguien cambia su visibilidad (`revalidateTag`). Es
 * el equilibrio entre rendimiento y que la privacidad se respete pronto.
 */
export const getRanking = unstable_cache(
  (period: RankingPeriod, limit = 50) => computeRanking(period, limit),
  ["ranking"],
  { tags: ["ranking"], revalidate: 120 }
);

/**
 * Posición y XP del propio alumno en el periodo. Devuelve null si el
 * alumno ha optado por no aparecer o no tiene XP en el periodo.
 */
export async function getMyRankPosition(userId: string, period: RankingPeriod) {
  const profile = await db.userProfile.findUnique({
    where: { userId },
    select: { showInRanking: true },
  });
  if (!profile?.showInRanking) return null;

  const since = periodStart(period);
  const myXpAgg = await db.xPTransaction.aggregate({
    where: since ? { userId, createdAt: { gte: since } } : { userId },
    _sum: { amount: true },
  });
  const myXp = myXpAgg._sum.amount ?? 0;
  if (myXp === 0) return null;

  // Cuántos alumnos (visibles) tienen MÁS XP que yo en el periodo.
  const grouped = await db.xPTransaction.groupBy({
    by: ["userId"],
    where: since ? { createdAt: { gte: since } } : {},
    _sum: { amount: true },
  });
  const higher = grouped.filter((g) => (g._sum.amount ?? 0) > myXp).map((g) => g.userId);
  const higherVisible = higher.length
    ? await db.user.count({
        where: { id: { in: higher }, profile: { showInRanking: true } },
      })
    : 0;

  return { rank: higherVisible + 1, xp: myXp };
}
