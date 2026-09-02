import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";

/**
 * Subida al almacenamiento LOCAL en disco (solo cuando `STORAGE_PROVIDER=local`).
 * El cliente hace `PUT /api/upload/local?key=...` con el archivo como cuerpo; se
 * escribe en `public/uploads/<key>` y Next lo sirve en `/uploads/<key>`.
 * Exige sesión, valida la clave (sin path traversal) y limita tamaño y ritmo.
 */
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_BYTES = 8 * 1024 * 1024;

function resolveSafe(key: string): string | null {
  const clean = key.replace(/^\/+/, "");
  if (!clean) return null;
  const full = path.resolve(UPLOADS_DIR, clean);
  if (full !== UPLOADS_DIR && !full.startsWith(UPLOADS_DIR + path.sep)) return null;
  return full;
}

export async function PUT(req: Request) {
  if ((process.env.STORAGE_PROVIDER ?? "").toLowerCase() !== "local") {
    return Response.json({ error: "Almacenamiento local no activo." }, { status: 404 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  const rl = checkRateLimit(`upload-local:${session.user.id}`, 60, 60 * 60);
  if (!rl.allowed) {
    return Response.json({ error: "Demasiadas subidas" }, { status: 429 });
  }

  const key = new URL(req.url).searchParams.get("key") ?? "";
  const full = resolveSafe(key);
  if (!full) {
    return Response.json({ error: "Clave no válida" }, { status: 400 });
  }

  const buf = new Uint8Array(await req.arrayBuffer());
  if (buf.byteLength === 0 || buf.byteLength > MAX_BYTES) {
    return Response.json({ error: "Tamaño de archivo no válido (0–8 MB)." }, { status: 400 });
  }

  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, buf);
  return Response.json({ ok: true });
}
