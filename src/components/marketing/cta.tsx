"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
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
          className="relative overflow-hidden rounded-xl border border-border px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20"
        >
          {/* Fotografía de marca como fondo, confinada a este bloque
              (no a toda la sección) — con una capa oscura encima para
              que el texto siga siendo legible sobre cualquier parte
              de la imagen. */}
          <Image
            src="/hero/cta-scene.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div aria-hidden className="absolute inset-0 bg-[#0d0a08]/55" />
          <h2 className="relative z-10 mx-auto max-w-xl text-balance font-display text-3xl tracking-tighter text-[#f3ece1] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-md text-balance text-[#f3ece1]/75">
            {t("subtitle")}
          </p>
          <div className="relative z-10 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="rounded-full bg-[#c9a357] text-[#1a1410] hover:bg-[#d4b46a]"
            >
              <Link href="/auth/crear-cuenta">
                {t("primaryCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[#f3ece1]/25 text-[#f3ece1] hover:bg-[#f3ece1]/10"
            >
              <Link href="/cursos">{t("secondaryCta")}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
