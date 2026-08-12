"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Envoltorio cliente genérico para revelar contenido renderizado en
 * servidor al entrar en el viewport. Los datos (cursos, categorías)
 * se resuelven en el Server Component padre — este componente solo
 * añade la animación, sin volver a pedir datos en cliente.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
