/**
 * Refuerzo adaptativo: "¿qué debería hacer el alumno AHORA?".
 *
 * Función pura que combina readiness (rendimiento), progreso de contenido y la
 * tendencia reciente para recomendar el siguiente paso, con intensidad
 * adaptativa: si el alumno se estanca, propone refuerzo intensivo; si va bien y
 * ha cubierto el contenido, lo empuja hacia el simulacro y el examen real.
 */
import type { ReadinessEstimate, SkillId } from "./readiness";

export type Trend = "up" | "down" | "flat";

export type RecommendationInput = {
  readiness: ReadinessEstimate;
  /** Progreso de contenido 0..100 (lecciones completadas / total). */
  contentProgress: number;
  /** Tendencia del rendimiento en los últimos intentos. */
  trend?: Trend;
};

export type RecommendationAction =
  | "diagnostic" // aún no hay datos: hacer la evaluación inicial
  | "continue_lessons" // seguir el itinerario
  | "reinforce_skill" // reforzar la destreza más débil
  | "intensive_reinforcement" // estancado: material nuevo e intensivo
  | "take_mock_exam" // listo en rendimiento: simulacro completo
  | "register_exam"; // preparado y contenido cubierto: pasos para inscribirse

export type Recommendation = {
  action: RecommendationAction;
  skill?: SkillId;
  message: string;
};

export function recommendNextStep({
  readiness,
  contentProgress,
  trend = "flat",
}: RecommendationInput): Recommendation {
  // 1) Sin datos de rendimiento → evaluación inicial.
  if (readiness.overall === null) {
    return {
      action: "diagnostic",
      message:
        "Aún no tenemos datos de tu rendimiento. Empieza con la evaluación inicial para estimar tu nivel.",
    };
  }

  const weak = readiness.weakestSkill ?? undefined;

  // 2) Estancamiento con readiness insuficiente → refuerzo intensivo con material nuevo.
  //    `ready` ya está calculado según la escala del nivel (o el proxy 60% en YLE).
  if (!readiness.ready && trend !== "up" && readiness.confidence !== "baja") {
    return {
      action: "intensive_reinforcement",
      skill: weak,
      message: weak
        ? `Tu progreso se ha estancado. Vamos a un refuerzo intensivo de ${weak} con material nuevo.`
        : "Tu progreso se ha estancado. Vamos a un refuerzo intensivo con material nuevo.",
    };
  }

  // 3) Readiness suficiente (alcanza el aprobado del nivel).
  if (readiness.ready) {
    if (contentProgress >= 90) {
      return {
        action: "register_exam",
        message:
          "Tu rendimiento estimado supera el aprobado y has cubierto el contenido. " +
          "Es buen momento para plantearte inscribirte en el examen oficial de Cambridge.",
      };
    }
    return {
      action: "take_mock_exam",
      message:
        "Tu rendimiento estimado alcanza el aprobado. Haz un simulacro completo para confirmarlo bajo condiciones de examen.",
    };
  }

  // 4) Readiness baja pero mejorando o pocos datos: reforzar la destreza débil
  //    si el contenido ya está avanzado; si no, seguir el itinerario.
  if (contentProgress >= 60 && weak) {
    return {
      action: "reinforce_skill",
      skill: weak,
      message: `Vas avanzando. Refuerza tu destreza más floja (${weak}) para subir tu preparación.`,
    };
  }

  return {
    action: "continue_lessons",
    message: "Sigue tu itinerario de lecciones para cubrir el contenido antes de simular el examen.",
  };
}
