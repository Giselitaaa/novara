import "server-only";

import { db } from "@/lib/db";

const PAGE_SIZE = 20;

/** Cola de preguntas para admin (por defecto, sin responder primero). */
export async function listQuestionsForAdmin({
  statusKey,
  page = 1,
}: {
  statusKey?: string;
  page?: number;
}) {
  const where = statusKey ? { status: { key: statusKey } } : {};
  const [questions, total] = await Promise.all([
    db.courseQuestion.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        status: true,
        user: { include: { profile: true } },
        course: { select: { title: true, slug: true } },
        answers: {
          orderBy: { createdAt: "asc" },
          include: { user: { include: { profile: true } } },
        },
      },
    }),
    db.courseQuestion.count({ where }),
  ]);

  return { questions, total, totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

export async function countOpenQuestions() {
  return db.courseQuestion.count({ where: { status: { key: "abierta" } } });
}
