import { describe, expect, it } from "vitest";

import {
  computeWeightedExamScore,
  isPassing,
  sectionWeightPercentages,
  totalExamMinutes,
} from "@/modules/exams/shared/scoring";

describe("computeWeightedExamScore", () => {
  it("media ponderada correcta", () => {
    // reading 80 (peso 2), writing 50 (peso 1) => (160+50)/3 = 70
    expect(
      computeWeightedExamScore([
        { weight: 2, score: 80 },
        { weight: 1, score: 50 },
      ])
    ).toBe(70);
  });

  it("pesos iguales = media simple", () => {
    expect(
      computeWeightedExamScore([
        { weight: 1, score: 100 },
        { weight: 1, score: 0 },
      ])
    ).toBe(50);
  });

  it("sin peso total ⇒ 0", () => {
    expect(computeWeightedExamScore([{ weight: 0, score: 90 }])).toBe(0);
    expect(computeWeightedExamScore([])).toBe(0);
  });

  it("ignora pesos negativos", () => {
    expect(
      computeWeightedExamScore([
        { weight: -5, score: 100 },
        { weight: 1, score: 40 },
      ])
    ).toBe(40);
  });
});

describe("isPassing", () => {
  it("compara con la nota mínima", () => {
    expect(isPassing(70, 60)).toBe(true);
    expect(isPassing(59, 60)).toBe(false);
    expect(isPassing(60, 60)).toBe(true);
  });
});

describe("sectionWeightPercentages", () => {
  it("reparte el peso en % del total", () => {
    expect(sectionWeightPercentages([2, 1, 1])).toEqual([50, 25, 25]);
  });
  it("sin peso ⇒ ceros", () => {
    expect(sectionWeightPercentages([0, 0])).toEqual([0, 0]);
  });
});

describe("totalExamMinutes", () => {
  it("usa el límite global si existe", () => {
    expect(totalExamMinutes(60, [10, 20])).toBe(60);
  });
  it("suma los límites por sección si no hay global", () => {
    expect(totalExamMinutes(null, [10, 20, null])).toBe(30);
  });
  it("null si no hay ninguno", () => {
    expect(totalExamMinutes(null, [null, null])).toBeNull();
  });
});
