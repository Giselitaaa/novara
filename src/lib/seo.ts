import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/**
 * Imagen por defecto para Open Graph/Twitter cuando una página no tiene
 * una propia (ningún curso real tiene `bannerImageUrl` todavía). Asset
 * ya existente en `public/hero/`, no se genera ninguna imagen nueva.
 */
export const DEFAULT_OG_IMAGE = "/hero/scene-full.jpg";

/**
 * URL absoluta CON el prefijo de idioma real (`localePrefix: "always"`
 * en `routing.ts` — toda URL pública vive bajo `/es/…` o `/en/…`, nunca
 * sin prefijo). Toda construcción de canonical/og:url/JSON-LD debe
 * pasar por aquí: generarlas a mano sin el locale es precisamente el
 * bug que dejaba el sitemap y el canonical apuntando a una URL que en
 * realidad redirige (307) a la real.
 */
export function absoluteUrl(locale: string, path = "/"): string {
  const clean =
    path === "/" || path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}/${locale}${clean}`;
}

/**
 * Metadata base coherente (title, description, canonical, OpenGraph y
 * Twitter) para una página pública. Centraliza el patrón que se repetía
 * de forma incompleta en cada página — así ninguna se queda sin
 * canonical o sin imagen por un simple olvido.
 */
export function buildPageMetadata(params: {
  locale: string;
  path: string;
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const { locale, path, title, description, image, noIndex } = params;
  const url = absoluteUrl(locale, path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Constructores de JSON-LD reutilizados en toda la plataforma. Cada
 * función construye únicamente el objeto de datos — el componente
 * `<JsonLd>` se encarga de serializarlo e insertarlo. Mantenerlos
 * separados evita repetir la forma de cada esquema en cada página.
 */

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: Object.values(siteConfig.links).filter(Boolean),
  };
}

export function buildCourseSchema(
  locale: string,
  course: {
    title: string;
    description: string;
    slug: string;
    authorName: string;
    ratingAverage: number;
    ratingCount: number;
    accessType: "gratis" | "premium";
    price: number | null;
  }
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: absoluteUrl(locale, `/cursos/${course.slug}`),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    author: { "@type": "Organization", name: course.authorName },
  };

  if (course.ratingCount > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: course.ratingAverage,
      ratingCount: course.ratingCount,
    };
  }

  schema.offers = {
    "@type": "Offer",
    price: course.accessType === "gratis" ? "0" : String(course.price ?? 0),
    priceCurrency: "EUR",
    category: course.accessType === "gratis" ? "Free" : "Paid",
  };

  return schema;
}

export function buildFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildArticleSchema(
  locale: string,
  post: {
    title: string;
    excerpt: string | null;
    slug: string;
    authorName: string;
    publishedAt: Date | null;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? undefined,
    url: absoluteUrl(locale, `/blog/${post.slug}`),
    datePublished: post.publishedAt?.toISOString(),
    author: { "@type": "Person", name: post.authorName },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}
