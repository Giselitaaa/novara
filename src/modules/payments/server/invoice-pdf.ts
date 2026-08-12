import "server-only";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import { siteConfig } from "@/config/site";

export type InvoiceData = {
  invoiceNumber: string;
  issuedAt: Date;
  billingName: string;
  billingTaxId: string | null;
  billingAddress: string | null;
  courseTitle: string;
  amount: number;
  currency: string;
  methodLabel: string;
  statusLabel: string;
};

const INK = rgb(0.08, 0.07, 0.12);
const MUTED = rgb(0.45, 0.43, 0.47);
const GOLD = rgb(0.79, 0.59, 0.24);

/**
 * Genera una factura en PDF REAL (bytes) a partir de los datos de la
 * factura. Usa pdf-lib (JS puro, sin navegador headless) para que
 * funcione igual en local y en el contenedor de producción. El PDF se
 * sirve bajo demanda por streaming — no requiere almacenamiento
 * externo, que en este entorno no está conectado.
 */
export async function generateInvoicePdf(data: InvoiceData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const M = 56;
  let y = height - M;

  // Cabecera de marca
  page.drawText(siteConfig.name.toUpperCase(), {
    x: M,
    y: y - 4,
    size: 20,
    font: bold,
    color: INK,
  });
  page.drawText("FACTURA", {
    x: width - M - 90,
    y: y - 4,
    size: 18,
    font: bold,
    color: GOLD,
  });
  y -= 30;
  page.drawText("Academia online", { x: M, y, size: 9, font, color: MUTED });
  page.drawText(`Nº ${data.invoiceNumber}`, {
    x: width - M - 160,
    y,
    size: 10,
    font,
    color: INK,
  });
  y -= 14;
  page.drawText(
    `Fecha: ${new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(data.issuedAt)}`,
    { x: width - M - 200, y, size: 10, font, color: MUTED }
  );

  y -= 40;
  page.drawLine({
    start: { x: M, y },
    end: { x: width - M, y },
    thickness: 1,
    color: rgb(0.9, 0.9, 0.9),
  });

  // Facturar a
  y -= 28;
  page.drawText("FACTURAR A", { x: M, y, size: 9, font: bold, color: MUTED });
  y -= 16;
  page.drawText(data.billingName, { x: M, y, size: 12, font: bold, color: INK });
  if (data.billingTaxId) {
    y -= 15;
    page.drawText(`NIF/CIF: ${data.billingTaxId}`, {
      x: M,
      y,
      size: 10,
      font,
      color: INK,
    });
  }
  if (data.billingAddress) {
    y -= 15;
    for (const line of data.billingAddress.split("\n").slice(0, 3)) {
      page.drawText(line, { x: M, y, size: 10, font, color: MUTED });
      y -= 13;
    }
  }

  // Tabla de conceptos
  y -= 30;
  page.drawRectangle({
    x: M,
    y: y - 4,
    width: width - 2 * M,
    height: 24,
    color: rgb(0.97, 0.96, 0.94),
  });
  page.drawText("CONCEPTO", { x: M + 10, y: y + 4, size: 9, font: bold, color: INK });
  page.drawText("IMPORTE", {
    x: width - M - 80,
    y: y + 4,
    size: 9,
    font: bold,
    color: INK,
  });
  y -= 30;

  const money = (n: number) =>
    new Intl.NumberFormat("es-ES", { style: "currency", currency: data.currency }).format(
      n
    );

  page.drawText(data.courseTitle.slice(0, 60), {
    x: M + 10,
    y,
    size: 11,
    font,
    color: INK,
  });
  page.drawText(money(data.amount), { x: width - M - 80, y, size: 11, font, color: INK });
  y -= 18;
  page.drawText(`Método de pago: ${data.methodLabel} · Estado: ${data.statusLabel}`, {
    x: M + 10,
    y,
    size: 8,
    font,
    color: MUTED,
  });

  // Total
  y -= 34;
  page.drawLine({
    start: { x: width / 2, y: y + 12 },
    end: { x: width - M, y: y + 12 },
    thickness: 1,
    color: rgb(0.9, 0.9, 0.9),
  });
  page.drawText("TOTAL", { x: width / 2, y, size: 12, font: bold, color: INK });
  page.drawText(money(data.amount), {
    x: width - M - 80,
    y,
    size: 14,
    font: bold,
    color: GOLD,
  });

  // Pie
  page.drawText(
    "Gracias por confiar en NOVARA. Este documento acredita el pago del servicio indicado.",
    { x: M, y: M, size: 8, font, color: MUTED }
  );

  return pdf.save();
}
