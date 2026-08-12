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

export async function getSTTService(): Promise<SpeechToTextService> {
  // Selección por `STT_PROVIDER` (por defecto openai). Añadir otro = un case.
  return new OpenAIWhisperService();
}
