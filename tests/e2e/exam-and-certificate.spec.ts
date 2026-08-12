import { expect, test } from "@playwright/test";

import { resetExamState } from "./db-reset";
import { TEST_ADMIN, TEST_STUDENT, loginAs } from "./helpers";

// Estado de partida determinista: banco de preguntas/exámenes e intentos y
// certificados del alumno limpios, para que "crear examen → aprobar →
// certificado" no se contamine por orden de ejecución ni reintentos.
test.beforeEach(async () => {
  await resetExamState(TEST_STUDENT.email);
});

/**
 * Cubre: creación de una pregunta y un examen desde el panel de
 * administración, realización del examen por el alumno con
 * corrección automática, y verificación de que el certificado se
 * emite tras aprobar (el curso de prueba no tiene más lecciones que
 * bloqueen la elegibilidad — ver `issueCertificateIfEligible`: si el
 * curso tiene examen, basta con aprobarlo).
 */
test("el admin crea un examen, el alumno lo aprueba y recibe certificado", async ({
  browser,
}) => {
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await loginAs(adminPage, TEST_ADMIN.email, TEST_ADMIN.password);

  // 1) Crear una pregunta en el banco.
  await adminPage.goto("/admin/examenes/preguntas", { waitUntil: "domcontentloaded" });
  await adminPage.getByLabel("Enunciado").fill("¿Cuánto es 2 + 2?");
  await adminPage.getByPlaceholder("Opción 1").fill("4");
  // El Checkbox (Radix) se renderiza como <button role="checkbox">, hermano
  // previo del input de texto dentro de la misma fila de opción.
  await adminPage
    .getByPlaceholder("Opción 1")
    .locator("xpath=preceding-sibling::button[@role='checkbox']")
    .check();
  await adminPage.getByPlaceholder("Opción 2").fill("5");
  await adminPage.getByRole("button", { name: /crear pregunta/i }).click();
  await expect(adminPage.getByText("¿Cuánto es 2 + 2?")).toBeVisible();

  // 2) Crear el examen y vincularlo al curso de prueba.
  await adminPage.goto("/admin/examenes/nuevo", { waitUntil: "domcontentloaded" });
  await adminPage.getByLabel("Título del examen").fill("Examen E2E");
  await adminPage
    .getByLabel(/curso \(opcional\)/i)
    .selectOption({ label: "Curso E2E Gratis" });
  await adminPage.getByLabel(/nota mínima/i).fill("50");
  await adminPage.getByRole("button", { name: /crear examen/i }).click();
  await expect(adminPage).toHaveURL(/\/admin\/examenes\//);

  // 3) Añadir la pregunta creada al examen.
  await adminPage
    .getByRole("button", { name: /añadir/i })
    .first()
    .click();
  const examUrl = adminPage.url();
  const examId = examUrl.split("/").pop();

  // ─── Lado del alumno ───
  const studentContext = await browser.newContext();
  const studentPage = await studentContext.newPage();
  await loginAs(studentPage, TEST_STUDENT.email, TEST_STUDENT.password);

  await studentPage.goto(`/examenes/${examId}`, { waitUntil: "domcontentloaded" });
  await studentPage.getByRole("button", { name: /empezar examen/i }).click();

  await expect(studentPage.getByText("¿Cuánto es 2 + 2?")).toBeVisible();
  await studentPage.getByRole("button", { name: "4" }).click();
  await studentPage.getByRole("button", { name: /finalizar examen/i }).click();

  await expect(studentPage.getByText(/examen aprobado/i)).toBeVisible();

  // 4) El certificado debería aparecer en el perfil del alumno.
  await studentPage.goto("/perfil", { waitUntil: "domcontentloaded" });
  await studentPage.getByRole("tab", { name: /certificados/i }).click();
  await expect(studentPage.getByText(/curso e2e gratis/i)).toBeVisible();

  await adminContext.close();
  await studentContext.close();
});
