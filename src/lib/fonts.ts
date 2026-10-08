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
 *
 * Se usan pilas locales deliberadamente: el build y la primera carga no
 * dependen de que el entorno pueda alcanzar Google Fonts. Si el producto
 * incorpora archivos WOFF2 con licencia, pueden sustituirse aquí sin tocar
 * los consumidores de estas tres variables.
 */
const local = { variable: "" };
export const fontDisplay = local;
export const fontSans = local;
export const fontMono = local;
