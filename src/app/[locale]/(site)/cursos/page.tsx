import { BookX } from "lucide-react";
import type { Metadata } from "next";

import { CourseFilters } from "@/components/catalog/course-filters";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { CourseCard } from "@/components/marketing/course-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { listCourses, listCourseLevels } from "@/modules/courses/server/queries";
import { parseCourseFilters } from "@/modules/courses/shared/filters";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Explora el catálogo completo de cursos de NOVARA.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CoursesPage({ searchParams }: Props) {
  const rawParams = await searchParams;
  const filters = parseCourseFilters(rawParams);

  const [{ courses, total, page, totalPages }, levels] = await Promise.all([
    listCourses(filters),
    listCourseLevels(),
  ]);

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (filters.search) params.set("q", filters.search);
    if (filters.levelKey) params.set("nivel", filters.levelKey);
    if (filters.accessType) params.set("access", filters.accessType);
    if (filters.sort !== "recientes") params.set("sort", filters.sort);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/cursos?${query}` : "/cursos";
  }

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Cursos" }]} />

      <div className="mb-8 mt-6">
        <h1 className="font-display text-3xl tracking-tighter sm:text-4xl">
          Catálogo de cursos
        </h1>
        <p className="mt-2 text-muted-foreground">
          {total > 0
            ? `${total} curso${total === 1 ? "" : "s"} con el estándar NOVARA.`
            : "Todavía no hay cursos publicados."}
        </p>
      </div>

      <CourseFilters
        levels={levels}
        defaultValues={{
          search: filters.search,
          levelKey: filters.levelKey,
          accessType: filters.accessType,
          sort: filters.sort,
        }}
      />

      <div className="mt-8">
        {courses.length === 0 ? (
          <EmptyState
            icon={BookX}
            title="No hay cursos que coincidan con tu búsqueda"
            description="Prueba a quitar algún filtro o buscar con otras palabras."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12">
        <Pagination currentPage={page} totalPages={totalPages} buildHref={buildHref} />
      </div>
    </Container>
  );
}
