import { describe, expect, it } from "vitest";

import { formatDuration, formatPrice, formatSeconds, getInitials } from "@/lib/format";

describe("formatDuration", () => {
  it("muestra solo minutos si dura menos de una hora", () => {
    expect(formatDuration(45)).toBe("45 min");
  });

  it("muestra solo horas si son horas exactas", () => {
    expect(formatDuration(120)).toBe("2 h");
  });

  it("muestra horas y minutos combinados", () => {
    expect(formatDuration(125)).toBe("2 h 5 min");
  });

  it("indica 'Por definir' cuando la duración es null", () => {
    expect(formatDuration(null)).toBe("Por definir");
  });
});

describe("formatSeconds", () => {
  it("redondea a minutos", () => {
    expect(formatSeconds(125)).toBe("2 min");
  });

  it("indica menos de un minuto para duraciones muy cortas", () => {
    expect(formatSeconds(20)).toBe("< 1 min");
  });

  it("devuelve null si no hay duración", () => {
    expect(formatSeconds(null)).toBeNull();
    expect(formatSeconds(0)).toBeNull();
  });
});

describe("formatPrice", () => {
  it("formatea en euros con el locale español", () => {
    // Nota: Intl.NumberFormat puede usar un espacio no separable (U+00A0)
    // entre el número y el símbolo — se normaliza para la comparación.
    const result = formatPrice(29).replace(/\u00A0/g, " ");
    expect(result).toContain("29");
    expect(result).toContain("€");
  });

  it("no muestra decimales para importes enteros", () => {
    const result = formatPrice(50);
    expect(result).not.toContain(",00");
  });

  it("muestra decimales cuando el importe no es entero", () => {
    const result = formatPrice(19.99);
    expect(result).toMatch(/19[,.]99/);
  });
});

describe("getInitials", () => {
  it("devuelve las iniciales de nombre y apellido en mayúsculas", () => {
    expect(getInitials("Marta Sánchez")).toBe("MS");
  });

  it("devuelve solo una inicial si no hay apellido", () => {
    expect(getInitials("Marta")).toBe("M");
  });

  it("devuelve '?' si no hay nombre", () => {
    expect(getInitials(null)).toBe("?");
    expect(getInitials(undefined)).toBe("?");
    expect(getInitials("")).toBe("?");
  });

  it("ignora espacios múltiples entre nombre y apellido", () => {
    expect(getInitials("Ana   García")).toBe("AG");
  });
});
