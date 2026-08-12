import bcrypt from "bcryptjs";

import { db } from "../../src/lib/db";

/**
 * Siembra datos deterministas para los tests E2E: un administrador,
 * un alumno, una categoría, un curso gratuito completo (con módulo,
 * lección y examen) y un curso premium (para probar el flujo de
 * pago). Pensado para ejecutarse UNA VEZ contra una base de datos de
 * test dedicada — nunca contra producción ni desarrollo.
 *
 * No se ejecuta como parte de ningún build ni CI automáticamente.
 * Ejecución manual: `tsx tests/fixtures/seed-test-data.ts`
 * (requiere que `npm run db:seed` ya se haya ejecutado antes, para
 * tener los catálogos base).
 */
export const TEST_CREDENTIALS = {
  admin: { email: "admin.e2e@novara.test", password: "TestAdmin123" },
  student: { email: "alumno.e2e@novara.test", password: "TestAlumno123" },
};

async function main() {
  const activeStatus = await db.userStatus.findUniqueOrThrow({
    where: { key: "activo" },
  });
  // Estado genérico (tabla `statuses`) que exigen Category, Course, etc.
  // NO es el mismo que UserStatus — usarlo cruzado rompe la FK.
  const activeContentStatus = await db.status.findUniqueOrThrow({
    where: { key: "activo" },
  });
  const adminRole = await db.role.findUniqueOrThrow({ where: { name: "administrador" } });
  const alumnoRole = await db.role.findUniqueOrThrow({ where: { name: "alumno" } });

  const adminPasswordHash = await bcrypt.hash(TEST_CREDENTIALS.admin.password, 10);
  const admin = await db.user.upsert({
    where: { email: TEST_CREDENTIALS.admin.email },
    update: {},
    create: {
      email: TEST_CREDENTIALS.admin.email,
      passwordHash: adminPasswordHash,
      emailVerifiedAt: new Date(),
      statusId: activeStatus.id,
      profile: { create: { firstName: "Admin", lastName: "E2E" } },
      roles: { create: { roleId: adminRole.id } },
    },
  });

  await db.user.upsert({
    where: { email: TEST_CREDENTIALS.student.email },
    update: {},
    create: {
      email: TEST_CREDENTIALS.student.email,
      passwordHash: await bcrypt.hash(TEST_CREDENTIALS.student.password, 10),
      emailVerifiedAt: new Date(),
      statusId: activeStatus.id,
      profile: { create: { firstName: "Alumno", lastName: "E2E" } },
      roles: { create: { roleId: alumnoRole.id } },
    },
  });

  const [
    category,
    level,
    language,
    accessTypeFree,
    accessTypePremium,
    publishedStatus,
    contentType,
  ] = await Promise.all([
    db.category.upsert({
      where: { slug: "categoria-e2e" },
      update: {},
      create: {
        name: "Categoría E2E",
        slug: "categoria-e2e",
        icon: "Sparkles",
        color: "gold",
        statusId: activeContentStatus.id,
      },
    }),
    db.courseLevel.findFirstOrThrow(),
    db.language.findFirstOrThrow(),
    db.accessType.findUniqueOrThrow({ where: { key: "gratis" } }),
    db.accessType.findUniqueOrThrow({ where: { key: "premium" } }),
    db.courseStatus.findUniqueOrThrow({ where: { key: "publicado" } }),
    db.contentType.findUniqueOrThrow({ where: { key: "texto" } }),
  ]);

  const author = await db.author.findFirstOrThrow({ where: { isPlatformAuthor: true } });

  const freeCourse = await db.course.upsert({
    where: { slug: "curso-e2e-gratis" },
    update: {},
    create: {
      title: "Curso E2E Gratis",
      slug: "curso-e2e-gratis",
      description: "Curso de prueba usado por los tests E2E.",
      categoryId: category.id,
      levelId: level.id,
      languageId: language.id,
      authorId: author.id,
      statusId: publishedStatus.id,
      accessTypeId: accessTypeFree.id,
      publishedAt: new Date(),
      modules: {
        create: [
          {
            title: "Módulo E2E",
            sortOrder: 0,
            lessons: {
              create: [
                {
                  title: "Lección E2E",
                  contentTypeId: contentType.id,
                  sortOrder: 0,
                  content: {
                    create: {
                      contentTypeId: contentType.id,
                      body: "Contenido de prueba.",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await db.course.upsert({
    where: { slug: "curso-e2e-premium" },
    update: {},
    create: {
      title: "Curso E2E Premium",
      slug: "curso-e2e-premium",
      description: "Curso de pago usado por el test E2E de compra.",
      categoryId: category.id,
      levelId: level.id,
      languageId: language.id,
      authorId: author.id,
      statusId: publishedStatus.id,
      accessTypeId: accessTypePremium.id,
      price: 29,
      publishedAt: new Date(),
    },
  });

  console.warn("✅ Datos de prueba E2E sembrados.");
  console.warn(
    `   Admin: ${TEST_CREDENTIALS.admin.email} / ${TEST_CREDENTIALS.admin.password}`
  );
  console.warn(
    `   Alumno: ${TEST_CREDENTIALS.student.email} / ${TEST_CREDENTIALS.student.password}`
  );
  console.warn(`   Curso gratis: /cursos/${freeCourse.slug}`);

  return { adminId: admin.id };
}

main()
  .catch((error) => {
    console.error("❌ Error al sembrar datos de prueba:", error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
