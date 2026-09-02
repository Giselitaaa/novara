import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

/**
 * Único punto donde se componen los providers de la aplicación.
 * Añadir un provider nuevo en el futuro (ej. analítica, feature
 * flags) se hace aquí y en ningún otro sitio.
 *
 * `ThemeProvider` gestiona claro/oscuro (preferencia de cada usuario). El
 * TEMA de color (paleta) lo fija SOLO la administración y se renderiza en
 * el servidor (`data-theme` del <html>), igual para todos los usuarios.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <QueryProvider>
          {children}
          <Toaster richColors position="top-center" closeButton />
        </QueryProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
