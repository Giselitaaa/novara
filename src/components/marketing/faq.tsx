"use client";

import { useTranslations } from "next-intl";

import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/lib/json-ld";
import { buildFaqSchema } from "@/lib/seo";

const faqKeys = ["free", "payment", "certificate", "quality", "mobile"] as const;

export function FAQ() {
  const t = useTranslations("home.faq");

  const schema = buildFaqSchema(
    faqKeys.map((key) => ({
      question: t(`items.${key}.question`),
      answer: t(`items.${key}.answer`),
    }))
  );

  return (
    <Section
      id="faq"
      eyebrow={t("eyebrow")}
      title={t("title")}
      containerClassName="max-w-3xl"
    >
      <JsonLd data={schema} />
      <Accordion type="single" collapsible className="w-full">
        {faqKeys.map((key) => (
          <AccordionItem key={key} value={key}>
            <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
            <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
