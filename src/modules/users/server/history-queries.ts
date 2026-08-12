import "server-only";

import { db } from "@/lib/db";

export type HistoryEntry = {
  id: string;
  kind: "lesson" | "exam" | "certificate";
  title: string;
  subtitle: string | null;
  date: Date;
  meta?: string;
};

const PAGE_SIZE = 20;

/**
 * Historial de aprendizaje del alumno: una línea de tiempo unificada de
 * hechos REALES con fecha —lecciones completadas, exámenes entregados y
 * certificados emitidos— ordenada de más reciente a más antigua y
 * paginada. No inventa eventos: si el alumno no ha hecho nada, está
 * vacío de verdad.
 */
export async function getLearningHistory(userId: string, page = 1) {
  const [completedLessons, attempts, certificates] = await Promise.all([
    db.lessonProgress.findMany({
      where: { userId, completedAt: { not: null } },
      select: {
        id: true,
        completedAt: true,
        lesson: {
          select: {
            title: true,
            module: { select: { course: { select: { title: true } } } },
          },
        },
      },
    }),
    db.examAttempt.findMany({
      where: { userId, submittedAt: { not: null } },
      select: {
        id: true,
        submittedAt: true,
        score: true,
        passed: true,
        exam: { select: { title: true } },
      },
    }),
    db.certificate.findMany({
      where: { userId },
      select: { id: true, issuedAt: true, course: { select: { title: true } } },
    }),
  ]);

  const entries: HistoryEntry[] = [
    ...completedLessons.map((l) => ({
      id: `lesson-${l.id}`,
      kind: "lesson" as const,
      title: l.lesson.title,
      subtitle: l.lesson.module?.course?.title ?? null,
      date: l.completedAt as Date,
      meta: "Lección completada",
    })),
    ...attempts.map((a) => ({
      id: `exam-${a.id}`,
      kind: "exam" as const,
      title: a.exam.title,
      subtitle: null,
      date: a.submittedAt as Date,
      meta:
        a.score != null
          ? `Examen · ${Number(a.score).toFixed(0)}%${a.passed ? " · aprobado" : ""}`
          : "Examen entregado",
    })),
    ...certificates.map((c) => ({
      id: `cert-${c.id}`,
      kind: "certificate" as const,
      title: c.course?.title ?? "Curso",
      subtitle: null,
      date: c.issuedAt,
      meta: "Certificado emitido",
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const total = entries.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;

  return {
    entries: entries.slice(start, start + PAGE_SIZE),
    total,
    totalPages,
  };
}
