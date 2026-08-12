import path from "node:path";

import { defineConfig } from "vitest/config";

/**
 * Config de Vitest — cubre `tests/unit` (funciones puras, sin base de
 * datos) y `tests/integration` (server actions contra una base de
 * datos de test real, ver `tests/integration/README.md`). Los E2E
 * viven aparte, en Playwright (`playwright.config.ts`), porque
 * necesitan un navegador y la app corriendo — Vitest no es la
 * herramienta correcta para eso.
 */
export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.ts"],
    setupFiles: [],
    testTimeout: 15000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // En tests no hay frontera servidor/cliente: `server-only` se
      // sustituye por un stub vacío para poder importar y probar los
      // módulos de servidor (rate-limit, IA, etc.).
      "server-only": path.resolve(__dirname, "./tests/stubs/server-only.ts"),
    },
  },
});
