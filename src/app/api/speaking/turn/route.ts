import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { AIProviderError } from "@/modules/ai/server/provider";
import { nextConversationTurn } from "@/modules/exercises/server/speaking/conversation";
import { isCEFRLevel, type SpeakingTurn } from "@/modules/exercises/shared/speaking-prompt";
import { VoiceError } from "@/modules/voice/server/provider";
import { synthesizeSpeech } from "@/modules/voice/server/synthesize";

/**
 * Siguiente intervención de la IA en un ejercicio de speaking conversacional.
 * Requiere sesión y está limitado por ritmo (consume IA + voz, con coste).
 * Devuelve el texto y, si la voz está configurada y persistible, la URL del
 * audio. Si la IA no está configurada, responde 503 `not_configured` — el
 * cliente muestra "speaking no disponible", nunca simula una conversación.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  const rl = checkRateLimit(`speaking:${session.user.id}`, 120, 60 * 60);
  if (!rl.allowed) {
    return Response.json({ error: "Demasiadas intervenciones" }, { status: 429 });
  }

  let body: {
    language?: string;
    level?: string;
    scenario?: string;
    objective?: string;
    keywords?: string[];
    history?: SpeakingTurn[];
    withAudio?: boolean;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const level = String(body.level ?? "");
  if (!isCEFRLevel(level)) {
    return Response.json({ error: "Nivel MCER no válido (A1–C2)." }, { status: 400 });
  }
  const history = Array.isArray(body.history) ? body.history.slice(-20) : [];

  try {
    const { text } = await nextConversationTurn({
      language: String(body.language ?? "inglés"),
      level,
      scenario: String(body.scenario ?? "").trim() || "conversación libre",
      objective: String(body.objective ?? "").trim() || "practicar la conversación",
      keywords: Array.isArray(body.keywords) ? body.keywords : undefined,
      history,
    });

    let audioUrl: string | undefined;
    if (body.withAudio) {
      try {
        const audio = await synthesizeSpeech({
          text,
          language: String(body.language ?? "en"),
        });
        if (audio.persisted) audioUrl = audio.url;
      } catch (error) {
        // La voz es opcional aquí: si no está configurada, se devuelve solo
        // el texto (el cliente puede usar TTS del navegador). No se rompe.
        if (!(error instanceof VoiceError)) throw error;
      }
    }

    return Response.json({ text, audioUrl });
  } catch (error) {
    if (error instanceof AIProviderError && error.code === "not_configured") {
      return Response.json(
        { error: "not_configured", message: error.message },
        { status: 503 }
      );
    }
    const message =
      error instanceof AIProviderError ? error.message : "No se pudo continuar la conversación.";
    return Response.json({ error: message }, { status: 502 });
  }
}
