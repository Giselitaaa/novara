"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { generateUniqueSlug } from "@/lib/slug";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

export async function createCategory(formData: FormData) {
  const session = await requireAdmin();

  const name = String(formData.get("name") ?? "").trim();
  if (!name) throw new Error("El nombre es obligatorio.");

  const activeStatus = await db.status.findUnique({ where: { key: "activo" } });
  if (!activeStatus) throw new Error("Catálogos base sin sembrar.");

  const parentId = String(formData.get("parentId") ?? "") || null;
  const count = await db.category.count({ where: { parentId } });
  const slug = await generateUniqueSlug(
    name,
    async (candidate) => !!(await db.category.findUnique({ where: { slug: candidate } })),
    "categoria"
  );

  const category = await db.category.create({
    data: {
      name,
      slug,
      icon: String(formData.get("icon") ?? "") || "Sparkles",
      color: String(formData.get("color") ?? "") || "gold",
      imageUrl: String(formData.get("imageUrl") ?? "") || null,
      parentId,
      sortOrder: count,
      statusId: activeStatus.id,
    },
  });

  await logAdminAction(session.user.id, "categories.create", "Category", category.id, {
    name,
  });
  revalidatePath("/admin/categorias");
  return category;
}

export async function updateCategory(categoryId: string, formData: FormData) {
  await requireAdmin();

  await db.category.update({
    where: { id: categoryId },
    data: {
      name: String(formData.get("name") ?? ""),
      icon: String(formData.get("icon") ?? "") || "Sparkles",
      color: String(formData.get("color") ?? "") || "gold",
      imageUrl: String(formData.get("imageUrl") ?? "") || null,
      parentId: String(formData.get("parentId") ?? "") || null,
    },
  });

  revalidatePath("/admin/categorias");
  return { status: "success" as const, message: "Categoría actualizada." };
}

export async function toggleCategoryStatus(categoryId: string) {
  await requireAdmin();

  const category = await db.category.findUnique({
    where: { id: categoryId },
    include: { status: true },
  });
  if (!category) throw new Error("Categoría no encontrada.");

  const newStatus = await db.status.findUnique({
    where: { key: category.status.key === "activo" ? "inactivo" : "activo" },
  });
  if (!newStatus) throw new Error("Catálogos base sin sembrar.");

  await db.category.update({
    where: { id: categoryId },
    data: { statusId: newStatus.id },
  });
  revalidatePath("/admin/categorias");
}

export async function moveCategory(categoryId: string, direction: "up" | "down") {
  await requireAdmin();

  const category = await db.category.findUnique({ where: { id: categoryId } });
  if (!category) return;

  const siblings = await db.category.findMany({
    where: { parentId: category.parentId },
    orderBy: { sortOrder: "asc" },
  });
  const index = siblings.findIndex((c) => c.id === categoryId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= siblings.length) return;

  const a = siblings[index]!;
  const b = siblings[swapWith]!;
  await db.$transaction([
    db.category.update({ where: { id: a.id }, data: { sortOrder: b.sortOrder } }),
    db.category.update({ where: { id: b.id }, data: { sortOrder: a.sortOrder } }),
  ]);
  revalidatePath("/admin/categorias");
}

export async function deleteCategory(categoryId: string) {
  const session = await requireAdmin();

  try {
    await db.category.delete({ where: { id: categoryId } });
  } catch {
    throw new Error(
      "No se puede eliminar: tiene cursos o subcategorías asociadas. Desactívala en su lugar."
    );
  }

  await logAdminAction(session.user.id, "categories.delete", "Category", categoryId);
  revalidatePath("/admin/categorias");
}
