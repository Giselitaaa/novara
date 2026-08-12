import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { nextConversationTurn } from "@/modules/exercises/server/speaking/conversation";
import {
  buildSpeakingSystemPrompt,
  isCEFRLevel,
  renderConversationHistory,
} from "@/modules/exercises/shared/speaking-prompt";

describe("buildSpeakingSystemPrompt (adaptación al nivel, puro)", () => {
  it("incluye escenario, objetivo y guía específica del nivel", () => {
    const p = buildSpeakingSystemPrompt({
      language: "inglés",
      level: "A1",
      scenario: "camarero en un restaurante",
      objective: "pedir comida",
    });
    expect(p).toContain("camarero en un restaurante");
    expect(p).toContain("pedir comida");
    expect(p).toContain("A1");
    expect(p).toMatch(/despacio|básico|cortas/i); // guía de A1
  });

  it("la guía difiere entre A1 y C2", () => {
    const base = { language: "inglés", scenario: "x", objective: "y" } as const;
    const a1 = buildSpeakingSystemPrompt({ ...base, level: "A1" });
    const c2 = buildSpeakingSystemPrompt({ ...base, level: "C2" });
    expect(a1).not.toBe(c2);
    expect(c2).toMatch(/nativo|idiomática|espontánea|matices/i);
  });

  it("incorpora palabras clave si se dan", () => {
    const p = buildSpeakingSystemPrompt({
      language: "inglés",
      level: "B1",
      scenario: "x",
      objective: "y",
      keywords: ["would you mind", "I'd rather"],
    });
    expect(p).toContain("would you mind");
  });

  it("isCEFRLevel valida niveles", () => {
    expect(isCEFRLevel("B2")).toBe(true);
    expect(isCEFRLevel("Z9")).toBe(false);
  });

  it("renderConversationHistory maneja el inicio vacío", () => {
    expect(renderConversationHistory([])).toMatch(/Inicia/i);
    expect(
      renderConversationHistory([
        { role: "ai", text: "Hi!" },
        { role: "student", text: "Hello" },
      ])
    ).toContain("Alumno: Hello");
  });
});

describe("degradación honesta sin proveedor de IA", () => {
  const anth = process.env.ANTHROPIC_API_KEY;
  const oai = process.env.OPENAI_API_KEY;
  beforeEach(() => {
    delete process.env.ANTHROPIC_API_KEY;
    delete process.env.OPENAI_API_KEY;
  });
  afterEach(() => {
    if (anth !== undefined) process.env.ANTHROPIC_API_KEY = anth;
    if (oai !== undefined) process.env.OPENAI_API_KEY = oai;
  });

  it("nextConversationTurn lanza 'not_configured' sin claves", async () => {
    await expect(
      nextConversationTurn({
        language: "inglés",
        level: "A2",
        scenario: "x",
        objective: "y",
        history: [],
      })
    ).rejects.toMatchObject({ code: "not_configured" });
  });
});
