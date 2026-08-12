import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { getSTTService, STTError } from "@/modules/exercises/server/speaking/stt";

/**
 * Transcribe el audio grabado por el alumno (Speech-to-Text). Sesión +
 * rate-limit. Sin proveedor configurado, responde 503 `not_configured` — el
 * cliente muestra "reconocimiento de voz no disponible", nunca inventa texto.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  const rl = checkRateLimit(`stt:${session.user.id}`, 120, 60 * 60);
  if (!rl.allowed) {
    return Response.json({ error: "Demasiadas transcripciones" }, { status: 429 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }
  const file = form.get("audio");
  if (!(file instanceof File)) {
    return Response.json({ error: "Falta el audio." }, { status: 400 });
  }
  const language = String(form.get("language") ?? "en");

  try {
    const stt = await getSTTService();
    if (!stt.isConfigured()) {
      return Response.json(
        { error: "not_configured", message: "El reconocimiento de voz no está configurado." },
        { status: 503 }
      );
    }
    const audio = new Uint8Array(await file.arrayBuffer());
    const text = await stt.transcribe({
      audio,
      language,
      filename: file.name || "audio.webm",
      contentType: file.type || "audio/webm",
    });
    return Response.json({ text });
  } catch (error) {
    if (error instanceof STTError && error.code === "not_configured") {
      return Response.json(
        { error: "not_configured", message: error.message },
        { status: 503 }
      );
    }
    const message = error instanceof STTError ? error.message : "No se pudo transcribir el audio.";
    return Response.json({ error: message }, { status: 502 });
  }
}
