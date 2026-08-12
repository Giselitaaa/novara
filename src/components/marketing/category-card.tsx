import { ArrowUpRight } from "lucide-react";

import { CategoryIcon } from "@/components/marketing/category-icon";
import { Link } from "@/i18n/navigation";
import type { CategoryDTO } from "@/modules/categories/types/category-dto";

export function CategoryCard({ category }: { category: CategoryDTO }) {
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group flex flex-col justify-between gap-8 rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
    >
      <div className="flex items-center justify-between">
        <div className="bg-gold/12 flex size-11 items-center justify-center rounded-md text-gold-foreground dark:text-gold">
          <CategoryIcon name={category.icon} className="size-5" />
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>
      <span className="font-display text-lg tracking-tighter">{category.name}</span>
    </Link>
  );
}
