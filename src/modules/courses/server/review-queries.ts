import "server-only";

import { db } from "@/lib/db";

const PAGE_SIZE = 20;

/** Cola de moderación de reseñas para admin. */
export async function listReviewsForModeration({
  statusKey,
  page = 1,
}: {
  statusKey?: string;
  page?: number;
}) {
  const where = statusKey ? { status: { key: statusKey } } : {};
  const [reviews, total] = await Promise.all([
    db.review.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        status: true,
        user: { include: { profile: true } },
        course: { select: { title: true, slug: true } },
      },
    }),
    db.review.count({ where }),
  ]);

  return { reviews, total, totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

/** Reseñas publicadas de un curso, para la página pública. */
export async function getPublishedReviews(courseId: string) {
  const reviews = await db.review.findMany({
    where: { courseId, status: { key: "publicada" } },
    orderBy: { createdAt: "desc" },
    take: 30,
    include: { user: { include: { profile: true } } },
  });

  return reviews.map((r) => ({
    id: r.id,
    rating: r.rating,
    comment: r.comment,
    createdAt: r.createdAt,
    authorName: r.user.profile
      ? `${r.user.profile.firstName} ${r.user.profile.lastName[0]}.`
      : "Alumno de NOVARA",
  }));
}

/** La reseña del alumno actual para un curso (para prellenar su formulario). */
export async function getMyReview(userId: string, courseId: string) {
  const review = await db.review.findUnique({
    where: { userId_courseId: { userId, courseId } },
    include: { status: true },
  });
  if (!review) return null;
  return {
    rating: review.rating,
    comment: review.comment,
    statusKey: review.status.key,
    statusLabel: review.status.label,
  };
}

export async function countPendingReviews() {
  return db.review.count({ where: { status: { key: "pendiente_moderacion" } } });
}
