import { LayoutGrid } from "lucide-react";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { CategoryCard } from "@/components/marketing/category-card";
import { EmptyState } from "@/components/ui/empty-state";
import { listRootCategoriesWithCounts } from "@/modules/categories/server/queries";

export const metadata: Metadata = {
  title: "Categorías",
  description: "Explora el catálogo de NOVARA por categoría.",
};

export const revalidate = 300;

export default async function CategoriesPage() {
  const categories = await listRootCategoriesWithCounts();

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Categorías" }]} />

      <div className="mb-10 mt-6">
        <h1 className="font-display text-3xl tracking-tighter sm:text-4xl">Categorías</h1>
        <p className="mt-2 text-muted-foreground">
          Un catálogo multi-categoría desde el primer día.
        </p>
      </div>

      {categories.length === 0 ? (
        <EmptyState
          icon={LayoutGrid}
          title="Todavía no hay categorías publicadas"
          description="En cuanto el equipo editorial dé de alta el catálogo, aparecerá aquí."
        />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </Container>
  );
}
