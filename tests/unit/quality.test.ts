import { describe, expect, it } from "vitest";

import { runQualityChecks, type QCCourse } from "@/modules/courses/shared/quality";

function baseCourse(overrides: Partial<QCCourse> = {}): QCCourse {
  return {
    title: "Curso",
    description: "Una descripción válida.",
    isPremium: false,
    price: null,
    modules: [
      {
        title: "M1",
        lessons: [
          {
            title: "L1",
            blocks: [
              {
                type: "TEXT",
                content: "Contenido",
                imageUrl: null,
                videoUrl: null,
                audioUrl: null,
                deckId: null,
                data: null,
              },
            ],
            exercises: [],
            hasLegacyContent: false,
          },
        ],
      },
    ],
    ...overrides,
  };
}

describe("runQualityChecks", () => {
  it("un curso completo no genera avisos", () => {
    expect(runQualityChecks(baseCourse())).toEqual([]);
  });

  it("avisa si falta descripción", () => {
    const issues = runQualityChecks(baseCourse({ description: "  " }));
    expect(issues.some((i) => /descripción/i.test(i.message))).toBe(true);
  });

  it("avisa si es premium sin precio", () => {
    const issues = runQualityChecks(baseCourse({ isPremium: true, price: 0 }));
    expect(issues.some((i) => /premium sin precio/i.test(i.message))).toBe(true);
  });

  it("avisa de un curso sin módulos", () => {
    const issues = runQualityChecks(baseCourse({ modules: [] }));
    expect(issues.some((i) => /no tiene módulos/i.test(i.message))).toBe(true);
  });

  it("avisa de bloque de imagen sin URL", () => {
    const c = baseCourse();
    c.modules[0]!.lessons[0]!.blocks[0] = {
      type: "IMAGE",
      content: null,
      imageUrl: null,
      videoUrl: null,
      audioUrl: null,
      deckId: null,
      data: null,
    };
    const issues = runQualityChecks(c);
    expect(issues.some((i) => /imagen sin URL/i.test(i.message))).toBe(true);
  });

  it("avisa de flashcards sin mazo", () => {
    const c = baseCourse();
    c.modules[0]!.lessons[0]!.blocks[0]!.type = "FLASHCARDS";
    const issues = runQualityChecks(c);
    expect(issues.some((i) => /sin mazo/i.test(i.message))).toBe(true);
  });

  it("avisa de writing sin rúbrica y de opción múltiple sin correcta", () => {
    const c = baseCourse();
    c.modules[0]!.lessons[0]!.exercises = [
      { category: "writing", title: "W1", config: { rubric: [] }, questions: [] },
      {
        category: "reading",
        title: "R1",
        config: { text: "texto" },
        questions: [
          { kind: "multiple_choice", data: { prompt: "?", options: ["a", "b"], correct: [] } },
        ],
      },
    ];
    const issues = runQualityChecks(c);
    expect(issues.some((i) => /rúbrica/i.test(i.message))).toBe(true);
    expect(issues.some((i) => /sin respuesta correcta/i.test(i.message))).toBe(true);
  });

  it("avisa de lección sin contenido", () => {
    const c = baseCourse();
    c.modules[0]!.lessons[0] = {
      title: "Vacía",
      blocks: [],
      exercises: [],
      hasLegacyContent: false,
    };
    const issues = runQualityChecks(c);
    expect(issues.some((i) => /sin contenido/i.test(i.message))).toBe(true);
  });
});
