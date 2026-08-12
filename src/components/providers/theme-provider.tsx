"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Envuelve next-themes para exponer un único punto de configuración
 * del tema claro/oscuro. `attribute="class"` es lo que hace que
 * `tailwind.config.ts` (darkMode: "class") funcione.
 *
 * `disableTransitionOnChange` evita el parpadeo de transiciones CSS
 * en el instante exacto de cambiar de tema.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
