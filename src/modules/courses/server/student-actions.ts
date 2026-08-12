"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";

export async function toggleFavoriteCourse(courseId: string, courseSlug: string) {
  const session = await requireSession();
  if (!session?.user?.id) throw new Error("Inicia sesión para guardar favoritos.");

  const existing = await db.favorite.findUnique({
    where: { userId_courseId: { userId: session.user.id, courseId } },
  });

  if (existing) {
    await db.favorite.delete({
      where: { userId_courseId: { userId: session.user.id, courseId } },
    });
  } else {
    await db.favorite.create({ data: { userId: session.user.id, courseId } });
  }

  revalidatePath(`/cursos/${courseSlug}`);
  revalidatePath("/mi-aprendizaje");
  return { isFavorite: !existing };
}

export async function isCourseFavorited(userId: string | undefined, courseId: string) {
  if (!userId) return false;
  const favorite = await db.favorite.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  return !!favorite;
}

// ─── Proyecto final ──────────────────────────────────────────────────

export async function submitFinalProject(
  courseSlug: string,
  finalProjectId: string,
  content: string
) {
  const session = await requireSession();
  if (!session?.user?.id)
    throw new Error("Inicia sesión para entregar tu proyecto final.");
  if (!content.trim()) throw new Error("Escribe tu entrega antes de enviarla.");

  await db.courseFinalProjectSubmission.upsert({
    where: { finalProjectId_userId: { finalProjectId, userId: session.user.id } },
    create: { finalProjectId, userId: session.user.id, content },
    update: { content, status: "pendiente", submittedAt: new Date(), feedback: null },
  });

  revalidatePath(`/cursos/${courseSlug}/proyecto-final`);
  return {
    status: "success" as const,
    message: "Proyecto final entregado. Quedará pendiente de revisión.",
  };
}

export async function getFinalProjectSubmission(finalProjectId: string, userId: string) {
  return db.courseFinalProjectSubmission.findUnique({
    where: { finalProjectId_userId: { finalProjectId, userId } },
  });
}
