"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { requireSession } from "@/lib/require-session";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

const createTicketSchema = z.object({
  subject: z.string().trim().min(3).max(150),
  category: z.enum(["pagos", "tecnico", "contenido", "cuenta"]),
  message: z.string().trim().min(10).max(2000),
});

export type SupportTicketActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Crea una solicitud de soporte real: un `SupportTicket` en estado
 * "abierto" con su primer `SupportMessage` (el propio mensaje del
 * alumno). Requiere sesión — sin cuenta no hay caso que hacer
 * seguimiento, así que la página de soporte pide iniciar sesión antes
 * de mostrar este formulario.
 */
export async function createSupportTicket(
  _prevState: SupportTicketActionState,
  formData: FormData
): Promise<SupportTicketActionState> {
  const session = await requireSession();
  if (!session?.user?.id) {
    return {
      status: "error",
      message: "Inicia sesión para enviar una solicitud de soporte.",
    };
  }

  const rl = checkRateLimit(`support:${session.user.id}`, 5, 60 * 60);
  if (!rl.allowed) {
    return {
      status: "error",
      message: `Has abierto demasiadas solicitudes seguidas. Espera ${Math.ceil(rl.resetInSeconds / 60)} minutos.`,
    };
  }

  const parsed = createTicketSchema.safeParse({
    subject: formData.get("subject"),
    category: formData.get("category"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos: el asunto y el mensaje son obligatorios.",
    };
  }

  const openStatus = await db.status.findUnique({ where: { key: "abierto" } });
  if (!openStatus) {
    return {
      status: "error",
      message: "No se pudo enviar la solicitud. Inténtalo más tarde.",
    };
  }

  await db.supportTicket.create({
    data: {
      userId: session.user.id,
      subject: parsed.data.subject,
      category: parsed.data.category,
      statusId: openStatus.id,
      messages: {
        create: { senderId: session.user.id, body: parsed.data.message },
      },
    },
  });

  return { status: "success" };
}

// ─────────────────────────────────────────────────────────────
// Lado administración: responder y gestionar el ciclo de vida del
// ticket. Cada acción se protege por sí misma con requireAdmin() —
// una server action es un endpoint invocable directamente— y deja
// rastro en AuditLog.
// ─────────────────────────────────────────────────────────────

const replySchema = z.object({
  ticketId: z.string().uuid(),
  body: z.string().trim().min(1, "Escribe una respuesta.").max(4000),
});

/**
 * Respuesta de un administrador a un ticket: crea el `SupportMessage`,
 * pasa el ticket a "respondida", notifica al alumno (notificación
 * interna + email transaccional) y registra la acción. Si el estado
 * "respondida" no existiese, el ticket se queda como está pero la
 * respuesta se guarda igualmente — nunca se pierde el mensaje.
 */
export async function replyToSupportTicket(ticketId: string, body: string) {
  const session = await requireAdmin();

  const parsed = replySchema.safeParse({ ticketId, body });
  if (!parsed.success) {
    return {
      status: "error" as const,
      message: parsed.error.issues[0]?.message ?? "Datos inválidos.",
    };
  }

  const ticket = await db.supportTicket.findUnique({
    where: { id: parsed.data.ticketId },
    include: { user: true },
  });
  if (!ticket) return { status: "error" as const, message: "El ticket ya no existe." };

  const respondedStatus = await db.status.findUnique({ where: { key: "respondida" } });

  await db.$transaction([
    db.supportMessage.create({
      data: { ticketId: ticket.id, senderId: session.user.id, body: parsed.data.body },
    }),
    ...(respondedStatus
      ? [
          db.supportTicket.update({
            where: { id: ticket.id },
            data: { statusId: respondedStatus.id },
          }),
        ]
      : []),
    db.notification.create({
      data: {
        userId: ticket.userId,
        type: "sistema",
        title: "Respuesta a tu solicitud de soporte",
        body: `Hemos respondido a "${ticket.subject}".`,
        relatedEntityType: "SupportTicket",
        relatedEntityId: ticket.id,
      },
    }),
  ]);

  // Email transaccional (degrada con elegancia si no hay clave de Resend).
  try {
    const { sendTransactionalEmail, emailShell } = await import("@/lib/mail");
    await sendTransactionalEmail({
      userId: ticket.userId,
      to: ticket.user.email,
      templateKey: "soporte_respuesta",
      subject: `Respuesta a tu solicitud: ${ticket.subject}`,
      html: emailShell({
        title: "Tenemos noticias de tu solicitud",
        bodyHtml: parsed.data.body.replace(/\n/g, "<br/>"),
        ctaLabel: "Ver mi solicitud",
        ctaUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/soporte`,
      }),
    });
  } catch {
    // El email es best-effort: la respuesta ya está registrada y notificada in-app.
  }

  await logAdminAction(session.user.id, "support.reply", "SupportTicket", ticket.id);
  revalidatePath(`/admin/soporte/${ticket.id}`);
  revalidatePath("/admin/soporte");
  return { status: "success" as const };
}

/** Cambia el estado de un ticket (abierto / en_proceso / cerrada). */
export async function setSupportTicketStatus(ticketId: string, statusKey: string) {
  const session = await requireAdmin();

  const allowed = ["abierto", "en_proceso", "respondida", "cerrada"];
  if (!allowed.includes(statusKey)) {
    return { status: "error" as const, message: "Estado no permitido." };
  }

  const status = await db.status.findUnique({ where: { key: statusKey } });
  if (!status) return { status: "error" as const, message: "Ese estado no existe." };

  await db.supportTicket.update({
    where: { id: ticketId },
    data: { statusId: status.id },
  });
  await logAdminAction(session.user.id, "support.set_status", "SupportTicket", ticketId, {
    statusKey,
  });
  revalidatePath(`/admin/soporte/${ticketId}`);
  revalidatePath("/admin/soporte");
  return { status: "success" as const };
}
