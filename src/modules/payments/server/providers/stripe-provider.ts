import "server-only";

import type { CheckoutResult, PaymentProvider } from "./types";
import { PaymentProviderError } from "./types";

/**
 * Proveedor de pago con Stripe — ESTRUCTURA lista, pendiente de
 * credenciales reales. Se deja preparado para no tener que reescribir
 * el dominio de pagos cuando se active: implementa el mismo contrato
 * `PaymentProvider` que el flujo manual.
 *
 * IMPORTANTE (regla del proyecto): sin `STRIPE_SECRET_KEY` /
 * `STRIPE_WEBHOOK_SECRET` configuradas, esto NO simula una respuesta —
 * lanza `not_configured` de forma explícita. Para activarlo:
 *   1. `npm i stripe`
 *   2. Rellenar STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_*
 *      (o crear precios al vuelo) en el entorno.
 *   3. Descomentar las llamadas al SDK marcadas abajo.
 *   4. Registrar el endpoint `/api/webhooks/stripe` en el panel de Stripe.
 * La confirmación del pago (evento `checkout.session.completed`) debe
 * llamar al MISMO contrato de concesión de acceso que usa la aprobación
 * manual — no dupliques esa lógica.
 */
export class StripePaymentProvider implements PaymentProvider {
  readonly name = "stripe";

  private requireConfig() {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new PaymentProviderError(
        "Stripe no está configurado (falta STRIPE_SECRET_KEY). Configúralo para habilitar el pago con tarjeta.",
        "not_configured"
      );
    }
    return key;
  }

  async createCheckout(_params: {
    userId: string;
    courseId: string;
    amount: number;
    currency: string;
  }): Promise<CheckoutResult> {
    this.requireConfig();

    // Con Stripe configurado, aquí se crearía la Checkout Session:
    //
    //   const stripe = new Stripe(secretKey);
    //   const session = await stripe.checkout.sessions.create({
    //     mode: "payment",
    //     line_items: [{ price_data: { currency: _params.currency,
    //       unit_amount: Math.round(_params.amount * 100),
    //       product_data: { name: courseTitle } }, quantity: 1 }],
    //     success_url: `${appUrl}/mi-aprendizaje?compra=ok`,
    //     cancel_url: `${appUrl}/cursos/${courseSlug}/comprar`,
    //     metadata: { userId: _params.userId, courseId: _params.courseId },
    //   });
    //   return { kind: "redirect", redirectUrl: session.url! };
    //
    // Hasta entonces, no se finge un checkout:
    throw new PaymentProviderError(
      "El pago con Stripe aún no está habilitado en este entorno.",
      "not_configured"
    );
  }

  async handleWebhook(params: {
    rawBody: string;
    signature: string | null;
  }): Promise<{ handled: boolean }> {
    this.requireConfig();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new PaymentProviderError("Falta STRIPE_WEBHOOK_SECRET.", "not_configured");
    }
    if (!params.signature) {
      throw new PaymentProviderError(
        "Petición de webhook sin firma.",
        "invalid_signature"
      );
    }

    // Con Stripe configurado:
    //
    //   const event = stripe.webhooks.constructEvent(
    //     params.rawBody, params.signature, webhookSecret);
    //   if (event.type === "checkout.session.completed") {
    //     const s = event.data.object;
    //     await grantCourseAccessFromGateway({          // contrato compartido
    //       userId: s.metadata.userId, courseId: s.metadata.courseId,
    //       amount: s.amount_total / 100, currency: s.currency, provider: "stripe",
    //     });
    //   }
    //   return { handled: true };
    //
    throw new PaymentProviderError(
      "Webhook de Stripe recibido pero el proveedor no está habilitado.",
      "not_configured"
    );
  }
}
