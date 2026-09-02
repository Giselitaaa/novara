import "server-only";

import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { StorageError, type StorageProvider } from "./provider";

/**
 * Almacenamiento LOCAL en disco (coste cero, sin bucket). Guarda los objetos
 * bajo `public/uploads/<key>` y los sirve como `/uploads/<key>` (Next expone
 * `public/` en la raíz). Pensado para el modo local de audio (Piper/Whisper)
 * y despliegues self-hosted con disco persistente.
 *
 * Se activa con `STORAGE_PROVIDER=local` (ver getStorageProvider). Mismo
 * contrato que el proveedor S3, así que el resto de la plataforma no cambia.
 *
 * Aviso [prod]: en plataformas con `public/` inmutable o efímero (p. ej.
 * Vercel) usa S3/R2. El almacenamiento local requiere un disco persistente.
 */
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

/** Resuelve la ruta absoluta impidiendo path traversal fuera de UPLOADS_DIR. */
function resolveSafe(key: string): string {
  const clean = key.replace(/^\/+/, "");
  const full = path.resolve(UPLOADS_DIR, clean);
  if (full !== UPLOADS_DIR && !full.startsWith(UPLOADS_DIR + path.sep)) {
    throw new StorageError("Clave de almacenamiento no válida.", "request_failed");
  }
  return full;
}

export class LocalStorageProvider implements StorageProvider {
  readonly name = "local";

  isConfigured() {
    return true;
  }

  publicUrlFor(key: string) {
    return `/uploads/${key.replace(/^\/+/, "")}`;
  }

  async putObject(params: { key: string; contentType: string; body: Uint8Array }) {
    const full = resolveSafe(params.key);
    await mkdir(path.dirname(full), { recursive: true });
    await writeFile(full, params.body);
    return { publicUrl: this.publicUrlFor(params.key) };
  }

  async objectExists(key: string) {
    try {
      return existsSync(resolveSafe(key));
    } catch {
      return false;
    }
  }

  /**
   * El cliente sube contra una ruta local (no hay URL prefirmada de S3): la
   * ruta `/api/upload/local` valida sesión y escribe el archivo. `publicUrl`
   * es la URL final servida por Next.
   */
  async createUploadUrl(params: { key: string; contentType: string }) {
    return {
      uploadUrl: `/api/upload/local?key=${encodeURIComponent(params.key)}`,
      publicUrl: this.publicUrlFor(params.key),
    };
  }
}
