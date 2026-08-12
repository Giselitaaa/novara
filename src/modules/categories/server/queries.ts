import "server-only";

import { db } from "@/lib/db";
import type { CategoryDTO } from "@/modules/categories/types/category-dto";

/**
 * Capa de consultas del catálogo de categorías. Es la ÚNICA vía por la
 * que cualquier página o componente de servidor accede a categorías —
 * nadie llama a `db.category.*` directamente fuera de este archivo.
 * Todas las consultas filtran por `status.key = "activo"`: una
 * categoría archivada o inactiva no debe poder llegar al catálogo
 * público solo porque alguien olvidó filtrarla en un componente.
 */

function toCategoryDTO(category: {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  color: string | null;
}): CategoryDTO {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    icon: category.icon ?? "Sparkles",
    color: category.color ?? "gold",
  };
}

/** Categorías raíz (sin padre), ordenadas por `sortOrder`. */
export async function listRootCategories(): Promise<CategoryDTO[]> {
  const categories = await db.category.findMany({
    where: { parentId: null, status: { key: "activo" } },
    orderBy: { sortOrder: "asc" },
  });
  return categories.map(toCategoryDTO);
}

/** Igual que `listRootCategories`, con el nº real de cursos publicados. */
export async function listRootCategoriesWithCounts() {
  const categories = await db.category.findMany({
    where: { parentId: null, status: { key: "activo" } },
    orderBy: { sortOrder: "asc" },
    include: {
      _count: {
        select: {
          courses: { where: { status: { key: "publicado" } } },
        },
      },
    },
  });

  return categories.map((category) => ({
    ...toCategoryDTO(category),
    courseCount: category._count.courses,
  }));
}

export async function getCategoryBySlug(slug: string) {
  const category = await db.category.findFirst({
    where: { slug, status: { key: "activo" } },
    include: {
      children: {
        where: { status: { key: "activo" } },
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!category) return null;

  return {
    ...toCategoryDTO(category),
    description: null as string | null, // sin campo de descripción larga en el modelo aprobado; se añadirá si hace falta contenido editorial por categoría.
    children: category.children.map(toCategoryDTO),
  };
}
