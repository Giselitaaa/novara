import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/**
 * Configuración base de Tailwind.
 *
 * IMPORTANTE: los valores concretos de color, tipografía y espaciado
 * (la paleta real de marca, familias tipográficas, escala) se definen
 * en la Fase 2 — Design System, no aquí. Esta configuración solo deja
 * preparado el MECANISMO (variables CSS + modo oscuro por clase) para
 * que el Design System se enchufe sin tocar esta base de nuevo.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      // Pasos de espaciado no incluidos en la escala por defecto de
      // Tailwind pero usados en el código (p. ej. `size-4.5` en el
      // checkbox y en iconos). Sin esto, esas clases no existen y el
      // elemento queda sin dimensiones — el checkbox de "aceptar
      // términos" se renderizaba invisible por este motivo.
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Color de firma de marca: el "oro de certificación". Se usa con
        // restraint — acentos, sello de verificación, estados de logro —
        // nunca como color de fondo extenso.
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 6px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        // Sombras con tinte de tinta (no gris neutro) — coherentes con
        // la paleta en vez de la sombra gris genérica por defecto.
        soft: "0 1px 2px hsl(var(--primary) / 0.04), 0 4px 16px hsl(var(--primary) / 0.06)",
        lifted:
          "0 2px 4px hsl(var(--primary) / 0.05), 0 12px 32px hsl(var(--primary) / 0.10)",
        seal: "0 1px 3px hsl(var(--gold) / 0.25), 0 0 0 1px hsl(var(--gold) / 0.35)",
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        wide: "0.08em",
        widest: "0.16em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
