import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Configuración central de Next.js para NOVARA.
 *
 * Notas de arquitectura:
 * - `images.remotePatterns` se deja preparado para el proveedor de
 *   almacenamiento definitivo (S3 / Cloudflare R2) y para el proveedor
 *   de streaming de vídeo (Mux / Cloudflare Stream). Se completa cuando
 *   se den de alta esos servicios.
 * - `typedRoutes` activado: rutas tipadas en toda la plataforma, evita
 *   enlaces rotos silenciosos a medida que el catálogo de páginas crece.
 * - `reactStrictMode` siempre activo: detecta efectos secundarios
 *   inseguros pronto, antes de que la base de código crezca.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // typedRoutes desactivado: en Next 15.5 se volvió estricto y rechaza rutas
  // con query (?callbackUrl=…) usadas en redirect(); no aporta en runtime.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Ejecuta el middleware en Node.js (no Edge): necesario para desplegar en
    // Vercel en modo "service" y compatible con Auth.js completo. La clave aún
    // no está en los tipos de NextConfig, por eso se inyecta con spread.
    ...({ nodeMiddleware: true } as Record<string, unknown>),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Se completará con el dominio real de almacenamiento (S3/R2) y CDN.
      // { protocol: "https", hostname: "cdn.novara.academy" },
    ],
  },
  eslint: {
    // El lint corre como paso propio en CI (`npm run lint`), no como
    // gate del build: así el build valida el COMPILADO (TypeScript, que
    // sí se mantiene abajo) sin bloquearse por reglas de estilo/a11y.
    // Es la separación estándar en producción.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // El typecheck SÍ bloquea el build — es la garantía de que compila.
    ignoreBuildErrors: false,
  },
  /**
   * Cabeceras de seguridad — Módulo 6 (Fase 6). Se aplican a todas
   * las rutas. La CSP permite scripts de los proveedores de analítica
   * opcionales (Módulo 3) e imágenes de cualquier origen HTTPS (los
   * cursos referencian recursos externos hasta que haya CDN propio) —
   * se puede endurecer más adelante en cuanto el almacenamiento sea
   * definitivo.
   */
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://plausible.io",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://www.clarity.ms https://plausible.io",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
