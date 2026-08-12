import { BookX } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { CategoryCard } from "@/components/marketing/category-card";
import { CourseCard } from "@/components/marketing/course-card";
import { EmptyState } from "@/components/ui/empty-state";
import { getCategoryBySlug } from "@/modules/categories/server/queries";
import { listCourses } from "@/modules/courses/server/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Cursos de ${category.name} en NOVARA.`,
  };
}

export const revalidate = 300;

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const { courses, total } = await listCourses({
    categorySlug: slug,
    sort: "recientes",
    page: 1,
  });

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs
        items={[{ label: "Categorías", href: "/categorias" }, { label: category.name }]}
      />

      <div className="mb-10 mt-6">
        <h1 className="font-display text-3xl tracking-tighter sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {total} curso{total === 1 ? "" : "s"} en esta categoría.
        </p>
      </div>

      {category.children.length > 0 && (
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {category.children.map((child) => (
            <CategoryCard key={child.id} category={child} />
          ))}
        </div>
      )}

      {courses.length === 0 ? (
        <EmptyState
          icon={BookX}
          title="Todavía no hay cursos publicados en esta categoría"
          description="Vuelve pronto — el catálogo crece continuamente."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </Container>
  );
}
