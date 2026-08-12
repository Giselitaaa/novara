import { LifeBuoy } from "lucide-react";
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
import { requireAdmin } from "@/modules/admin/server/guard";
import { listSupportTickets } from "@/modules/support/server/queries";

export const metadata: Metadata = { title: "Soporte" };

const STATUS_FILTERS = [
  { key: "", label: "Todos" },
  { key: "abierto", label: "Abiertos" },
  { key: "en_proceso", label: "En proceso" },
  { key: "respondida", label: "Respondidos" },
  { key: "cerrada", label: "Cerrados" },
];

const CATEGORY_LABELS: Record<string, string> = {
  pagos: "Pagos",
  tecnico: "Técnico",
  contenido: "Contenido",
  cuenta: "Cuenta",
};

type Props = { searchParams: Promise<{ estado?: string; page?: string }> };

export default async function AdminSupportPage({ searchParams }: Props) {
  await requireAdmin();
  const { estado, page } = await searchParams;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { tickets, total, totalPages } = await listSupportTickets({
    statusKey: estado || undefined,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (estado) params.set("estado", estado);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/soporte?${query}` : "/admin/soporte";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Soporte</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {total} solicitud(es) en total.
        </p>
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
              href={filter.key ? `/admin/soporte?estado=${filter.key}` : "/admin/soporte"}
            >
              {filter.label}
            </Link>
          </Button>
        ))}
      </div>

      {tickets.length === 0 ? (
        <EmptyState
          icon={LifeBuoy}
          title="No hay solicitudes que coincidan con este filtro"
        />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asunto</TableHead>
              <TableHead>Alumno</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Mensajes</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/admin/soporte/${ticket.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {ticket.subject}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {ticket.user.profile
                    ? `${ticket.user.profile.firstName} ${ticket.user.profile.lastName}`
                    : ticket.user.email}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {CATEGORY_LABELS[ticket.category] ?? ticket.category}
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {ticket._count.messages}
                </TableCell>
                <TableCell>
                  <StatusBadge
                    statusKey={ticket.status.key}
                    label={ticket.status.label}
                  />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                    ticket.createdAt
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
