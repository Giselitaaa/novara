import "server-only";

import { db } from "@/lib/db";

export async function listAllCategoriesAdmin() {
  return db.category.findMany({
    orderBy: [{ parentId: "asc" }, { sortOrder: "asc" }],
    include: {
      status: true,
      parent: { select: { name: true } },
      _count: { select: { courses: true, children: true } },
    },
  });
}

export async function getCategoryForEdit(id: string) {
  return db.category.findUnique({ where: { id } });
}

export async function listParentCategoryOptions(excludeId?: string) {
  return db.category.findMany({
    where: { parentId: null, ...(excludeId ? { id: { not: excludeId } } : {}) },
    orderBy: { name: "asc" },
  });
}
