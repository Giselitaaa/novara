import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/**
 * `Link`, `redirect`, `usePathname` y `useRouter` conscientes del
 * idioma activo. Se usan estos en vez de los de `next/navigation`
 * en cualquier componente que enlace dentro de la plataforma, para
 * que el prefijo de idioma se mantenga automáticamente.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
