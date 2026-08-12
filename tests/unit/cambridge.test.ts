import { describe, expect, it } from "vitest";

import { LEVEL_KNOWLEDGE } from "@/modules/cambridge/shared/knowledge";
import {
  CAMBRIDGE_LEVELS,
  getLevel,
  isCambridgeLevel,
} from "@/modules/cambridge/shared/levels";
import {
  buildCambridgePrompt,
  CAMBRIDGE_MODES,
  CAMBRIDGE_SYSTEM_PROMPT,
  type CambridgeMode,
} from "@/modules/cambridge/shared/prompts";

describe("niveles Cambridge", () => {
  it("hay exactamente 8 niveles", () => {
    expect(CAMBRIDGE_LEVELS).toHaveLength(8);
  });
  it("cada nivel tiene base de conocimiento", () => {
    for (const l of CAMBRIDGE_LEVELS) {
      expect(LEVEL_KNOWLEDGE[l.id]?.length ?? 0).toBeGreaterThan(200);
    }
  });
  it("getLevel / isCambridgeLevel", () => {
    expect(getLevel("b2-first")?.name).toBe("B2 First (FCE)");
    expect(isCambridgeLevel("b2-first")).toBe(true);
    expect(isCambridgeLevel("z9-nope")).toBe(false);
  });
});

describe("system prompt", () => {
  it("incluye las reglas clave (fuente de verdad, fidelidad, originalidad)", () => {
    expect(CAMBRIDGE_SYSTEM_PROMPT).toMatch(/FUENTE DE VERDAD/i);
    expect(CAMBRIDGE_SYSTEM_PROMPT).toMatch(/original/i);
    expect(CAMBRIDGE_SYSTEM_PROMPT).toMatch(/8 niveles/i);
  });
});

describe("buildCambridgePrompt", () => {
  const base = {
    levelName: "B2 First (FCE)",
    levelKnowledge: LEVEL_KNOWLEDGE["b2-first"],
  };

  it("inyecta la base de conocimiento del nivel y el checklist", () => {
    const p = buildCambridgePrompt({ ...base, mode: "leccion" });
    expect(p).toContain("Reading & Use of English"); // del conocimiento B2
    expect(p).toMatch(/verifica en silencio/i); // checklist
  });

  it("cada modo produce un sub-prompt distinto y pertinente", () => {
    const modes: CambridgeMode[] = CAMBRIDGE_MODES.map((m) => m.id);
    const outputs = modes.map((mode) => buildCambridgePrompt({ ...base, mode }));
    // todos distintos
    expect(new Set(outputs).size).toBe(outputs.length);
    // pistas de contenido por modo
    expect(buildCambridgePrompt({ ...base, mode: "simulacro" })).toMatch(/simulacro/i);
    expect(buildCambridgePrompt({ ...base, mode: "correccion_writing", studentText: "My text" })).toContain("My text");
    expect(buildCambridgePrompt({ ...base, mode: "plan_estudio", profile: "2h/semana" })).toContain("2h/semana");
    expect(buildCambridgePrompt({ ...base, mode: "banco_ejercicios", skill: "Writing", count: 5 })).toMatch(/5 ejercicios/);
  });

  it("los 7 modos están definidos con sus campos", () => {
    expect(CAMBRIDGE_MODES).toHaveLength(7);
    const bank = CAMBRIDGE_MODES.find((m) => m.id === "banco_ejercicios");
    expect(bank?.fields).toContain("count");
  });
});
