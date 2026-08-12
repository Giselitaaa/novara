import { siteConfig } from "@/config/site";

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

export function buildCourseSchema(course: {
  title: string;
  description: string;
  slug: string;
  authorName: string;
  ratingAverage: number;
  ratingCount: number;
  accessType: "gratis" | "premium";
  price: number | null;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${siteConfig.url}/cursos/${course.slug}`,
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

export function buildArticleSchema(post: {
  title: string;
  excerpt: string | null;
  slug: string;
  authorName: string;
  publishedAt: Date | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? undefined,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedAt?.toISOString(),
    author: { "@type": "Person", name: post.authorName },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}
