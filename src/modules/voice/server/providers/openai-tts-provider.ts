import "server-only";

import {
  VoiceError,
  type VoiceProvider,
  type VoiceSynthesisParams,
} from "@/modules/voice/server/provider";

/**
 * Proveedor de voz OpenAI (endpoint `/v1/audio/speech`), implementado con
 * `fetch` directo (sin SDK) igual que el proveedor de IA. Reutiliza la
 * misma `OPENAI_API_KEY` que el resto de la plataforma.
 *
 * Config por variables de entorno:
 *   - OPENAI_API_KEY   (obligatoria para activar la voz)
 *   - VOICE_MODEL      (opcional, por defecto "tts-1")
 *   - VOICE_DEFAULT_VOICE (opcional, por defecto "alloy")
 *
 * OpenAI TTS detecta el idioma del propio texto; `language`/`accent` se
 * conservan en la interfaz porque otros proveedores (Azure, Polly) sí los
 * requieren, de modo que cambiar de proveedor no cambia la firma.
 */
export class OpenAITTSProvider implements VoiceProvider {
  readonly name = "openai-tts";
  private readonly apiKey = process.env.OPENAI_API_KEY;
  private readonly model = process.env.VOICE_MODEL || "tts-1";
  private readonly defaultVoice = process.env.VOICE_DEFAULT_VOICE || "alloy";

  isConfigured() {
    return Boolean(this.apiKey);
  }

  async synthesize(params: VoiceSynthesisParams) {
    if (!this.apiKey) {
      throw new VoiceError(
        "No hay OPENAI_API_KEY configurada. Añádela (y opcionalmente VOICE_PROVIDER/VOICE_MODEL) para activar la generación de audio.",
        "not_configured"
      );
    }

    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        input: params.text,
        voice: params.voice || this.defaultVoice,
        response_format: "mp3",
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new VoiceError(
        `La API de voz de OpenAI devolvió un error (${response.status}): ${errorBody.slice(0, 300)}`,
        "request_failed"
      );
    }

    const audio = new Uint8Array(await response.arrayBuffer());
    return { audio, contentType: "audio/mpeg" };
  }
}
