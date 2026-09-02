/**
 * PALETAS de NOVARA — el eje de color, ORTOGONAL al claro/oscuro.
 *
 * El claro/oscuro lo gestiona next-themes (clase `.dark`); la PALETA la elige
 * SOLO la administración (apartado "Temas") y se aplica como `data-theme` en
 * <html> a TODOS los usuarios. Solo reescribe los tokens de ACENTO/marca sobre
 * la base neutra "papel + tinta" (y, en las festivas, un tinte de fondo y una
 * animación). Los 12 temas de color y los festivos provienen de la guía de
 * marca (carpeta "temas novara").
 *
 * Añadir una paleta = un objeto aquí + su bloque de tokens en globals.css.
 */
export type PaletteKind = "normal" | "festivo";

export type Palette = {
  id: string;
  label: string;
  emoji: string;
  kind: PaletteKind;
  /** 3 colores de muestra para el selector del panel. */
  swatch: [string, string, string];
};

export const PALETTES: Palette[] = [
  // ── Por defecto ───────────────────────────────────────────────────
  { id: "default", label: "NOVARA (índigo & oro)", emoji: "📜", kind: "normal", swatch: ["#2E2A5A", "#C79A3B", "#F4F1EA"] },

  // ── 12 temas de color (guía de marca) ─────────────────────────────
  { id: "morado-profundo", label: "Morado Profundo", emoji: "🟣", kind: "normal", swatch: ["#6D28D9", "#8B5CF6", "#EDE9FE"] },
  { id: "azul-energia", label: "Azul Energía", emoji: "🔵", kind: "normal", swatch: ["#2563EB", "#3B82F6", "#DBEAFE"] },
  { id: "verde-menta", label: "Verde Menta", emoji: "🟢", kind: "normal", swatch: ["#10B981", "#34D399", "#D1FAE5"] },
  { id: "naranja-vitalidad", label: "Naranja Vitalidad", emoji: "🟠", kind: "normal", swatch: ["#F97316", "#FB923C", "#FFF7ED"] },
  { id: "rosa-inspiracion", label: "Rosa Inspiración", emoji: "🌸", kind: "normal", swatch: ["#DB2777", "#EC4899", "#FCE7F3"] },
  { id: "rojo-enfoque", label: "Rojo Enfoque", emoji: "🔴", kind: "normal", swatch: ["#EF4444", "#F87171", "#FEE2E2"] },
  { id: "amarillo-luz", label: "Amarillo Luz", emoji: "🟡", kind: "normal", swatch: ["#F59E0B", "#FACC15", "#FFFBEB"] },
  { id: "cian-oceano", label: "Cian Océano", emoji: "🩵", kind: "normal", swatch: ["#06B6D4", "#22D3EE", "#ECFEFF"] },
  { id: "azul-nocturno", label: "Azul Nocturno", emoji: "🌌", kind: "normal", swatch: ["#1E293B", "#334155", "#E2E8F0"] },
  { id: "lila-suave", label: "Lila Suave", emoji: "💜", kind: "normal", swatch: ["#7C3AED", "#A78BFA", "#F3F0FF"] },
  { id: "gris-minimal", label: "Gris Minimal", emoji: "⚪", kind: "normal", swatch: ["#374151", "#6B7280", "#F9FAFB"] },
  { id: "beige-calido", label: "Beige Cálido", emoji: "🟤", kind: "normal", swatch: ["#D97706", "#FCD34D", "#FFFCF5"] },

  // ── Festivas (ilustradas + animadas) ──────────────────────────────
  { id: "navidad", label: "Navidad", emoji: "🎄", kind: "festivo", swatch: ["#166534", "#B91C1C", "#D4AF37"] },
  { id: "halloween", label: "Halloween", emoji: "🎃", kind: "festivo", swatch: ["#7C3AED", "#F97316", "#1E1B2E"] },
  { id: "ramadan", label: "Ramadán", emoji: "🌙", kind: "festivo", swatch: ["#1E1B4B", "#C9A227", "#4C1D95"] },
  { id: "pascua", label: "Pascua / Primavera", emoji: "🐣", kind: "festivo", swatch: ["#C4B5FD", "#F9A8D4", "#FBCFE8"] },
  { id: "san_valentin", label: "San Valentín", emoji: "💗", kind: "festivo", swatch: ["#DB2777", "#F472B6", "#FCE7F3"] },
  { id: "verano", label: "Verano", emoji: "🌞", kind: "festivo", swatch: ["#0EA5E9", "#F97316", "#FEF3C7"] },
];

export const DEFAULT_PALETTE = "default";

/** Ids que tienen animación festiva (para el overlay de <SeasonAnimation>). */
export const ANIMATED_FESTIVE = ["navidad", "halloween", "ramadan", "pascua", "san_valentin", "verano"];

export function isValidPalette(id: string | undefined | null): id is string {
  return !!id && PALETTES.some((p) => p.id === id);
}

/** Paleta por defecto del sitio a partir del ajuste del panel. */
export function paletteFromSeason(activeTheme: string | undefined | null): string {
  return isValidPalette(activeTheme) ? activeTheme : DEFAULT_PALETTE;
}
