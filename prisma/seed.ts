import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

/**
 * Seed de catálogos estructurales.
 *
 * Esto NO es contenido de la plataforma (no hay cursos, categorías de
 * negocio ni usuarios de prueba aquí). Son las tablas "lookup" que el
 * modelo de datos exige para que la aplicación sea funcional desde el
 * primer arranque: sin un `UserStatus` no se puede ni crear un usuario.
 *
 * El contenido real (cursos, categorías del catálogo, banners...) se
 * gestiona desde el panel de administración una vez construido.
 */
async function main() {
  await db.userStatus.createMany({
    data: [
      { key: "activo", label: "Activo" },
      { key: "pendiente_verificacion", label: "Pendiente de verificación" },
      { key: "suspendido", label: "Suspendido" },
      { key: "baneado", label: "Baneado" },
    ],
    skipDuplicates: true,
  });

  await db.role.createMany({
    data: [
      { name: "alumno", description: "Usuario estándar de la plataforma" },
      {
        name: "administrador",
        description: "Acceso completo al panel de administración",
      },
    ],
    skipDuplicates: true,
  });

  await db.status.createMany({
    data: [
      { key: "activo", label: "Activo" },
      { key: "inactivo", label: "Inactivo" },
      { key: "archivado", label: "Archivado" },
      { key: "pendiente_moderacion", label: "Pendiente de moderación" },
      { key: "publicada", label: "Publicada" },
      { key: "rechazada", label: "Rechazada" },
      { key: "abierta", label: "Abierta" },
      { key: "respondida", label: "Respondida" },
      { key: "cerrada", label: "Cerrada" },
      { key: "abierto", label: "Abierto" },
      { key: "en_proceso", label: "En proceso" },
      { key: "cerrado", label: "Cerrado" },
    ],
    skipDuplicates: true,
  });

  await db.courseLevel.createMany({
    data: [
      { key: "principiante", label: "Principiante" },
      { key: "intermedio", label: "Intermedio" },
      { key: "avanzado", label: "Avanzado" },
      { key: "experto", label: "Experto" },
    ],
    skipDuplicates: true,
  });

  await db.language.createMany({
    data: [
      { code: "es", name: "Español" },
      { code: "en", name: "English" },
    ],
    skipDuplicates: true,
  });

  await db.courseStatus.createMany({
    data: [
      { key: "borrador", label: "Borrador" },
      { key: "en_revision", label: "En revisión" },
      { key: "aprobado", label: "Aprobado" },
      { key: "publicado", label: "Publicado" },
      { key: "archivado", label: "Archivado" },
    ],
    skipDuplicates: true,
  });

  await db.accessType.createMany({
    data: [
      { key: "gratis", label: "Gratis" },
      { key: "premium", label: "Premium" },
    ],
    skipDuplicates: true,
  });

  await db.contentType.createMany({
    data: [
      { key: "video", label: "Vídeo" },
      { key: "texto", label: "Texto" },
      { key: "audio", label: "Audio" },
      { key: "pdf", label: "PDF" },
      { key: "enlace_externo", label: "Enlace externo" },
      { key: "ejercicio", label: "Ejercicio" },
    ],
    skipDuplicates: true,
  });

  await db.resourceType.createMany({
    data: [
      { key: "pdf", label: "PDF" },
      { key: "plantilla", label: "Plantilla" },
      { key: "dataset", label: "Dataset" },
      { key: "codigo_fuente", label: "Código fuente" },
      { key: "imagen", label: "Imagen" },
      { key: "otro", label: "Otro" },
    ],
    skipDuplicates: true,
  });

  await db.questionType.createMany({
    data: [
      { key: "opcion_multiple", label: "Opción múltiple" },
      { key: "verdadero_falso", label: "Verdadero / Falso" },
      { key: "respuesta_corta", label: "Respuesta corta" },
      { key: "ordenar", label: "Ordenar" },
      { key: "relacionar", label: "Relacionar conceptos" },
    ],
    skipDuplicates: true,
  });

  await db.enrollmentSource.createMany({
    data: [
      { key: "compra", label: "Compra" },
      { key: "gratis", label: "Gratis" },
      { key: "regalo", label: "Regalo" },
      { key: "cupon", label: "Cupón" },
    ],
    skipDuplicates: true,
  });

  await db.paymentMethod.createMany({
    data: [
      { key: "bizum", label: "Bizum" },
      { key: "transferencia_bancaria", label: "Transferencia bancaria" },
      { key: "tarjeta", label: "Tarjeta (Stripe)" },
    ],
    skipDuplicates: true,
  });

  await db.paymentStatus.createMany({
    data: [
      { key: "pendiente", label: "Pendiente" },
      { key: "en_revision", label: "En revisión" },
      { key: "aprobado", label: "Aprobado" },
      { key: "rechazado", label: "Rechazado" },
      { key: "reembolsado", label: "Reembolsado" },
    ],
    skipDuplicates: true,
  });

  // El autor por defecto de la plataforma. Es contenido, no un
  // catálogo puro, pero se siembra igualmente porque `Course.authorId`
  // es obligatorio: sin al menos un autor, no se podría crear ni el
  // primer curso desde el panel de administración.
  const novaraAuthorExists = await db.author.findFirst({
    where: { isPlatformAuthor: true },
  });
  if (!novaraAuthorExists) {
    await db.author.create({
      data: {
        displayName: "NOVARA",
        bio: "Contenido creado y verificado por el equipo editorial de NOVARA.",
        isPlatformAuthor: true,
      },
    });
  }

  // ─── Bootstrap del administrador por defecto ────────────────────────
  //
  // Sin esto, una instalación nueva no tiene ninguna vía de entrar a
  // `/admin` — el panel exige rol "administrador" y no hay ningún
  // usuario que lo tenga. Idempotente por diseño (usa `upsert`, se
  // puede ejecutar tantas veces como se despliegue la plataforma):
  //
  // - Si el usuario NO existe: se crea con la contraseña por defecto
  //   (hasheada exactamente igual que en el registro real de NOVARA —
  //   `bcrypt` con coste 12, ver `modules/users/server/actions.ts`),
  //   perfil, estado "activo" y rol "administrador".
  // - Si el usuario YA existe: se reutiliza tal cual. Deliberadamente
  //   NO se sobrescribe su contraseña en cada ejecución — un admin
  //   real puede haberla cambiado desde su perfil, y un seed que corra
  //   en cada despliegue no debe poder resetearla por sorpresa. Lo
  //   único que se garantiza en cada ejecución es que su cuenta siga
  //   activa y con el rol de administrador (por si alguien la hubiera
  //   tocado a mano en la base de datos).
  const DEFAULT_ADMIN = {
    email: "admin@novara.local",
    password: "Admin123!",
    firstName: "Administrador",
    lastName: "NOVARA",
  };

  const [activeStatusForAdmin, adminRoleForBootstrap] = await Promise.all([
    db.userStatus.findUniqueOrThrow({ where: { key: "activo" } }),
    db.role.findUniqueOrThrow({ where: { name: "administrador" } }),
  ]);

  const existingAdmin = await db.user.findUnique({
    where: { email: DEFAULT_ADMIN.email },
  });

  const adminUser = await db.user.upsert({
    where: { email: DEFAULT_ADMIN.email },
    create: {
      email: DEFAULT_ADMIN.email,
      passwordHash: await bcrypt.hash(DEFAULT_ADMIN.password, 12),
      emailVerifiedAt: new Date(),
      statusId: activeStatusForAdmin.id,
      profile: {
        create: {
          firstName: DEFAULT_ADMIN.firstName,
          lastName: DEFAULT_ADMIN.lastName,
        },
      },
      roles: {
        create: { roleId: adminRoleForBootstrap.id },
      },
    },
    // En la rama de actualización nunca se toca `passwordHash` — ver
    // el razonamiento arriba. Solo se garantiza que la cuenta exista
    // y siga activa.
    update: {
      statusId: activeStatusForAdmin.id,
    },
  });

  // Garantiza el rol de administrador también si el usuario ya existía
  // de antes (por ejemplo, creado a mano en la base de datos sin rol
  // asignado) — `upsert` sobre la clave compuesta hace que esto sea
  // un no-op seguro si el rol ya estaba asignado.
  await db.userRole.upsert({
    where: { userId_roleId: { userId: adminUser.id, roleId: adminRoleForBootstrap.id } },
    create: { userId: adminUser.id, roleId: adminRoleForBootstrap.id },
    update: {},
  });

  if (existingAdmin) {
    console.warn(
      "♻️  Administrador ya existía — reutilizado (contraseña sin modificar)."
    );
    console.warn(`   Email: ${DEFAULT_ADMIN.email}`);
  } else {
    console.warn("✅ Administrador creado correctamente. Credenciales de acceso:");
    console.warn(`   Email:       ${DEFAULT_ADMIN.email}`);
    console.warn(`   Contraseña:  ${DEFAULT_ADMIN.password}`);
    console.warn("   ⚠️  Cambia esta contraseña desde /perfil en cuanto inicies sesión.");
  }

  // Gamificación: insignias, logros y niveles. Igual que el autor por
  // defecto, es contenido mínimo estructural — sin esto el motor de
  // gamificación no tendría nada que conceder cuando un alumno cumpla
  // una regla.
  const badgeDefs = [
    {
      key: "primera_leccion",
      name: "Primer paso",
      description: "Completaste tu primera lección.",
    },
    {
      key: "primer_curso_completado",
      name: "Meta cumplida",
      description: "Completaste tu primer curso.",
    },
    {
      key: "racha_7_dias",
      name: "Constancia",
      description: "7 días seguidos estudiando.",
    },
    {
      key: "primer_certificado",
      name: "Verificado",
      description: "Obtuviste tu primer certificado.",
    },
  ];

  for (const def of badgeDefs) {
    const existingAchievement = await db.achievement.findUnique({
      where: { key: def.key },
    });
    if (existingAchievement) continue;

    const badge = await db.badge.create({
      data: { name: def.name, criteriaDescription: def.description },
    });
    await db.achievement.create({
      data: {
        key: def.key,
        name: def.name,
        description: def.description,
        badgeId: badge.id,
      },
    });
  }

  await db.userLevel.createMany({
    data: [
      { name: "Novato", minXp: 0 },
      { name: "Aprendiz", minXp: 100 },
      { name: "Constante", minXp: 300 },
      { name: "Experto", minXp: 700 },
      { name: "Maestro NOVARA", minXp: 1500 },
    ],
    skipDuplicates: true,
  });

  console.warn("✅ Catálogos base sembrados correctamente.");
}

main()
  .catch((error) => {
    console.error("❌ Error al sembrar los catálogos:", error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
