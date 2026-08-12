import { PenLine } from "lucide-react";
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
import { listExerciseSubmissions } from "@/modules/exercises/server/review-queries";

export const metadata: Metadata = { title: "Ejercicios" };

const STATUS_FILTERS = [
  { key: "revision", label: "Por revisar" },
  { key: "corregido", label: "Corregidos" },
  { key: "", label: "Todos" },
];

const STATUS_LABEL: Record<string, string> = {
  pendiente: "Pendiente",
  error_correccion: "Error IA",
  corregido: "Corregido",
};
const STATUS_TONE: Record<string, "gold" | "success" | "outline" | "neutral"> = {
  pendiente: "gold",
  error_correccion: "outline",
  corregido: "success",
};

type Props = { searchParams: Promise<{ estado?: string; page?: string }> };

export default async function AdminExercisesPage({ searchParams }: Props) {
  await requireAdmin();
  const { estado, page } = await searchParams;
  const statusKey = estado === undefined ? "revision" : estado;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { submissions, total, totalPages } = await listExerciseSubmissions({
    statusKey: statusKey || undefined,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (statusKey) params.set("estado", statusKey);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/ejercicios?${query}` : "/admin/ejercicios";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Ejercicios</h1>
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
                  ? `/admin/ejercicios?estado=${filter.key}`
                  : "/admin/ejercicios?estado="
              }
            >
              {filter.label}
            </Link>
          </Button>
        ))}
      </div>

      {submissions.length === 0 ? (
        <EmptyState icon={PenLine} title="No hay entregas en este filtro" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alumno</TableHead>
              <TableHead>Lección</TableHead>
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
                    href={`/admin/ejercicios/${s.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {s.user.profile
                      ? `${s.user.profile.firstName} ${s.user.profile.lastName}`
                      : s.user.email}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">{s.lesson.title}</TableCell>
                <TableCell className="text-muted-foreground">
                  {s.lesson.module?.course?.title ?? "—"}
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
