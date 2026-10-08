"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Niveles con acceso directo desde la portada: solo los 5 cursos
 * "grandes" de adultos (Cambridge Key/Preliminary/First/Advanced/
 * Proficiency) — Pre-A1/Movers/Flyers son para niños y no tienen
 * sitio natural en una selección rápida de nivel para adultos.
 */
const LEVELS = [
  { label: "A2", slug: "a2-key" },
  { label: "B1", slug: "b1-preliminary" },
  { label: "B2", slug: "b2-first" },
  { label: "C1", slug: "c1-advanced" },
  { label: "C2", slug: "c2-proficiency" },
] as const;

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-[#0d0a08] text-[#f3ece1]">
      {/* Fotografía única (encargada para la marca), no un montaje de
          recortes sueltos. Confinada a la mitad derecha para que nunca
          compita con el texto. Oculta en móvil: en una pantalla
          estrecha no cabe con legibilidad junto al texto. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/2 items-center lg:flex"
      >
        <div className="relative aspect-[1641/959] w-full">
          <Image
            src="/hero/scene-full.jpg"
            alt=""
            fill
            sizes="50vw"
            className="object-contain"
            priority
          />
        </div>
        {/* Fundido hacia el fondo de la sección en el borde izquierdo de
            la foto, para que la unión con el texto sea un degradado, no
            un corte duro. */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0d0a08] to-transparent" />
      </div>

      {/* Mismo fundido en la base, en toda la sección: mantiene el pie
          de la foto (y el texto/los botones) siempre legibles. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0a08] to-transparent"
      />

      <Container className="relative grid min-h-[85vh] items-center py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-xl flex-col"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-widest text-[#f3ece1]/60"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-balance font-display text-5xl leading-[1.05] tracking-tightest sm:text-6xl md:text-7xl"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-balance text-lg text-[#f3ece1]/70"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="rounded-full bg-[#c9a357] px-8 text-[#1a1410] shadow-[0_0_40px_-10px] shadow-[#c9a357]/60 hover:bg-[#d4b46a]"
            >
              <Link href="/cursos">{t("primaryCta")}</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-2.5"
          >
            {LEVELS.map(({ label, slug }) => (
              <Link
                key={slug}
                href={`/cursos/${slug}`}
                aria-label={t("levelsAria", { level: label })}
                className="rounded-full border border-[#f3ece1]/25 px-4 py-1.5 text-sm text-[#f3ece1]/85 transition-colors hover:border-[#c9a357] hover:text-[#c9a357]"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
