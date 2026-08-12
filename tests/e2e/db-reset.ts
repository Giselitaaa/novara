import pg from "pg";

/**
 * Limpieza dirigida de datos MUTABLES entre tests E2E, vía SQL directo.
 *
 * Por qué SQL directo y no Prisma: el runner de Playwright no puede
 * importar `@/lib/db` (arrastra `server-only`, que solo resuelve dentro
 * del bundler de React Server Components). `pg` habla con la misma base
 * de datos de test sin esa restricción.
 *
 * Objetivo: que los tests con estado (compra, examen) partan siempre de
 * un estado determinista, de forma que ni el ORDEN de ejecución ni los
 * REINTENTOS los contaminen. Usa `DATABASE_URL` del entorno, que al
 * lanzar la suite apunta a la base de datos de test dedicada.
 */
async function withClient(fn: (c: pg.Client) => Promise<void>) {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL no está definida: la limpieza E2E necesita apuntar a la base de datos de test."
    );
  }
  const client = new pg.Client({ connectionString });
  await client.connect();
  try {
    await fn(client);
  } finally {
    await client.end();
  }
}

/**
 * Deja al alumno SIN pago ni inscripción para un curso (por slug). Las
 * FKs con ON DELETE CASCADE limpian factura e historial al borrar el pago.
 */
export async function resetPurchaseState(studentEmail: string, courseSlug: string) {
  await withClient(async (c) => {
    await c.query(
      `DELETE FROM payments
         WHERE user_id = (SELECT id FROM users WHERE email = $1)
           AND course_id = (SELECT id FROM courses WHERE slug = $2)`,
      [studentEmail, courseSlug]
    );
    await c.query(
      `DELETE FROM enrollments
         WHERE user_id = (SELECT id FROM users WHERE email = $1)
           AND course_id = (SELECT id FROM courses WHERE slug = $2)`,
      [studentEmail, courseSlug]
    );
  });
}

/**
 * Deja limpio el banco de preguntas/exámenes y los intentos/certificados
 * del alumno, para que el flujo "crear examen → aprobar → certificado"
 * empiece de cero. Estas entidades solo las crea este test, así que se
 * pueden vaciar sin afectar a otros.
 */
export async function resetExamState(studentEmail: string) {
  await withClient(async (c) => {
    await c.query(
      `DELETE FROM exam_attempts
         WHERE user_id = (SELECT id FROM users WHERE email = $1)`,
      [studentEmail]
    );
    await c.query(
      `DELETE FROM certificates
         WHERE user_id = (SELECT id FROM users WHERE email = $1)`,
      [studentEmail]
    );
    // exam_questions es la tabla puente; se borra antes que exams/questions.
    await c.query(
      `DELETE FROM exam_questions
         WHERE exam_id IN (SELECT id FROM exams WHERE title LIKE 'Examen E2E%')
            OR question_id IN (SELECT id FROM questions WHERE statement LIKE '¿Cuánto es 2 + 2%')`
    );
    await c.query(`DELETE FROM exams WHERE title LIKE 'Examen E2E%'`);
    await c.query(`DELETE FROM questions WHERE statement LIKE '¿Cuánto es 2 + 2%'`);
  });
}
