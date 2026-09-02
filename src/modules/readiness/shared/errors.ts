/**
 * Banco de errores personal: agrega los fallos del alumno por PATRÓN (destreza
 * y tipo de error), no como respuestas sueltas, para dirigir el refuerzo.
 *
 * Pura y sin dependencias: recibe una lista de resultados ya etiquetados (cada
 * pregunta corregida sabe su destreza y, opcionalmente, una etiqueta de patrón
 * como "prepositions", "verb_tense", "word_formation"...).
 */
import type { SkillId } from "./readiness";

export type GradedItem = {
  skill: SkillId;
  correct: boolean;
  /** Etiqueta de patrón del error (opcional). Ej: "prepositions", "verb_tense". */
  tag?: string;
};

export type ErrorPattern = {
  skill: SkillId;
  tag: string;
  errors: number;
  total: number;
  /** Ratio de fallo 0..1 sobre las preguntas de ese patrón. */
  errorRate: number;
};

/**
 * Devuelve los patrones de error ordenados por número de fallos (desc). Solo
 * incluye patrones con al menos un fallo. Los ítems sin `tag` se agrupan como
 * "(sin clasificar)".
 */
export function summarizeErrorPatterns(items: GradedItem[]): ErrorPattern[] {
  const map = new Map<string, ErrorPattern>();

  for (const item of items) {
    const tag = item.tag && item.tag.trim() ? item.tag.trim() : "(sin clasificar)";
    const key = `${item.skill}::${tag}`;
    const entry = map.get(key) ?? { skill: item.skill, tag, errors: 0, total: 0, errorRate: 0 };
    entry.total += 1;
    if (!item.correct) entry.errors += 1;
    map.set(key, entry);
  }

  return [...map.values()]
    .filter((p) => p.errors > 0)
    .map((p) => ({ ...p, errorRate: p.total > 0 ? p.errors / p.total : 0 }))
    .sort((a, b) => b.errors - a.errors || b.errorRate - a.errorRate);
}

/** Las N destrezas con más fallos (para el dashboard del alumno). */
export function topWeakSkills(items: GradedItem[], n = 3): { skill: SkillId; errors: number }[] {
  const bySkill = new Map<SkillId, number>();
  for (const item of items) {
    if (!item.correct) bySkill.set(item.skill, (bySkill.get(item.skill) ?? 0) + 1);
  }
  return [...bySkill.entries()]
    .map(([skill, errors]) => ({ skill, errors }))
    .sort((a, b) => b.errors - a.errors)
    .slice(0, n);
}
