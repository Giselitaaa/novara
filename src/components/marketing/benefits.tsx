"use client";

import { motion } from "framer-motion";
import { Activity, BadgeCheck, HandCoins, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";

const BENEFIT_ICONS = {
  quality: ShieldCheck,
  progress: Activity,
  certificates: BadgeCheck,
  payment: HandCoins,
} as const;

const benefitKeys = Object.keys(BENEFIT_ICONS) as (keyof typeof BENEFIT_ICONS)[];

export function Benefits() {
  const t = useTranslations("home.benefits");

  return (
    <Section eyebrow={t("eyebrow")} title={t("title")} className="bg-muted/40">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
      >
        {benefitKeys.map((key) => {
          const Icon = BENEFIT_ICONS[key];
          return (
            <motion.div
              key={key}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col gap-4 bg-card p-7"
            >
              <div className="bg-gold/12 flex size-10 items-center justify-center rounded-md text-gold-foreground dark:text-gold">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="font-display text-lg tracking-tighter">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`items.${key}.body`)}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
