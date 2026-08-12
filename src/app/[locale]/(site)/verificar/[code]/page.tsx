import { CheckCircle2, Download, XCircle } from "lucide-react";
import type { Metadata } from "next";

import { CertificateDesign } from "@/components/certificates/certificate-design";
import { ShareCertificate } from "@/components/certificates/share-certificate";
import { Container } from "@/components/layout/container";
import {
  getCertificateByCode,
  getCertificateSummary,
} from "@/modules/certificates/server/queries";

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const summary = await getCertificateSummary(code.toUpperCase());
  if (!summary) return { title: "Certificado no encontrado" };

  const title = `Certificado de ${summary.studentName} — ${summary.courseTitle}`;
  const description = `Certificado de finalización emitido por NOVARA. Código de verificación ${summary.uniqueCode}.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/verificar/${summary.uniqueCode}`,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function VerifyCertificatePage({ params }: Props) {
  const { code } = await params;
  const certificate = await getCertificateByCode(code.toUpperCase());

  const studentName = certificate
    ? certificate.user.profile
      ? `${certificate.user.profile.firstName} ${certificate.user.profile.lastName}`
      : certificate.user.email
    : "";

  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto mb-8 flex max-w-md flex-col items-center gap-3 text-center print:hidden">
        {certificate ? (
          <>
            <CheckCircle2 className="size-8 text-success" />
            <h1 className="font-display text-2xl tracking-tighter">
              Certificado verificado
            </h1>
            <p className="text-sm text-muted-foreground">
              Este certificado es auténtico y fue emitido por NOVARA.
            </p>
          </>
        ) : (
          <>
            <XCircle className="size-8 text-destructive" />
            <h1 className="font-display text-2xl tracking-tighter">
              Certificado no encontrado
            </h1>
            <p className="text-sm text-muted-foreground">
              El código «{code}» no corresponde a ningún certificado emitido por NOVARA.
            </p>
          </>
        )}
      </div>

      {certificate && (
        <>
          <CertificateDesign
            studentName={studentName}
            courseTitle={certificate.course?.title ?? "Curso NOVARA"}
            issuedAt={certificate.issuedAt}
            uniqueCode={certificate.uniqueCode}
            qrUrl={certificate.qrUrl}
          />

          {/* Qué acredita, de forma legible */}
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-border p-5 text-sm print:hidden">
            <p className="mb-3 font-display text-base tracking-tighter">Qué acredita</p>
            <dl className="flex flex-col gap-2">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Alumno/a</dt>
                <dd className="font-medium">{studentName}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Curso</dt>
                <dd className="text-right font-medium">
                  {certificate.course?.title ?? "Curso NOVARA"}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Fecha de emisión</dt>
                <dd className="font-medium">
                  {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
                    certificate.issuedAt
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Código</dt>
                <dd className="font-mono font-medium">{certificate.uniqueCode}</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-4 print:hidden">
            <a
              href={`/api/certificados/${certificate.uniqueCode}`}
              className="inline-flex items-center gap-1.5 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" /> Descargar PDF
            </a>
            <ShareCertificate code={certificate.uniqueCode} />
          </div>
        </>
      )}
    </Container>
  );
}
