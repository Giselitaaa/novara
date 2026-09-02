"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { EMAIL_SAMPLE_VARS } from "@/lib/email-sample-vars";
import { sendTransactionalEmail } from "@/lib/mail";
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

/**
 * Envía un correo de PRUEBA de esta plantilla al email indicado (por defecto,
 * el de la administradora), con datos de ejemplo realistas. Sirve para revisar
 * cómo se ve un correo antes de activar una campaña.
 */
export async function sendTemplateTest(templateId: string, toEmail?: string) {
  const session = await requireAdmin();
  const template = await db.emailTemplate.findUnique({ where: { id: templateId } });
  if (!template) throw new Error("Plantilla no encontrada.");

  const to = (toEmail || session.user.email || "").trim();
  if (!to) throw new Error("No hay un correo de destino para la prueba.");

  const result = await sendTransactionalEmail({
    userId: session.user.id,
    to,
    templateKey: template.key,
    subject: `[PRUEBA] ${template.subject}`,
    html: template.bodyHtml,
    variables: EMAIL_SAMPLE_VARS,
  });

  if (result.dev) {
    return {
      status: "error" as const,
      message:
        "No hay proveedor de correo configurado (falta BREVO_API_KEY o RESEND_API_KEY).",
    };
  }
  if (!result.delivered) {
    return {
      status: "error" as const,
      message:
        "El proveedor rechazó el envío. Revisa que el remitente esté verificado en Brevo y que la IP esté autorizada.",
    };
  }
  return { status: "success" as const, message: `Correo de prueba enviado a ${to}.` };
}
