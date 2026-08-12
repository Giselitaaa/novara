import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * El sello es el elemento de firma de NOVARA: una marca circular de
 * verificación (evoca el sello de un certificado auténtico) que
 * reaparece en el header, el footer y junto a las insignias de curso
 * "verificado por NOVARA". No es un icono decorativo intercambiable,
 * está atado directamente al concepto central del producto.
 */
function SealMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("size-7", className)} aria-hidden>
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.2" />
      <circle
        cx="16"
        cy="16"
        r="10.75"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="1.5 3.4"
      />
      <path
        d="M11 20V12.4L16 18.2L21 12.4V20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2 text-foreground", className)}
    >
      <SealMark className="text-gold transition-transform duration-300 group-hover:rotate-[12deg]" />
      <span className="font-display text-xl font-medium tracking-tighter">NOVARA</span>
    </Link>
  );
}

export { Logo, SealMark };
