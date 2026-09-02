import "server-only";

import { db } from "@/lib/db";

import { buildFinalOutcome, type FinalOutcome } from "../shared/final-outcome";
import { scaleForLevel } from "../shared/readiness";

import { getCourseReadinessBySlug } from "./queries";

/**
 * Resultado adaptativo del SIMULACRO FINAL de un nivel (punto 12 del máster
 * prompt). Solo actúa si el examen es el simulacro final del curso (detectado
 * por su título "Simulacro FINAL"); para cualquier otro examen devuelve null y
 * la página muestra el resultado normal.
 *
 * Reutiliza `getCourseReadinessBySlug` (rendimiento por destreza, banco de
 * errores, progreso) y la escala real del nivel, y delega en la función pura
 * `buildFinalOutcome` la decisión: directrices de inscripción (si aprueba) o
 * plan intensivo de refuerzo (si no).
 */
export async function getFinalExamOutcome(
  userId: string,
  examId: string,
  scorePercent: number
): Promise<(FinalOutcome & { courseSlug: string }) | null> {
  const exam = await db.exam.findUnique({
    where: { id: examId },
    select: { title: true, passingScore: true, courseId: true },
  });
  if (!exam || !exam.courseId) return null;
  if (!/simulacro final/i.test(exam.title)) return null;

  const course = await db.course.findUnique({
    where: { id: exam.courseId },
    select: { slug: true, title: true },
  });
  if (!course) return null;

  const readiness = await getCourseReadinessBySlug(userId, course.slug);
  const scale = scaleForLevel(course.slug);

  const outcome = buildFinalOutcome({
    levelName: course.title,
    scorePercent,
    passMarkPercent: Number(exam.passingScore),
    weakestSkill: readiness?.readiness.weakestSkill ?? null,
    errorsBySkill: readiness?.errorsBySkill ?? [],
    contentProgress: readiness?.contentProgress ?? 0,
    cambridgeScaleEstimate: readiness?.readiness.cambridgeScaleEstimate ?? null,
    scalePass: scale?.pass ?? null,
  });

  return { ...outcome, courseSlug: course.slug };
}
