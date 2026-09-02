/**
 * RITMO (drip) de la preparación — garantiza que un nivel NO se pueda
 * completar en unos días por rápido que estudie el alumno, como en una
 * academia presencial. El contenido se libera SEMANA a SEMANA a partir de la
 * fecha de matrícula: la guía y la Semana 1 están disponibles desde el primer
 * día; cada módulo posterior se abre una semana después del anterior.
 *
 * Función PURA (testeable, sin red). El enforcement real vive en la consulta
 * de aprendizaje (fusiona estos bloqueos con los bloqueos por test) y en el
 * guard de la página de lección. La administración queda EXENTA (previsualiza
 * todo).
 */
export const PACING_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Semanas mínimas que debe durar cualquier preparación (≈ 3 meses). */
export const MIN_PROGRAM_WEEKS = 12;

export type ModuleGate = {
  /** ¿Bloqueado por fecha todavía? */
  locked: boolean;
  /** Fecha en que se abre (null si está disponible desde el inicio). */
  availableAt: Date | null;
  /** Días que faltan para abrirse (0 si ya está disponible). */
  daysUntil: number;
};

const OPEN: ModuleGate = { locked: false, availableAt: null, daysUntil: 0 };

/**
 * Calcula el estado de un módulo según su posición (0 = guía, 1 = Semana 1…)
 * y la fecha de matrícula. `moduleIndex` 0 y 1 abren el día 0; a partir de ahí,
 * un módulo por semana.
 */
export function moduleGate(
  enrolledAt: Date,
  moduleIndex: number,
  now: Date = new Date()
): ModuleGate {
  const weeksOffset = Math.max(0, moduleIndex - 1); // guía (0) y Semana 1 (1) → día 0
  if (weeksOffset === 0) return OPEN;
  const availableAt = new Date(enrolledAt.getTime() + weeksOffset * PACING_WEEK_MS);
  const remaining = availableAt.getTime() - now.getTime();
  if (remaining <= 0) return { locked: false, availableAt, daysUntil: 0 };
  return { locked: true, availableAt, daysUntil: Math.ceil(remaining / DAY_MS) };
}

/** Texto corto para la UI del bloqueo por fecha. */
export function formatUnlockLabel(gate: ModuleGate): string | null {
  if (!gate.locked || !gate.availableAt) return null;
  const fecha = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long" }).format(
    gate.availableAt
  );
  if (gate.daysUntil <= 1) return "Se desbloquea mañana";
  return `Se desbloquea el ${fecha} (${gate.daysUntil} días)`;
}
