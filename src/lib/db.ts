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

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
