"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { SealMark } from "@/components/layout/logo";
import { Section } from "@/components/layout/section";

/**
 * Forma que tendrá cada testimonio real (`Review` con comentario
 * destacado, o una entrada editorial curada a mano). El componente ya
 * sabe renderizar esta forma en cuanto exista contenido — hoy no
 * inventamos citas de alumnos que no existen todavía.
 */
export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  courseTitle: string;
};

export function Testimonials({ testimonials = [] }: { testimonials?: Testimonial[] }) {
  const t = useTranslations("home.testimonials");

  return (
    <Section eyebrow={t("eyebrow")} title={t("title")} align="center">
      {testimonials.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-lg border border-dashed border-border py-14 text-center"
        >
          <SealMark className="size-6 text-muted-foreground" />
          <p className="text-balance text-sm text-muted-foreground">{t("emptyState")}</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 text-left shadow-soft"
            >
              <blockquote className="text-balance font-display text-lg leading-snug tracking-tighter">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {testimonial.authorName}
                </span>
                {" · "}
                {testimonial.authorRole}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </Section>
  );
}
