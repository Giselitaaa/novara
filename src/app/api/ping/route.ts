import { NextResponse } from "next/server";

/**
 * Health check de despliegue (Render): responde al instante, sin
 * tocar la base de datos ni el middleware de auth. `/api/health` sí
 * consulta la BD sin límite de tiempo — si la conexión se cuelga,
 * cuelga el health check con ella y Render mata el deploy entero.
 */
export function GET() {
  return NextResponse.json({ status: "ok" });
}
