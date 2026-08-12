import "server-only";

import { getAIProvider } from "@/modules/ai/server/provider";

import { LEVEL_KNOWLEDGE } from "../shared/knowledge";
import { getLevel } from "../shared/levels";
import {
  buildCambridgePrompt,
  CAMBRIDGE_SYSTEM_PROMPT,
  type CambridgeMode,
  type CambridgePromptInput,
} from "../shared/prompts";

export type GenerateCambridgeInput = {
  mode: CambridgeMode;
  levelId: string;
  skill?: string;
  part?: string;
  count?: number;
  week?: string;
  topic?: string;
  profile?: string;
  studentText?: string;
};

/**
 * Genera contenido Cambridge con el proveedor de IA, anclado a la base de
 * conocimiento del nivel (fuente de verdad). Lanza `AIProviderError` si no
 * hay proveedor configurado (la acción lo traduce a `not_configured`).
 */
export async function generateCambridge(input: GenerateCambridgeInput): Promise<string> {
  const level = getLevel(input.levelId);
  if (!level) throw new Error("Nivel de Cambridge no válido.");

  const promptInput: CambridgePromptInput = {
    mode: input.mode,
    levelName: level.name,
    levelKnowledge: LEVEL_KNOWLEDGE[level.id],
    skill: input.skill,
    part: input.part,
    count: input.count,
    week: input.week,
    topic: input.topic,
    profile: input.profile,
    studentText: input.studentText,
  };

  const provider = await getAIProvider();
  return provider.complete({
    system: CAMBRIDGE_SYSTEM_PROMPT,
    prompt: buildCambridgePrompt(promptInput),
    maxTokens: 3500,
  });
}
