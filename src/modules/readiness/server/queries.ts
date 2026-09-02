import "server-only";

import { db } from "@/lib/db";

import {
  estimateReadiness,
  scaleForLevel,
  SKILLS,
  type ReadinessEstimate,
  type SkillId,
  type SkillPerformance,
} from "../shared/readiness";
import { recommendNextStep, type Recommendation } from "../shared/recommend";

export type CourseReadiness = {
  courseTitle: string;
  readiness: ReadinessEstimate;
  recommendation: Recommendation;
  /** Progreso de contenido 0..100 (lecciones completadas), DISTINTO de readiness. */
  contentProgress: number;
  /** Fallos acumulados por destreza (banco de errores a nivel de skill). */
  errorsBySkill: { skill: SkillId; errors: number }[];
};

const VALID = new Set<string>(SKILLS);

/**
 * Calcula la readiness REAL de un alumno en una preparación a partir de sus
 * intentos de ejercicio (rendimiento por destreza) y su progreso de lecciones.
 * Reutiliza las funciones puras probadas (`estimateReadiness`,
 * `recommendNextStep`). Devuelve null si el curso no existe.
 */
export async function getCourseReadinessBySlug(
  userId: string,
  slug: string
): Promise<CourseReadiness | null> {
  const course = await db.course.findUnique({ where: { slug }, select: { id: true, title: true } });
  if (!course) return null;
  const courseId = course.id;

  const [attempts, totalLessons, completedLessons] = await Promise.all([
    db.exerciseAttempt.findMany({
      where: { userId, exercise: { lesson: { module: { courseId } } } },
      select: { score: true, correctCount: true, total: true, exercise: { select: { category: true } } },
    }),
    db.lesson.count({ where: { module: { courseId } } }),
    db.lessonProgress.count({
      where: { userId, completedAt: { not: null }, lesson: { module: { courseId } } },
    }),
  ]);

  const bySkill = new Map<SkillId, { scores: number[]; errors: number }>();
  for (const a of attempts) {
    if (!VALID.has(a.exercise.category)) continue;
    const skill = a.exercise.category as SkillId;
    const entry = bySkill.get(skill) ?? { scores: [], errors: 0 };
    entry.scores.push(a.score);
    entry.errors += Math.max(0, a.total - a.correctCount);
    bySkill.set(skill, entry);
  }

  const performances: SkillPerformance[] = [...bySkill.entries()].map(([skill, v]) => ({
    skill,
    attempts: v.scores.length,
    avgScore: v.scores.reduce((s, x) => s + x, 0) / v.scores.length,
  }));

  const readiness = estimateReadiness(performances, scaleForLevel(slug));
  const contentProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const recommendation = recommendNextStep({ readiness, contentProgress });
  const errorsBySkill = [...bySkill.entries()]
    .map(([skill, v]) => ({ skill, errors: v.errors }))
    .filter((e) => e.errors > 0)
    .sort((a, b) => b.errors - a.errors);

  return { courseTitle: course.title, readiness, recommendation, contentProgress, errorsBySkill };
}
