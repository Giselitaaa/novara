"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";
import { AIProviderError } from "@/modules/ai/server/provider";
import { isCambridgeLevel } from "@/modules/cambridge/shared/levels";
import { CAMBRIDGE_MODES, type CambridgeMode } from "@/modules/cambridge/shared/prompts";

import { generateCambridge, type GenerateCambridgeInput } from "./generate";

export type CambridgeGenerationResult =
  | { status: "ok"; content: string }
  | { status: "not_configured"; message: string }
  | { status: "error"; message: string };

const MODE_IDS = new Set(CAMBRIDGE_MODES.map((m) => m.id));

/**
 * Genera contenido Cambridge para el profesor. DEVUELVE un resultado (no
 * lanza) para que el mensaje real llegue al cliente incluso en producción
 * (los errores lanzados por server actions se redactan en prod). Sin
 * proveedor de IA, `not_configured`: la UI lo muestra, nunca simula contenido.
 */
export async function generateCambridgeContent(
  input: GenerateCambridgeInput
): Promise<CambridgeGenerationResult> {
  const session = await requireAdmin();

  if (!isCambridgeLevel(input.levelId)) {
    return { status: "error", message: "Nivel de Cambridge no válido." };
  }
  if (!MODE_IDS.has(input.mode as CambridgeMode)) {
    return { status: "error", message: "Modo de generación no válido." };
  }

  const rl = checkRateLimit(`cambridge:${session.user.id}`, 40, 60 * 60);
  if (!rl.allowed) {
    return {
      status: "error",
      message: `Demasiadas generaciones. Espera ${Math.ceil(rl.resetInSeconds / 60)} minutos.`,
    };
  }

  try {
    const content = await generateCambridge(input);
    await logAdminAction(session.user.id, "cambridge.generate", "Cambridge", input.levelId, {
      mode: input.mode,
    });
    return { status: "ok", content };
  } catch (error) {
    if (error instanceof AIProviderError && error.code === "not_configured") {
      return {
        status: "not_configured",
        message:
          "La generación con IA no está disponible: configura ANTHROPIC_API_KEY u OPENAI_API_KEY.",
      };
    }
    return {
      status: "error",
      message: error instanceof Error ? error.message : "No se pudo generar el contenido.",
    };
  }
}

/**
 * Inserta el contenido generado como un bloque de TEXTO al final de una
 * lección, reutilizando el sistema de bloques. El profesor puede luego
 * refinarlo o dividirlo en el editor de bloques.
 */
export async function insertContentAsBlock(lessonId: string, content: string) {
  const session = await requireAdmin();
  const text = content.trim();
  if (!text) throw new Error("No hay contenido que insertar.");

  const lesson = await db.lesson.findUnique({ where: { id: lessonId }, select: { id: true } });
  if (!lesson) throw new Error("Lección no encontrada.");

  const count = await db.lessonBlock.count({ where: { lessonId } });
  const block = await db.lessonBlock.create({
    data: { lessonId, type: "TEXT", order: count, content: text },
  });

  await logAdminAction(session.user.id, "cambridge.insert_block", "LessonBlock", block.id, {
    lessonId,
  });
  revalidatePath(`/admin/lecciones/${lessonId}`);
  return { status: "success" as const, blockId: block.id };
}
