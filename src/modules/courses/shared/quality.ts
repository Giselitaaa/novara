/**
 * Control de calidad de contenido antes de publicar (mejora 9.7). Función
 * PURA sobre una vista normalizada del curso: no bloquea, solo LISTA avisos
 * para que el profesor decida publicar igualmente o completar antes. Al ser
 * pura, se testea sin base de datos.
 */

export type QualitySeverity = "warning" | "info";

export type QualityIssue = {
  severity: QualitySeverity;
  message: string;
  /** Dónde está el problema, para orientar al profesor. */
  location: string;
};

export type QCBlock = {
  type: string;
  content: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  audioUrl: string | null;
  deckId: string | null;
  data: Record<string, unknown> | null;
};

export type QCQuestion = { kind: string; data: Record<string, unknown> };

export type QCExercise = {
  category: string;
  title: string;
  config: Record<string, unknown> | null;
  questions: QCQuestion[];
};

export type QCLesson = {
  title: string;
  blocks: QCBlock[];
  exercises: QCExercise[];
  hasLegacyContent: boolean;
};

export type QCModule = { title: string; lessons: QCLesson[] };

export type QCCourse = {
  title: string;
  description: string;
  isPremium: boolean;
  price: number | null;
  modules: QCModule[];
};

function arr(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function checkBlock(block: QCBlock, where: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const empty = (msg: string) => issues.push({ severity: "warning", message: msg, location: where });
  switch (block.type) {
    case "TEXT":
    case "GRAMMAR":
    case "TIP":
    case "NOTES":
      if (!block.content?.trim()) empty("Bloque de texto vacío.");
      break;
    case "IMAGE":
      if (!block.imageUrl) empty("Bloque de imagen sin URL.");
      break;
    case "GALLERY":
      if (arr(block.data?.images).length === 0) empty("Galería sin imágenes.");
      break;
    case "VIDEO":
      if (!block.videoUrl) empty("Bloque de vídeo sin URL.");
      break;
    case "AUDIO":
    case "PRONUNCIATION":
      if (!block.audioUrl) empty("Bloque de audio sin pista.");
      break;
    case "PDF":
    case "RESOURCE":
      if (!block.content) empty("Bloque de documento/recurso sin URL.");
      break;
    case "SUMMARY":
      if (arr(block.data?.items).length === 0) empty("Resumen sin puntos.");
      break;
    case "FLASHCARDS":
      if (!block.deckId) empty("Bloque de flashcards sin mazo asignado.");
      break;
  }
  return issues;
}

function checkQuestion(q: QCQuestion, where: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const prompt = typeof q.data.prompt === "string" ? q.data.prompt.trim() : "";
  if (!prompt) {
    issues.push({ severity: "warning", message: "Pregunta sin enunciado.", location: where });
  }
  if (q.kind === "multiple_choice") {
    const correct = arr(q.data.correct);
    const options = arr(q.data.options).filter((o) => typeof o === "string" && o.trim());
    if (options.length < 2)
      issues.push({ severity: "warning", message: "Opción múltiple con menos de 2 opciones.", location: where });
    if (correct.length === 0)
      issues.push({ severity: "warning", message: "Opción múltiple sin respuesta correcta marcada.", location: where });
  }
  return issues;
}

function checkExercise(ex: QCExercise, where: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const cfg = ex.config ?? {};
  if (ex.category === "reading" && !String(cfg.text ?? "").trim())
    issues.push({ severity: "warning", message: "Reading sin texto base.", location: where });
  if (ex.category === "listening" && !String(cfg.audioUrl ?? "").trim())
    issues.push({ severity: "warning", message: "Listening sin audio.", location: where });
  if (ex.category === "writing" && arr(cfg.rubric).length === 0)
    issues.push({ severity: "warning", message: "Writing sin criterios de evaluación (rúbrica).", location: where });
  if (ex.category === "speaking" && !String(cfg.scenario ?? "").trim())
    issues.push({ severity: "warning", message: "Speaking sin escenario definido.", location: where });
  if ((ex.category === "reading" || ex.category === "listening") && ex.questions.length === 0)
    issues.push({ severity: "warning", message: `${ex.title}: sin preguntas.`, location: where });
  ex.questions.forEach((q, i) => {
    issues.push(...checkQuestion(q, `${where} · pregunta ${i + 1}`));
  });
  return issues;
}

/** Ejecuta todas las comprobaciones y devuelve la lista de avisos. */
export function runQualityChecks(course: QCCourse): QualityIssue[] {
  const issues: QualityIssue[] = [];

  if (!course.description?.trim())
    issues.push({ severity: "warning", message: "El curso no tiene descripción.", location: "Curso" });
  if (course.isPremium && (!course.price || course.price <= 0))
    issues.push({ severity: "warning", message: "Curso premium sin precio válido.", location: "Curso" });
  if (course.modules.length === 0)
    issues.push({ severity: "warning", message: "El curso no tiene módulos.", location: "Curso" });

  course.modules.forEach((mod, mi) => {
    const modWhere = `Módulo ${mi + 1}: ${mod.title}`;
    if (mod.lessons.length === 0)
      issues.push({ severity: "warning", message: "Módulo sin lecciones.", location: modWhere });

    mod.lessons.forEach((lesson, li) => {
      const where = `${modWhere} · Lección ${li + 1}: ${lesson.title}`;
      if (lesson.blocks.length === 0 && lesson.exercises.length === 0 && !lesson.hasLegacyContent) {
        issues.push({ severity: "warning", message: "Lección sin contenido (ni bloques ni ejercicios).", location: where });
      }
      lesson.blocks.forEach((b, bi) => {
        issues.push(...checkBlock(b, `${where} · bloque ${bi + 1} (${b.type})`));
      });
      lesson.exercises.forEach((ex) => {
        issues.push(...checkExercise(ex, `${where} · ejercicio ${ex.title}`));
      });
    });
  });

  return issues;
}
