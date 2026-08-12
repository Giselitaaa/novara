import type { Metadata } from "next";

import { Benefits } from "@/components/marketing/benefits";
import { BrandStatement } from "@/components/marketing/brand-statement";
import { CTA } from "@/components/marketing/cta";
import { FAQ } from "@/components/marketing/faq";
import { FeaturedCategories } from "@/components/marketing/featured-categories";
import { FeaturedCourses } from "@/components/marketing/featured-courses";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Testimonials } from "@/components/marketing/testimonials";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? siteConfig.tagline.es : siteConfig.tagline.en;
  const description = isEs ? siteConfig.description.es : siteConfig.description.en;

  return {
    title,
    description,
    openGraph: {
      title: `${siteConfig.name} — ${title}`,
      description,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${title}`,
      description,
    },
  };
}

/**
 * Landing page definitiva de NOVARA.
 *
 * Cada sección es su propio componente en `components/marketing/`,
 * reutilizable si el mismo bloque hace falta en otra página (p. ej.
 * `FeaturedCourses` en la home de una categoría). Las secciones
 * `FeaturedCategories` y `FeaturedCourses` consumen datos de muestra
 * con la forma exacta del DTO real — ver el aviso en
 * `components/marketing/sample-content.ts` — hasta que el módulo de
 * contenido exponga sus consultas reales.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedCategories />
      <FeaturedCourses />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
