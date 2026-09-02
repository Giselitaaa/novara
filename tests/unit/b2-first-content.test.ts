import type { LessonBlock } from "@prisma/client";
import * as React from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { LessonBlockRenderer } from "@/components/lessons/lesson-block-renderer";

// El componente se transpila con el runtime JSX clásico bajo vitest (referencia
// `React.createElement`), pero no importa React. Lo exponemos como global; las
// llamadas ocurren en tiempo de render, después de esta asignación.
(globalThis as Record<string, unknown>).React = React;

/**
 * Verifica que los TIPOS de bloque usados por el contenido de B2 First se
 * renderizan a HTML visible con las mismas formas de `content`/`data` que se
 * insertan en la base de datos (ver scripts/seed-b2-first.mjs). Es la
 * comprobación de renderizado sin navegador: el gate de login/matrícula impide
 * la captura autenticada, pero el renderer es código puro de servidor y aquí
 * se ejercita con datos reales.
 */
function block(partial: Partial<LessonBlock>): LessonBlock {
  return {
    id: "test",
    lessonId: "test",
    order: 0,
    title: null,
    content: null,
    imageUrl: null,
    videoUrl: null,
    audioUrl: null,
    data: null,
    deckId: null,
    createdAt: new Date(),
    type: "TEXT",
    ...partial,
  } as LessonBlock;
}

function render(b: LessonBlock): string {
  return renderToStaticMarkup(createElement(LessonBlockRenderer, { block: b }));
}

describe("Renderizado de bloques del contenido B2 First", () => {
  it("TEXT muestra el contenido", () => {
    const html = render(block({ type: "TEXT", content: "El B2 First es un examen de nivel intermedio-alto." }));
    expect(html).toContain("El B2 First es un examen de nivel intermedio-alto.");
  });

  it("GRAMMAR muestra título y contenido", () => {
    const html = render(
      block({
        type: "GRAMMAR",
        title: "Reading & Use of English — 7 partes",
        content: "Parte 1 — Multiple-choice cloze: 8 huecos con 4 opciones.",
      })
    );
    expect(html).toContain("Reading &amp; Use of English");
    expect(html).toContain("Multiple-choice cloze");
  });

  it("NOTES (warning) muestra el aviso de preparación ≠ certificación", () => {
    const html = render(
      block({
        type: "NOTES",
        title: "Importante",
        content: "NOVARA te PREPARA para el examen pero NO emite el certificado Cambridge.",
        data: { variant: "warning" } as unknown as LessonBlock["data"],
      })
    );
    expect(html).toContain("NO emite el certificado Cambridge");
  });

  it("SUMMARY lista los puntos clave desde data.items", () => {
    const html = render(
      block({
        type: "SUMMARY",
        title: "Lo esencial",
        data: {
          items: ["Se aprueba a partir de 160 en la Cambridge English Scale.", "4 pruebas de igual peso."],
        } as unknown as LessonBlock["data"],
      })
    );
    expect(html).toContain("Cambridge English Scale");
    expect(html).toContain("4 pruebas de igual peso");
  });

  it("TIP muestra el consejo", () => {
    const html = render(
      block({ type: "TIP", title: "Estrategia", content: "Lee el texto entero antes de rellenar los huecos." })
    );
    expect(html).toContain("Lee el texto entero antes de rellenar los huecos.");
  });
});
