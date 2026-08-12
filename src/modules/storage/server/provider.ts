import "server-only";

/**
 * Contrato común de almacenamiento de archivos. Todo el resto de la
 * plataforma pide una URL de subida a esta interfaz — cambiar de S3 a
 * Cloudflare R2 (compatible con S3) o a otro proveedor es una
 * implementación más, sin tocar el resto. Igual que IA y pagos.
 */
export interface StorageProvider {
  readonly name: string;
  /** ¿Hay credenciales suficientes para operar? */
  isConfigured(): boolean;
  /**
   * Devuelve una URL PREFIRMADA para que el cliente suba el archivo
   * directamente al almacenamiento (el servidor no hace de intermediario
   * de archivos grandes) y la URL pública final donde quedará.
   */
  createUploadUrl(params: {
    key: string;
    contentType: string;
  }): Promise<{ uploadUrl: string; publicUrl: string }>;
  /**
   * Sube bytes generados en el SERVIDOR (no por el cliente), p. ej. un
   * audio TTS. Devuelve la URL pública final. Idempotente por `key`.
   */
  putObject(params: {
    key: string;
    contentType: string;
    body: Uint8Array;
  }): Promise<{ publicUrl: string }>;
  /** ¿Existe ya un objeto con esta `key`? (para cachear y no regenerar). */
  objectExists(key: string): Promise<boolean>;
  /** URL pública de una `key` (sin comprobar que exista). */
  publicUrlFor(key: string): string;
}

export class StorageError extends Error {
  constructor(
    message: string,
    public readonly code: "not_configured" | "request_failed"
  ) {
    super(message);
    this.name = "StorageError";
  }
}

/**
 * Resuelve el proveedor activo. Hoy solo S3/R2 (compatible con S3);
 * añadir otro es un `case` más. Sin credenciales `STORAGE_*`, el
 * proveedor devuelto informa `isConfigured() === false` y la UI ofrece
 * pegar una URL en su lugar — nunca se finge una subida.
 */
export async function getStorageProvider(): Promise<StorageProvider> {
  const { S3StorageProvider } = await import("./s3-provider");
  return new S3StorageProvider();
}
