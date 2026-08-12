import "server-only";

import { db } from "@/lib/db";

const PAGE_SIZE = 20;

/**
 * Cola de corrección de ejercicios para admin. Por defecto muestra las
 * entregas que necesitan intervención humana: las "pendiente" (sin IA
 * configurada) y las "error_correccion" (la IA falló). Sin esta
 * pantalla, esas entregas se quedaban sin corregir para siempre.
 */
export async function listExerciseSubmissions({
  statusKey,
  page = 1,
}: {
  statusKey?: string;
  page?: number;
}) {
  const where =
    statusKey === "revision"
      ? { status: { in: ["pendiente", "error_correccion"] } }
      : statusKey
        ? { status: statusKey }
        : {};

  const [submissions, total] = await Promise.all([
    db.exerciseSubmission.findMany({
      where,
      orderBy: { submittedAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        user: { include: { profile: true } },
        lesson: {
          select: {
            title: true,
            module: { select: { course: { select: { title: true } } } },
          },
        },
      },
    }),
    db.exerciseSubmission.count({ where }),
  ]);

  return { submissions, total, totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

export async function getExerciseSubmissionById(id: string) {
  return db.exerciseSubmission.findUnique({
    where: { id },
    include: {
      user: { include: { profile: true } },
      lesson: {
        select: {
          title: true,
          exercise: { select: { instructions: true, maxScore: true } },
          module: { select: { course: { select: { title: true } } } },
        },
      },
    },
  });
}

export async function countExercisesNeedingReview() {
  return db.exerciseSubmission.count({
    where: { status: { in: ["pendiente", "error_correccion"] } },
  });
}
