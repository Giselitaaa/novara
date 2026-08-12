import type { Question, Response } from "./question-types";

export type GradeResult = {
  /** ¿Se puede corregir automáticamente? (las abiertas, no). */
  autoGradable: boolean;
  /** Puntuación 0..1 (permite crédito parcial donde tiene sentido). */
  score: number;
  /** Correcta al 100%. */
  correct: boolean;
};

function normalize(s: string, caseSensitive?: boolean): string {
  const t = s.trim();
  return caseSensitive ? t : t.toLowerCase();
}

function sameSet(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  const sa = new Set(a);
  return b.every((x) => sa.has(x));
}

/**
 * Corrige UNA pregunta contra la respuesta del alumno. Función pura: mismos
 * argumentos ⇒ mismo resultado, sin efectos. Si el `kind` de la respuesta no
 * corresponde al de la pregunta, se considera no contestada (score 0).
 */
export function gradeQuestion(question: Question, response: Response | null): GradeResult {
  if (question.kind === "open") {
    return { autoGradable: false, score: 0, correct: false };
  }
  if (!response || response.kind !== question.kind) {
    return { autoGradable: true, score: 0, correct: false };
  }

  switch (question.kind) {
    case "multiple_choice": {
      const r = response as Extract<Response, { kind: "multiple_choice" }>;
      const ok = sameSet(question.correct, r.selected);
      return { autoGradable: true, score: ok ? 1 : 0, correct: ok };
    }
    case "true_false": {
      const r = response as Extract<Response, { kind: "true_false" }>;
      const ok = r.value === question.correct;
      return { autoGradable: true, score: ok ? 1 : 0, correct: ok };
    }
    case "fill_blank": {
      const r = response as Extract<Response, { kind: "fill_blank" }>;
      const n = question.blanks.length;
      if (n === 0) return { autoGradable: true, score: 1, correct: true };
      let hits = 0;
      question.blanks.forEach((blank, i) => {
        const given = normalize(r.answers[i] ?? "", question.caseSensitive);
        if (blank.accepted.some((a) => normalize(a, question.caseSensitive) === given && given !== "")) {
          hits += 1;
        }
      });
      const score = hits / n;
      return { autoGradable: true, score, correct: score === 1 };
    }
    case "matching": {
      const r = response as Extract<Response, { kind: "matching" }>;
      const n = question.pairs.length;
      if (n === 0) return { autoGradable: true, score: 1, correct: true };
      let hits = 0;
      for (let i = 0; i < n; i++) {
        // El emparejamiento correcto es identidad (izq i ↔ der i); la UI
        // traduce la elección barajada al índice original de la derecha.
        if (r.mapping[i] === i) hits += 1;
      }
      const score = hits / n;
      return { autoGradable: true, score, correct: score === 1 };
    }
    case "ordering": {
      const r = response as Extract<Response, { kind: "ordering" }>;
      const n = question.items.length;
      if (n === 0) return { autoGradable: true, score: 1, correct: true };
      let hits = 0;
      for (let i = 0; i < n; i++) {
        // `items` está en el orden correcto ⇒ posición i debe contener el índice i.
        if (r.order[i] === i) hits += 1;
      }
      const score = hits / n;
      return { autoGradable: true, score, correct: score === 1 };
    }
    default:
      return { autoGradable: true, score: 0, correct: false };
  }
}

export type ExerciseGrade = {
  /** Puntuación 0..100 sobre las preguntas auto-corregibles. */
  score: number;
  autoGradableCount: number;
  correctCount: number;
  /** ¿Hay preguntas abiertas que requieren corrección manual/IA? */
  needsManualReview: boolean;
  perQuestion: GradeResult[];
};

/**
 * Corrige un ejercicio completo. La puntuación (0..100) se calcula solo
 * sobre las preguntas auto-corregibles; si hay preguntas abiertas, marca
 * `needsManualReview` para que el profesor (o la IA) las evalúe aparte.
 */
export function gradeExercise(
  questions: Question[],
  responses: (Response | null)[]
): ExerciseGrade {
  const perQuestion = questions.map((q, i) => gradeQuestion(q, responses[i] ?? null));
  const auto = perQuestion.filter((g) => g.autoGradable);
  const autoScore = auto.reduce((sum, g) => sum + g.score, 0);
  const score = auto.length > 0 ? Math.round((autoScore / auto.length) * 100) : 0;
  return {
    score,
    autoGradableCount: auto.length,
    correctCount: perQuestion.filter((g) => g.correct).length,
    needsManualReview: perQuestion.some((g) => !g.autoGradable),
    perQuestion,
  };
}
