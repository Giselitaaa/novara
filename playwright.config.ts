import { defineConfig, devices } from "@playwright/test";

/**
 * Config de Playwright. Espera la app corriendo en
 * `PLAYWRIGHT_BASE_URL` (por defecto localhost:3000) contra una base
 * de datos de test ya sembrada (ver `tests/fixtures/seed-test-data.ts`).
 * No arranca el servidor automáticamente en CI por defecto — requiere
 * `npm run build && npm run start` (o `npm run dev`) en paralelo,
 * documentado en `tests/e2e/README.md`.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false, // los flujos comparten estado de base de datos (pagos, inscripciones)
  forbidOnly: !!process.env.CI,
  // Reintentos también en local: la suite corre contra una base de datos
  // remota (Neon) y, en una ejecución secuencial larga, la latencia
  // acumulada puede provocar timeouts transitorios en pasos concretos. Un
  // test que pasa al reintentar es un pase (Playwright lo marca "flaky"),
  // no oculta un fallo determinista (ese falla en todos los intentos).
  retries: 2,
  workers: 1,
  reporter: [["html", { open: "never" }]],
  // Timeouts amplios a propósito: la suite corre contra una base de datos
  // PostgreSQL REMOTA (Neon), no local, y algunas acciones (aprobar pago,
  // emitir certificado) encadenan varias operaciones — transacción + email
  // + notificación — con la latencia de red de cada ida y vuelta. Sumado a
  // la navegación dura del login y al render en frío del server de
  // producción, el margen por defecto (5 s el `expect`) se queda corto. No
  // enmascara fallos: un fallo real sigue fallando, solo tolera la latencia.
  timeout: 60_000,
  expect: { timeout: 30_000 },
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    actionTimeout: 20_000,
    navigationTimeout: 25_000,
    // La suite está escrita contra la UI en ESPAÑOL. next-intl negocia el
    // idioma por `Accept-Language` en las rutas sin prefijo (localePrefix
    // "as-needed"), así que el navegador de test debe pedir español; si no,
    // recibiría la UI en inglés y ningún selector en castellano casaría.
    locale: "es-ES",
    extraHTTPHeaders: { "Accept-Language": "es-ES,es;q=0.9" },
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
