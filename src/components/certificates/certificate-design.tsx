import { SealMark } from "@/components/layout/logo";

interface CertificateDesignProps {
  studentName: string;
  courseTitle: string;
  issuedAt: Date;
  uniqueCode: string;
  qrUrl: string | null;
}

/**
 * El diseño premium del certificado. Se usa tanto en la página de
 * verificación pública como en la vista del alumno — es una sola
 * fuente de verdad visual. Optimizado para impresión/"Guardar como
 * PDF" del navegador (ver `print:` utilities), sin depender de un
 * generador de PDF en servidor.
 */
export function CertificateDesign({
  studentName,
  courseTitle,
  issuedAt,
  uniqueCode,
  qrUrl,
}: CertificateDesignProps) {
  return (
    <div className="relative mx-auto aspect-[1.414/1] w-full max-w-3xl overflow-hidden rounded-lg border-2 border-gold/40 bg-card p-10 shadow-lifted sm:p-14 print:rounded-none print:border-black/30 print:shadow-none">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 rounded-md border border-gold/25"
      />

      <div className="relative flex h-full flex-col items-center justify-between text-center">
        <div className="flex flex-col items-center gap-2">
          <SealMark className="size-9 text-gold" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Certificado de finalización
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">Se certifica que</p>
          <h1 className="font-display text-3xl tracking-tighter sm:text-4xl">
            {studentName}
          </h1>
          <p className="text-sm text-muted-foreground">
            ha completado con éxito el curso
          </p>
          <h2 className="max-w-lg text-balance font-display text-xl italic tracking-tighter text-gold-foreground dark:text-gold sm:text-2xl">
            {courseTitle}
          </h2>
        </div>

        <div className="flex w-full items-end justify-between">
          <div className="text-left">
            <p className="font-mono text-xs text-muted-foreground">Fecha de emisión</p>
            <p className="text-sm font-medium">
              {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(issuedAt)}
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Código de verificación
            </p>
            <p className="font-mono text-sm font-medium">{uniqueCode}</p>
          </div>

          {qrUrl && (
            // eslint-disable-next-line @next/next/no-img-element -- data URI, no cabe en next/image remoto
            <img src={qrUrl} alt="Código QR de verificación" className="size-20" />
          )}
        </div>
      </div>
    </div>
  );
}
