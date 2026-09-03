import "server-only";

/**
 * Reconocimiento de voz (Speech-to-Text) desacoplado del proveedor, misma
 * filosofía que IA/voz/almacenamiento. Preparado para Whisper (OpenAI),
 * Google Speech-to-Text o Azure Speech; hoy implementa OpenAI. Sin
 * credenciales, `isConfigured()` es false y `transcribe` lanza `STTError`.
 */
export interface SpeechToTextService {
  readonly name: string;
  isConfigured(): boolean;
  transcribe(params: {
    audio: Uint8Array;
    language: string;
    filename?: string;
    contentType?: string;
  }): Promise<string>;
}

export class STTError extends Error {
  constructor(
    message: string,
    public readonly code: "not_configured" | "request_failed"
  ) {
    super(message);
    this.name = "STTError";
  }
}

class OpenAIWhisperService implements SpeechToTextService {
  readonly name = "openai-whisper";
  private readonly apiKey = process.env.OPENAI_API_KEY;
  private readonly model = process.env.STT_MODEL || "whisper-1";

  isConfigured() {
    return Boolean(this.apiKey);
  }

  async transcribe(params: {
    audio: Uint8Array;
    language: string;
    filename?: string;
    contentType?: string;
  }) {
    if (!this.apiKey) {
      throw new STTError(
        "El reconocimiento de voz no está disponible: falta OPENAI_API_KEY (o STT_PROVIDER).",
        "not_configured"
      );
    }
    const form = new FormData();
    const blob = new Blob([params.audio], {
      type: params.contentType || "audio/webm",
    });
    form.append("file", blob, params.filename || "audio.webm");
    form.append("model", this.model);
    if (params.language) form.append("language", params.language);

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${this.apiKey}` },
      body: form,
    });
    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new STTError(
        `La API de transcripción devolvió un error (${response.status}): ${body.slice(0, 200)}`,
        "request_failed"
      );
    }
    const data = (await response.json()) as { text?: string };
    return (data.text ?? "").trim();
  }
}

/**
 * Reconocimiento de voz LOCAL y de coste cero (Whisper open-weights, licencia
 * MIT) servido por HTTP local: whisper.cpp o faster-whisper-server, que exponen
 * un endpoint OpenAI-compatible (`/v1/audio/transcriptions`). Se activa con
 * `STT_PROVIDER=whisper-local`. Sin `WHISPER_URL` degrada con `not_configured`.
 *
 * Variables de entorno:
 *   - WHISPER_URL  (base del servicio local, p. ej. http://localhost:9000/v1)
 *   - STT_MODEL    (por defecto "whisper-1"; nombre que espere tu servidor local)
 */
class LocalWhisperService implements SpeechToTextService {
  readonly name = "whisper-local";
  private readonly baseUrl = process.env.WHISPER_URL?.replace(/\/$/, "");
  private readonly model = process.env.STT_MODEL || "whisper-1";
  // Clave opcional: whisper.cpp / faster-whisper local NO la necesita, pero un
  // endpoint OpenAI-compatible en la nube (p. ej. Groq `whisper-large-v3`, coste
  // cero) EXIGE `Authorization: Bearer`. Sin ella devuelve 401 y el alumno veía
  // "error al detener". Se reutiliza LOCAL_AI_API_KEY si no hay WHISPER_API_KEY.
  private readonly apiKey = process.env.WHISPER_API_KEY || process.env.LOCAL_AI_API_KEY || "";

  isConfigured() {
    return Boolean(this.baseUrl);
  }

  async transcribe(params: {
    audio: Uint8Array;
    language: string;
    filename?: string;
    contentType?: string;
  }) {
    if (!this.baseUrl) {
      throw new STTError(
        "El reconocimiento de voz local no está configurado: define WHISPER_URL (whisper.cpp / faster-whisper).",
        "not_configured"
      );
    }
    const form = new FormData();
    const blob = new Blob([params.audio], { type: params.contentType || "audio/webm" });
    form.append("file", blob, params.filename || "audio.webm");
    form.append("model", this.model);
    if (params.language) form.append("language", params.language);
    // Groq (y OpenAI) requieren un formato de respuesta explícito; JSON trae `text`.
    form.append("response_format", "json");

    const headers: Record<string, string> = {};
    if (this.apiKey) headers.Authorization = `Bearer ${this.apiKey}`;

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}/audio/transcriptions`, {
        method: "POST",
        headers,
        body: form,
      });
    } catch (error) {
      throw new STTError(
        `No se pudo conectar con el servicio Whisper local en ${this.baseUrl}. ` +
          `Detalle: ${error instanceof Error ? error.message : String(error)}`,
        "request_failed"
      );
    }
    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new STTError(
        `El servicio Whisper local devolvió un error (${response.status}): ${body.slice(0, 200)}`,
        "request_failed"
      );
    }
    const data = (await response.json()) as { text?: string };
    return (data.text ?? "").trim();
  }
}

export async function getSTTService(): Promise<SpeechToTextService> {
  // Selección por `STT_PROVIDER` (por defecto openai). Añadir otro = un case.
  const providerKey = (process.env.STT_PROVIDER ?? "openai").toLowerCase();
  if (providerKey === "whisper-local" || providerKey === "local") {
    return new LocalWhisperService();
  }
  return new OpenAIWhisperService();
}
