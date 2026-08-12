"use server";

import type { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";


import { db } from "@/lib/db";
import { requireAdmin } from "@/modules/admin/server/guard";
import { isLessonBlockType } from "@/modules/lessons/types/blocks";

type Skeleton = { type: string; title?: string | null };

/** Guarda el esqueleto de bloques (tipo + título, sin contenido) como plantilla. */
export async function saveLessonAsTemplate(lessonId: string, name: string) {
  await requireAdmin();
  const trimmed = name.trim();
  if (!trimmed) throw new Error("Ponle un nombre a la plantilla.");

  const blocks = await db.lessonBlock.findMany({
    where: { lessonId },
    orderBy: { order: "asc" },
    select: { type: true, title: true },
  });
  if (blocks.length === 0) throw new Error("La lección no tiene bloques que guardar.");

  await db.lessonTemplate.create({
    data: {
      name: trimmed,
      blocks: blocks.map((b) => ({ type: b.type, title: b.title })) as unknown as Prisma.InputJsonValue,
    },
  });
  revalidatePath(`/admin/lecciones/${lessonId}`);
  return { status: "success" as const };
}

/** Añade a la lección los bloques (vacíos) del esqueleto de la plantilla. */
export async function applyTemplate(lessonId: string, templateId: string) {
  await requireAdmin();
  const tpl = await db.lessonTemplate.findUnique({ where: { id: templateId } });
  if (!tpl) throw new Error("Plantilla no encontrada.");

  const skeleton = (tpl.blocks as unknown as Skeleton[]).filter((b) =>
    isLessonBlockType(b.type)
  );
  const count = await db.lessonBlock.count({ where: { lessonId } });
  await db.$transaction(
    skeleton.map((b, i) =>
      db.lessonBlock.create({
        data: { lessonId, type: b.type, title: b.title ?? null, order: count + i },
      })
    )
  );
  revalidatePath(`/admin/lecciones/${lessonId}`);
  return { status: "success" as const, added: skeleton.length };
}

export async function deleteTemplate(templateId: string) {
  await requireAdmin();
  await db.lessonTemplate.delete({ where: { id: templateId } });
}
