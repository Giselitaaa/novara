import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * Reglas de ESLint para NOVARA.
 *
 * Criterio: además de las reglas estándar de Next.js/TypeScript,
 * se fuerza el orden de imports (para que la estructura modular por
 * dominios se mantenga legible según crece) y accesibilidad (a11y)
 * como requisito no negociable del proyecto.
 */
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ),
  {
    rules: {
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // Los scripts de línea de comandos (auditoría, backups, seed) usan la
    // consola como salida legítima: ahí `console.log` es la interfaz, no
    // un olvido de depuración.
    files: ["scripts/**", "prisma/seed.ts"],
    rules: {
      "no-console": "off",
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "src/components/ui/**", // componentes generados por shadcn/ui
    ],
  },
];

export default eslintConfig;
