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
    // Nunca el mensaje crudo del error al cliente: endpoint público, sin
    // autenticación — un driver de base de datos puede incluir detalles de
    // infraestructura en su mensaje. Sí se registra server-side, para
    // monitorización real.
    console.error("[api/health] base de datos inalcanzable:", error);
    return NextResponse.json(
      {
        status: "error",
        database: "unreachable",
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
