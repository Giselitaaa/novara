"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { requireSession } from "@/lib/require-session";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

/**
 * Recalcula la valoración media y el número de reseñas de un curso a
 * partir de sus reseñas PUBLICADAS. Función única reutilizada por la
 * aprobación y por la eliminación/rechazo de una reseña — así el
 * `ratingAverage` cacheado en `Course` nunca se desincroniza de la
 * realidad.
 */
async function recalcCourseRating(courseId: string) {
  const publishedStatus = await db.status.findUnique({ where: { key: "publicada" } });
  if (!publishedStatus) return;

  const agg = await db.review.aggregate({
    where: { courseId, statusId: publishedStatus.id },
    _avg: { rating: true },
    _count: { _all: true },
  });

  await db.course.update({
    where: { id: courseId },
    data: {
      ratingAverage: agg._avg.rating ?? 0,
      ratingCount: agg._count._all,
    },
  });
}

const submitSchema = z.object({
  courseId: z.string().uuid(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().trim().max(2000).optional(),
});

/**
 * Un alumno inscrito publica (o actualiza) su reseña de un curso. Entra
 * SIEMPRE en moderación — nunca se publica directamente — para evitar
 * spam/abuso. La restricción `@@unique([userId, courseId])` garantiza
 * una reseña por alumno y curso; reenviar actualiza la existente.
 */
export async function submitReview(courseId: string, rating: number, comment?: string) {
  const session = await requireSession();
  if (!session?.user?.id) {
    return { status: "error" as const, message: "Inicia sesión para dejar una reseña." };
  }

  const rl = checkRateLimit(`review:${session.user.id}`, 10, 60 * 60);
  if (!rl.allowed) {
    return {
      status: "error" as const,
      message: "Demasiadas reseñas seguidas. Inténtalo más tarde.",
    };
  }

  const parsed = submitSchema.safeParse({ courseId, rating, comment });
  if (!parsed.success) {
    return { status: "error" as const, message: "Puntuación inválida." };
  }

  const enrollment = await db.enrollment.findUnique({
    where: {
      userId_courseId: { userId: session.user.id, courseId: parsed.data.courseId },
    },
  });
  if (!enrollment) {
    return {
      status: "error" as const,
      message: "Solo puedes reseñar cursos en los que estás inscrito.",
    };
  }

  const pending = await db.status.findUnique({ where: { key: "pendiente_moderacion" } });
  if (!pending)
    return { status: "error" as const, message: "No se pudo registrar la reseña." };

  // Una reseña por alumno y curso: se busca la suya y se actualiza; si no,
  // se crea. (Ya no dependemos del @@unique, relajado para permitir también
  // testimonios añadidos por la administración con nombre propio.)
  const existing = await db.review.findFirst({
    where: { userId: session.user.id, courseId: parsed.data.courseId, authorName: null },
    select: { id: true },
  });
  if (existing) {
    await db.review.update({
      where: { id: existing.id },
      data: { rating: parsed.data.rating, comment: parsed.data.comment || null, statusId: pending.id },
    });
  } else {
    await db.review.create({
      data: {
        userId: session.user.id,
        courseId: parsed.data.courseId,
        rating: parsed.data.rating,
        comment: parsed.data.comment || null,
        statusId: pending.id,
      },
    });
  }

  revalidatePath("/admin/resenas");
  return {
    status: "success" as const,
    message: "¡Gracias! Tu reseña se publicará tras revisión.",
  };
}

/**
 * La administración añade una reseña/testimonio manualmente (con nombre de
 * autor propio, sin requerir un alumno real). Se publica directamente y se
 * recalcula la valoración del curso. Queda ligada a la cuenta admin por el
 * userId obligatorio del modelo, pero se muestra con `authorName`.
 */
const adminReviewSchema = z.object({
  courseId: z.string().uuid(),
  rating: z.coerce.number().int().min(1).max(5),
  authorName: z.string().trim().min(2).max(80),
  comment: z.string().trim().max(2000).optional(),
});

export async function addReviewAsAdmin(input: {
  courseId: string;
  rating: number;
  authorName: string;
  comment?: string;
}) {
  const session = await requireAdmin();
  const parsed = adminReviewSchema.safeParse(input);
  if (!parsed.success) {
    return { status: "error" as const, message: parsed.error.issues[0]?.message ?? "Datos inválidos." };
  }

  const published = await db.status.findUnique({ where: { key: "publicada" } });
  if (!published) return { status: "error" as const, message: "Estado 'publicada' no disponible." };

  const course = await db.course.findUnique({ where: { id: parsed.data.courseId }, select: { id: true } });
  if (!course) return { status: "error" as const, message: "Curso no encontrado." };

  await db.review.create({
    data: {
      userId: session.user.id,
      courseId: parsed.data.courseId,
      rating: parsed.data.rating,
      comment: parsed.data.comment || null,
      authorName: parsed.data.authorName,
      statusId: published.id,
    },
  });

  await recalcCourseRating(parsed.data.courseId);
  await logAdminAction(session.user.id, "review.add_manual", "Course", parsed.data.courseId, {
    authorName: parsed.data.authorName,
    rating: parsed.data.rating,
  });
  revalidatePath("/admin/resenas");
  return { status: "success" as const };
}

/** Moderación de una reseña por un admin: publicar o rechazar. */
export async function moderateReview(
  reviewId: string,
  decision: "publicada" | "rechazada"
) {
  const session = await requireAdmin();

  const status = await db.status.findUnique({ where: { key: decision } });
  if (!status) return { status: "error" as const, message: "Estado no disponible." };

  const review = await db.review.update({
    where: { id: reviewId },
    data: { statusId: status.id },
    select: { courseId: true },
  });

  await recalcCourseRating(review.courseId);
  await logAdminAction(session.user.id, "reviews.moderate", "Review", reviewId, {
    decision,
  });
  revalidatePath("/admin/resenas");
  return { status: "success" as const };
}
