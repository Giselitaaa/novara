import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { generateInvoicePdf } from "@/modules/payments/server/invoice-pdf";

/**
 * Descarga de la factura en PDF. Se genera al vuelo (no requiere
 * almacenamiento externo) y solo puede descargarla el dueño del pago o
 * un administrador — nunca se expone la factura de otro usuario.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("No autorizado", { status: 401 });
  }

  const invoice = await db.invoice.findUnique({
    where: { id },
    include: {
      payment: {
        include: {
          course: { select: { title: true } },
          paymentMethod: { select: { label: true } },
          status: { select: { label: true } },
        },
      },
    },
  });

  if (!invoice) return new Response("Factura no encontrada", { status: 404 });

  const isOwner = invoice.payment.userId === session.user.id;
  const isAdmin = session.user.roles?.includes("administrador") ?? false;
  if (!isOwner && !isAdmin) {
    return new Response("No autorizado", { status: 403 });
  }

  const pdfBytes = await generateInvoicePdf({
    invoiceNumber: invoice.invoiceNumber,
    issuedAt: invoice.issuedAt,
    billingName: invoice.billingName,
    billingTaxId: invoice.billingTaxId,
    billingAddress: invoice.billingAddress,
    courseTitle: invoice.payment.course?.title ?? "Curso NOVARA",
    amount: Number(invoice.payment.amount),
    currency: invoice.payment.currency,
    methodLabel: invoice.payment.paymentMethod.label,
    statusLabel: invoice.payment.status.label,
  });

  return new Response(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="factura-${invoice.invoiceNumber}.pdf"`,
      "Cache-Control": "private, no-store",
    },
  });
}
