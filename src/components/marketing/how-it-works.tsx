"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";

const stepKeys = ["choose", "learn", "assess", "certify"] as const;

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  return (
    <Section id="como-funciona" eyebrow={t("eyebrow")} title={t("title")}>
      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stepKeys.map((key, index) => (
          <motion.li
            key={key}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
            className="relative flex flex-col gap-3 border-t border-border pt-5"
          >
            <span className="font-mono text-xs text-gold-foreground dark:text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl tracking-tighter">
              {t(`steps.${key}.title`)}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(`steps.${key}.body`)}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
