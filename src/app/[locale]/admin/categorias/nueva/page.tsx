import type { Metadata } from "next";

import { CategoryForm } from "@/components/admin/categories/category-form";
import { listParentCategoryOptions } from "@/modules/categories/server/admin-queries";

export const metadata: Metadata = { title: "Nueva categoría" };

export default async function NewCategoryPage() {
  const parentOptions = await listParentCategoryOptions();
  return (
    <div>
      <h1 className="mb-6 font-display text-2xl tracking-tighter">Nueva categoría</h1>
      <CategoryForm parentOptions={parentOptions} />
    </div>
  );
}
