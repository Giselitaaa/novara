import "server-only";

import Stripe from "stripe";

import { db } from "@/lib/db";

import { grantAccessForPayment } from "../grant-access";

import type { CheckoutResult, PaymentProvider } from "./types";
import { PaymentProviderError } from "./types";

/**
 * Proveedor de pago con Stripe — FUNCIONAL con el SDK real.
 *
 * REGLA DEL PROYECTO (honestidad): sin `STRIPE_SECRET_KEY` /
 * `STRIPE_WEBHOOK_SECRET` configuradas, esto NO simula una respuesta —
 * lanza `not_configured` de forma explícita. Para activar el pago con
 * tarjeta:
 *   1. Rellena STRIPE_SECRET_KEY y STRIPE_WEBHOOK_SECRET en el entorno.
 *   2. Registra el endpoint `/api/webhooks/stripe` en el panel de Stripe
 *      (evento `checkout.session.completed`) y copia su signing secret.
 * La confirmación del pago llama al MISMO contrato de concesión de acceso
 * que la aprobación manual (`grantAccessForPayment`) — no se duplica.
 */
export class StripePaymentProvider implements PaymentProvider {
  readonly name = "stripe";

  private client(): Stripe {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new PaymentProviderError(
        "Stripe no está configurado (falta STRIPE_SECRET_KEY). Configúralo para habilitar el pago con tarjeta.",
        "not_configured"
      );
    }
    return new Stripe(key);
  }

  async createCheckout(params: {
    userId: string;
    courseId: string;
    amount: number;
    currency: string;
  }): Promise<CheckoutResult> {
    const stripe = this.client();

    const [course, method, pendingStatus] = await Promise.all([
      db.course.findUnique({ where: { id: params.courseId } }),
      db.paymentMethod.findUnique({ where: { key: "tarjeta" } }),
      db.paymentStatus.findUnique({ where: { key: "pendiente" } }),
    ]);
    if (!course) throw new PaymentProviderError("Curso no encontrado.", "request_failed");
    if (!method || !pendingStatus) {
      throw new PaymentProviderError(
        "Falta el método de pago 'tarjeta' o el estado 'pendiente' en el catálogo.",
        "not_configured"
      );
    }

    // Reutiliza un pago pendiente/en revisión si ya existe, para no duplicar.
    let payment = await db.payment.findFirst({
      where: {
        userId: params.userId,
        courseId: params.courseId,
        status: { key: { in: ["pendiente", "en_revision"] } },
      },
    });
    payment ??= await db.payment.create({
      data: {
        userId: params.userId,
        courseId: params.courseId,
        paymentMethodId: method.id,
        amount: params.amount,
        currency: params.currency.toUpperCase(),
        statusId: pendingStatus.id,
      },
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: params.currency,
            unit_amount: Math.round(params.amount * 100),
            product_data: { name: course.title },
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/es/mi-aprendizaje?compra=ok`,
      cancel_url: `${appUrl}/es/cursos/${course.slug}/comprar`,
      client_reference_id: payment.id,
      metadata: {
        paymentId: payment.id,
        userId: params.userId,
        courseId: params.courseId,
      },
    });

    if (!session.url) {
      throw new PaymentProviderError(
        "Stripe no devolvió una URL de pago.",
        "request_failed"
      );
    }
    return { kind: "redirect", redirectUrl: session.url };
  }

  async handleWebhook(params: {
    rawBody: string;
    signature: string | null;
  }): Promise<{ handled: boolean }> {
    const stripe = this.client();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new PaymentProviderError("Falta STRIPE_WEBHOOK_SECRET.", "not_configured");
    }
    if (!params.signature) {
      throw new PaymentProviderError("Petición de webhook sin firma.", "invalid_signature");
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        params.rawBody,
        params.signature,
        webhookSecret
      );
    } catch {
      throw new PaymentProviderError(
        "La firma del webhook de Stripe no es válida.",
        "invalid_signature"
      );
    }

    if (event.type === "checkout.session.completed") {
      const s = event.data.object as Stripe.Checkout.Session;
      const paymentId = s.metadata?.paymentId;
      if (paymentId) {
        // Contrato compartido de concesión de acceso (idempotente ante
        // reintentos del webhook).
        await grantAccessForPayment(paymentId, {
          note: "Pago confirmado por Stripe (checkout.session.completed).",
        });
      }
    }

    return { handled: true };
  }
}
