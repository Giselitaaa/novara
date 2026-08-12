import { Award, Download, ShieldCheck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "@/i18n/navigation";

type CertificateItem = {
  id: string;
  uniqueCode: string;
  issuedAt: Date;
  pdfUrl: string | null;
  course: { title: string; slug: string } | null;
};

export function CertificatesTab({ certificates }: { certificates: CertificateItem[] }) {
  if (certificates.length === 0) {
    return (
      <EmptyState
        icon={Award}
        title="Todavía no tienes certificados"
        description="Se generan automáticamente en cuanto apruebas el examen final de un curso."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {certificates.map((certificate) => (
        <Card key={certificate.id} className="flex flex-col gap-3 p-5">
          <div className="bg-gold/12 flex size-10 items-center justify-center rounded-md text-gold-foreground dark:text-gold">
            <Award className="size-5" />
          </div>
          <div>
            <p className="font-display text-lg tracking-tighter">
              {certificate.course?.title ?? "Certificado NOVARA"}
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {certificate.uniqueCode}
            </p>
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-1">
            <a
              href={`/api/certificados/${certificate.uniqueCode}`}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
            >
              <Download className="size-4" /> Descargar PDF
            </a>
            <Link
              href={`/verificar/${certificate.uniqueCode}`}
              className="flex items-center gap-1.5 text-sm font-medium text-gold-foreground hover:underline dark:text-gold"
            >
              <ShieldCheck className="size-4" /> Verificar / compartir
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
