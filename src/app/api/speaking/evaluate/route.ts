import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { AIProviderError } from "@/modules/ai/server/provider";
import { evaluateSpeaking } from "@/modules/exercises/server/speaking/evaluation";
import { isCEFRLevel, type SpeakingTurn } from "@/modules/exercises/shared/speaking-prompt";

/**
 * Evalúa una conversación de speaking en 6 ejes + feedback. Sesión +
 * rate-limit. Sin proveedor de IA, responde 503 `not_configured`.
 */
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  const rl = checkRateLimit(`speaking-eval:${session.user.id}`, 30, 60 * 60);
  if (!rl.allowed) {
    return Response.json({ error: "Demasiadas evaluaciones" }, { status: 429 });
  }

  let body: {
    language?: string;
    level?: string;
    objective?: string;
    transcript?: SpeakingTurn[];
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

  try {
    const evaluation = await evaluateSpeaking({
      language: String(body.language ?? "inglés"),
      level,
      objective: String(body.objective ?? "").trim() || "practicar la conversación",
      transcript: Array.isArray(body.transcript) ? body.transcript : [],
    });
    return Response.json(evaluation);
  } catch (error) {
    if (error instanceof AIProviderError && error.code === "not_configured") {
      return Response.json(
        { error: "not_configured", message: error.message },
        { status: 503 }
      );
    }
    const message =
      error instanceof AIProviderError ? error.message : "No se pudo evaluar la conversación.";
    return Response.json({ error: message }, { status: 502 });
  }
}
