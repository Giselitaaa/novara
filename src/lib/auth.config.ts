import type { NextAuthConfig } from "next-auth";

/**
 * Config "edge-safe" de Auth.js: sin proveedores ni callbacks que
 * toquen Prisma o bcrypt. Es la que usa el middleware (Edge Runtime)
 * para decodificar la sesión y decidir si una ruta está protegida.
 *
 * `lib/auth.ts` reutiliza este mismo objeto y le añade los
 * proveedores y los callbacks que sí necesitan Node.js — así ambas
 * configuraciones nunca divergen en lo esencial (páginas, forma de
 * la sesión).
 */
export const authConfig = {
  // Detrás de un proxy que termina TLS (Render/Cloudflare), Auth.js ve
  // la petición interna como http:// salvo que confíe en los headers
  // X-Forwarded-*. Sin esto, la URL que calcula internamente no
  // coincide con la pública (https), lo que puede encadenar reescrituras
  // sobre sí misma en el middleware hasta que el proxy las detecta como
  // bucle y corta la petición (508 Loop Detected).
  trustHost: true,
  pages: {
    signIn: "/auth/iniciar-sesion",
    error: "/auth/error",
  },
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  providers: [],
  callbacks: {
    // Puramente sintáctico (copia campos del token) — sin I/O, por
    // eso es seguro ejecutarlo también en el Edge Runtime.
    session: ({ session, token }) => {
      if (session.user && token.id) {
        session.user.id = token.id as string;
        session.user.roles = (token.roles as string[]) ?? [];
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
