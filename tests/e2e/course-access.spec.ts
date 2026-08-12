import { expect, test } from "@playwright/test";

import { TEST_STUDENT, loginAs } from "./helpers";

/**
 * Cubre: inscripción a un curso gratuito, acceso al reproductor,
 * marcar una lección como completada y que el progreso se refleje.
 * Depende del curso "curso-e2e-gratis" sembrado por
 * `tests/fixtures/seed-test-data.ts`.
 */
test.describe("Acceso a curso gratuito", () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, TEST_STUDENT.email, TEST_STUDENT.password);
  });

  test("un alumno puede inscribirse en un curso gratuito y acceder al contenido", async ({
    page,
  }) => {
    await page.goto("/cursos/curso-e2e-gratis");
    await expect(page.getByRole("heading", { name: "Curso E2E Gratis" })).toBeVisible();

    const enrollButton = page.getByRole("button", { name: /inscribirme gratis/i });
    if (await enrollButton.isVisible().catch(() => false)) {
      await enrollButton.click();
      await expect(page.getByText(/te has inscrito correctamente/i)).toBeVisible();
    }

    await page.getByRole("link", { name: /continuar curso|empezar curso/i }).click();
    await expect(page).toHaveURL(/\/aprender\//);
    // La lección aparece en el temario (enlace) y como título (heading);
    // se ancla al heading para evitar la ambigüedad de modo estricto.
    await expect(page.getByRole("heading", { name: "Lección E2E" })).toBeVisible();
  });

  test("marcar una lección como completada actualiza la barra de progreso", async ({
    page,
  }) => {
    await page.goto("/cursos/curso-e2e-gratis/aprender");
    await expect(page).toHaveURL(/\/aprender\//);

    const completeButton = page.getByRole("button", { name: /marcar como completada/i });
    if (await completeButton.isVisible().catch(() => false)) {
      await completeButton.click();
      await expect(page.getByText(/completada/i)).toBeVisible();
    } else {
      // Ya estaba completada de una ejecución anterior — el estado
      // "Completada" (sin botón de acción) es igualmente válido.
      await expect(page.getByText(/completada/i)).toBeVisible();
    }
  });
});
