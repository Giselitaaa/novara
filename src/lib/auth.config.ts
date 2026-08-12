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
