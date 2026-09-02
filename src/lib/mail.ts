import "server-only";

import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";
import { interpolate } from "@/lib/interpolate";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

type SendTransactionalEmailInput = {
  userId?: string;
  to: string;
  /** Clave de plantilla (coincide con `emailTemplate.key`; ver seed de correos). */
  templateKey: string;
  subject: string;
  html: string;
  /**
   * Variables para interpolar en la plantilla ({{nombre}}, {{curso}}…).
   * Se aplican tanto a la plantilla de BD como al HTML por defecto.
   */
  variables?: Record<string, string>;
};

/** Remitente configurado en `EMAIL_FROM` ("NOVARA <novaracademy@proton.me>"). */
function parseFrom(): { name: string; email: string } {
  const raw = process.env.EMAIL_FROM ?? `${siteConfig.name} <onboarding@resend.dev>`;
  const m = raw.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (m && m[2]) return { name: m[1] || siteConfig.name, email: m[2] };
  return { name: siteConfig.name, email: raw.trim() };
}

/**
 * Entrega el correo por el proveedor ACTIVO, sin acoplar el resto del dominio:
 *  • Brevo (gratis, 300/día, remitente verificado sin dominio) si hay BREVO_API_KEY.
 *  • Resend si hay RESEND_API_KEY (requiere dominio verificado).
 * Devuelve el id del proveedor. Lanza si el proveedor responde error.
 */
async function deliver(
  to: string,
  subject: string,
  html: string
): Promise<{ id?: string }> {
  const from = parseFrom();
  const brevoKey = process.env.BREVO_API_KEY;
  if (brevoKey) {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: from,
        to: [{ email: to }],
        subject,
        htmlContent: html,
      }),
    });
    if (!res.ok) throw new Error(`Brevo ${res.status}: ${await res.text()}`);
    const data = (await res.json().catch(() => ({}))) as { messageId?: string };
    return { id: data.messageId };
  }
  if (resend) {
    const result = await resend.emails.send({
      from: `${from.name} <${from.email}>`,
      to,
      subject,
      html,
    });
    if (result.error) throw new Error(String(result.error.message ?? result.error));
    return { id: result.data?.id };
  }
  throw new Error("no-provider");
}

/**
 * Único punto de envío de correo transaccional de toda la plataforma.
 * Registra cada intento en `EmailLog` — enviado o fallido — antes de
 * devolver el control, para que soporte pueda auditar "¿le llegó el
 * correo a este usuario?" sin depender del panel del proveedor.
 *
 * En desarrollo, si no hay `RESEND_API_KEY` configurada, el correo se
 * registra como "pendiente" y el contenido se imprime en consola en
 * vez de fallar — así el flujo se puede probar de extremo a extremo
 * sin credenciales reales.
 */
export async function sendTransactionalEmail({
  userId,
  to,
  templateKey,
  subject,
  html,
  variables,
}: SendTransactionalEmailInput) {
  // Conexión plantillas ↔ envío: si existe una plantilla ACTIVA en BD
  // para esta `key` (gestionada desde /admin/correos), gana sobre el
  // HTML embebido por defecto. Así se puede cambiar el contenido de los
  // correos sin desplegar código. Si no existe, se usa el HTML por
  // defecto — nunca se queda sin enviar por no encontrar plantilla.
  let finalSubject = interpolate(subject, variables);
  let finalHtml = interpolate(html, variables);
  try {
    const template = await db.emailTemplate.findUnique({ where: { key: templateKey } });
    if (template?.isActive) {
      finalSubject = interpolate(template.subject, variables);
      finalHtml = interpolate(template.bodyHtml, variables);
    }
  } catch {
    // Si la consulta de plantilla falla, seguimos con el HTML por defecto.
  }

  // Sin proveedor configurado (desarrollo): se registra "pendiente" y se
  // imprime en consola, para probar el flujo sin credenciales reales.
  if (!process.env.BREVO_API_KEY && !resend) {
    console.warn(`[mail:dev] → ${to} (${templateKey}): ${finalSubject}`);
    await db.emailLog.create({
      data: { userId, templateKey, sentTo: to, status: "pendiente" },
    });
    return { delivered: false, dev: true };
  }

  try {
    const { id } = await deliver(to, finalSubject, finalHtml);
    await db.emailLog.create({
      data: {
        userId,
        templateKey,
        sentTo: to,
        status: "enviado",
        providerMessageId: id,
        sentAt: new Date(),
      },
    });
    return { delivered: true };
  } catch (error) {
    console.error("[mail] Error al enviar correo:", error);
    await db.emailLog.create({
      data: { userId, templateKey, sentTo: to, status: "fallido" },
    });
    return { delivered: false, error };
  }
}

/**
 * Envoltorio visual mínimo y coherente con la marca para los correos
 * transaccionales. Deliberadamente simple (tablas, estilos inline):
 * es lo único que se renderiza de forma fiable en todos los clientes
 * de correo.
 */
export function emailShell({
  title,
  bodyHtml,
  ctaLabel,
  ctaUrl,
}: {
  title: string;
  bodyHtml: string;
  ctaLabel: string;
  ctaUrl: string;
}) {
  return `
  <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px; color: #14121F;">
    <p style="font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #C9973D; margin-bottom: 24px;">
      ${siteConfig.name}
    </p>
    <h1 style="font-size: 22px; margin: 0 0 16px;">${title}</h1>
    <div style="font-size: 15px; line-height: 1.6; color: #3f3b46;">${bodyHtml}</div>
    <a href="${ctaUrl}"
       style="display: inline-block; margin-top: 28px; background: #C9973D; color: #14121F; text-decoration: none; font-weight: 600; padding: 12px 24px; border-radius: 8px; font-size: 14px;">
      ${ctaLabel}
    </a>
    <p style="margin-top: 32px; font-size: 12px; color: #8a8580;">
      Si no esperabas este correo, puedes ignorarlo con seguridad.
    </p>
  </div>`;
}
