"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { SealMark } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function CTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-xl border border-border bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          />
          <SealMark className="mx-auto mb-6 size-8 text-gold" />
          <h2 className="mx-auto max-w-xl text-balance font-display text-3xl tracking-tighter sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-primary-foreground/70">
            {t("subtitle")}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link href="/auth/crear-cuenta">
                {t("primaryCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/cursos">{t("secondaryCta")}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
