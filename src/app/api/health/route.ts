import { NextResponse } from "next/server";

import { db } from "@/lib/db";

/**
 * Health check para orquestadores (Docker, Kubernetes, balanceadores
 * de carga). Comprueba que la app responde Y que la base de datos es
 * alcanzable — un health check que no consulta la DB puede devolver
 * "sano" mientras Prisma no puede conectar, lo cual es peor que no
 * tener health check.
 */
export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        database: "unreachable",
        message: error instanceof Error ? error.message : "unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
