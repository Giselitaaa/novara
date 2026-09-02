import * as React from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ReadinessCard } from "@/components/dashboard/readiness-card";
import { estimateReadiness } from "@/modules/readiness/shared/readiness";
import { recommendNextStep } from "@/modules/readiness/shared/recommend";

// El componente se transpila con runtime JSX clásico bajo vitest; expone React.
(globalThis as Record<string, unknown>).React = React;

describe("ReadinessCard — panel de readiness del dashboard", () => {
  it("muestra readiness por destreza, progreso, recomendación y errores", () => {
    const readiness = estimateReadiness([
      { skill: "reading", attempts: 4, avgScore: 80 },
      { skill: "listening", attempts: 2, avgScore: 40 },
    ]);
    const data = {
      courseTitle: "A2 Key",
      readiness,
      recommendation: recommendNextStep({ readiness, contentProgress: 50 }),
      contentProgress: 50,
      errorsBySkill: [{ skill: "listening" as const, errors: 3 }],
    };

    const html = renderToStaticMarkup(createElement(ReadinessCard, { data }));

    expect(html).toContain("Tu preparación");
    expect(html).toContain("A2 Key");
    expect(html).toContain("Reading");
    expect(html).toContain("Listening");
    expect(html).toContain("50%"); // progreso de contenido, distinto de readiness
    expect(html).toContain("Siguiente paso");
    expect(html).toContain("3 fallos");
  });

  it("sin datos degrada a evaluación inicial", () => {
    const readiness = estimateReadiness([]);
    const data = {
      courseTitle: "B2 First",
      readiness,
      recommendation: recommendNextStep({ readiness, contentProgress: 0 }),
      contentProgress: 0,
      errorsBySkill: [],
    };
    const html = renderToStaticMarkup(createElement(ReadinessCard, { data }));
    expect(html).toContain("sin datos aún");
    expect(html).toContain("evaluación inicial");
  });
});
