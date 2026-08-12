import "server-only";

import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";
import { emailShell, sendTransactionalEmail } from "@/lib/mail";

/**
 * Barrido de retención: avisa por email a los alumnos que llevan ~7 o
 * ~30 días sin entrar. Usa ventanas de 1 día (7–8 y 30–31 días desde el
 * último login) para que un cron DIARIO envíe una sola vez por hito y
 * no machaque al usuario. Respeta `acceptsMarketing`: quien se ha dado
 * de baja de comunicaciones no recibe estos correos (los transaccionales
 * imprescindibles sí siguen llegando por otras vías).
 *
 * IMPORTANTE: esto NO se ejecuta solo. Necesita un cron que llame a
 * `/api/cron/retention`. Sin programarlo, estos emails no se envían.
 */
export async function runRetentionSweep() {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;

  const windows = [
    { key: "retencion_7dias" as const, from: 8, to: 7, label: "7 días" },
    { key: "retencion_30dias" as const, from: 31, to: 30, label: "30 días" },
  ];

  let sent = 0;
  const results: Record<string, number> = {};

  for (const w of windows) {
    const users = await db.user.findMany({
      where: {
        deletedAt: null,
        lastLoginAt: {
          gte: new Date(now - w.from * day),
          lt: new Date(now - w.to * day),
        },
        profile: { acceptsMarketing: true },
      },
      select: { id: true, email: true, profile: { select: { firstName: true } } },
    });

    for (const user of users) {
      const firstName = user.profile?.firstName ?? "";
      const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "";
      await sendTransactionalEmail({
        userId: user.id,
        to: user.email,
        templateKey: w.key,
        subject: `Te echamos de menos en ${siteConfig.name}`,
        variables: { nombre: firstName, dias: w.label },
        html: emailShell({
          title: `Hola${firstName ? " " + firstName : ""}, seguimos aquí`,
          bodyHtml: `Hace ${w.label} que no te vemos por ${siteConfig.name}. Retoma tu aprendizaje justo donde lo dejaste — tus cursos te esperan.`,
          ctaLabel: "Volver a aprender",
          ctaUrl: `${appUrl}/mi-aprendizaje`,
        }),
      });
      sent += 1;
    }
    results[w.label] = users.length;
  }

  return { sent, byWindow: results };
}
