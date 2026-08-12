import { Plus, Tags } from "lucide-react";
import type { Metadata } from "next";

import { CategoryRowActions } from "@/components/admin/categories/category-row-actions";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@/i18n/navigation";
import { listAllCategoriesAdmin } from "@/modules/categories/server/admin-queries";

export const metadata: Metadata = { title: "Categorías" };

export default async function AdminCategoriesPage() {
  const categories = await listAllCategoriesAdmin();
  const roots = categories.filter((c) => !c.parentId);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Categorías</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {categories.length} categoría(s) en total.
          </p>
        </div>
        <Button asChild variant="gold">
          <Link href="/admin/categorias/nueva">
            <Plus className="size-4" /> Nueva categoría
          </Link>
        </Button>
      </div>

      {categories.length === 0 ? (
        <EmptyState
          icon={Tags}
          title="Todavía no hay categorías"
          description="Crea la primera para empezar a organizar el catálogo."
        />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Categoría padre</TableHead>
              <TableHead>Cursos</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => {
              const siblings = categories.filter((c) => c.parentId === category.parentId);
              const index = siblings.findIndex((c) => c.id === category.id);
              return (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">
                    {category.parentId && (
                      <span className="mr-1 text-muted-foreground">↳</span>
                    )}
                    <Link
                      href={`/admin/categorias/${category.id}`}
                      className="hover:text-gold-foreground"
                    >
                      {category.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {category.parent?.name ?? "—"}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {category._count.courses}
                  </TableCell>
                  <TableCell>
                    <StatusBadge
                      statusKey={category.status.key}
                      label={category.status.label}
                    />
                  </TableCell>
                  <TableCell>
                    <CategoryRowActions
                      categoryId={category.id}
                      isFirst={index === 0}
                      isLast={index === siblings.length - 1}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
      <p className="text-xs text-muted-foreground">{roots.length} categoría(s) raíz.</p>
    </div>
  );
}
