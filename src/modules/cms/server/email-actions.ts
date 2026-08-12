"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireAdmin } from "@/modules/admin/server/guard";

export async function createEmailTemplate(formData: FormData) {
  await requireAdmin();

  const key = String(formData.get("key") ?? "").trim();
  if (!key) throw new Error("La clave es obligatoria.");

  const template = await db.emailTemplate.create({
    data: {
      key,
      subject: String(formData.get("subject") ?? ""),
      bodyHtml: String(formData.get("bodyHtml") ?? ""),
      isActive: true,
    },
  });

  revalidatePath("/admin/correos");
  return template;
}

export async function updateEmailTemplate(templateId: string, formData: FormData) {
  await requireAdmin();

  await db.emailTemplate.update({
    where: { id: templateId },
    data: {
      subject: String(formData.get("subject") ?? ""),
      bodyHtml: String(formData.get("bodyHtml") ?? ""),
      isActive: formData.get("isActive") === "on",
    },
  });

  revalidatePath("/admin/correos");
  revalidatePath(`/admin/correos/${templateId}`);
  return { status: "success" as const, message: "Plantilla guardada." };
}

export async function deleteEmailTemplate(templateId: string) {
  await requireAdmin();
  await db.emailTemplate.delete({ where: { id: templateId } });
  revalidatePath("/admin/correos");
}
