"use server";

import { db } from "@/lib/db";

export type SearchResult = {
  id: string;
  type: "curso" | "categoria" | "blog" | "recurso";
  title: string;
  subtitle?: string;
  href: string;
};

/**
 * Búsqueda global — cursos, categorías, blog y recursos en paralelo.
 * Preparada para ampliarse (más tipos de contenido) sin cambiar la
 * forma del resultado. Las preguntas frecuentes de la landing viven
 * en los mensajes de i18n, no en base de datos, así que se buscan en
 * el propio cliente (ver `command-palette.tsx`) en vez de aquí.
 */
/**
 * "Tendencias": cursos con más inscripciones en los últimos 30 días.
 * Sin tabla de tracking de búsquedas propia — una métrica de negocio
 * real (qué se está inscribiendo la gente) es más honesta que
 * inventar un contador de "búsquedas populares" sin datos de verdad
 * detrás.
 */
export async function getTrendingCourses(limit = 5) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const grouped = await db.enrollment.groupBy({
    by: ["courseId"],
    where: { enrolledAt: { gte: thirtyDaysAgo } },
    _count: { courseId: true },
    orderBy: { _count: { courseId: "desc" } },
    take: limit,
  });

  if (grouped.length === 0) return [];

  const courses = await db.course.findMany({
    where: { id: { in: grouped.map((g) => g.courseId) }, status: { key: "publicado" } },
    select: { id: true, title: true, slug: true },
  });
  const courseMap = new Map(courses.map((c) => [c.id, c]));

  return grouped
    .map((g) => courseMap.get(g.courseId))
    .filter((c): c is NonNullable<typeof c> => !!c);
}

export async function globalSearch(query: string): Promise<SearchResult[]> {
  const q = query.trim();
  if (q.length < 2) return [];

  const [courses, categories, posts, resources] = await Promise.all([
    db.course.findMany({
      where: {
        status: { key: "publicado" },
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { subtitle: { contains: q, mode: "insensitive" } },
        ],
      },
      select: { id: true, title: true, slug: true, subtitle: true },
      take: 5,
    }),
    db.category.findMany({
      where: { status: { key: "activo" }, name: { contains: q, mode: "insensitive" } },
      select: { id: true, name: true, slug: true },
      take: 5,
    }),
    db.blogPost.findMany({
      where: {
        title: { contains: q, mode: "insensitive" },
        publishedAt: { lte: new Date() },
      },
      select: { id: true, title: true, slug: true, excerpt: true },
      take: 5,
    }),
    db.resource.findMany({
      where: { title: { contains: q, mode: "insensitive" } },
      select: { id: true, title: true, fileUrl: true },
      take: 5,
    }),
  ]);

  return [
    ...courses.map((c) => ({
      id: c.id,
      type: "curso" as const,
      title: c.title,
      subtitle: c.subtitle ?? undefined,
      href: `/cursos/${c.slug}`,
    })),
    ...categories.map((c) => ({
      id: c.id,
      type: "categoria" as const,
      title: c.name,
      href: `/categorias/${c.slug}`,
    })),
    ...posts.map((p) => ({
      id: p.id,
      type: "blog" as const,
      title: p.title,
      subtitle: p.excerpt ?? undefined,
      href: `/blog/${p.slug}`,
    })),
    ...resources.map((r) => ({
      id: r.id,
      type: "recurso" as const,
      title: r.title,
      href: r.fileUrl,
    })),
  ];
}
