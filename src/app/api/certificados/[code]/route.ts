import { db } from "@/lib/db";
import { generateCertificatePdf } from "@/modules/certificates/server/certificate-pdf";

/**
 * Descarga del certificado en PDF por su código único. Es público a
 * propósito: un certificado es una credencial verificable y compartible
 * (la misma información que muestra la página pública de verificación).
 * No registra una verificación aquí para no inflar los logs con cada
 * descarga — la verificación se registra al abrir /verificar/[code].
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  const certificate = await db.certificate.findUnique({
    where: { uniqueCode: code.toUpperCase() },
    include: {
      user: { include: { profile: true } },
      course: { select: { title: true } },
    },
  });

  if (!certificate) return new Response("Certificado no encontrado", { status: 404 });

  const studentName = certificate.user.profile
    ? `${certificate.user.profile.firstName} ${certificate.user.profile.lastName}`
    : "Alumno de NOVARA";

  const pdfBytes = await generateCertificatePdf({
    studentName,
    courseTitle: certificate.course?.title ?? "Curso NOVARA",
    issuedAt: certificate.issuedAt,
    uniqueCode: certificate.uniqueCode,
    qrDataUrl: certificate.qrUrl,
  });

  return new Response(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="certificado-${certificate.uniqueCode}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
