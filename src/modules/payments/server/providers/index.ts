import "server-only";

import { ManualPaymentProvider } from "./manual-provider";
import { StripePaymentProvider } from "./stripe-provider";
import type { PaymentProvider } from "./types";

export type { PaymentProvider, CheckoutResult } from "./types";
export { PaymentProviderError } from "./types";

/**
 * Resuelve el proveedor de pago activo según `PAYMENT_PROVIDER` en el
 * entorno (por defecto "manual"). Cambiar de pasarela es una variable
 * de entorno, no tocar el resto del dominio.
 */
export function getPaymentProvider(): PaymentProvider {
  const key = (process.env.PAYMENT_PROVIDER ?? "manual").toLowerCase();
  switch (key) {
    case "stripe":
      return new StripePaymentProvider();
    case "manual":
    default:
      return new ManualPaymentProvider();
  }
}
