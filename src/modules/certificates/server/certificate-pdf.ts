import "server-only";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import { siteConfig } from "@/config/site";

export type CertificatePdfData = {
  studentName: string;
  courseTitle: string;
  issuedAt: Date;
  uniqueCode: string;
  qrDataUrl: string | null;
};

const INK = rgb(0.08, 0.07, 0.12);
const MUTED = rgb(0.45, 0.43, 0.47);
const GOLD = rgb(0.79, 0.59, 0.24);
const PAPER = rgb(0.99, 0.985, 0.97);

/**
 * Certificado en PDF REAL, fiel al diseño en pantalla
 * (`certificate-design.tsx`): A4 apaisado, marco dorado doble, sello,
 * nombre en serif, curso en serif itálica dorada, fecha, código en
 * monoespaciada y QR de verificación.
 *
 * Elección de generador: pdf-lib (JS puro). Se descarta Puppeteer/
 * Chromium para NO añadir un navegador headless (~300 MB) al contenedor
 * de producción; el mismo enfoque que la factura, desplegable en
 * cualquier sitio. Se sirve por streaming, sin almacenamiento externo.
 */
export async function generateCertificatePdf(
  data: CertificatePdfData
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([841.89, 595.28]); // A4 apaisado
  const { width, height } = page.getSize();

  const serif = await pdf.embedFont(StandardFonts.TimesRoman);
  const serifItalic = await pdf.embedFont(StandardFonts.TimesRomanItalic);
  const sans = await pdf.embedFont(StandardFonts.Helvetica);
  const mono = await pdf.embedFont(StandardFonts.Courier);

  // Fondo papel + marco dorado doble
  page.drawRectangle({ x: 0, y: 0, width, height, color: PAPER });
  page.drawRectangle({
    x: 24,
    y: 24,
    width: width - 48,
    height: height - 48,
    borderColor: GOLD,
    borderWidth: 2,
    color: PAPER,
  });
  page.drawRectangle({
    x: 34,
    y: 34,
    width: width - 68,
    height: height - 68,
    borderColor: rgb(0.85, 0.7, 0.42),
    borderWidth: 0.75,
  });

  const center = (
    text: string,
    y: number,
    font: typeof serif,
    size: number,
    color = INK
  ) => {
    const w = font.widthOfTextAtSize(text, size);
    page.drawText(text, { x: (width - w) / 2, y, size, font, color });
  };

  // Cabecera
  center(siteConfig.name.toUpperCase(), height - 90, sans, 13, GOLD);
  center("CERTIFICADO DE FINALIZACIÓN", height - 120, sans, 10, MUTED);

  // Cuerpo
  center("Se certifica que", height - 200, serif, 14, MUTED);
  center(data.studentName, height - 250, serif, 34, INK);
  center("ha completado con éxito el curso", height - 295, serif, 14, MUTED);

  // Título del curso (puede ser largo: se reduce el tamaño si no cabe)
  let courseSize = 24;
  const maxWidth = width - 200;
  while (
    serifItalic.widthOfTextAtSize(data.courseTitle, courseSize) > maxWidth &&
    courseSize > 12
  ) {
    courseSize -= 1;
  }
  center(data.courseTitle, height - 340, serifItalic, courseSize, GOLD);

  // Pie: fecha + código (izquierda), QR (derecha)
  const baseY = 90;
  page.drawText("FECHA DE EMISIÓN", {
    x: 80,
    y: baseY + 40,
    size: 8,
    font: mono,
    color: MUTED,
  });
  page.drawText(
    new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(data.issuedAt),
    { x: 80, y: baseY + 26, size: 11, font: serif, color: INK }
  );
  page.drawText("CÓDIGO DE VERIFICACIÓN", {
    x: 80,
    y: baseY,
    size: 8,
    font: mono,
    color: MUTED,
  });
  page.drawText(data.uniqueCode, {
    x: 80,
    y: baseY - 14,
    size: 11,
    font: mono,
    color: INK,
  });

  // QR (data URL PNG)
  if (data.qrDataUrl?.startsWith("data:image")) {
    try {
      const b64 = data.qrDataUrl.split(",")[1] ?? "";
      const png = await pdf.embedPng(Buffer.from(b64, "base64"));
      const qrSize = 90;
      page.drawImage(png, {
        x: width - 80 - qrSize,
        y: baseY - 14,
        width: qrSize,
        height: qrSize,
      });
    } catch {
      // Si el QR no se puede incrustar, el certificado sigue siendo válido sin él.
    }
  }

  // Línea de firma
  page.drawLine({
    start: { x: width / 2 - 90, y: baseY + 18 },
    end: { x: width / 2 + 90, y: baseY + 18 },
    thickness: 0.75,
    color: rgb(0.8, 0.8, 0.8),
  });
  center("Dirección académica · " + siteConfig.name, baseY, sans, 9, MUTED);

  return pdf.save();
}
