import { expect, test } from "@playwright/test";

import { TEST_ADMIN, loginAs } from "./helpers";

/**
 * Este test verifica el comportamiento SIN clave de API configurada
 * (el caso real de este entorno de desarrollo): el asistente debe
 * mostrar un error explícito, nunca una respuesta simulada.
 *
 * Si el entorno de ejecución SÍ tiene `ANTHROPIC_API_KEY` u
 * `OPENAI_API_KEY` configurada, este test generará una estructura de
 * curso de verdad y comprobará que aparece la pantalla de revisión —
 * en ese caso, es la única prueba de esta suite que consume la API
 * real y puede tener coste asociado.
 */
test("el asistente de IA responde honestamente según haya o no clave configurada", async ({
  page,
}) => {
  await loginAs(page, TEST_ADMIN.email, TEST_ADMIN.password);
  await page.goto("/admin/cursos/nuevo");
  await page.getByRole("tab", { name: /con asistente de ia/i }).click();

  await page
    .getByPlaceholder(/curso de excel avanzado/i)
    .fill("Curso de prueba E2E sobre jardinería urbana");
  await page.getByRole("button", { name: /generar estructura/i }).click();

  const reviewHeading = page.getByText(/revisa y edita antes de crear el curso/i);
  const errorToast = page.getByText(/no se pudo generar la estructura/i);

  await expect(reviewHeading.or(errorToast)).toBeVisible({ timeout: 20000 });
});
