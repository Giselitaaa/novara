import "server-only";

import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { StorageError, type StorageProvider } from "./provider";

/**
 * Almacenamiento en S3 / Cloudflare R2 (API compatible con S3). Genera
 * URLs PUT prefirmadas para subida directa desde el cliente. Requiere
 * las variables `STORAGE_*` (endpoint, región, bucket, claves, URL
 * pública). Sin ellas, `isConfigured()` es false y no se intenta nada:
 * la UI cae al campo de URL manual.
 */
export class S3StorageProvider implements StorageProvider {
  readonly name = "s3";

  private cfg() {
    return {
      endpoint: process.env.STORAGE_ENDPOINT,
      region: process.env.STORAGE_REGION,
      bucket: process.env.STORAGE_BUCKET,
      accessKeyId: process.env.STORAGE_ACCESS_KEY_ID,
      secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY,
      publicUrl: process.env.STORAGE_PUBLIC_URL,
    };
  }

  isConfigured() {
    const c = this.cfg();
    return Boolean(
      c.region && c.bucket && c.accessKeyId && c.secretAccessKey && c.publicUrl
    );
  }

  private client() {
    const c = this.cfg();
    return new S3Client({
      region: c.region,
      endpoint: c.endpoint || undefined,
      forcePathStyle: Boolean(c.endpoint),
      credentials: { accessKeyId: c.accessKeyId!, secretAccessKey: c.secretAccessKey! },
    });
  }

  publicUrlFor(key: string) {
    const c = this.cfg();
    return `${(c.publicUrl ?? "").replace(/\/$/, "")}/${key}`;
  }

  async putObject(params: { key: string; contentType: string; body: Uint8Array }) {
    const c = this.cfg();
    if (!this.isConfigured()) {
      throw new StorageError(
        "Almacenamiento no configurado (faltan variables STORAGE_*).",
        "not_configured"
      );
    }
    await this.client().send(
      new PutObjectCommand({
        Bucket: c.bucket,
        Key: params.key,
        Body: params.body,
        ContentType: params.contentType,
      })
    );
    return { publicUrl: this.publicUrlFor(params.key) };
  }

  async objectExists(key: string) {
    const c = this.cfg();
    if (!this.isConfigured()) return false;
    try {
      await this.client().send(new HeadObjectCommand({ Bucket: c.bucket, Key: key }));
      return true;
    } catch {
      return false;
    }
  }

  async createUploadUrl(params: { key: string; contentType: string }) {
    const c = this.cfg();
    if (!this.isConfigured()) {
      throw new StorageError(
        "Almacenamiento no configurado (faltan variables STORAGE_*).",
        "not_configured"
      );
    }

    const client = new S3Client({
      region: c.region,
      // R2 y S3-compatibles usan un endpoint explícito; S3 nativo puede omitirlo.
      endpoint: c.endpoint || undefined,
      forcePathStyle: Boolean(c.endpoint),
      credentials: { accessKeyId: c.accessKeyId!, secretAccessKey: c.secretAccessKey! },
    });

    const command = new PutObjectCommand({
      Bucket: c.bucket,
      Key: params.key,
      ContentType: params.contentType,
    });

    const uploadUrl = await getSignedUrl(client, command, { expiresIn: 300 });
    const publicUrl = `${c.publicUrl!.replace(/\/$/, "")}/${params.key}`;
    return { uploadUrl, publicUrl };
  }
}
