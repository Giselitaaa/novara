"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";


import { db } from "@/lib/db";
import { requireAdmin } from "@/modules/admin/server/guard";
import { isLessonBlockType } from "@/modules/lessons/types/blocks";

export type BlockPatch = {
  title?: string | null;
  content?: string | null;
  imageUrl?: string | null;
  videoUrl?: string | null;
  audioUrl?: string | null;
  data?: Prisma.InputJsonValue | null;
  deckId?: string | null;
};

async function revalidateLesson(lessonId: string) {
  revalidatePath(`/admin/lecciones/${lessonId}`);
}

export async function addBlock(lessonId: string, type: string) {
  await requireAdmin();
  if (!isLessonBlockType(type)) throw new Error("Tipo de bloque no válido.");
  const count = await db.lessonBlock.count({ where: { lessonId } });
  const block = await db.lessonBlock.create({
    data: { lessonId, type, order: count },
  });
  await revalidateLesson(lessonId);
  return block;
}

export async function updateBlock(blockId: string, patch: BlockPatch) {
  await requireAdmin();
  const data: Prisma.LessonBlockUpdateInput = {};
  if ("title" in patch) data.title = patch.title;
  if ("content" in patch) data.content = patch.content;
  if ("imageUrl" in patch) data.imageUrl = patch.imageUrl;
  if ("videoUrl" in patch) data.videoUrl = patch.videoUrl;
  if ("audioUrl" in patch) data.audioUrl = patch.audioUrl;
  if ("data" in patch) {
    data.data = patch.data === null ? Prisma.JsonNull : patch.data;
  }
  if ("deckId" in patch) {
    data.deck = patch.deckId
      ? { connect: { id: patch.deckId } }
      : { disconnect: true };
  }
  const block = await db.lessonBlock.update({ where: { id: blockId }, data });
  await revalidateLesson(block.lessonId);
  return { status: "success" as const };
}

export async function deleteBlock(blockId: string) {
  await requireAdmin();
  const block = await db.lessonBlock.delete({ where: { id: blockId } });
  await revalidateLesson(block.lessonId);
}

export async function moveBlock(blockId: string, direction: "up" | "down") {
  await requireAdmin();
  const block = await db.lessonBlock.findUnique({ where: { id: blockId } });
  if (!block) return;
  const siblings = await db.lessonBlock.findMany({
    where: { lessonId: block.lessonId },
    orderBy: { order: "asc" },
  });
  const index = siblings.findIndex((b) => b.id === blockId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= siblings.length) return;
  const a = siblings[index]!;
  const b = siblings[swapWith]!;
  await db.$transaction([
    db.lessonBlock.update({ where: { id: a.id }, data: { order: b.order } }),
    db.lessonBlock.update({ where: { id: b.id }, data: { order: a.order } }),
  ]);
  await revalidateLesson(block.lessonId);
}

export async function duplicateBlock(blockId: string) {
  await requireAdmin();
  const src = await db.lessonBlock.findUnique({ where: { id: blockId } });
  if (!src) throw new Error("Bloque no encontrado.");
  const count = await db.lessonBlock.count({ where: { lessonId: src.lessonId } });
  await db.lessonBlock.create({
    data: {
      lessonId: src.lessonId,
      type: src.type,
      order: count,
      title: src.title,
      content: src.content,
      imageUrl: src.imageUrl,
      videoUrl: src.videoUrl,
      audioUrl: src.audioUrl,
      data: src.data === null ? Prisma.JsonNull : (src.data as Prisma.InputJsonValue),
      deckId: src.deckId,
    },
  });
  await revalidateLesson(src.lessonId);
}

/**
 * Reordena TODOS los bloques según una lista de ids (para drag-and-drop):
 * asigna `order` = índice en la lista, en una sola transacción.
 */
export async function reorderBlocks(lessonId: string, orderedIds: string[]) {
  await requireAdmin();
  await db.$transaction(
    orderedIds.map((id, index) =>
      db.lessonBlock.update({ where: { id }, data: { order: index } })
    )
  );
  await revalidateLesson(lessonId);
}
