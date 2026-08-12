/**
 * Configuración central del sitio. Cualquier texto o dato que aparezca
 * en varios sitios (footer, metadatos SEO, redes sociales) vive aquí,
 * no repetido por la base de código.
 */
export const siteConfig = {
  name: "NOVARA",
  tagline: {
    es: "Aprende de verdad",
    en: "Learn for real",
  },
  description: {
    es: "Academia online premium donde cada curso cumple un estándar alto y el progreso se mide de verdad.",
    en: "A premium online academy where every course meets a high standard and progress is tracked for real.",
  },
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    // Se completan cuando existan los perfiles reales.
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;
