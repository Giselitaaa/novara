"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";

export function BrandStatement() {
  const t = useTranslations("home.brandStatement");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ledger-rule mx-auto max-w-3xl text-center"
        >
          <p className="ledger-label mb-4">{t("eyebrow")}</p>
          <h2 className="text-balance font-display text-3xl leading-tight tracking-tighter sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            {t("body")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
