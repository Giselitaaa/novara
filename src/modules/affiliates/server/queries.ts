import "server-only";

import { db } from "@/lib/db";
import { getAllSettings } from "@/modules/cms/server/settings-queries";

export async function isAffiliateProgramEnabled() {
  const settings = await getAllSettings();
  return settings.affiliate_program_enabled === "on";
}

export async function getAffiliateByUserId(userId: string) {
  return db.affiliate.findUnique({ where: { userId } });
}

export async function getAffiliateStats(affiliateId: string) {
  const referrals = await db.affiliateReferral.findMany({
    where: { affiliateId },
    orderBy: { createdAt: "desc" },
    include: { referredUser: { include: { profile: true } } },
  });

  const payouts = await db.affiliatePayout.findMany({
    where: { affiliateId },
    orderBy: { createdAt: "desc" },
  });

  const confirmedTotal = referrals
    .filter((r) => r.status === "confirmada" || r.status === "pagada")
    .reduce((sum, r) => sum + Number(r.commissionAmount ?? 0), 0);
  const paidTotal = payouts
    .filter((p) => p.status === "pagado")
    .reduce((sum, p) => sum + Number(p.amount), 0);

  return {
    referrals,
    payouts,
    totalReferrals: referrals.length,
    confirmedCommission: confirmedTotal,
    paidOut: paidTotal,
    pendingPayout: confirmedTotal - paidTotal,
  };
}

export async function listAllAffiliatesAdmin() {
  return db.affiliate.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { include: { profile: true } },
      _count: { select: { referrals: true } },
    },
  });
}
