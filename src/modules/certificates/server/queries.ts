import "server-only";

import { db } from "@/lib/db";

/**
 * Resumen de un certificado por código SIN registrar verificación —
 * para metadatos Open Graph al compartir el enlace, donde no queremos
 * contar una "verificación" por cada previsualización en redes.
 */
export async function getCertificateSummary(code: string) {
  const certificate = await db.certificate.findUnique({
    where: { uniqueCode: code },
    select: {
      uniqueCode: true,
      issuedAt: true,
      course: { select: { title: true, deletedAt: true } },
      user: { select: { profile: { select: { firstName: true, lastName: true } } } },
    },
  });
  // Un curso archivado no debe seguir siendo verificable públicamente —
  // se trata igual que un código inexistente, sin exponer su nombre.
  if (!certificate || certificate.course?.deletedAt) return null;
  return {
    uniqueCode: certificate.uniqueCode,
    issuedAt: certificate.issuedAt,
    courseTitle: certificate.course?.title ?? "Curso NOVARA",
    studentName: certificate.user.profile
      ? `${certificate.user.profile.firstName} ${certificate.user.profile.lastName}`
      : "Alumno de NOVARA",
  };
}

export async function getCertificateByCode(code: string) {
  const certificate = await db.certificate.findUnique({
    where: { uniqueCode: code },
    include: {
      user: { include: { profile: true } },
      course: { select: { title: true, categoryId: true, deletedAt: true } },
    },
  });

  // Un curso archivado no debe seguir siendo verificable públicamente —
  // se trata igual que un código inexistente, sin exponer su nombre ni
  // el del alumno. El certificado en sí no se borra ni se invalida en BD.
  if (certificate?.course?.deletedAt) return null;

  if (certificate) {
    await db.certificateVerificationLog.create({
      data: { certificateId: certificate.id },
    });
  }

  return certificate;
}
