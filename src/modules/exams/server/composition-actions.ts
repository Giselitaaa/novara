"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireAdmin } from "@/modules/admin/server/guard";

function revalidate(examId: string) {
  revalidatePath(`/admin/examenes/${examId}/composicion`);
}

// ─── Config del examen ───────────────────────────────────────────────

export async function updateExamComposition(
  examId: string,
  patch: {
    title?: string;
    passingScore?: number;
    timeLimitMinutes?: number | null;
    randomizeSections?: boolean;
  }
) {
  await requireAdmin();
  await db.exam.update({
    where: { id: examId },
    data: {
      ...(patch.title !== undefined ? { title: patch.title } : {}),
      ...(patch.passingScore !== undefined ? { passingScore: patch.passingScore } : {}),
      ...(patch.timeLimitMinutes !== undefined
        ? { timeLimitMinutes: patch.timeLimitMinutes }
        : {}),
      ...(patch.randomizeSections !== undefined
        ? { randomizeSections: patch.randomizeSections }
        : {}),
    },
  });
  revalidate(examId);
  return { status: "success" as const };
}

// ─── Secciones ───────────────────────────────────────────────────────

export async function addExamSection(examId: string, exerciseId: string) {
  await requireAdmin();
  const count = await db.examSection.count({ where: { examId } });
  await db.examSection.create({
    data: { examId, exerciseId, order: count, weight: 1 },
  });
  revalidate(examId);
}

export async function updateExamSection(
  sectionId: string,
  patch: { weight?: number; timeLimitMinutes?: number | null }
) {
  await requireAdmin();
  const section = await db.examSection.update({
    where: { id: sectionId },
    data: {
      ...(patch.weight !== undefined ? { weight: patch.weight } : {}),
      ...(patch.timeLimitMinutes !== undefined
        ? { timeLimitMinutes: patch.timeLimitMinutes }
        : {}),
    },
  });
  revalidate(section.examId);
  return { status: "success" as const };
}

export async function removeExamSection(sectionId: string) {
  await requireAdmin();
  const section = await db.examSection.delete({ where: { id: sectionId } });
  revalidate(section.examId);
}

export async function moveExamSection(sectionId: string, direction: "up" | "down") {
  await requireAdmin();
  const section = await db.examSection.findUnique({ where: { id: sectionId } });
  if (!section) return;
  const siblings = await db.examSection.findMany({
    where: { examId: section.examId },
    orderBy: { order: "asc" },
  });
  const index = siblings.findIndex((s) => s.id === sectionId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= siblings.length) return;
  const a = siblings[index]!;
  const b = siblings[swapWith]!;
  await db.$transaction([
    db.examSection.update({ where: { id: a.id }, data: { order: b.order } }),
    db.examSection.update({ where: { id: b.id }, data: { order: a.order } }),
  ]);
  revalidate(section.examId);
}
