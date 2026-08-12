"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { SealMark } from "@/components/layout/logo";

/**
 * Celebración breve y elegante al desbloquear un logro. Coherente con
 * la marca (sello dorado), nada estridente, y se auto-oculta. Respeta
 * `prefers-reduced-motion`: si el usuario lo pide, aparece sin
 * movimiento (solo un fundido mínimo).
 */
export function AchievementCelebration({
  badges,
}: {
  badges: { key: string; name: string }[];
}) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (badges.length === 0) return;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 4500);
    return () => clearTimeout(t);
  }, [badges]);

  return (
    <AnimatePresence>
      {visible && badges.length > 0 && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="fixed inset-x-0 bottom-6 z-50 mx-auto flex w-fit max-w-[90vw] items-center gap-3 rounded-xl border border-gold/40 bg-card px-5 py-3.5 shadow-seal"
          role="status"
          aria-live="polite"
        >
          <motion.span
            initial={reduce ? {} : { rotate: -20, scale: 0.6 }}
            animate={reduce ? {} : { rotate: 0, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 12 }}
          >
            <SealMark className="size-8 text-gold" />
          </motion.span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-gold-foreground dark:text-gold">
              Logro desbloqueado
            </p>
            <p className="font-display text-base tracking-tighter">
              {badges.map((b) => b.name).join(" · ")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
