import { FolderCheck } from "lucide-react";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
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
import { listProjectSubmissions } from "@/modules/courses/server/project-review-queries";

export const metadata: Metadata = { title: "Proyectos finales" };

const STATUS_FILTERS = [
  { key: "pendiente", label: "Pendientes" },
  { key: "aprobado", label: "Aprobados" },
  { key: "rechazado", label: "Con cambios" },
  { key: "", label: "Todos" },
];

const STATUS_TONE: Record<string, "gold" | "success" | "outline" | "neutral"> = {
  pendiente: "gold",
  aprobado: "success",
  rechazado: "outline",
};
const STATUS_LABEL: Record<string, string> = {
  pendiente: "Pendiente",
  aprobado: "Aprobado",
  rechazado: "Requiere cambios",
};

type Props = { searchParams: Promise<{ estado?: string; page?: string }> };

export default async function AdminProjectsPage({ searchParams }: Props) {
  await requireAdmin();
  const { estado, page } = await searchParams;
  const statusKey = estado === undefined ? "pendiente" : estado;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { submissions, total, totalPages } = await listProjectSubmissions({
    statusKey: statusKey || undefined,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (statusKey) params.set("estado", statusKey);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/proyectos?${query}` : "/admin/proyectos";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Proyectos finales</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {total} entrega(s) en este filtro.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {STATUS_FILTERS.map((filter) => (
          <Button
            key={filter.key}
            asChild
            variant={statusKey === filter.key ? "gold" : "outline"}
            size="sm"
          >
            <Link
              href={
                filter.key
                  ? `/admin/proyectos?estado=${filter.key}`
                  : "/admin/proyectos?estado="
              }
            >
              {filter.label}
            </Link>
          </Button>
        ))}
      </div>

      {submissions.length === 0 ? (
        <EmptyState icon={FolderCheck} title="No hay entregas en este filtro" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alumno</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Entregado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/admin/proyectos/${s.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {s.user.profile
                      ? `${s.user.profile.firstName} ${s.user.profile.lastName}`
                      : s.user.email}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {s.finalProject.course.title}
                </TableCell>
                <TableCell>
                  <Badge variant={STATUS_TONE[s.status] ?? "neutral"}>
                    {STATUS_LABEL[s.status] ?? s.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                    s.submittedAt
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
