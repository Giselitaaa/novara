import "server-only";

/**
 * Resultado de iniciar un checkout. El pago manual devuelve
 * `instructions` (crea un pago pendiente y muestra instrucciones de
 * Bizum/transferencia); una pasarela automática como Stripe devolvería
 * `redirect` con la URL de su página de pago.
 */
export type CheckoutResult =
  | { kind: "instructions"; paymentId: string }
  | { kind: "redirect"; redirectUrl: string };

/**
 * Contrato común de cualquier proveedor de pago. Todo el dominio de
 * pagos programa contra esta interfaz — añadir Stripe (o cualquier
 * pasarela) es escribir una implementación más, sin reescribir el flujo
 * de concesión de acceso, que es el contrato compartido: cuando un pago
 * se confirma (aprobación manual o webhook de Stripe) se llama SIEMPRE a
 * la misma lógica que concede acceso, emite factura y notifica.
 */
export interface PaymentProvider {
  readonly name: string;

  /** Inicia el proceso de compra de un curso para un usuario. */
  createCheckout(params: {
    userId: string;
    courseId: string;
    amount: number;
    currency: string;
  }): Promise<CheckoutResult>;

  /**
   * Procesa una notificación asíncrona del proveedor (webhook). El pago
   * manual no tiene webhooks; una pasarela verifica la firma y, ante un
   * evento de pago completado, dispara la concesión de acceso.
   */
  handleWebhook(params: {
    rawBody: string;
    signature: string | null;
  }): Promise<{ handled: boolean }>;
}

export class PaymentProviderError extends Error {
  constructor(
    message: string,
    public readonly code: "not_configured" | "invalid_signature" | "request_failed"
  ) {
    super(message);
    this.name = "PaymentProviderError";
  }
}
