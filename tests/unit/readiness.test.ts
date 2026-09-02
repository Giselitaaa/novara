import { describe, expect, it } from "vitest";

import { summarizeErrorPatterns, topWeakSkills } from "@/modules/readiness/shared/errors";
import { recommendNextStep } from "@/modules/readiness/shared/recommend";
import {
  B2_FIRST_SCALE,
  estimateReadiness,
  LEVEL_SCALES,
  performanceToScale,
  scaleForLevel,
} from "@/modules/readiness/shared/readiness";

describe("Calibración de la escala por nivel", () => {
  it("scaleForLevel devuelve la escala correcta por slug", () => {
    expect(scaleForLevel("a2-key")).toEqual({ min: 100, max: 150, pass: 120 });
    expect(scaleForLevel("b1-preliminary")).toEqual({ min: 120, max: 170, pass: 140 });
    expect(scaleForLevel("b2-first")).toEqual(B2_FIRST_SCALE);
    expect(scaleForLevel("pre-a1-starters")).toBeNull(); // Young Learners: sin escala
    expect(scaleForLevel("curso-desconocido")).toBeNull();
  });

  it("60% ≈ aprobado y 100% ≈ máximo en cada nivel numérico", () => {
    for (const slug of ["a2-key", "b1-preliminary", "b2-first", "c1-advanced", "c2-proficiency"]) {
      const s = scaleForLevel(slug)!;
      expect(performanceToScale(60, s)).toBe(s.pass);
      expect(performanceToScale(100, s)).toBe(s.max);
      expect(performanceToScale(0, s)).toBe(s.min);
    }
  });

  it("A2 Key: 80% de rendimiento estima 135/150 y aprueba", () => {
    const r = estimateReadiness([{ skill: "reading", attempts: 5, avgScore: 80 }], LEVEL_SCALES["a2-key"]);
    expect(r.cambridgeScaleEstimate).toBe(135); // 120 + (80-60)*0.75
    expect(r.ready).toBe(true); // 135 >= 120
    expect(r.scale).toEqual({ min: 100, max: 150, pass: 120 });
  });

  it("Young Learners (sin escala): ready por proxy 60%, sin número de escala", () => {
    const ready = estimateReadiness([{ skill: "listening", attempts: 4, avgScore: 70 }], null);
    expect(ready.cambridgeScaleEstimate).toBeNull();
    expect(ready.scale).toBeNull();
    expect(ready.ready).toBe(true); // 70% >= 60%
    const notReady = estimateReadiness([{ skill: "listening", attempts: 4, avgScore: 40 }], null);
    expect(notReady.ready).toBe(false);
  });
});

describe("Readiness — distinta del progreso de contenido", () => {
  it("sin datos: todo null, no ready, confianza baja", () => {
    const r = estimateReadiness([]);
    expect(r.overall).toBeNull();
    expect(r.cambridgeScaleEstimate).toBeNull();
    expect(r.ready).toBe(false);
    expect(r.confidence).toBe("baja");
    expect(r.perSkill.every((s) => s.readiness === null)).toBe(true);
  });

  it("mapea rendimiento a la Cambridge Scale de B2 First (60% ≈ aprobado)", () => {
    expect(performanceToScale(0)).toBe(B2_FIRST_SCALE.min);
    expect(performanceToScale(100)).toBe(B2_FIRST_SCALE.max);
    expect(performanceToScale(60)).toBe(B2_FIRST_SCALE.pass); // 160
    expect(performanceToScale(50)).toBe(153);
  });

  it("promedia solo las destrezas con datos e identifica la más débil", () => {
    const r = estimateReadiness([
      { skill: "reading", attempts: 5, avgScore: 80 },
      { skill: "writing", attempts: 3, avgScore: 40 },
    ]);
    expect(r.overall).toBe(60);
    expect(r.cambridgeScaleEstimate).toBe(160); // 60% ≈ aprobado justo
    expect(r.ready).toBe(true);
    expect(r.weakestSkill).toBe("writing");
    expect(r.confidence).toBe("media"); // 8 intentos
    expect(r.perSkill.find((s) => s.skill === "listening")?.readiness).toBeNull();
  });

  it("no alcanza el aprobado con rendimiento bajo", () => {
    const r = estimateReadiness([{ skill: "reading", attempts: 12, avgScore: 30 }]);
    expect(r.cambridgeScaleEstimate).toBe(B2_FIRST_SCALE.min); // 30% → recortado a 140
    expect(r.ready).toBe(false);
    expect(r.confidence).toBe("alta");
  });
});

