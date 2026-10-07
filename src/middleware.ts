import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import createIntlMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

/**
 * `getToken` en vez del wrapper `auth(...)` de NextAuth: el wrapper
 * genera cookies CSRF nuevas en cada invocación y, combinado con la
 * reescritura interna de next-intl, encadenaba reinvocaciones del
 * middleware hasta que el proxy de Render las detectaba como un
 * bucle (508 Loop Detected) — la web nunca llegaba a cargar.
 */
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

export default async function middleware(req: NextRequest) {
  const pathname = stripLocale(req.nextUrl.pathname) || "/";
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isProtected) {
    // `secureCookie` explícito: detrás del proxy de Render, `getToken` no
    // siempre detecta por sí solo que la petición pública es HTTPS, y
    // busca la cookie de sesión SIN el prefijo `__Secure-` — la que el
    // navegador realmente tiene (porque sí llegó por HTTPS) nunca
    // coincide, así que trataba a cualquier alumna logueada como
    // anónima en /perfil, /mi-aprendizaje, /notificaciones y /examenes.
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    if (!token) {
      const locale = req.nextUrl.pathname.split("/")[1];
      const localePrefix = (routing.locales as readonly string[]).includes(locale ?? "")
        ? `/${locale}`
        : "";
      const signInUrl = new URL(
        `${localePrefix}/auth/iniciar-sesion`,
        req.nextUrl.origin
      );
      signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);

      return NextResponse.redirect(signInUrl);
    }
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
  runtime: "nodejs",
};
