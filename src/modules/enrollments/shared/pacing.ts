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

/**
 * Cuenta los DÍAS LECTIVOS (lunes a viernes) transcurridos DESPUÉS de la fecha
 * de matrícula hasta `now`. El día de matrícula cuenta como día 0. Los fines de
 * semana no suman: son días de descanso, como en una academia presencial.
 */
export function weekdaysSince(enrolledAt: Date, now: Date): number {
  const start = new Date(enrolledAt);
  start.setHours(0, 0, 0, 0);
  const end = new Date(now);
  end.setHours(0, 0, 0, 0);
  if (end <= start) return 0;
  let count = 0;
  const d = new Date(start);
  while (d < end) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay(); // 0 = domingo, 6 = sábado
    if (day !== 0 && day !== 6) count++;
  }
  return count;
}

/** Fecha (a las 00:00) del n-ésimo día lectivo a partir de hoy (n≥1). */
function addWeekdays(from: Date, n: number): Date {
  const d = new Date(from);
  d.setHours(0, 0, 0, 0);
  let added = 0;
  while (added < n) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) added++;
  }
  return d;
}

/**
 * RITMO DIARIO (#4): cada lección se libera de UNA en UNA, un día lectivo
 * (Lun–Vie) tras otro desde la matrícula. La lección con índice secuencial
 * `lessonIndex` (0 = primera lección de contenido, tras la guía) se abre cuando
 * han pasado `lessonIndex` días lectivos. Así no se puede completar el nivel de
 * golpe: es una clase de academia al día. El descanso del fin de semana no
 * abre contenido nuevo, pero lo ya abierto sigue disponible.
 */
export function lessonScheduleGate(
  enrolledAt: Date,
  lessonIndex: number,
  now: Date = new Date()
): ModuleGate {
  if (lessonIndex <= 0) return OPEN;
  const elapsed = weekdaysSince(enrolledAt, now);
  if (lessonIndex <= elapsed) return { locked: false, availableAt: null, daysUntil: 0 };
  const remainingWeekdays = lessonIndex - elapsed;
  const availableAt = addWeekdays(now, remainingWeekdays);
  const daysUntil = Math.max(1, Math.ceil((availableAt.getTime() - now.getTime()) / DAY_MS));
  return { locked: true, availableAt, daysUntil };
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
