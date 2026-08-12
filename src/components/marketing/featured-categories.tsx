import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Section } from "@/components/layout/section";
import { CategoryCard } from "@/components/marketing/category-card";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { listRootCategoriesWithCounts } from "@/modules/categories/server/queries";

/**
 * Server Component: consulta categorías reales del catálogo. Si
 * todavía no hay ninguna dada de alta desde el panel de admin, la
 * sección simplemente no se renderiza en la home — nada de contenido
 * de relleno para "que no se vea vacío".
 */
export async function FeaturedCategories() {
  const categories = await listRootCategoriesWithCounts();
  if (categories.length === 0) return null;

  const t = await getTranslations("home.categories");

  return (
    <Section
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="bg-muted/40"
    >
      <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/categorias">
            {t("viewAll")}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
