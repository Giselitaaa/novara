"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";

/**
 * Marca o desmarca una lección como favorita del alumno. Se guarda en
 * `LessonProgress.isFavorite` (upsert: crea el registro de progreso si
 * aún no existe, para poder marcar favorita una lección no empezada).
 */
export async function toggleLessonFavorite(lessonId: string, courseSlug: string) {
  const session = await requireSession();
  if (!session?.user?.id) return { status: "error" as const, isFavorite: false };

  const existing = await db.lessonProgress.findUnique({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    select: { isFavorite: true },
  });

  const nextValue = !existing?.isFavorite;

  await db.lessonProgress.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    create: { userId: session.user.id, lessonId, isFavorite: nextValue },
    update: { isFavorite: nextValue },
  });

  revalidatePath(`/cursos/${courseSlug}/aprender/${lessonId}`);
  return { status: "success" as const, isFavorite: nextValue };
}
