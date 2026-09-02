import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { AIProviderError, getAIProvider } from "@/modules/ai/server/provider";
import { getSTTService, STTError } from "@/modules/exercises/server/speaking/stt";
import { PiperVoiceProvider } from "@/modules/voice/server/providers/piper-provider";
import { getVoiceProvider, VoiceError } from "@/modules/voice/server/provider";

/**
 * Proveedores LOCALES de coste cero (LLM, Piper TTS, Whisper STT): se
 * seleccionan por variables de entorno y degradan con honestidad cuando el
 * servicio local no está configurado/arrancado. No hay red ni servicios reales
 * en este entorno, así que se prueba la selección y la degradación, nunca una
 * respuesta fingida.
 */
describe("Selección de proveedores locales por entorno", () => {
  const env = { ...process.env };
  afterEach(() => {
    process.env = { ...env };
  });

  it("AI_PROVIDER=local resuelve el proveedor LLM local", async () => {
    process.env.AI_PROVIDER = "local";
    const provider = await getAIProvider();
    expect(provider.name).toBe("local");
  });

  it("VOICE_PROVIDER=piper resuelve el proveedor de voz Piper", async () => {
    process.env.VOICE_PROVIDER = "piper";
    const provider = await getVoiceProvider();
    expect(provider.name).toBe("piper");
  });

  it("STT_PROVIDER=whisper-local resuelve el Whisper local", async () => {
    process.env.STT_PROVIDER = "whisper-local";
    const service = await getSTTService();
    expect(service.name).toBe("whisper-local");
  });
});

describe("Degradación honesta de los proveedores locales", () => {
  const env = { ...process.env };
  afterEach(() => {
    process.env = { ...env };
  });

  it("Piper sin PIPER_URL: isConfigured() false y synthesize lanza not_configured", async () => {
    delete process.env.PIPER_URL;
    const piper = new PiperVoiceProvider();
    expect(piper.isConfigured()).toBe(false);
    await expect(piper.synthesize({ text: "hello", language: "en" })).rejects.toMatchObject({
      name: "VoiceError",
      code: "not_configured",
    });
  });

  it("Whisper local sin WHISPER_URL lanza not_configured", async () => {
    process.env.STT_PROVIDER = "whisper-local";
    delete process.env.WHISPER_URL;
    const service = await getSTTService();
    expect(service.isConfigured()).toBe(false);
    await expect(
      service.transcribe({ audio: new Uint8Array([1, 2, 3]), language: "en" })
    ).rejects.toBeInstanceOf(STTError);
  });

  it("LLM local sin servidor arrancado lanza request_failed (no inventa respuesta)", async () => {
    process.env.AI_PROVIDER = "local";
    // Puerto muy improbable de estar escuchando → ECONNREFUSED rápido.
    process.env.LOCAL_AI_BASE_URL = "http://127.0.0.1:59999/v1";
    const provider = await getAIProvider();
    await expect(provider.complete({ system: "s", prompt: "p" })).rejects.toMatchObject({
      name: "AIProviderError",
      code: "request_failed",
    });
    // y es del tipo correcto
    await provider.complete({ system: "s", prompt: "p" }).catch((e) => {
      expect(e).toBeInstanceOf(AIProviderError);
    });
  });
});
