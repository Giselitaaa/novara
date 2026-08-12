import { describe, expect, it } from "vitest";

import { interpolate } from "@/lib/interpolate";

describe("interpolate (variables de email)", () => {
  it("sustituye una variable simple", () => {
    expect(interpolate("Hola {{nombre}}", { nombre: "Ana" })).toBe("Hola Ana");
  });

  it("sustituye varias variables", () => {
    expect(
      interpolate("{{nombre}} completó {{curso}}", { nombre: "Ana", curso: "Inglés A1" })
    ).toBe("Ana completó Inglés A1");
  });

  it("tolera espacios dentro de las llaves", () => {
    expect(interpolate("Hola {{ nombre }}", { nombre: "Ana" })).toBe("Hola Ana");
  });

  it("deja vacía una variable sin valor (no deja el literal)", () => {
    expect(interpolate("Hola {{nombre}}", {})).toBe("Hola ");
  });

  it("no toca texto sin variables", () => {
    expect(interpolate("Texto plano", { nombre: "Ana" })).toBe("Texto plano");
  });

  it("repite el valor si la variable aparece varias veces", () => {
    expect(interpolate("{{x}}-{{x}}", { x: "1" })).toBe("1-1");
  });
});
