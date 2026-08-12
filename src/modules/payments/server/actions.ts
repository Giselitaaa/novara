"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { emailShell, sendTransactionalEmail } from "@/lib/mail";
import { requireSession } from "@/lib/require-session";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";
import { confirmReferralCommission } from "@/modules/affiliates/server/actions";

export type PaymentActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// ─── Flujo del alumno ───────────────────────────────────────────────

/**
 * Paso 1-2 del flujo: el alumno solicita comprar un curso premium.
 * Se genera el pedido en estado "pendiente" — todavía sin justificante.
 */
export async function requestPurchase(
  courseId: string,
  paymentMethodKey: "bizum" | "transferencia_bancaria"
) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión para comprar un curso.");

  const course = await db.course.findUnique({
    where: { id: courseId },
    include: { accessType: true },
  });
  if (!course || course.accessType.key !== "premium" || !course.price) {
    throw new Error("Este curso no está disponible para compra.");
  }

  const existingEnrollment = await db.enrollment.findUnique({
    where: { userId_courseId: { userId: session.user.id, courseId } },
  });
  if (existingEnrollment) throw new Error("Ya tienes acceso a este curso.");

  const [pendingStatus, method] = await Promise.all([
    db.paymentStatus.findUnique({ where: { key: "pendiente" } }),
    db.paymentMethod.findUnique({ where: { key: paymentMethodKey } }),
  ]);
  if (!pendingStatus || !method) throw new Error("No se pudo iniciar el pago.");

  const payment = await db.payment.create({
    data: {
      userId: session.user.id,
      courseId,
      paymentMethodId: method.id,
      amount: course.price,
      statusId: pendingStatus.id,
    },
  });

  return payment;
}

/**
 * Paso 3-4: el alumno sube el justificante. Pasa a "en_revision" y se
 * notifica a todo administrador — paso 5 del flujo pedido.
 */
export async function uploadPaymentProof(paymentId: string, proofFileUrl: string) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión.");

  const payment = await db.payment.findUnique({
    where: { id: paymentId },
    include: { course: true },
  });
  if (!payment || payment.userId !== session.user.id)
    throw new Error("Pedido no encontrado.");

  const reviewStatus = await db.paymentStatus.findUnique({
    where: { key: "en_revision" },
  });
  if (!reviewStatus) throw new Error("No se pudo actualizar el pedido.");

  await db.$transaction([
    db.payment.update({
      where: { id: paymentId },
      data: { proofFileUrl, statusId: reviewStatus.id },
    }),
    db.paymentStatusHistory.create({
      data: {
        paymentId,
        toStatusId: reviewStatus.id,
        note: "Justificante subido por el alumno.",
      },
    }),
  ]);

  // Paso 5: notificación a los administradores.
  const admins = await db.userRole.findMany({
    where: { role: { name: "administrador" } },
    select: { userId: true },
  });
  if (admins.length > 0) {
    await db.notification.createMany({
      data: admins.map((admin) => ({
        userId: admin.userId,
        type: "pago",
        title: "Nuevo justificante de pago",
        body: `Revisar el pago de "${payment.course?.title ?? "un curso"}".`,
        relatedEntityType: "Payment",
        relatedEntityId: paymentId,
      })),
    });
  }

  revalidatePath("/perfil");
  return {
    status: "success" as const,
    message: "Justificante enviado. Lo revisaremos en breve.",
  };
}

// ─── Flujo del administrador ────────────────────────────────────────

/**
 * Paso 6-8: el administrador aprueba. Se concede acceso, se registra
 * la compra (Enrollment + Invoice), y se notifica al alumno por email
 * — todo en una única transacción para que nunca quede a medias.
 */
export async function approvePayment(paymentId: string) {
  const session = await requireAdmin();

  const payment = await db.payment.findUnique({
    where: { id: paymentId },
    include: { user: { include: { profile: true } }, course: true },
  });
  if (!payment || !payment.courseId) throw new Error("Pago no encontrado.");

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
        reviewedById: session.user.id,
        reviewedAt: new Date(),
      },
    }),
    db.paymentStatusHistory.create({
      data: {
        paymentId,
        toStatusId: approvedStatus.id,
        changedById: session.user.id,
        note: "Pago aprobado.",
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
    db.invoice.create({
      data: {
        paymentId,
        invoiceNumber,
        billingName: payment.user.profile
          ? `${payment.user.profile.firstName} ${payment.user.profile.lastName}`
          : payment.user.email,
      },
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

  await logAdminAction(session.user.id, "payments.approve", "Payment", paymentId, {
    courseId: payment.courseId,
  });

  revalidatePath("/admin/pagos");
  revalidatePath(`/admin/pagos/${paymentId}`);
  return { status: "success" as const, message: "Pago aprobado y acceso concedido." };
}

/**
 * Paso 9: el administrador rechaza, con motivo obligatorio. El alumno
 * puede volver a subir un justificante (el pedido vuelve a
 * "pendiente" para admitir un nuevo intento).
 */
export async function rejectPayment(paymentId: string, reason: string) {
  const session = await requireAdmin();
  if (!reason.trim()) throw new Error("El motivo de rechazo es obligatorio.");

  const payment = await db.payment.findUnique({
    where: { id: paymentId },
    include: { user: true, course: true },
  });
  if (!payment) throw new Error("Pago no encontrado.");

  const [rejectedStatus, pendingStatus] = await Promise.all([
    db.paymentStatus.findUnique({ where: { key: "rechazado" } }),
    db.paymentStatus.findUnique({ where: { key: "pendiente" } }),
  ]);
  if (!rejectedStatus || !pendingStatus) throw new Error("Catálogos base sin sembrar.");

  await db.$transaction([
    db.payment.update({
      where: { id: paymentId },
      data: {
        statusId: rejectedStatus.id,
        adminNotes: reason,
        reviewedById: session.user.id,
        reviewedAt: new Date(),
      },
    }),
    db.paymentStatusHistory.create({
      data: {
        paymentId,
        toStatusId: rejectedStatus.id,
        changedById: session.user.id,
        note: reason,
      },
    }),
    db.notification.create({
      data: {
        userId: payment.userId,
        type: "pago",
        title: "Pago rechazado",
        body: reason,
        relatedEntityType: "Payment",
        relatedEntityId: paymentId,
      },
    }),
  ]);

  await sendTransactionalEmail({
    userId: payment.userId,
    to: payment.user.email,
    templateKey: "pago_rechazado",
    subject: "No hemos podido validar tu pago",
    html: emailShell({
      title: "Tu pago no se ha podido validar",
      bodyHtml: `Motivo: ${reason}. Puedes subir un nuevo justificante desde tu perfil.`,
      ctaLabel: "Subir nuevo justificante",
      ctaUrl: `${process.env.NEXT_PUBLIC_APP_URL}/cursos/${payment.course?.slug}/comprar`,
    }),
  });

  await logAdminAction(session.user.id, "payments.reject", "Payment", paymentId, {
    reason,
  });

  revalidatePath("/admin/pagos");
  revalidatePath(`/admin/pagos/${paymentId}`);
  return { status: "success" as const, message: "Pago rechazado." };
}
