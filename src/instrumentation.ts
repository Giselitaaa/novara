/**
 * Fuerza IPv4 al resolver DNS en el servidor.
 *
 * Render tiene ruta IPv6 "activa" pero rota hacia el endpoint de Neon
 * (el SYN nunca recibe respuesta, así que la conexión se queda colgada
 * sin error ni timeout visible, en vez de fallar rápido). Node, en ese
 * entorno, intenta la dirección AAAA de Neon antes que la A. Forzando
 * ipv4first evitamos que cualquier conexión saliente (Postgres, APIs)
 * se cuelgue esperando una ruta IPv6 que nunca responde.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const dns = await import("node:dns");
    dns.setDefaultResultOrder("ipv4first");
  }
}
