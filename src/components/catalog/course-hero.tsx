import { Clock, Globe, Layers, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { formatDuration } from "@/lib/format";
import type { CourseDetailDTO } from "@/modules/courses/types/course-dto";

export async function CourseHero({ course }: { course: CourseDetailDTO }) {
  const t = await getTranslations("home.courses");

  return (
    <div className="border-b border-border bg-muted/40">
      <Container className="py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: "Cursos", href: "/cursos" },
            { label: course.categoryName, href: `/categorias/${course.categorySlug}` },
            { label: course.title },
          ]}
        />

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{course.categoryName}</Badge>
            {course.accessType !== "gratis" && <Badge variant="gold">Premium</Badge>}
          </div>

          <h1 className="max-w-2xl text-balance font-display text-3xl tracking-tighter sm:text-4xl md:text-5xl">
            {course.title}
          </h1>

          {course.subtitle && (
            <p className="max-w-xl text-balance text-lg text-muted-foreground">
              {course.subtitle}
            </p>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-gold" /> {course.authorName}
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="size-4" /> {t("levelLabel")}: {course.levelLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" /> {formatDuration(course.durationMinutes)}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="size-4" /> {course.languageName}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
