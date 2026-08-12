import { defineRouting } from "next-intl/routing";

/**
 * Idiomas soportados por la plataforma.
 *
 * NOVARA lanza en español, pero toda la app vive bajo el segmento
 * [locale] desde el primer día para que añadir un idioma nuevo sea
 * "añadir un archivo de mensajes", no "reestructurar el enrutado".
 */
export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed", // /es/... se sirve como / ; /en/... explícito
});

export type Locale = (typeof routing.locales)[number];
