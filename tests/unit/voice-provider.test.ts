import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { OpenAITTSProvider } from "@/modules/voice/server/providers/openai-tts-provider";
import { synthesizeSpeech } from "@/modules/voice/server/synthesize";

/**
 * Verifica la DEGRADACIÓN HONESTA de la capa de voz cuando no hay
 * credenciales: nunca debe fingir un audio, debe declarar `not_configured`.
 * No llama a ninguna API real (no hay red ni claves en este entorno).
 */
describe("Capa de voz sin credenciales", () => {
  const original = process.env.OPENAI_API_KEY;
  beforeEach(() => {
    delete process.env.OPENAI_API_KEY;
  });
  afterEach(() => {
    if (original !== undefined) process.env.OPENAI_API_KEY = original;
  });

  it("isConfigured() es false sin OPENAI_API_KEY", () => {
    expect(new OpenAITTSProvider().isConfigured()).toBe(false);
  });

  it("synthesize del proveedor lanza VoiceError('not_configured') sin clave", async () => {
    const provider = new OpenAITTSProvider();
    await expect(
      provider.synthesize({ text: "hello world", language: "en" })
    ).rejects.toMatchObject({ name: "VoiceError", code: "not_configured" });
  });

  it("synthesizeSpeech propaga 'not_configured' sin fingir audio", async () => {
    await expect(
      synthesizeSpeech({ text: "hola mundo", language: "es" })
    ).rejects.toMatchObject({ code: "not_configured" });
  });
});
