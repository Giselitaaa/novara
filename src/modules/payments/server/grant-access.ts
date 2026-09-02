import "server-only";

import { db } from "@/lib/db";
import { emailShell, sendTransactionalEmail } from "@/lib/mail";
import { confirmReferralCommission } from "@/modules/affiliates/server/actions";

/**
 * Contrato COMPARTIDO de concesión de acceso: concede la matrícula, emite
 * factura, notifica y envía el email de confirmación cuando un pago se
 * confirma — venga de la aprobación MANUAL en el panel o del WEBHOOK de
 * Stripe (`checkout.session.completed`). Ambas rutas llaman aquí para que
 * la lógica nunca se duplique ni divirja.
 *
 * Es IDEMPOTENTE: si el pago ya está aprobado (p. ej. un webhook que Stripe
 * reintenta), no vuelve a conceder acceso ni a reenviar correos.
 */
export async function grantAccessForPayment(
  paymentId: string,
  opts: { reviewedById?: string; note: string }
): Promise<{ granted: boolean }> {
  const payment = await db.payment.findUnique({
    where: { id: paymentId },
    include: { user: { include: { profile: true } }, course: true, status: true },
  });
  if (!payment || !payment.courseId) throw new Error("Pago no encontrado.");

  // Idempotencia: un pago ya aprobado no se vuelve a procesar.
  if (payment.status.key === "aprobado") return { granted: false };

  const [approvedStatus, purchaseSource] = await Promise.all([
    db.paymentStatus.findUnique({ where: { key: "aprobado" } }),
    db.enrollmentSource.findUnique({ where: { key: "compra" } }),
  ]);
  if (!approvedStatus || !purchaseSource) throw new Error("Catálogos base sin sembrar.");

  const invoiceNumber = `NOV-${new Date().getFullYear()}-${payment.id.slice(0, 8).toUpperCase()}`;

  await db.$transaction([
    db.payment.update({
      where: { id: paymentId },
      data: {
        statusId: approvedStatus.id,
        reviewedById: opts.reviewedById ?? null,
        reviewedAt: new Date(),
      },
    }),
    db.paymentStatusHistory.create({
      data: {
        paymentId,
        toStatusId: approvedStatus.id,
        changedById: opts.reviewedById ?? null,
        note: opts.note,
      },
    }),
    db.enrollment.upsert({
      where: { userId_courseId: { userId: payment.userId, courseId: payment.courseId } },
      create: {
        userId: payment.userId,
        courseId: payment.courseId,
        sourceId: purchaseSource.id,
      },
      update: {},
    }),
    db.invoice.upsert({
      where: { paymentId },
      create: {
        paymentId,
        invoiceNumber,
        billingName: payment.user.profile
          ? `${payment.user.profile.firstName} ${payment.user.profile.lastName}`
          : payment.user.email,
      },
      update: {},
    }),
    db.notification.create({
      data: {
        userId: payment.userId,
        type: "pago",
        title: "Pago aprobado",
        body: `Ya tienes acceso a "${payment.course?.title}".`,
        relatedEntityType: "Payment",
        relatedEntityId: paymentId,
      },
    }),
  ]);

  await sendTransactionalEmail({
    userId: payment.userId,
    to: payment.user.email,
    templateKey: "pago_aprobado",
    subject: "Tu pago ha sido aprobado",
    html: emailShell({
      title: "Pago aprobado",
      bodyHtml: `Ya tienes acceso completo a <strong>${payment.course?.title}</strong>. ¡A por ello!`,
      ctaLabel: "Empezar el curso",
      ctaUrl: `${process.env.NEXT_PUBLIC_APP_URL}/cursos/${payment.course?.slug}`,
    }),
  });

  await confirmReferralCommission(paymentId);

  return { granted: true };
}
