import "server-only";

import { db } from "@/lib/db";

import { getFeaturedCourses } from "./queries";

/**
 * Recomendaciones basadas en reglas simples y datos reales — sin IA,
 * tal como pide esta fase: categorías donde el alumno ya está
 * inscrito (o completó cursos), excluyendo lo que ya cursa, ordenado
 * por frecuencia de categoría y novedad. Si el alumno no tiene
 * historial todavía, cae a los cursos destacados generales.
 */
export async function getRecommendedCourses(userId: string, limit = 4) {
  const enrollments = await db.enrollment.findMany({
    where: { userId },
    include: { course: { select: { categoryId: true } } },
  });

  if (enrollments.length === 0) {
    return getFeaturedCourses(limit);
  }

  const enrolledCourseIds = enrollments.map((e) => e.courseId);
  const categoryFrequency = new Map<string, number>();
  for (const e of enrollments) {
    categoryFrequency.set(
      e.course.categoryId,
      (categoryFrequency.get(e.course.categoryId) ?? 0) + 1
    );
  }
  const favoriteCategoryIds = [...categoryFrequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([categoryId]) => categoryId);

  const candidates = await db.course.findMany({
    where: {
      status: { key: "publicado" },
      categoryId: { in: favoriteCategoryIds },
      id: { notIn: enrolledCourseIds },
    },
    include: {
      category: { select: { name: true, slug: true } },
      level: { select: { label: true } },
      accessType: { select: { key: true } },
    },
    orderBy: { publishedAt: "desc" },
    take: limit * 2,
  });

  // Prioriza la categoría más frecuente del alumno, manteniendo el
  // orden de publicación dentro de cada categoría.
  const sorted = candidates.sort(
    (a, b) =>
      favoriteCategoryIds.indexOf(a.categoryId) -
      favoriteCategoryIds.indexOf(b.categoryId)
  );

  const result = sorted.slice(0, limit).map((course) => ({
    id: course.id,
    slug: course.slug,
    title: course.title,
    subtitle: course.subtitle ?? "",
    categoryName: course.category.name,
    categorySlug: course.category.slug,
    levelLabel: course.level.label,
    durationMinutes: course.durationMinutes,
    accessType: (course.accessType.key === "premium" ? "premium" : "gratis") as
      | "premium"
      | "gratis",
    price: course.price ? Number(course.price) : null,
  }));

  return result.length > 0 ? result : getFeaturedCourses(limit);
}
