"use server";

import { randomBytes } from "node:crypto";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { isAffiliateProgramEnabled } from "@/modules/affiliates/server/queries";
import { getAllSettings } from "@/modules/cms/server/settings-queries";

const REFERRAL_COOKIE = "novara_ref";

function generateAffiliateCode() {
  return randomBytes(4).toString("hex").toUpperCase();
}

/**
 * Convierte al usuario actual en afiliado. Disponible aunque el
 * programa esté desactivado globalmente (el interruptor solo afecta
 * a si los nuevos referidos se capturan/comisionan, no a si alguien
 * puede tener ya un código propio preparado).
 */
export async function becomeAffiliate() {
  const session = await requireSession();
  if (!session?.user?.id)
    throw new Error("Inicia sesión para unirte al programa de afiliados.");

  const existing = await db.affiliate.findUnique({ where: { userId: session.user.id } });
  if (existing) return existing;

  const settings = await getAllSettings();
  const defaultCommission = Number(settings.affiliate_default_commission || 10);

  let code = generateAffiliateCode();
  while (await db.affiliate.findUnique({ where: { code } })) {
    code = generateAffiliateCode();
  }

  const affiliate = await db.affiliate.create({
    data: { userId: session.user.id, code, commissionRate: defaultCommission },
  });

  revalidatePath("/perfil");
  return affiliate;
}

/**
 * Guarda el código de afiliado de la URL (`?ref=CODE`) en una cookie
 * de 30 días. Se llama desde una server action disparada por un
 * componente de cliente en la home al detectar el parámetro — no
 * desde middleware, para no añadir lógica de negocio (consulta a la
 * tabla `Affiliate`) al Edge Runtime.
 */
export async function captureReferralCode(code: string) {
  if (!(await isAffiliateProgramEnabled())) return;

  const affiliate = await db.affiliate.findUnique({ where: { code, isActive: true } });
  if (!affiliate) return;

  const cookieStore = await cookies();
  cookieStore.set(REFERRAL_COOKIE, code, {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

/**
 * Se llama al final de `registerUser` (módulo de usuarios). Si hay
 * una cookie de referido y el programa está activo, crea el
 * `AffiliateReferral` en estado "pendiente" — la comisión se confirma
 * más tarde, solo si ese usuario llega a completar una compra
 * (`confirmReferralCommission`, llamado desde `approvePayment`).
 */
export async function linkReferralOnRegister(newUserId: string) {
  if (!(await isAffiliateProgramEnabled())) return;

  const cookieStore = await cookies();
  const code = cookieStore.get(REFERRAL_COOKIE)?.value;
  if (!code) return;

  const affiliate = await db.affiliate.findUnique({ where: { code, isActive: true } });
  if (!affiliate || affiliate.userId === newUserId) return;

  await db.affiliateReferral.create({
    data: { affiliateId: affiliate.id, referredUserId: newUserId },
  });
}

/**
 * Se llama desde `approvePayment` (módulo de pagos). Si el usuario
 * del pago aprobado fue referido por un afiliado, calcula y confirma
 * la comisión sobre el importe real pagado.
 */
export async function confirmReferralCommission(paymentId: string) {
  if (!(await isAffiliateProgramEnabled())) return;

  const payment = await db.payment.findUnique({ where: { id: paymentId } });
  if (!payment) return;

  const referral = await db.affiliateReferral.findUnique({
    where: { referredUserId: payment.userId },
    include: { affiliate: true },
  });
  if (!referral || referral.status !== "pendiente") return;

  const commissionAmount =
    (Number(payment.amount) * Number(referral.affiliate.commissionRate)) / 100;

  await db.affiliateReferral.update({
    where: { id: referral.id },
    data: { paymentId, commissionAmount, status: "confirmada" },
  });
}
