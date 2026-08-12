import "server-only";

import { randomUUID } from "node:crypto";

import { db } from "@/lib/db";

import type { CheckoutResult, PaymentProvider } from "./types";
import { PaymentProviderError } from "./types";

/**
 * Proveedor de pago MANUAL (Bizum / transferencia) — el flujo real y
 * operativo hoy. Crear un checkout aquí significa registrar un pago
 * "pendiente" al que el alumno sube su justificante y que un admin
 * aprueba o rechaza. No hay webhooks: la confirmación es la aprobación
 * manual en el panel, que dispara la concesión de acceso (contrato
 * compartido en `approvePayment`).
 */
export class ManualPaymentProvider implements PaymentProvider {
  readonly name = "manual";

  async createCheckout(params: {
    userId: string;
    courseId: string;
    amount: number;
    currency: string;
  }): Promise<CheckoutResult> {
    const [pendingStatus, method] = await Promise.all([
      db.paymentStatus.findUnique({ where: { key: "pendiente" } }),
      // El método concreto (Bizum/transferencia) lo elige el alumno en la
      // UI del flujo manual; aquí basta con uno válido para el pago pendiente.
      db.paymentMethod.findFirst({ orderBy: { key: "asc" } }),
    ]);

    if (!pendingStatus || !method) {
      throw new PaymentProviderError(
        "No hay método de pago o estado 'pendiente' configurado.",
        "not_configured"
      );
    }

    const existing = await db.payment.findFirst({
      where: {
        userId: params.userId,
        courseId: params.courseId,
        status: { key: { in: ["pendiente", "en_revision"] } },
      },
    });
    if (existing) return { kind: "instructions", paymentId: existing.id };

    const payment = await db.payment.create({
      data: {
        id: randomUUID(),
        userId: params.userId,
        courseId: params.courseId,
        paymentMethodId: method.id,
        amount: params.amount,
        currency: params.currency,
        statusId: pendingStatus.id,
      },
    });

    return { kind: "instructions", paymentId: payment.id };
  }

  async handleWebhook(): Promise<{ handled: boolean }> {
    // El pago manual no recibe notificaciones asíncronas.
    return { handled: false };
  }
}
