import "server-only";

import { randomBytes } from "node:crypto";

import QRCode from "qrcode";

import { db } from "@/lib/db";
import { emailShell, sendTransactionalEmail } from "@/lib/mail";

function generateCertificateCode() {
  return `NOV-${randomBytes(5).toString("hex").toUpperCase()}`;
}

/**
 * Comprueba si un alumno cumple los requisitos para certificarse en
 * un curso, y si es así, emite el certificado (idempotente — nunca
 * duplica). Regla: si el curso tiene examen, hace falta un intento
 * aprobado; si no tiene examen, basta con el 100% de progreso.
 *
 * Se llama tras completar una lección o aprobar un examen — nunca
 * hace falta invocarla manualmente.
 */
export async function issueCertificateIfEligible(userId: string, courseId: string) {
  const existing = await db.certificate.findFirst({ where: { userId, courseId } });
  if (existing) return existing;

  const course = await db.course.findUnique({
    where: { id: courseId },
    include: { exams: true },
  });
  if (!course) return null;

  let eligible = false;

  if (course.exams.length > 0) {
    const passedAttempt = await db.examAttempt.findFirst({
      where: { userId, exam: { courseId }, passed: true },
    });
    eligible = !!passedAttempt;
  } else {
    const summary = await db.courseProgressSummary.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
    eligible = Number(summary?.percentComplete ?? 0) >= 100;
  }

  if (!eligible) return null;

  const template = await db.certificateTemplate.findFirst({ where: { isDefault: true } });
  const templateId =
    template?.id ??
    (
      await db.certificateTemplate.create({
        data: { name: "Plantilla estándar", designConfig: {}, isDefault: true },
      })
    ).id;

  const uniqueCode = generateCertificateCode();
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verificar/${uniqueCode}`;
  const qrUrl = await QRCode.toDataURL(verificationUrl, { margin: 1, width: 240 });

  const certificate = await db.certificate.create({
    data: { userId, courseId, templateId, uniqueCode, qrUrl },
  });

  const user = await db.user.findUnique({
    where: { id: userId },
    include: { profile: true },
  });
  if (user) {
    await db.notification.create({
      data: {
        userId,
        type: "logro",
        title: "¡Certificado emitido!",
        body: `Ya tienes tu certificado de "${course.title}".`,
        relatedEntityType: "Certificate",
        relatedEntityId: certificate.id,
      },
    });

    await sendTransactionalEmail({
      userId,
      to: user.email,
      templateKey: "certificado_emitido",
      subject: "Tu certificado ya está disponible",
      html: emailShell({
        title: "Certificado emitido",
        bodyHtml: `Has completado <strong>${course.title}</strong>. Tu certificado, con código <strong>${uniqueCode}</strong>, ya está disponible.`,
        ctaLabel: "Ver mi certificado",
        ctaUrl: `${process.env.NEXT_PUBLIC_APP_URL}/perfil?tab=certificados`,
      }),
    });
  }

  return certificate;
}
