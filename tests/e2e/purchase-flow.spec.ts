import { expect, test } from "@playwright/test";

import { resetPurchaseState } from "./db-reset";
import { TEST_ADMIN, TEST_STUDENT, loginAs } from "./helpers";

// Estado de partida determinista: sin pago ni inscripción previos para el
// curso premium, el flujo de compra empieza siempre desde cero (aunque otro
// test lo haya tocado antes o sea un reintento).
test.beforeEach(async () => {
  await resetPurchaseState(TEST_STUDENT.email, "curso-e2e-premium");
});

/**
 * Cubre el flujo de pago manual completo pedido explícitamente en
 * esta fase: solicitar compra → instrucciones → subir justificante →
 * el admin lo revisa y aprueba → el alumno obtiene acceso.
 *
 * Usa dos contextos de navegador (alumno y administrador) para
 * simular ambos lados del flujo en un único test end-to-end, en vez
 * de dos tests separados que no demuestren la conexión real entre
 * ambos.
 */
test("un alumno compra un curso premium y el admin aprueba el pago", async ({
  browser,
}) => {
  const studentContext = await browser.newContext();
  const studentPage = await studentContext.newPage();
  await loginAs(studentPage, TEST_STUDENT.email, TEST_STUDENT.password);

  await studentPage.goto("/cursos/curso-e2e-premium/comprar");
  await studentPage.getByRole("button", { name: /transferencia bancaria/i }).click();
  await expect(studentPage.getByText(/instrucciones de pago/i)).toBeVisible();

  await studentPage
    .getByLabel(/url del justificante/i)
    .fill("https://example.com/justificante-e2e.pdf");
  await studentPage.getByRole("button", { name: /enviar justificante/i }).click();
  await expect(studentPage.getByText(/tu pago está en revisión/i)).toBeVisible();

  // ─── Lado del administrador ───
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await loginAs(adminPage, TEST_ADMIN.email, TEST_ADMIN.password);

  // `domcontentloaded`: las páginas admin usan streaming RSC (loading.tsx),
  // cuyo stream puede mantener abierta la respuesta y hacer que el evento
  // `load` por defecto de `goto` no dispare. El contenido llega igual (~3s).
  await adminPage.goto("/admin/pagos?estado=en_revision", {
    waitUntil: "domcontentloaded",
  });
  await adminPage.getByRole("link", { name: "Alumno E2E" }).first().click();

  await expect(adminPage.getByText(/curso e2e premium/i)).toBeVisible();
  await adminPage.getByRole("button", { name: /aprobar pago/i }).click();
  await expect(adminPage.getByText(/pago aprobado y acceso concedido/i)).toBeVisible();

  // ─── De vuelta al alumno: debe tener acceso ya ───
  await studentPage.goto("/cursos/curso-e2e-premium", { waitUntil: "domcontentloaded" });
  await studentPage.reload({ waitUntil: "domcontentloaded" });
  await expect(studentPage.getByText(/ya estás inscrito/i)).toBeVisible();

  await studentContext.close();
  await adminContext.close();
});
