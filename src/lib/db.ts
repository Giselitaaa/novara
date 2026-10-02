import { PrismaClient } from "@prisma/client";

/**
 * Singleton del cliente de Prisma.
 *
 * En desarrollo, Next.js recarga módulos en caliente (HMR), lo que
 * crearía una nueva instancia de PrismaClient en cada recarga y
 * agotaría las conexiones de PostgreSQL. Guardamos la instancia en
 * `globalThis` para reutilizarla entre recargas.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Sin `connect_timeout`/`pool_timeout`, una ruta de red rota hacia la
 * base de datos cuelga la conexión indefinidamente (sin error ni
 * timeout), lo que bloquea cualquier request para siempre en vez de
 * fallar rápido y poder reintentar.
 */
function withConnectionTimeouts(url: string | undefined): string | undefined {
  if (!url) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}connect_timeout=10&pool_timeout=10`;
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    datasources: {
      db: { url: withConnectionTimeouts(process.env.DATABASE_URL) },
    },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
