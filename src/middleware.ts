import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import createIntlMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";
import { db } from "@/lib/db";

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

/**
 * Comprobación de existencia para las rutas dinámicas públicas (curso,
 * categoría, entrada de blog, lección, checkout de un curso). Vive en
 * el middleware — no en la página — porque aquí el `await` a la base
 * de datos ocurre ANTES de que Next.js empiece a renderizar/transmitir
 * nada: es el único punto donde un "no existe" puede traducirse en un
 * 404 real (ver `novara-404-sink/page.tsx` para la explicación
 * completa del problema que esto evita).
 *
 * Devuelve `false` solo cuando la ruta coincide con uno de estos
 * patrones Y el recurso no existe. Para cualquier otra ruta (o un
 * patrón reconocido cuyo recurso SÍ existe) devuelve `true`, y la
 * petición sigue su curso normal.
 */
async function dynamicRouteExists(pathname: string, isAdmin: boolean): Promise<boolean> {
  const segments = pathname.split("/").filter(Boolean);

  // /cursos/:slug — ficha pública del curso. Un admin puede ver la
  // vista previa de un curso sin publicar (mismo criterio que la
  // propia página en `cursos/[slug]/page.tsx`).
  if (segments.length === 2 && segments[0] === "cursos") {
    const course = await db.course.findFirst({
      where: isAdmin
        ? { slug: segments[1] }
        : { slug: segments[1], status: { key: "publicado" } },
      select: { id: true },
    });
    return Boolean(course);
  }

  // /cursos/:slug/comprar — checkout. Nunca con vista previa de admin:
  // no tiene sentido comprar un curso que no está publicado.
  if (segments.length === 3 && segments[0] === "cursos" && segments[2] === "comprar") {
    const course = await db.course.findFirst({
      where: { slug: segments[1], status: { key: "publicado" } },
      select: { id: true },
    });
    return Boolean(course);
  }

  // /cursos/:slug/aprender/:lessonId — visor de lección. Sin filtrar
  // por estado del curso: un alumno ya matriculado conserva acceso al
  // contenido aunque el curso se archive después (mismo criterio que
  // `getCourseLearningData`, que tampoco filtra por estado).
  if (segments.length === 4 && segments[0] === "cursos" && segments[2] === "aprender") {
    const lesson = await db.lesson.findFirst({
      where: { id: segments[3], module: { course: { slug: segments[1] } } },
      select: { id: true },
    });
    return Boolean(lesson);
  }

  // /categorias/:slug
  if (segments.length === 2 && segments[0] === "categorias") {
    const category = await db.category.findFirst({
      where: { slug: segments[1], status: { key: "activo" } },
      select: { id: true },
    });
    return Boolean(category);
  }

  // /blog/:slug
  if (segments.length === 2 && segments[0] === "blog") {
    const post = await db.blogPost.findFirst({
      where: { slug: segments[1], publishedAt: { lte: new Date() } },
      select: { id: true },
    });
    return Boolean(post);
  }

  return true;
}

const EXISTENCE_CHECK_PREFIXES = ["/cursos", "/categorias", "/blog"];

export default async function middleware(req: NextRequest) {
  const pathname = stripLocale(req.nextUrl.pathname) || "/";
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const needsExistenceCheck = EXISTENCE_CHECK_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  let token = null;
  if (isProtected || needsExistenceCheck) {
    // `secureCookie` explícito: detrás del proxy de Render, `getToken` no
    // siempre detecta por sí solo que la petición pública es HTTPS, y
    // busca la cookie de sesión SIN el prefijo `__Secure-` — la que el
    // navegador realmente tiene (porque sí llegó por HTTPS) nunca
    // coincide, así que trataba a cualquier alumna logueada como
    // anónima en /perfil, /mi-aprendizaje, /notificaciones y /examenes.
    token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
  }

  if (isProtected && !token) {
    const locale = req.nextUrl.pathname.split("/")[1];
    const localePrefix = (routing.locales as readonly string[]).includes(locale ?? "")
      ? `/${locale}`
      : "";
    const signInUrl = new URL(`${localePrefix}/auth/iniciar-sesion`, req.nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);

    return NextResponse.redirect(signInUrl);
  }

  if (needsExistenceCheck) {
    const isAdmin = ((token?.roles as string[] | undefined) ?? []).includes(
      "administrador"
    );
    const exists = await dynamicRouteExists(pathname, isAdmin);
    const locale = req.nextUrl.pathname.split("/")[1];
    const localePrefix = (routing.locales as readonly string[]).includes(locale ?? "")
      ? locale
      : routing.defaultLocale;

    if (!exists) {
      return NextResponse.rewrite(new URL(`/${localePrefix}/novara-404-sink`, req.url));
    }

    // /cursos/:slug/comprar y /cursos/:slug/aprender/:lessonId exigen
    // sesión, pero la propia página (no este middleware) no puede
    // fijar un 307 real una vez que el curso existe y la página
    // empieza a renderizar — mismo problema de fondo que el 404 de
    // arriba. Se resuelve aquí, igual que para `PROTECTED_PREFIXES`.
    const segments = pathname.split("/").filter(Boolean);
    const needsSession =
      segments[0] === "cursos" &&
      (segments[2] === "comprar" || segments[2] === "aprender");
    if (needsSession && !token) {
      const signInUrl = new URL(
        `/${localePrefix}/auth/iniciar-sesion`,
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
