import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";

/**
 * Sitemap dinámico (convención de archivo de Next.js — se sirve en
 * `/sitemap.xml` automáticamente). Incluye páginas estáticas,
 * categorías activas, cursos publicados y artículos de blog
 * publicados. Vive fuera de `[locale]` a propósito: genera URLs
 * absolutas él mismo, no depende del enrutado de idioma.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, courses, posts] = await Promise.all([
    db.category.findMany({
      where: { status: { key: "activo" } },
      select: { slug: true, updatedAt: true },
    }),
    db.course.findMany({
      where: { status: { key: "publicado" } },
      select: { slug: true, updatedAt: true },
    }),
    db.blogPost.findMany({
      where: { publishedAt: { lte: new Date() } },
      select: { slug: true, publishedAt: true },
    }),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/cursos`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.url}/categorias`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "daily", priority: 0.6 },
  ];

  return [
    ...staticPages,
    ...categories.map((c) => ({
      url: `${siteConfig.url}/categorias/${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...courses.map((c) => ({
      url: `${siteConfig.url}/cursos/${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: p.publishedAt ?? undefined,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
