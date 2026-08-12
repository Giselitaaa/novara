/**
 * Puntuación ponderada de un examen compuesto por secciones (Fase 6).
 * Función PURA: cada sección aporta su nota (0..100) con un peso; la nota
 * final es la media ponderada. Reutilizable y testeable sin base de datos.
 */

export type SectionScore = {
  /** Peso relativo de la sección (no tiene por qué sumar 100). */
  weight: number;
  /** Nota de la sección, 0..100. */
  score: number;
};

/** Nota final ponderada (0..100, redondeada). Si no hay peso, 0. */
export function computeWeightedExamScore(sections: SectionScore[]): number {
  const totalWeight = sections.reduce((sum, s) => sum + (s.weight > 0 ? s.weight : 0), 0);
  if (totalWeight <= 0) return 0;
  const weighted = sections.reduce(
    (sum, s) => sum + s.score * (s.weight > 0 ? s.weight : 0),
    0
  );
  return Math.round(weighted / totalWeight);
}

export function isPassing(finalScore: number, passingScore: number): boolean {
  return finalScore >= passingScore;
}

/** Peso relativo de cada sección en % del total (para mostrarlo en la UI). */
export function sectionWeightPercentages(weights: number[]): number[] {
  const total = weights.reduce((s, w) => s + (w > 0 ? w : 0), 0);
  if (total <= 0) return weights.map(() => 0);
  return weights.map((w) => Math.round(((w > 0 ? w : 0) / total) * 100));
}

/**
 * Tiempo total del examen en minutos: el límite global si existe; si no, la
 * suma de los límites por sección (los que lo tengan). `null` si no hay
 * ninguno definido (examen sin tiempo).
 */
export function totalExamMinutes(
  globalLimit: number | null,
  sectionLimits: (number | null)[]
): number | null {
  if (globalLimit && globalLimit > 0) return globalLimit;
  const sum = sectionLimits.reduce<number>((s, m) => s + (m && m > 0 ? m : 0), 0);
  return sum > 0 ? sum : null;
}
