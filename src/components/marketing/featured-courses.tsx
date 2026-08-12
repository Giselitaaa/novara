import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Section } from "@/components/layout/section";
import { CourseCard } from "@/components/marketing/course-card";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getFeaturedCourses } from "@/modules/courses/server/queries";

/**
 * Server Component: cursos reales, publicados, más recientes. Sin
 * catálogo publicado todavía, la sección no se renderiza — igual
 * criterio que `FeaturedCategories`.
 */
export async function FeaturedCourses() {
  const courses = await getFeaturedCourses(4);
  if (courses.length === 0) return null;

  const t = await getTranslations("home.courses");

  return (
    <Section eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")}>
      <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Reveal>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/cursos">
            {t("viewAll")}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
