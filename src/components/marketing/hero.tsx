"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { SealMark } from "@/components/layout/logo";
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

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden">
      {/* Atmósfera de fondo: dos manchas de color suaves, índigo y oro,
          coherentes con la paleta — nunca un gradiente decorativo
          genérico desconectado de los tokens de marca. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-40"
      >
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center pb-24 pt-20 text-center sm:pb-32 sm:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="mb-8 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-soft"
          >
            <SealMark className="size-3.5 text-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-3xl text-balance font-display text-5xl leading-[1.05] tracking-tightest sm:text-6xl md:text-7xl"
          >
            {t("headlineLine1")}
            <br />
            <span className="italic text-gold-foreground dark:text-gold">
              {t("headlineEmphasis")}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-balance text-lg text-muted-foreground"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button asChild variant="gold" size="lg">
              <Link href="/cursos">
                {t("primaryCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/#como-funciona">{t("secondaryCta")}</Link>
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            {t("sealCaption")}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
