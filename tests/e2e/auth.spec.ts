import { expect, test } from "@playwright/test";

/**
 * Cubre: registro de un alumno nuevo, y login con las credenciales
 * de prueba sembradas por `tests/fixtures/seed-test-data.ts`.
 */
test.describe("Autenticación", () => {
  test("un visitante puede registrarse con email y contraseña", async ({ page }) => {
    const uniqueEmail = `e2e-${Date.now()}@novara.test`;

    await page.goto("/auth/crear-cuenta");
    await page.getByLabel("Nombre").fill("Test");
    await page.getByLabel("Apellidos").fill("E2E");
    await page.getByLabel("Email").fill(uniqueEmail);
    await page.getByLabel("Contraseña", { exact: true }).fill("Contrasena123");
    await page.getByLabel("Confirmar contraseña").fill("Contrasena123");
    await page.getByLabel(/acepto los/i).check();
    await page.getByRole("button", { name: /crear cuenta/i }).click();

    // Tras un registro correcto, la acción inicia sesión automáticamente
    // y redirige a la home — se comprueba que el header ya no muestra
    // "Iniciar sesión".
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("link", { name: /iniciar sesión/i })).toHaveCount(0);
  });

  test("un alumno existente puede iniciar sesión con sus credenciales", async ({
    page,
  }) => {
    await page.goto("/auth/iniciar-sesion");
    await page.getByLabel("Email").fill("alumno.e2e@novara.test");
    await page.getByLabel("Contraseña").fill("TestAlumno123");
    await page.getByRole("button", { name: /iniciar sesión/i }).click();

    await expect(page).toHaveURL("/");
  });

  test("muestra un error con credenciales incorrectas, sin revelar si el email existe", async ({
    page,
  }) => {
    await page.goto("/auth/iniciar-sesion");
    await page.getByLabel("Email").fill("alumno.e2e@novara.test");
    await page.getByLabel("Contraseña").fill("contraseña-incorrecta");
    await page.getByRole("button", { name: /iniciar sesión/i }).click();

    await expect(page.getByText(/email o contraseña incorrectos/i)).toBeVisible();
  });
});
