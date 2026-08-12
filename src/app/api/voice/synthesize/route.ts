import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { VoiceError } from "@/modules/voice/server/provider";
import { synthesizeSpeech } from "@/modules/voice/server/synthesize";

const MAX_CHARS = 800;

/**
 * Genera audio (TTS) para un texto y lo devuelve como URL persistida (si
 * hay almacenamiento) o como stream de audio (si no). Solo administradores;
 * limitado por ritmo (la síntesis tiene coste por caracteres). Si el
 * proveedor de voz no está configurado, responde 503 `not_configured` — la
 * UI muestra "audio no disponible", nunca finge un audio.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  const roles = (session.user as { roles?: string[] }).roles ?? [];
  if (!roles.includes("administrador")) {
    return Response.json({ error: "Requiere rol de administrador" }, { status: 403 });
  }

  const rl = checkRateLimit(`voice:${session.user.id}`, 60, 60 * 60);
  if (!rl.allowed) {
    return Response.json({ error: "Demasiadas generaciones de audio" }, { status: 429 });
  }

  let body: { text?: string; language?: string; accent?: string; voice?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const text = String(body.text ?? "").trim();
  const language = String(body.language ?? "").trim() || "en";
  if (!text) {
    return Response.json({ error: "Falta el texto a locutar." }, { status: 400 });
  }
  if (text.length > MAX_CHARS) {
    return Response.json(
      { error: `El texto supera el máximo de ${MAX_CHARS} caracteres.` },
      { status: 400 }
    );
  }

  try {
    const result = await synthesizeSpeech({
      text,
      language,
      accent: body.accent?.trim() || undefined,
      voice: body.voice?.trim() || undefined,
    });

    if (result.persisted) {
      return Response.json({ url: result.url, cached: result.cached });
    }
    // Sin almacenamiento: se devuelve el audio directamente.
    return new Response(result.audio, {
      status: 200,
      headers: { "Content-Type": result.contentType, "Cache-Control": "no-store" },
    });
  } catch (error) {
    if (error instanceof VoiceError && error.code === "not_configured") {
      return Response.json(
        { error: "not_configured", message: error.message },
        { status: 503 }
      );
    }
    const message =
      error instanceof VoiceError ? error.message : "No se pudo generar el audio.";
    return Response.json({ error: message }, { status: 502 });
  }
}
