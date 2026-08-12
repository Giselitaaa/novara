import type { Page } from "@playwright/test";

export async function loginAs(page: Page, email: string, password: string) {
  await page.goto("/auth/iniciar-sesion");
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Contraseña").fill(password);
  await page.getByRole("button", { name: /iniciar sesión/i }).click();
  await page.waitForURL("/");
}

export const TEST_ADMIN = { email: "admin.e2e@novara.test", password: "TestAdmin123" };
export const TEST_STUDENT = {
  email: "alumno.e2e@novara.test",
  password: "TestAlumno123",
};
