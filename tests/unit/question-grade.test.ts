import { describe, expect, it } from "vitest";

import { gradeExercise, gradeQuestion } from "@/modules/exercises/shared/grade";
import type { Question, Response } from "@/modules/exercises/shared/question-types";

describe("gradeQuestion", () => {
  it("opción múltiple: exige el conjunto exacto de correctas", () => {
    const q: Question = { kind: "multiple_choice", prompt: "?", options: ["a", "b", "c"], correct: [0, 2] };
    expect(gradeQuestion(q, { kind: "multiple_choice", selected: [2, 0] }).correct).toBe(true);
    expect(gradeQuestion(q, { kind: "multiple_choice", selected: [0] }).correct).toBe(false);
    expect(gradeQuestion(q, { kind: "multiple_choice", selected: [0, 1, 2] }).correct).toBe(false);
  });

  it("verdadero/falso", () => {
    const q: Question = { kind: "true_false", prompt: "?", correct: true };
    expect(gradeQuestion(q, { kind: "true_false", value: true }).score).toBe(1);
    expect(gradeQuestion(q, { kind: "true_false", value: false }).score).toBe(0);
  });

  it("huecos: acepta varias respuestas válidas e ignora mayúsculas por defecto", () => {
    const q: Question = {
      kind: "fill_blank",
      prompt: "?",
      blanks: [{ accepted: ["colour", "color"] }, { accepted: ["favourite"] }],
    };
    const r: Response = { kind: "fill_blank", answers: ["COLOR", "favourite"] };
    expect(gradeQuestion(q, r).correct).toBe(true);
  });

  it("huecos: crédito parcial", () => {
    const q: Question = {
      kind: "fill_blank",
      prompt: "?",
      blanks: [{ accepted: ["a"] }, { accepted: ["b"] }],
    };
    const g = gradeQuestion(q, { kind: "fill_blank", answers: ["a", "x"] });
    expect(g.score).toBe(0.5);
    expect(g.correct).toBe(false);
  });

  it("huecos: caseSensitive respeta mayúsculas", () => {
    const q: Question = {
      kind: "fill_blank",
      prompt: "?",
      blanks: [{ accepted: ["London"] }],
      caseSensitive: true,
    };
    expect(gradeQuestion(q, { kind: "fill_blank", answers: ["london"] }).correct).toBe(false);
    expect(gradeQuestion(q, { kind: "fill_blank", answers: ["London"] }).correct).toBe(true);
  });

  it("emparejar: identidad correcta, crédito parcial", () => {
    const q: Question = {
      kind: "matching",
      prompt: "?",
      pairs: [
        { left: "1", right: "one" },
        { left: "2", right: "two" },
      ],
    };
    expect(gradeQuestion(q, { kind: "matching", mapping: { 0: 0, 1: 1 } }).correct).toBe(true);
    expect(gradeQuestion(q, { kind: "matching", mapping: { 0: 0, 1: 0 } }).score).toBe(0.5);
  });

  it("ordenar: posición absoluta correcta", () => {
    const q: Question = { kind: "ordering", prompt: "?", items: ["a", "b", "c"] };
    expect(gradeQuestion(q, { kind: "ordering", order: [0, 1, 2] }).correct).toBe(true);
    expect(gradeQuestion(q, { kind: "ordering", order: [0, 2, 1] }).score).toBeCloseTo(1 / 3);
  });

  it("abierta: no auto-corregible", () => {
    const q: Question = { kind: "open", prompt: "Escribe un email" };
    const g = gradeQuestion(q, { kind: "open", text: "Hola" });
    expect(g.autoGradable).toBe(false);
  });

  it("respuesta ausente o de tipo incorrecto ⇒ 0", () => {
    const q: Question = { kind: "true_false", prompt: "?", correct: true };
    expect(gradeQuestion(q, null).score).toBe(0);
    expect(gradeQuestion(q, { kind: "open", text: "x" } as Response).score).toBe(0);
  });
});

describe("gradeExercise", () => {
  it("puntúa solo las auto-corregibles y marca revisión manual si hay abiertas", () => {
    const questions: Question[] = [
      { kind: "true_false", prompt: "?", correct: true },
      { kind: "true_false", prompt: "?", correct: false },
      { kind: "open", prompt: "Redacta" },
    ];
    const responses: (Response | null)[] = [
      { kind: "true_false", value: true },
      { kind: "true_false", value: true }, // incorrecta
      { kind: "open", text: "…" },
    ];
    const g = gradeExercise(questions, responses);
    expect(g.autoGradableCount).toBe(2);
    expect(g.score).toBe(50); // 1 de 2 auto-corregibles
    expect(g.needsManualReview).toBe(true);
  });
});
