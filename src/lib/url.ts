import "server-only";

import { headers } from "next/headers";

/**
 * Dominio público real de producción — único valor correcto conocido para
 * NOVARA, usado solo como última red de seguridad si no hay ni cabeceras de
 * petición ni `NEXT_PUBLIC_APP_URL` configurada. Nunca un `localhost`.
 */
const KNOWN_PRODUCTION_ORIGIN = "https://novara-5915.onrender.com";

/**
 * Origen público de la app (protocolo + dominio, sin barra final), para
 * construir URLs absolutas (Stripe, QR, certificados, emails). Prioriza la
 * cabecera `Host`/`X-Forwarded-Host` de la petición real (igual que
 * `trustHost` en Auth.js) por encima de `NEXT_PUBLIC_APP_URL`, así nunca
 * depende solo de que esa variable esté bien puesta en el panel de Render.
 * Si no hay petición activa (p. ej. nunca debería pasar en un Route
 * Handler/Server Action, pero por si acaso), cae a la variable de entorno y,
 * en último caso, al dominio real de producción — jamás a `localhost`.
 */
export async function getAppOrigin(): Promise<string> {
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (host) {
      const proto =
        h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
      return `${proto}://${host}`;
    }
  } catch {
    // Sin contexto de petición activo (fuera de un Route Handler/Server Action).
  }
  return process.env.NEXT_PUBLIC_APP_URL ?? KNOWN_PRODUCTION_ORIGIN;
}
