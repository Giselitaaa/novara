import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryForm } from "@/components/admin/categories/category-form";
import {
  getCategoryForEdit,
  listParentCategoryOptions,
} from "@/modules/categories/server/admin-queries";

export const metadata: Metadata = { title: "Editar categoría" };

type Props = { params: Promise<{ id: string }> };

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;
  const [category, parentOptions] = await Promise.all([
    getCategoryForEdit(id),
    listParentCategoryOptions(id),
  ]);
  if (!category) notFound();

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl tracking-tighter">Editar categoría</h1>
      <CategoryForm parentOptions={parentOptions} existing={category} />
    </div>
  );
}
