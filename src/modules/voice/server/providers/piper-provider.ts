import "server-only";

import {
  VoiceError,
  type VoiceProvider,
  type VoiceSynthesisParams,
  type VoiceSynthesisResult,
} from "@/modules/voice/server/provider";

/**
 * Proveedor de voz LOCAL y de coste cero basado en Piper (motor TTS neural,
 * licencia MIT). Piper se despliega como un pequeño servicio HTTP local (p. ej.
 * un contenedor/sidecar que expone Piper por HTTP); este proveedor le pide la
 * locución por `fetch` y recibe los bytes WAV. Se activa con `VOICE_PROVIDER=piper`.
 *
 * Variables de entorno:
 *   - PIPER_URL           (URL del servicio Piper local, p. ej. http://localhost:5000)
 *   - VOICE_DEFAULT_VOICE (voz por defecto, p. ej. "en_US-lessac-medium")
 *
 * Contrato esperado del servicio: POST JSON { text, voice } → cuerpo de audio
 * (audio/wav). Sin `PIPER_URL`, `isConfigured()` es false y `synthesize` lanza
 * `VoiceError("not_configured")`: nunca se finge audio.
 *
 * IMPORTANTE (licencias): el motor Piper es MIT, pero CADA modelo de voz tiene
 * su propia licencia. Usa solo voces cuya licencia permita uso comercial y
 * regístralas. Ver AUDIO_TTS_STT_RESEARCH.md.
 */
export class PiperVoiceProvider implements VoiceProvider {
  readonly name = "piper";
  private readonly baseUrl = process.env.PIPER_URL?.replace(/\/$/, "");
  private readonly defaultVoice = process.env.VOICE_DEFAULT_VOICE || "en_US-lessac-medium";

  isConfigured(): boolean {
    return Boolean(this.baseUrl);
  }

  async synthesize(params: VoiceSynthesisParams): Promise<VoiceSynthesisResult> {
    if (!this.baseUrl) {
      throw new VoiceError(
        "La voz local (Piper) no está configurada: define PIPER_URL con la URL de tu servicio Piper local.",
        "not_configured"
      );
    }

    let response: Response;
    try {
      response = await fetch(this.baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: params.text, voice: params.voice || this.defaultVoice }),
      });
    } catch (error) {
      throw new VoiceError(
        `No se pudo conectar con Piper en ${this.baseUrl}. ¿Está arrancado el servicio? ` +
          `Detalle: ${error instanceof Error ? error.message : String(error)}`,
        "request_failed"
      );
    }

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new VoiceError(`Piper devolvió un error (${response.status}): ${body.slice(0, 200)}`, "request_failed");
    }

    const audio = new Uint8Array(await response.arrayBuffer());
    return { audio, contentType: response.headers.get("content-type") || "audio/wav" };
  }
}
