import { randomUUID } from "node:crypto";

import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { getStorageProvider, StorageError } from "@/modules/storage/server/provider";

const ALLOWED = new Map<string, string>([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
  ["application/pdf", "pdf"],
]);
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

/**
 * Devuelve una URL prefirmada para subir un archivo directamente al
 * almacenamiento (el servidor no recibe el archivo). Valida tipo MIME,
 * tamaño y extensión; exige sesión y limita el ritmo. Si el
 * almacenamiento no está configurado, responde 503 con `not_configured`
 * — el cliente ofrece entonces pegar una URL manual, sin fingir nada.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id)
    return Response.json({ error: "No autorizado" }, { status: 401 });

  const rl = checkRateLimit(`upload:${session.user.id}`, 30, 60 * 60);
  if (!rl.allowed) return Response.json({ error: "Demasiadas subidas" }, { status: 429 });

  let body: { contentType?: string; size?: number; folder?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const contentType = String(body.contentType ?? "");
  const size = Number(body.size ?? 0);
  const ext = ALLOWED.get(contentType);

  if (!ext) {
    return Response.json({ error: "Tipo de archivo no permitido." }, { status: 400 });
  }
  if (!Number.isFinite(size) || size <= 0 || size > MAX_BYTES) {
    return Response.json(
      { error: "El archivo supera el tamaño máximo (8 MB)." },
      { status: 400 }
    );
  }

  const folder = /^[a-z0-9-]+$/.test(String(body.folder ?? "")) ? body.folder : "uploads";
  const key = `${folder}/${session.user.id}/${randomUUID()}.${ext}`;

  try {
    const storage = await getStorageProvider();
    if (!storage.isConfigured()) {
      return Response.json(
        {
          error: "not_configured",
          message: "El almacenamiento de archivos no está configurado.",
        },
        { status: 503 }
      );
    }
    const { uploadUrl, publicUrl } = await storage.createUploadUrl({ key, contentType });
    return Response.json({ uploadUrl, publicUrl });
  } catch (error) {
    if (error instanceof StorageError && error.code === "not_configured") {
      return Response.json(
        { error: "not_configured", message: error.message },
        { status: 503 }
      );
    }
    return Response.json({ error: "No se pudo preparar la subida." }, { status: 500 });
  }
}
