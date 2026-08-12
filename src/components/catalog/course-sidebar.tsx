"use client";

import { CheckCircle2, Download, GraduationCap, Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Link, useRouter } from "@/i18n/navigation";
import { formatDuration, formatPrice } from "@/lib/format";
import { toggleFavoriteCourse } from "@/modules/courses/server/student-actions";
import type { CourseDetailDTO } from "@/modules/courses/types/course-dto";
import { enrollInFreeCourse } from "@/modules/enrollments/server/actions";

interface CourseSidebarProps {
  course: CourseDetailDTO;
  enrollment: { enrolled: boolean; percentComplete?: number };
  initialIsFavorite: boolean;
}

/**
 * Estado de compra / progreso del curso — el corazón de la promesa de
 * "progreso real" de NOVARA. Tres estados posibles: no inscrito
 * (CTA de inscripción o "próximamente" en premium), inscrito sin
 * empezar, inscrito con progreso parcial.
 */
export function CourseSidebar({
  course,
  enrollment,
  initialIsFavorite,
}: CourseSidebarProps) {
  const { status } = useSession();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  function handleToggleFavorite() {
    if (status !== "authenticated") {
      router.push(`/auth/iniciar-sesion?callbackUrl=/cursos/${course.slug}` as never);
      return;
    }
    startTransition(async () => {
      const result = await toggleFavoriteCourse(course.id, course.slug);
      setIsFavorite(result.isFavorite);
    });
  }

  function handleEnroll() {
    if (status !== "authenticated") {
      router.push(`/auth/iniciar-sesion?callbackUrl=/cursos/${course.slug}` as never);
      return;
    }
    startTransition(async () => {
      const result = await enrollInFreeCourse(course.id, course.slug);
      if (result.status === "success") {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <Card className="sticky top-24">
      <CardContent className="flex flex-col gap-5 pt-6">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-3xl tracking-tighter">
            {course.accessType === "gratis" ? "Gratis" : formatPrice(course.price ?? 0)}
          </span>
          <button
            type="button"
            onClick={handleToggleFavorite}
            disabled={isPending}
            aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
            className="text-muted-foreground transition-colors hover:text-gold"
          >
            <Heart className={isFavorite ? "size-5 fill-gold text-gold" : "size-5"} />
          </button>
        </div>

        {enrollment.enrolled ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-success">
              <CheckCircle2 className="size-4" /> Ya estás inscrito
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progreso</span>
                <span>{Math.round(enrollment.percentComplete ?? 0)}%</span>
              </div>
              <Progress value={enrollment.percentComplete ?? 0} />
            </div>
            <Button asChild variant="gold" size="lg">
              <Link href={`/cursos/${course.slug}/aprender`}>
                {(enrollment.percentComplete ?? 0) > 0
                  ? "Continuar curso"
                  : "Empezar curso"}
              </Link>
            </Button>
          </div>
        ) : course.accessType === "gratis" ? (
          <Button variant="gold" size="lg" onClick={handleEnroll} disabled={isPending}>
            <GraduationCap className="size-4" />
            {isPending ? "Inscribiendo…" : "Inscribirme gratis"}
          </Button>
        ) : (
          <Button asChild variant="gold" size="lg">
            <Link href={`/cursos/${course.slug}/comprar`}>Comprar acceso</Link>
          </Button>
        )}

        <Separator />

        <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-4 shrink-0 text-gold" />
            {course.totalLessons} lecciones · {formatDuration(course.durationMinutes)}
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-4 shrink-0 text-gold" />
            Certificado verificable al aprobar
          </li>
          {course.resources.length > 0 && (
            <li className="flex items-center gap-2">
              <Download className="size-4 shrink-0 text-gold" />
              {course.resources.length} recurso{course.resources.length === 1 ? "" : "s"}{" "}
              descargable{course.resources.length === 1 ? "" : "s"}
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
