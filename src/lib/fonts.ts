import { Fraunces, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Sistema tipográfico de NOVARA — tres roles, cada uno con un trabajo:
 *
 * - `display` (Fraunces): serif de alto contraste con carácter editorial.
 *   Lleva la personalidad de la marca en titulares grandes. Se usa con
 *   restraint (titulares y momentos clave), nunca en párrafos largos.
 * - `sans` (Plus Jakarta Sans): humanista, muy legible, para todo el
 *   cuerpo de texto y la interfaz — la voz "neutral" de la plataforma.
 * - `mono` (IBM Plex Mono): para lo que es literalmente un dato técnico
 *   o verificable — códigos de certificado, timestamps, puntuaciones de
 *   examen, las etiquetas-ledger de las secciones. Refuerza el rigor
 *   del producto sin decorar.
 */
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});
