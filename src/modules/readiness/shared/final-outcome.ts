/**
 * RESULTADO del Simulacro FINAL (máster prompt, punto 12).
 *
 * Al terminar el simulacro final de un nivel (3 meses de preparación), NO se
 * dice solo "aprobado/suspendido":
 *   • Si alcanza la nota de corte REAL del nivel → se le entregan las
 *     directrices para inscribirse al examen oficial de Cambridge.
 *   • Si NO la alcanza → se genera un PLAN INTENSIVO de 1–2 meses (según la
 *     gravedad) centrado en sus puntos débiles, reutilizando readiness, banco
 *     de errores y ritmo de estudio. Coste cero.
 *
 * Función PURA (testeable, sin red). El disclaimer legal va siempre.
 */
import type { SkillId } from "./readiness";

const SKILL_ES: Record<SkillId, string> = {
  reading: "Reading (comprensión escrita)",
  writing: "Writing (expresión escrita)",
  listening: "Listening (comprensión oral)",
  speaking: "Speaking (expresión oral)",
};

export type FinalOutcomeInput = {
  levelName: string;
  /** % obtenido en el simulacro final (0..100). */
  scorePercent: number;
  /** % de corte del simulacro (passingScore del examen). */
  passMarkPercent: number;
  /** Destreza más floja (banco de errores/readiness), si hay datos. */
  weakestSkill: SkillId | null;
  /** Fallos por destreza, de más a menos (para dirigir el refuerzo). */
  errorsBySkill: { skill: SkillId; errors: number }[];
  /** Progreso de contenido 0..100 (lecciones completadas). */
  contentProgress: number;
  /** Estimación en la Cambridge English Scale, si existe. */
  cambridgeScaleEstimate: number | null;
  /** Nota de corte del nivel en la escala (para el mensaje). */
  scalePass: number | null;
};

export type IntensivePlanWeek = { week: number; focus: string; task: string };

export type FinalOutcome =
  | {
      status: "passed";
      headline: string;
      message: string;
      cambridgeScaleEstimate: number | null;
      registrationSteps: string[];
      disclaimer: string;
    }
  | {
      status: "reinforce";
      headline: string;
      message: string;
      months: 1 | 2;
      focusSkills: string[];
      plan: IntensivePlanWeek[];
      disclaimer: string;
    };

const DISCLAIMER =
  "NOVARA no inscribe ni examina: el examen oficial lo gestiona Cambridge English " +
  "a través de centros examinadores autorizados. Esta estimación es interna y no es una nota oficial.";

/** Pasos oficiales (honestos) para inscribirse al examen real de Cambridge. */
export function registrationSteps(levelName: string): string[] {
  return [
    `Busca un centro examinador autorizado cerca de ti en el sitio oficial de Cambridge English (cambridgeenglish.org → "Find an exam centre").`,
    `Consulta las fechas y modalidades disponibles del ${levelName} (en papel o por ordenador) en ese centro.`,
    "Reserva tu plaza y paga la tasa directamente en el centro antes de la fecha límite de inscripción.",
    "Prepara tu documento de identidad oficial; el día del examen llega con antelación.",
    "Sigue repasando con NOVARA hasta la fecha: mantén tu racha, repite simulacros y refuerza tus puntos débiles.",
  ];
}

/**
 * Construye un plan intensivo de refuerzo a partir de las carencias reales.
 * La duración (1 ó 2 meses) depende de cuán lejos quedó de la nota de corte y
 * de cuánto contenido completó. El foco son las 1–2 destrezas más débiles.
 */
export function buildFinalOutcome(input: FinalOutcomeInput): FinalOutcome {
  const passed = input.scorePercent >= input.passMarkPercent;

  if (passed) {
    const est =
      input.cambridgeScaleEstimate != null
        ? ` Tu estimación en la Cambridge English Scale es de unos ${input.cambridgeScaleEstimate} puntos` +
          (input.scalePass != null ? ` (corte del nivel: ${input.scalePass}).` : ".")
        : "";
    return {
      status: "passed",
      headline: "¡Estás listo para el examen oficial!",
      message:
        `Has superado el simulacro final del ${input.levelName} con un ${Math.round(input.scorePercent)}%.` +
        est +
        " Estos son los pasos para presentarte al examen real:",
      cambridgeScaleEstimate: input.cambridgeScaleEstimate,
      registrationSteps: registrationSteps(input.levelName),
      disclaimer: DISCLAIMER,
    };
  }

  // Gravedad → duración del plan.
  const gap = input.passMarkPercent - input.scorePercent;
  const months: 1 | 2 = gap >= 20 || input.contentProgress < 70 ? 2 : 1;

  // Foco: destrezas con más fallos (o la más débil). Fallback a las 4.
  const ranked = input.errorsBySkill.length
    ? input.errorsBySkill.map((e) => e.skill)
    : input.weakestSkill
      ? [input.weakestSkill]
      : (["reading", "writing", "listening", "speaking"] as SkillId[]);
  const focus = ranked.slice(0, 2);
  const focusSkills = focus.map((s) => SKILL_ES[s]);

  const weeks = months === 2 ? 8 : 4;
  const plan: IntensivePlanWeek[] = [];
  for (let w = 1; w <= weeks; w++) {
    const skill = focus[(w - 1) % Math.max(1, focus.length)] ?? "reading";
    const skillEs = SKILL_ES[skill];
    let task: string;
    if (w === weeks) {
      task = "Repite el Simulacro FINAL en condiciones de examen y compara tu nota con la de corte.";
    } else if (w % 2 === 1) {
      task = `Repasa tus fallos de ${skillEs} en el banco de errores y rehaz esos ejercicios hasta acertarlos.`;
    } else {
      task = `Haz práctica NUEVA en formato examen de ${skillEs} y añade 10 palabras de vocabulario al día.`;
    }
    plan.push({ week: w, focus: skillEs, task });
  }

  return {
    status: "reinforce",
    headline: "Aún no llegas a la nota: este es tu plan de refuerzo",
    message:
      `Has obtenido un ${Math.round(input.scorePercent)}% en el simulacro final del ${input.levelName} ` +
      `(la nota de corte es ${Math.round(input.passMarkPercent)}%). No pasa nada: hemos analizado tus fallos, ` +
      `tu ritmo y tus simulacros y te hemos preparado un plan intensivo de ${months} ${months === 1 ? "mes" : "meses"} ` +
      `centrado en lo que más te cuesta. Síguelo y vuelve a intentarlo.`,
    months,
    focusSkills,
    plan,
    disclaimer: DISCLAIMER,
  };
}
