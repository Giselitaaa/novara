import { Receipt } from "lucide-react";
import type { Metadata } from "next";

import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import { listPayments } from "@/modules/payments/server/queries";

export const metadata: Metadata = { title: "Pagos" };

const STATUS_FILTERS = [
  { key: "", label: "Todos" },
  { key: "pendiente", label: "Pendientes" },
  { key: "en_revision", label: "En revisión" },
  { key: "aprobado", label: "Aprobados" },
  { key: "rechazado", label: "Rechazados" },
];

type Props = { searchParams: Promise<{ estado?: string; page?: string }> };

export default async function AdminPaymentsPage({ searchParams }: Props) {
  const { estado, page } = await searchParams;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { payments, total, totalPages } = await listPayments({
    statusKey: estado,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (estado) params.set("estado", estado);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/pagos?${query}` : "/admin/pagos";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Pagos</h1>
        <p className="mt-1 text-sm text-muted-foreground">{total} pedido(s) en total.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {STATUS_FILTERS.map((filter) => (
          <Button
            key={filter.key}
            asChild
            variant={
              estado === filter.key || (!estado && !filter.key) ? "gold" : "outline"
            }
            size="sm"
          >
            <Link
              href={filter.key ? `/admin/pagos?estado=${filter.key}` : "/admin/pagos"}
            >
              {filter.label}
            </Link>
          </Button>
        ))}
      </div>

      {payments.length === 0 ? (
        <EmptyState icon={Receipt} title="No hay pagos que coincidan con este filtro" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alumno</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead>Método</TableHead>
              <TableHead>Importe</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/admin/pagos/${payment.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {payment.user.profile
                      ? `${payment.user.profile.firstName} ${payment.user.profile.lastName}`
                      : payment.user.email}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {payment.course?.title ?? "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {payment.paymentMethod.label}
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {formatPrice(Number(payment.amount))}
                </TableCell>
                <TableCell>
                  <StatusBadge
                    statusKey={payment.status.key}
                    label={payment.status.label}
                  />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                    payment.createdAt
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        buildHref={buildHref}
      />
    </div>
  );
}
