/**
 * Alta/actualización de una cuenta de ADMINISTRADORA para NOVARA.
 * Crea (o actualiza) el usuario con el correo indicado, contraseña hasheada con
 * bcrypt (coste 12, igual que el registro real de la app), estado "activo",
 * email verificado, perfil y rol de administrador.
 *
 *   node scripts/set-admin.mjs
 */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

const EMAIL = "giselitataoufik19@gmail.com";
const PASSWORD = "Gisela1206";
const FIRST_NAME = "Gisela";
const LAST_NAME = "Taoufik";

async function main() {
  const [activeStatus, adminRole] = await Promise.all([
    db.userStatus.findUniqueOrThrow({ where: { key: "activo" } }),
    db.role.findUniqueOrThrow({ where: { name: "administrador" } }),
  ]);

  const passwordHash = await bcrypt.hash(PASSWORD, 12);

  const user = await db.user.upsert({
    where: { email: EMAIL },
    create: {
      email: EMAIL,
      passwordHash,
      emailVerifiedAt: new Date(),
      statusId: activeStatus.id,
      profile: { create: { firstName: FIRST_NAME, lastName: LAST_NAME } },
      roles: { create: { roleId: adminRole.id } },
    },
    update: {
      passwordHash,
      statusId: activeStatus.id,
      emailVerifiedAt: new Date(),
    },
    select: { id: true, email: true },
  });

  // Garantiza el rol de administrador (si el usuario ya existía sin rol).
  await db.userRole.upsert({
    where: { userId_roleId: { userId: user.id, roleId: adminRole.id } },
    create: { userId: user.id, roleId: adminRole.id },
    update: {},
  });

  // Garantiza el perfil (necesario para el dashboard del alumno).
  const profile = await db.userProfile.findUnique({ where: { userId: user.id } });
  if (!profile) {
    await db.userProfile.create({ data: { userId: user.id, firstName: FIRST_NAME, lastName: LAST_NAME } });
  }

  // Verificación: la contraseña debe validar exactamente como en el login.
  const check = await db.user.findUnique({ where: { email: EMAIL }, select: { passwordHash: true, roles: { select: { role: { select: { name: true } } } } } });
  const ok = check?.passwordHash ? await bcrypt.compare(PASSWORD, check.passwordHash) : false;
  console.warn(`✅ Admin lista: ${user.email}`);
  console.warn(`   rol admin: ${check?.roles.some((r) => r.role.name === "administrador")}`);
  console.warn(`   la contraseña valida en login: ${ok}`);
}

main()
  .catch((e) => { console.error("❌ Error:", e); process.exit(1); })
  .finally(async () => { await db.$disconnect(); });
