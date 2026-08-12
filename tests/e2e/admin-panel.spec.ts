import { expect, test } from "@playwright/test";

import { TEST_ADMIN, TEST_STUDENT, loginAs } from "./helpers";

test.describe("Panel de administración", () => {
  test("un alumno sin rol de administrador no puede acceder a /admin", async ({
    page,
  }) => {
    await loginAs(page, TEST_STUDENT.email, TEST_STUDENT.password);
    await page.goto("/admin");

    // requireAdmin() redirige a la home si el rol no es "administrador".
    await expect(page).toHaveURL("/");
  });

  test("un visitante sin sesión es redirigido a login al pedir /admin", async ({
    page,
  }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/auth\/iniciar-sesion/);
  });

  test("el dashboard de administrador muestra las estadísticas principales", async ({
    page,
  }) => {
    await loginAs(page, TEST_ADMIN.email, TEST_ADMIN.password);
    await page.goto("/admin");

    await expect(page.getByText("Usuarios totales")).toBeVisible();
    await expect(page.getByText("Cursos publicados")).toBeVisible();
    await expect(page.getByText("Pagos por revisar")).toBeVisible();
  });

  test("el admin puede crear una categoría nueva", async ({ page }) => {
    await loginAs(page, TEST_ADMIN.email, TEST_ADMIN.password);
    const uniqueName = `Categoría E2E ${Date.now()}`;

    await page.goto("/admin/categorias/nueva");
    await page.getByLabel("Nombre").fill(uniqueName);
    await page.getByRole("button", { name: /crear categoría/i }).click();

    await expect(page).toHaveURL("/admin/categorias");
    await expect(page.getByText(uniqueName)).toBeVisible();
  });
});
