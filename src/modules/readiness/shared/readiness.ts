/**
 * READINESS — preparación real estimada para el examen, DISTINTA del progreso
 * de contenido.
 *
 * El máster prompt exige separar dos métricas que a menudo se confunden:
 *   • Progreso de contenido: cuánto material ha COMPLETADO el alumno (lecciones
 *     vistas / total). No dice si ha aprendido.
 *   • Readiness: cómo RINDE realmente (puntuación en ejercicios y simulacros),
 *     traducido a una estimación en la Cambridge English Scale.
 *
 * Un alumno puede tener 100% de progreso y baja readiness (vio todo pero falla),
 * o al revés. Estas funciones son PURAS (fáciles de testear y de ejecutar en
 * cliente o servidor) y NUNCA presentan la estimación como certificación oficial.
 */

export type SkillId = "reading" | "writing" | "listening" | "speaking";
export const SKILLS: SkillId[] = ["reading", "writing", "listening", "speaking"];

/** Rango reportado de la Cambridge English Scale (min, max y aprobado). */
export type CambridgeScale = { min: number; max: number; pass: number };

/**
 * Escala por nivel Cambridge (clave = slug del curso). Los exámenes Young
 * Learners (Starters/Movers/Flyers) NO usan escala numérica sino "shields",
 * así que su escala es null y la readiness se estima solo por rendimiento.
 */
export const LEVEL_SCALES: Record<string, CambridgeScale | null> = {
  "pre-a1-starters": null,
  "a1-movers": null,
  "a2-flyers": null,
  "a2-key": { min: 100, max: 150, pass: 120 },
  "b1-preliminary": { min: 120, max: 170, pass: 140 },
  "b2-first": { min: 140, max: 190, pass: 160 },
  "c1-advanced": { min: 160, max: 210, pass: 180 },
  "c2-proficiency": { min: 180, max: 230, pass: 200 },
};

/** Escala de B2 First (compatibilidad y valor por defecto). */
export const B2_FIRST_SCALE: CambridgeScale = { min: 140, max: 190, pass: 160 };

/** % de acierto que se toma como aprobado cuando no hay escala numérica (YLE). */
const GENERIC_PASS_PERCENT = 60;

/** Escala del nivel por slug; null para Young Learners y cursos desconocidos. */
export function scaleForLevel(slug: string): CambridgeScale | null {
  return LEVEL_SCALES[slug] ?? null;
}

export type SkillPerformance = {
  skill: SkillId;
  /** Nº de intentos auto-corregidos con puntuación. 0 = sin datos aún. */
  attempts: number;
  /** Media de puntuación 0..100 sobre esos intentos. */
  avgScore: number;
};

export type SkillReadiness = {
  skill: SkillId;
  /** 0..100; null si no hay datos todavía. */
  readiness: number | null;
  attempts: number;
};

export type ReadinessEstimate = {
  perSkill: SkillReadiness[];
  /** Readiness global 0..100 (media de los skills CON datos); null si no hay nada. */
  overall: number | null;
  /** Escala del nivel usada (null en Young Learners / cursos sin escala). */
  scale: CambridgeScale | null;
  /** Estimación en la Cambridge English Scale del nivel; null si no hay datos o escala. */
  cambridgeScaleEstimate: number | null;
  /** ¿La estimación alcanza el aprobado del nivel? */
  ready: boolean;
  /** "baja" | "media" | "alta" — cuánta confianza da el volumen de datos. */
  confidence: "baja" | "media" | "alta";
  /** Skill con peor readiness (con datos), para dirigir el refuerzo. */
  weakestSkill: SkillId | null;
  /** Recordatorio legal: no sustituye al examen oficial. */
  disclaimer: string;
};

const DISCLAIMER =
  "Estimación interna de NOVARA basada en tu rendimiento. No es una nota oficial " +
  "ni sustituye al examen de Cambridge.";

/**
 * Mapea una puntuación de rendimiento (0..100) a la Cambridge English Scale del
 * nivel dado. Anclado pedagógicamente: ~60% de acierto ≈ aprobado del nivel y
 * 100% ≈ máximo del nivel; por debajo se recorta al mínimo reportado. No es una
 * nota oficial, solo una estimación de referencia.
 */
export function performanceToScale(
  perf0to100: number,
  scale: CambridgeScale = B2_FIRST_SCALE
): number {
  const perf = Math.max(0, Math.min(100, perf0to100));
  const { min, max, pass } = scale;
  const slope = (max - pass) / (100 - GENERIC_PASS_PERCENT); // 60%→pass, 100%→max
  const raw = pass + (perf - GENERIC_PASS_PERCENT) * slope;
  return Math.round(Math.max(min, Math.min(max, raw)));
}

function confidenceFor(totalAttempts: number): ReadinessEstimate["confidence"] {
  if (totalAttempts >= 12) return "alta";
  if (totalAttempts >= 4) return "media";
  return "baja";
}

/**
 * Calcula la readiness a partir del rendimiento por destreza. Solo se
 * promedian las destrezas CON datos; sin ningún dato, todo es null y `ready`
 * es false.
 */
export function estimateReadiness(
  performances: SkillPerformance[],
  scale: CambridgeScale | null = B2_FIRST_SCALE
): ReadinessEstimate {
  const bySkill = new Map(performances.map((p) => [p.skill, p]));

  const perSkill: SkillReadiness[] = SKILLS.map((skill) => {
    const p = bySkill.get(skill);
    const hasData = p && p.attempts > 0;
    return {
      skill,
      readiness: hasData ? Math.max(0, Math.min(100, Math.round(p.avgScore))) : null,
      attempts: p?.attempts ?? 0,
    };
  });

  const withData = perSkill.filter((s): s is SkillReadiness & { readiness: number } => s.readiness !== null);
  const overall =
    withData.length > 0
      ? Math.round(withData.reduce((sum, s) => sum + s.readiness, 0) / withData.length)
      : null;

  const totalAttempts = perSkill.reduce((sum, s) => sum + s.attempts, 0);
  const cambridgeScaleEstimate =
    overall !== null && scale ? performanceToScale(overall, scale) : null;

  // Con escala numérica: aprobado = estimación >= pass del nivel. Sin escala
  // (Young Learners): proxy por rendimiento (>= 60%).
  const ready =
    overall === null
      ? false
      : scale
        ? cambridgeScaleEstimate !== null && cambridgeScaleEstimate >= scale.pass
        : overall >= GENERIC_PASS_PERCENT;

  const weakestSkill =
    withData.length > 0
      ? withData.reduce((min, s) => (s.readiness < min.readiness ? s : min)).skill
      : null;

  return {
    perSkill,
    overall,
    scale,
    cambridgeScaleEstimate,
    ready,
    confidence: confidenceFor(totalAttempts),
    weakestSkill,
    disclaimer: DISCLAIMER,
  };
}
