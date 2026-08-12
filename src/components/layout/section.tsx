"use client";

import { motion } from "framer-motion";
import * as React from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  containerClassName?: string;
}

/**
 * Envoltura de sección estándar de la landing (y de futuras páginas).
 * Aplica el elemento de firma de NOVARA — la "regla-ledger": un
 * divisor fino con una etiqueta marginal en mono/versalitas, como una
 * anotación de cuaderno de calificaciones — y una revelación suave al
 * entrar en el viewport, una única vez, respetando prefers-reduced-motion
 * (gestionado globalmente en globals.css).
 */
export function Section({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      <Container className={containerClassName}>
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "ledger-rule mb-12 sm:mb-16",
              align === "center" && "mx-auto max-w-2xl text-center"
            )}
          >
            {eyebrow && <p className="ledger-label mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-balance font-display text-3xl tracking-tighter sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </Container>
    </section>
  );
}
