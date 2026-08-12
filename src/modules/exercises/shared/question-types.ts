/**
 * Motor de tipos de pregunta REUTILIZABLE, compartido por Reading, Listening
 * y (a futuro) exámenes. Modelo basado en JSON tipado (discriminated union)
 * en vez de tablas por tipo: permite mezclar en un mismo ejercicio preguntas
 * de opción múltiple, verdadero/falso, huecos, emparejar, ordenar y respuesta
 * abierta, y añadir un tipo nuevo sin migración de base de datos.
 *
 * La corrección (grade.ts) es una función PURA sobre estas estructuras, lo
 * que la hace fácil de probar y de ejecutar tanto en cliente como servidor.
 */

export const QUESTION_KINDS = [
  "multiple_choice",
  "true_false",
  "fill_blank",
  "matching",
  "ordering",
  "open",
] as const;

export type QuestionKind = (typeof QUESTION_KINDS)[number];

export const QUESTION_KIND_LABELS: Record<QuestionKind, string> = {
  multiple_choice: "Opción múltiple",
  true_false: "Verdadero / Falso",
  fill_blank: "Completar huecos",
  matching: "Relacionar / emparejar",
  ordering: "Ordenar elementos",
  open: "Respuesta abierta",
};

/** Opción múltiple: una o varias correctas. */
export type MultipleChoice = {
  kind: "multiple_choice";
  prompt: string;
  options: string[];
  /** Índices correctos. Si hay más de uno, se exige seleccionarlos todos. */
  correct: number[];
  explanation?: string;
};

export type TrueFalse = {
  kind: "true_false";
  prompt: string;
  correct: boolean;
  explanation?: string;
};

/** Completar huecos: cada hueco acepta una o varias respuestas válidas. */
export type FillBlank = {
  kind: "fill_blank";
  prompt: string;
  blanks: { accepted: string[] }[];
  /** ¿Distinguir mayúsculas/acentos? Por defecto no. */
  caseSensitive?: boolean;
  explanation?: string;
};

/** Emparejar: cada izquierda tiene su derecha correcta. */
export type Matching = {
  kind: "matching";
  prompt: string;
  pairs: { left: string; right: string }[];
  explanation?: string;
};

/** Ordenar: `items` en el orden CORRECTO. */
export type Ordering = {
  kind: "ordering";
  prompt: string;
  items: string[];
  explanation?: string;
};

/** Respuesta abierta: no se corrige automáticamente (profesor o IA). */
export type OpenQuestion = {
  kind: "open";
  prompt: string;
  guidance?: string;
  explanation?: string;
};

export type Question =
  | MultipleChoice
  | TrueFalse
  | FillBlank
  | Matching
  | Ordering
  | OpenQuestion;

/** Respuesta del alumno, según el tipo. */
export type Response =
  | { kind: "multiple_choice"; selected: number[] }
  | { kind: "true_false"; value: boolean }
  | { kind: "fill_blank"; answers: string[] }
  | { kind: "matching"; mapping: Record<number, number> } // índice izq → índice der elegido
  | { kind: "ordering"; order: number[] } // orden propuesto como índices de `items`
  | { kind: "open"; text: string };
