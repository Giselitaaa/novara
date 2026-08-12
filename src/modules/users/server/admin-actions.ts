"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

export async function setUserRole(userId: string, roleId: string) {
  const session = await requireAdmin();

  await db.$transaction([
    db.userRole.deleteMany({ where: { userId } }),
    db.userRole.create({ data: { userId, roleId } }),
  ]);

  await logAdminAction(session.user.id, "users.role_change", "User", userId, { roleId });
  revalidatePath(`/admin/usuarios/${userId}`);
  return { status: "success" as const, message: "Rol actualizado." };
}

export async function setUserStatus(userId: string, statusKey: string) {
  const session = await requireAdmin();

  if (userId === session.user.id && statusKey !== "activo") {
    throw new Error("No puedes bloquear tu propia cuenta.");
  }

  const status = await db.userStatus.findUnique({ where: { key: statusKey } });
  if (!status) throw new Error("Estado no válido.");

  await db.user.update({ where: { id: userId }, data: { statusId: status.id } });

  await logAdminAction(
    session.user.id,
    statusKey === "baneado" ? "users.ban" : "users.status_change",
    "User",
    userId,
    { statusKey }
  );

  revalidatePath(`/admin/usuarios/${userId}`);
  revalidatePath("/admin/usuarios");
  return { status: "success" as const, message: "Estado actualizado." };
}
