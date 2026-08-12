import { describe, expect, it } from "vitest";

import { parseFlashcardsText } from "@/modules/flashcards/shared/parse";

describe("parseFlashcardsText", () => {
  it("parsea columnas separadas por ';' en orden", () => {
    const cards = parseFlashcardsText(
      "break the ice;romper el hielo;Let's break the ice;;expresiones;B1"
    );
    expect(cards).toHaveLength(1);
    expect(cards[0]).toMatchObject({
      term: "break the ice",
      translation: "romper el hielo",
      example: "Let's break the ice",
      category: "expresiones",
      level: "B1",
    });
  });

  it("acepta tabuladores (pegado desde hoja de cálculo)", () => {
    const cards = parseFlashcardsText("keen on\tinteresado en");
    expect(cards[0]).toMatchObject({ term: "keen on", translation: "interesado en" });
  });

  it("ignora líneas vacías y filas sin traducción", () => {
    const cards = parseFlashcardsText("solo palabra\n\nword;palabra\n   ");
    expect(cards).toHaveLength(1);
    expect(cards[0]!.term).toBe("word");
  });

  it("ignora una fila de cabecera", () => {
    const cards = parseFlashcardsText("palabra;traducción\nhello;hola");
    expect(cards).toHaveLength(1);
    expect(cards[0]!.term).toBe("hello");
  });

  it("devuelve vacío si no hay nada válido", () => {
    expect(parseFlashcardsText("\n\n   \n")).toEqual([]);
  });
});
