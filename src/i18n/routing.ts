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
  // "always": todas las URLs llevan prefijo de idioma (/es/…, /en/…) y "/"
  // redirige a "/es". Es la opción fiable en producción (evita el bucle de
  // redirección que "as-needed" provoca detrás de un proxy como Render).
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
