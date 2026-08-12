import "server-only";

/**
 * Capa de voz (Text-to-Speech) desacoplada del proveedor concreto.
 *
 * Igual que la abstracción de IA (`modules/ai`) y la de almacenamiento
 * (`modules/storage`): el resto de la plataforma pide "sintetiza este
 * texto" a esta interfaz y nunca conoce el proveedor real. Cambiar de
 * OpenAI TTS a ElevenLabs, Google, Azure o Amazon Polly es añadir una
 * implementación de `VoiceProvider` y un `case` en `getVoiceProvider`,
 * sin tocar la lógica de negocio (flashcards, listening, speaking).
 *
 * Sin credenciales, `isConfigured()` es false y `synthesize` lanza
 * `VoiceError("not_configured")`: la generación de audio se ofrece como
 * NO disponible, nunca se finge un resultado.
 */
export interface VoiceSynthesisParams {
  /** Texto a locutar. */
  text: string;
  /** Idioma del contenido (ISO, p. ej. "en", "es"). Orientativo para el proveedor. */
  language: string;
  /** Variante de acento opcional (p. ej. "en-US", "en-GB", "es-ES", "es-419"). */
  accent?: string;
  /** Identificador de voz del proveedor (si se omite, se usa la voz por defecto). */
  voice?: string;
}

export interface VoiceSynthesisResult {
  /** Bytes del audio generado. */
  audio: Uint8Array;
  /** MIME del audio (p. ej. "audio/mpeg"). */
  contentType: string;
}

export interface VoiceProvider {
  readonly name: string;
  /** ¿Hay credenciales suficientes para operar? */
  isConfigured(): boolean;
  /** Sintetiza `text` a audio. Lanza `VoiceError` si no está configurado o falla la petición. */
  synthesize(params: VoiceSynthesisParams): Promise<VoiceSynthesisResult>;
}

export class VoiceError extends Error {
  constructor(
    message: string,
    public readonly code: "not_configured" | "request_failed"
  ) {
    super(message);
    this.name = "VoiceError";
  }
}

/**
 * Resuelve el proveedor de voz activo según `VOICE_PROVIDER`
 * (por defecto "openai"). Añadir uno nuevo es un `case` más aquí.
 */
export async function getVoiceProvider(): Promise<VoiceProvider> {
  const providerKey = (process.env.VOICE_PROVIDER ?? "openai").toLowerCase();

  switch (providerKey) {
    // Preparado para más proveedores sin tocar el resto del sistema:
    // case "elevenlabs": { const { ElevenLabsProvider } = await import("./providers/elevenlabs-provider"); return new ElevenLabsProvider(); }
    case "openai":
    default: {
      const { OpenAITTSProvider } = await import("./providers/openai-tts-provider");
      return new OpenAITTSProvider();
    }
  }
}
