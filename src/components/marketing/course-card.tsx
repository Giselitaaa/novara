import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { formatDuration, formatPrice } from "@/lib/format";
import type { CourseCardDTO } from "@/modules/courses/types/course-dto";

export function CourseCard({ course }: { course: CourseCardDTO }) {
  const t = useTranslations("home.courses");
  const tCommon = useTranslations("common");

  return (
    <Card className="flex flex-col overflow-hidden">
      {/* Portada del curso: placeholder tonal hasta tener imágenes reales
          por curso (`Course.coverImageUrl`), coherente con la paleta —
          no un gris genérico de "imagen no disponible". */}
      <div
        aria-hidden
        className="flex h-40 items-center justify-center bg-gradient-to-br from-secondary/15 via-transparent to-gold/15"
      >
        <span className="font-display text-3xl italic tracking-tighter text-foreground/15">
          {course.categoryName}
        </span>
      </div>

      <CardHeader className="gap-2 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <Link href={`/categorias/${course.categorySlug}`}>
            <Badge variant="outline">{course.categoryName}</Badge>
          </Link>
          {course.accessType === "gratis" && (
            <Badge variant="success">{tCommon("free")}</Badge>
          )}
        </div>
        <CardTitle>
          <Link
            href={`/cursos/${course.slug}`}
            className="transition-colors hover:text-gold-foreground"
          >
            {course.title}
          </Link>
        </CardTitle>
        {course.subtitle && <CardDescription>{course.subtitle}</CardDescription>}
      </CardHeader>

      <CardContent className="mt-auto flex items-center gap-4 pb-4 text-xs text-muted-foreground">
        <span>{course.levelLabel}</span>
        <span className="flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden />
          {formatDuration(course.durationMinutes)}
        </span>
      </CardContent>

      <CardFooter className="items-center justify-between border-t border-border pt-4">
        <span className="font-display text-lg tracking-tighter">
          {course.accessType === "gratis"
            ? tCommon("free")
            : formatPrice(course.price ?? 0)}
        </span>
        <Link
          href={`/cursos/${course.slug}`}
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          {t("viewCourse")}
        </Link>
      </CardFooter>
    </Card>
  );
}
