export type NavItem = {
  labelKey: "home" | "courses" | "categories" | "howItWorks" | "pricing";
  href: string;
};

/**
 * Enlaces de navegación principal. Centralizado aquí para que header,
 * footer y mobile-nav lean siempre la misma fuente de verdad.
 */
export const mainNavItems: NavItem[] = [
  { labelKey: "courses", href: "/cursos" },
  { labelKey: "categories", href: "/categorias" },
  { labelKey: "howItWorks", href: "/#como-funciona" },
];
