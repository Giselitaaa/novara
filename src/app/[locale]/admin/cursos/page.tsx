import { BookX, Plus, Upload } from "lucide-react";
import type { Metadata } from "next";

import { CourseRowActions } from "@/components/admin/courses/course-row-actions";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/input";
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
import { listAllCoursesAdmin } from "@/modules/courses/server/admin-queries";

export const metadata: Metadata = { title: "Cursos" };

type Props = {
  searchParams: Promise<{ q?: string; estado?: string; page?: string }>;
};

export default async function AdminCoursesPage({ searchParams }: Props) {
  const { q, estado, page } = await searchParams;
  const currentPage = Number(page) > 0 ? Number(page) : 1;

  const { courses, total, totalPages } = await listAllCoursesAdmin({
    search: q,
    statusKey: estado,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (estado) params.set("estado", estado);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/cursos?${query}` : "/admin/cursos";
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Cursos</h1>
          <p className="mt-1 text-sm text-muted-foreground">{total} curso(s) en total.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/cursos/importar">
              <Upload className="size-4" /> Importar JSON
            </Link>
          </Button>
          <Button asChild variant="gold">
            <Link href="/admin/cursos/nuevo">
              <Plus className="size-4" /> Nuevo curso
            </Link>
          </Button>
        </div>
      </div>

      <form className="flex flex-col gap-3 sm:flex-row" action="/admin/cursos">
        <Input
          name="q"
          placeholder="Buscar por título…"
          defaultValue={q}
          className="sm:max-w-xs"
        />
        <select
          name="estado"
          defaultValue={estado ?? ""}
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm sm:w-56"
        >
          <option value="">Todos los estados</option>
          <option value="borrador">Borrador</option>
          <option value="en_revision">En revisión</option>
          <option value="aprobado">Aprobado</option>
          <option value="publicado">Publicado</option>
          <option value="archivado">Archivado</option>
        </select>
        <Button type="submit" variant="outline">
          Filtrar
        </Button>
      </form>

      {courses.length === 0 ? (
        <EmptyState
          icon={BookX}
          title="No hay cursos que coincidan"
          description="Ajusta la búsqueda o crea el primer curso."
        />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Acceso</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Inscritos</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="max-w-64 truncate font-medium">
                  <Link
                    href={`/admin/cursos/${course.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {course.title}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {course.category.name}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {course.accessType.key === "gratis" ? "Gratis" : "Premium"}
                </TableCell>
                <TableCell>
                  <StatusBadge
                    statusKey={course.status.key}
                    label={course.status.label}
                  />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {course._count.enrollments}
                </TableCell>
                <TableCell className="text-right">
                  <CourseRowActions courseId={course.id} statusKey={course.status.key} />
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