describe("Recomendación adaptativa", () => {
  const base = estimateReadiness([]);

  it("sin datos → evaluación inicial", () => {
    const rec = recommendNextStep({ readiness: base, contentProgress: 0 });
    expect(rec.action).toBe("diagnostic");
  });

  it("listo y contenido cubierto → inscribirse al examen", () => {
    const readiness = estimateReadiness([{ skill: "reading", attempts: 10, avgScore: 85 }]);
    const rec = recommendNextStep({ readiness, contentProgress: 95 });
    expect(rec.action).toBe("register_exam");
  });

  it("listo pero contenido a medias → simulacro", () => {
    const readiness = estimateReadiness([{ skill: "reading", attempts: 10, avgScore: 85 }]);
    const rec = recommendNextStep({ readiness, contentProgress: 50 });
    expect(rec.action).toBe("take_mock_exam");
  });

  it("estancado con readiness baja → refuerzo intensivo de la destreza débil", () => {
    const readiness = estimateReadiness([
      { skill: "reading", attempts: 6, avgScore: 55 },
      { skill: "writing", attempts: 6, avgScore: 35 },
    ]);
    const rec = recommendNextStep({ readiness, contentProgress: 80, trend: "flat" });
    expect(rec.action).toBe("intensive_reinforcement");
    expect(rec.skill).toBe("writing");
  });

  it("mejorando y contenido avanzado → reforzar destreza débil", () => {
    const readiness = estimateReadiness([
      { skill: "reading", attempts: 6, avgScore: 55 },
      { skill: "listening", attempts: 6, avgScore: 45 },
    ]);
    const rec = recommendNextStep({ readiness, contentProgress: 70, trend: "up" });
    expect(rec.action).toBe("reinforce_skill");
    expect(rec.skill).toBe("listening");
  });

  it("poco avance de contenido → seguir el itinerario", () => {
    const readiness = estimateReadiness([{ skill: "reading", attempts: 2, avgScore: 50 }]);
    const rec = recommendNextStep({ readiness, contentProgress: 20, trend: "up" });
    expect(rec.action).toBe("continue_lessons");
  });
});

describe("Banco de errores", () => {
  const items = [
    { skill: "reading" as const, correct: false, tag: "prepositions" },
    { skill: "reading" as const, correct: false, tag: "prepositions" },
    { skill: "reading" as const, correct: true, tag: "prepositions" },
    { skill: "writing" as const, correct: false, tag: "verb_tense" },
    { skill: "reading" as const, correct: true, tag: "collocations" },
  ];

  it("agrega por patrón, ordena por nº de fallos y calcula el ratio", () => {
    const patterns = summarizeErrorPatterns(items);
    const top = patterns[0];
    expect(top).toMatchObject({ skill: "reading", tag: "prepositions", errors: 2, total: 3 });
    expect(top?.errorRate ?? 0).toBeCloseTo(2 / 3);
    // 'collocations' no tiene fallos → no aparece
    expect(patterns.some((p) => p.tag === "collocations")).toBe(false);
  });

  it("topWeakSkills devuelve las destrezas con más fallos", () => {
    const weak = topWeakSkills(items);
    expect(weak[0]).toEqual({ skill: "reading", errors: 2 });
    expect(weak[1]).toEqual({ skill: "writing", errors: 1 });
  });
});
