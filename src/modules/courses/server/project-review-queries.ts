import "server-only";

import { db } from "@/lib/db";

const PAGE_SIZE = 20;

/**
 * Cola de revisión de proyectos finales para el panel de admin.
 * Por defecto muestra las entregas pendientes primero. Sin esta
 * pantalla, una entrega de proyecto se quedaba "pendiente" para
 * siempre porque nadie podía leerla.
 */
export async function listProjectSubmissions({
  statusKey,
  page = 1,
}: {
  statusKey?: string;
  page?: number;
}) {
  const where = statusKey ? { status: statusKey } : {};
  const [submissions, total] = await Promise.all([
    db.courseFinalProjectSubmission.findMany({
      where,
      orderBy: { submittedAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        user: { include: { profile: true } },
        finalProject: { include: { course: { select: { title: true, slug: true } } } },
      },
    }),
    db.courseFinalProjectSubmission.count({ where }),
  ]);

  return { submissions, total, totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

export async function getProjectSubmissionById(id: string) {
  return db.courseFinalProjectSubmission.findUnique({
    where: { id },
    include: {
      user: { include: { profile: true } },
      finalProject: { include: { course: { select: { title: true, slug: true } } } },
    },
  });
}

export async function countPendingProjectSubmissions() {
  return db.courseFinalProjectSubmission.count({ where: { status: "pendiente" } });
}
