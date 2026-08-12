/**
 * Los 8 niveles de Cambridge English (tabla-selector 0.3 del documento
 * maestro). Datos puros, usados por el selector de nivel y por el motor de
 * generación. El `id` es estable; `name` y `exam` respetan literalmente la
 * nomenclatura oficial del documento maestro.
 */

export const CAMBRIDGE_LEVELS = [
  {
    id: "pre-a1-starters",
    name: "Pre A1 Starters",
    exam: "YLE Starters",
    ageRange: "6-8 años",
    cefr: "Pre-A1",
    forWhom: "Primer contacto con el inglés, iniciación.",
  },
  {
    id: "a1-movers",
    name: "A1 Movers",
    exam: "YLE Movers",
    ageRange: "8-10 años",
    cefr: "A1",
    forWhom: "Consolidación de bases.",
  },
  {
    id: "a2-flyers",
    name: "A2 Flyers",
    exam: "YLE Flyers",
    ageRange: "10-12 años",
    cefr: "A2",
    forWhom: "Transición a exámenes «serios».",
  },
  {
    id: "a2-key",
    name: "A2 Key (KET)",
    exam: "KET / KET for Schools",
    ageRange: "12+ años / adultos",
    cefr: "A2",
    forWhom: "Primera certificación oficial con validez internacional.",
  },
  {
    id: "b1-preliminary",
    name: "B1 Preliminary (PET)",
    exam: "PET / PET for Schools",
    ageRange: "14+ años / adultos",
    cefr: "B1",
    forWhom: "Certificación intermedia, muy demandada en institutos.",
  },
  {
    id: "b2-first",
    name: "B2 First (FCE)",
    exam: "FCE / FCE for Schools",
    ageRange: "15+ años / adultos",
    cefr: "B2",
    forWhom: "La más solicitada para trabajo, universidad y becas.",
  },
  {
    id: "c1-advanced",
    name: "C1 Advanced (CAE)",
    exam: "CAE",
    ageRange: "16+ años / adultos",
    cefr: "C1",
    forWhom: "Admisión universitaria, empleo cualificado.",
  },
  {
    id: "c2-proficiency",
    name: "C2 Proficiency (CPE)",
    exam: "CPE",
    ageRange: "16+ años / adultos",
    cefr: "C2",
    forWhom: "Nivel casi nativo, máxima certificación de Cambridge.",
  },
] as const;

export type CambridgeLevelId = (typeof CAMBRIDGE_LEVELS)[number]["id"];

export function getLevel(id: string) {
  return CAMBRIDGE_LEVELS.find((l) => l.id === id);
}

export function isCambridgeLevel(id: string): id is CambridgeLevelId {
  return CAMBRIDGE_LEVELS.some((l) => l.id === id);
}
