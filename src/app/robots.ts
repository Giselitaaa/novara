import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

/**
 * `localePrefix: "always"` en `routing.ts`: toda URL real vive bajo
 * `/es/…` o `/en/…`, nunca sin prefijo. Un `Disallow: /admin` no
 * bloquea `/es/admin` (el robots.txt compara por prefijo literal) —
 * hay que repetir cada ruta privada con cada idioma.
 */
const PRIVATE_PATHS = [
  "/admin",
  "/perfil",
  "/mi-aprendizaje",
  "/notificaciones",
  "/examenes",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = [
    "/api",
    ...routing.locales.flatMap((locale) =>
      PRIVATE_PATHS.map((path) => `/${locale}${path}`)
    ),
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
