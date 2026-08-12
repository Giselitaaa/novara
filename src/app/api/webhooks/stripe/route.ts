import { PaymentProviderError } from "@/modules/payments/server/providers";
import { StripePaymentProvider } from "@/modules/payments/server/providers/stripe-provider";

/**
 * Endpoint de webhook de Stripe. Registrado y listo; usa siempre el
 * proveedor de Stripe (no el proveedor "activo"), porque este endpoint
 * es específico de Stripe. Mientras Stripe no esté configurado responde
 * 503 de forma explícita — nunca finge haber procesado un pago. Cuando
 * se habilite, verificará la firma y disparará la concesión de acceso
 * por el contrato compartido.
 */
export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  try {
    const result = await new StripePaymentProvider().handleWebhook({
      rawBody,
      signature,
    });
    return Response.json({ received: result.handled });
  } catch (error) {
    if (error instanceof PaymentProviderError) {
      const status = error.code === "invalid_signature" ? 400 : 503;
      return Response.json({ error: error.message, code: error.code }, { status });
    }
    return Response.json({ error: "Error procesando el webhook." }, { status: 500 });
  }
}
