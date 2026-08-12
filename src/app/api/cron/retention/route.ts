import { runRetentionSweep } from "@/modules/notifications/server/retention";

/**
 * Endpoint del barrido de retención (emails a alumnos inactivos).
 * Protegido por `CRON_SECRET`: hay que llamarlo con
 * `Authorization: Bearer <CRON_SECRET>` o `?secret=<CRON_SECRET>`.
 *
 * NO se ejecuta solo: hay que programarlo (cron del proveedor de hosting,
 * GitHub Actions, o pg_cron). Sin programarlo, los emails de retención
 * NO se envían. Ejemplo de cron diario:
 *   0 9 * * *  curl -H "Authorization: Bearer $CRON_SECRET" https://tu-dominio/api/cron/retention
 */
async function handle(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return Response.json(
      {
        error: "CRON_SECRET no configurado; el barrido de retención está deshabilitado.",
      },
      { status: 503 }
    );
  }

  const url = new URL(req.url);
  const provided =
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    url.searchParams.get("secret");
  if (provided !== secret) {
    return Response.json({ error: "No autorizado." }, { status: 401 });
  }

  const result = await runRetentionSweep();
  return Response.json({ ok: true, ...result });
}

export const GET = handle;
export const POST = handle;
