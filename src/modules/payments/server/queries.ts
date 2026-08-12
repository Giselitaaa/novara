import "server-only";

import { db } from "@/lib/db";

/**
 * Historial de compras de un alumno: todos sus pagos con curso, método,
 * estado, importe y factura (si existe). Ordenado de más reciente a más
 * antiguo. Es lo que alimenta la pestaña "Compras" de su perfil.
 */
export async function listMyPurchases(userId: string) {
  return db.payment.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      course: { select: { title: true, slug: true } },
      paymentMethod: { select: { label: true } },
      status: true,
      invoice: { select: { id: true, invoiceNumber: true } },
    },
  });
}

export async function listPayments(params: { statusKey?: string; page: number }) {
  const pageSize = 20;
  const where = params.statusKey ? { status: { key: params.statusKey } } : {};

  const [payments, total] = await Promise.all([
    db.payment.findMany({
      where,
      include: {
        user: { include: { profile: true } },
        course: { select: { title: true, slug: true } },
        status: true,
        paymentMethod: true,
      },
      orderBy: { createdAt: "desc" },
      skip: (params.page - 1) * pageSize,
      take: pageSize,
    }),
    db.payment.count({ where }),
  ]);

  return { payments, total, totalPages: Math.max(1, Math.ceil(total / pageSize)) };
}

export async function getPaymentDetail(id: string) {
  return db.payment.findUnique({
    where: { id },
    include: {
      user: { include: { profile: true } },
      course: { select: { title: true, slug: true } },
      status: true,
      paymentMethod: true,
      statusHistory: { orderBy: { createdAt: "asc" }, include: { toStatus: true } },
      invoice: true,
    },
  });
}

/**
 * Instrucciones de pago (nº de Bizum, IBAN...) leídas de
 * `GlobalSetting` — configurables desde el Módulo 10 sin desplegar
 * código. Con valores por defecto vacíos si el admin no las ha
 * rellenado todavía.
 */
export async function getActivePaymentForUserCourse(userId: string, courseId: string) {
  return db.payment.findFirst({
    where: { userId, courseId },
    orderBy: { createdAt: "desc" },
    include: { status: true, paymentMethod: true },
  });
}

export async function getPaymentInstructions() {
  const settings = await db.globalSetting.findMany({
    where: {
      key: { in: ["payment_bizum_number", "payment_bank_iban", "payment_bank_holder"] },
    },
  });
  const map = Object.fromEntries(settings.map((s) => [s.key, s.value as string]));

  return {
    bizumNumber: map.payment_bizum_number ?? "",
    bankIban: map.payment_bank_iban ?? "",
    bankHolder: map.payment_bank_holder ?? "",
  };
}
