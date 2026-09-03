import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import createIntlMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";
import { authConfig } from "@/lib/auth.config";

// Instancia ligera de Auth.js exclusiva del middleware — construida
// solo con la config edge-safe (ver `lib/auth.config.ts`), nunca con
// `lib/auth.ts` completo, para que bcrypt/Prisma no entren en el
// bundle del Edge Runtime.
const { auth } = NextAuth(authConfig);

const intlMiddleware = createIntlMiddleware(routing);

const PROTECTED_PREFIXES = [
  "/perfil",
  "/admin",
  "/mi-aprendizaje",
  "/notificaciones",
  "/examenes",
  // Nota: /cursos/[slug]/aprender también requiere sesión, pero
  // cuelga de un slug dinámico bajo /cursos (que sí es público) — este
  // matcher por prefijo no puede cubrirlo sin proteger todo el
  // catálogo por error. Esa página hace su propia comprobación de
  // sesión con `redirect()`, mismo patrón que ya usaba /perfil.
];

function stripLocale(pathname: string) {
  const [, maybeLocale, ...rest] = pathname.split("/");
  if ((routing.locales as readonly string[]).includes(maybeLocale ?? "")) {
    return "/" + rest.join("/");
  }
  return pathname;
}

export default auth((req) => {
  const pathname = stripLocale(req.nextUrl.pathname) || "/";
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isProtected && !req.auth) {
    const locale = req.nextUrl.pathname.split("/")[1];
    const localePrefix = (routing.locales as readonly string[]).includes(locale ?? "")
      ? `/${locale}`
      : "";
    const signInUrl = new URL(`${localePrefix}/auth/iniciar-sesion`, req.nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
  runtime: "nodejs",
};
