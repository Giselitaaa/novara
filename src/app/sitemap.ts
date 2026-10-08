import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { db } from "@/lib/db";
import { absoluteUrl } from "@/lib/seo";

/**
 * Sitemap dinámico (convención de archivo de Next.js — se sirve en
 * `/sitemap.xml` automáticamente). Incluye páginas estáticas,
 * categorías activas, cursos publicados y artículos de blog
 * publicados. Vive fuera de `[locale]` a propósito: genera URLs
 * absolutas él mismo, no depende del enrutado de idioma.
 *
 * `localePrefix: "always"` obliga a que cada URL real lleve `/es/…` o
 * `/en/…` — una entrada sin prefijo (como antes) apunta a una URL que
 * en realidad redirige (307) a la real. Una entrada por recurso, con
 * `alternates.languages` para las dos versiones, es la forma correcta
 * de representar un sitio multi-idioma en el sitemap (no dos entradas
 * sueltas sin relación entre sí).
 */
function entry(
  path: string,
  options: {
    lastModified?: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(routing.defaultLocale, path),
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, absoluteUrl(locale, path)])
      ),
    },
  };
}

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

  return [
    entry("/", { changeFrequency: "weekly", priority: 1 }),
    entry("/cursos", { changeFrequency: "daily", priority: 0.9 }),
    entry("/categorias", { changeFrequency: "weekly", priority: 0.7 }),
    entry("/blog", { changeFrequency: "daily", priority: 0.6 }),
    ...categories.map((c) =>
      entry(`/categorias/${c.slug}`, {
        lastModified: c.updatedAt,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    ),
    ...courses.map((c) =>
      entry(`/cursos/${c.slug}`, {
        lastModified: c.updatedAt,
        changeFrequency: "weekly",
        priority: 0.8,
      })
    ),
    ...posts.map((p) =>
      entry(`/blog/${p.slug}`, {
        lastModified: p.publishedAt ?? undefined,
        changeFrequency: "monthly",
        priority: 0.5,
      })
    ),
  ];
}
