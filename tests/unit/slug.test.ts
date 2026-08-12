import { describe, expect, it } from "vitest";

import { generateUniqueSlug, slugify } from "@/lib/slug";

describe("slugify", () => {
  it("convierte a minúsculas y sustituye espacios por guiones", () => {
    expect(slugify("Fundamentos de Python")).toBe("fundamentos-de-python");
  });

  it("elimina acentos y diacríticos", () => {
    expect(slugify("Programación en español, ¡fácil!")).toBe(
      "programacion-en-espanol-facil"
    );
  });

  it("colapsa caracteres no alfanuméricos consecutivos en un solo guion", () => {
    expect(slugify("Node.js  &  TypeScript!!!")).toBe("node-js-typescript");
  });

  it("no deja guiones al principio ni al final", () => {
    expect(slugify("  --Curso Extra--  ")).toBe("curso-extra");
  });

  it("devuelve cadena vacía si no queda ningún carácter válido", () => {
    expect(slugify("!!!")).toBe("");
  });
});

describe("generateUniqueSlug", () => {
  it("devuelve el slug base cuando no está ocupado", async () => {
    const slug = await generateUniqueSlug("Curso de Marketing", async () => false);
    expect(slug).toBe("curso-de-marketing");
  });

  it("añade un sufijo numérico incremental mientras el slug esté ocupado", async () => {
    const taken = new Set([
      "curso-de-marketing",
      "curso-de-marketing-1",
      "curso-de-marketing-2",
    ]);
    const slug = await generateUniqueSlug("Curso de Marketing", async (candidate) =>
      taken.has(candidate)
    );
    expect(slug).toBe("curso-de-marketing-3");
  });

  it("usa el fallback cuando el texto base no produce ningún slug válido", async () => {
    const slug = await generateUniqueSlug("!!!", async () => false, "curso");
    expect(slug).toBe("curso");
  });

  it("no entra en bucle infinito: cada intento se prueba exactamente una vez", async () => {
    let calls = 0;
    await generateUniqueSlug("Repetido", async () => {
      calls += 1;
      return calls <= 3; // libre a partir del 4º intento
    });
    expect(calls).toBe(4);
  });
});
