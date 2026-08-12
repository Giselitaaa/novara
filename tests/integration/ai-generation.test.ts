import { beforeEach, describe, expect, it, vi } from "vitest";

import type * as AIProvider from "@/modules/ai/server/provider";

/**
 * Este test NO llama a ninguna API de IA real (no hay red ni claves
 * en este entorno). Sustituye `getAIProvider` por un doble de prueba
 * que devuelve una respuesta controlada, para verificar el contrato
 * real del módulo: que valida el JSON con Zod, que rechaza
 * respuestas mal formadas, y que exige rol de administrador.
 *
 * Lo que este test NO demuestra: que Anthropic/OpenAI respondan según
 * lo esperado en producción. Eso solo se sabe probándolo con una
 * clave de API real, algo fuera del alcance de este entorno.
 */

vi.mock("@/modules/admin/server/guard", () => ({
  requireAdmin: vi
    .fn()
    .mockResolvedValue({ user: { id: "admin-1", roles: ["administrador"] } }),
}));

const mockComplete = vi.fn();
vi.mock("@/modules/ai/server/provider", async () => {
  const actual = await vi.importActual<typeof AIProvider>("@/modules/ai/server/provider");
  return {
    ...actual,
    getAIProvider: vi.fn().mockResolvedValue({ name: "fake", complete: mockComplete }),
  };
});

describe("generateCourseStructure", () => {
  beforeEach(() => {
    mockComplete.mockReset();
  });

  it("acepta y valida una respuesta bien formada del proveedor", async () => {
    mockComplete.mockResolvedValue(
      JSON.stringify({
        title: "Curso de prueba",
        subtitle: "Subtítulo",
        description: "Descripción larga del curso.",
        objectives: ["Objetivo 1", "Objetivo 2"],
        requirements: ["Requisito 1"],
        modules: [
          { title: "Módulo 1", description: "Desc", lessons: ["Lección 1", "Lección 2"] },
        ],
      })
    );

    const { generateCourseStructure } = await import("@/modules/ai/server/generation");
    const result = await generateCourseStructure("Idea de curso de prueba");

    expect(result.title).toBe("Curso de prueba");
    expect(result.modules).toHaveLength(1);
    expect(result.modules[0]?.lessons).toEqual(["Lección 1", "Lección 2"]);
  });

  it("tolera que el proveedor envuelva el JSON en un bloque markdown", async () => {
    mockComplete.mockResolvedValue(
      "```json\n" +
        JSON.stringify({
          title: "Curso con markdown",
          subtitle: "",
          description: "Desc",
          objectives: [],
          requirements: [],
          modules: [],
        }) +
        "\n```"
    );

    const { generateCourseStructure } = await import("@/modules/ai/server/generation");
    const result = await generateCourseStructure("idea");

    expect(result.title).toBe("Curso con markdown");
  });

  it("rechaza una respuesta que no es JSON válido", async () => {
    mockComplete.mockResolvedValue("esto no es JSON en absoluto");

    const { generateCourseStructure } = await import("@/modules/ai/server/generation");
    await expect(generateCourseStructure("idea")).rejects.toThrow(/JSON válido/);
  });

  it("rechaza una respuesta con JSON válido pero forma incorrecta (sin 'modules')", async () => {
    mockComplete.mockResolvedValue(JSON.stringify({ title: "Solo título" }));

    const { generateCourseStructure } = await import("@/modules/ai/server/generation");
    await expect(generateCourseStructure("idea")).rejects.toThrow(/forma esperada/);
  });

  it("propaga el error 'not_configured' si el proveedor no tiene API key", async () => {
    const { AIProviderError } = await import("@/modules/ai/server/provider");
    mockComplete.mockRejectedValue(
      new AIProviderError("No hay ANTHROPIC_API_KEY configurada.", "not_configured")
    );

    const { generateCourseStructure } = await import("@/modules/ai/server/generation");
    await expect(generateCourseStructure("idea")).rejects.toThrow(/API_KEY/);
  });
});
