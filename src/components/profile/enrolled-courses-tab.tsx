import { GraduationCap } from "lucide-react";

import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/navigation";
import { formatDuration } from "@/lib/format";

type EnrolledCourse = {
  id: string;
  percentComplete: number;
  course: {
    slug: string;
    title: string;
    durationMinutes: number | null;
    category: { name: string };
  };
};

export function EnrolledCoursesTab({ enrollments }: { enrollments: EnrolledCourse[] }) {
  if (enrollments.length === 0) {
    return (
      <EmptyState
        icon={GraduationCap}
        title="Todavía no te has inscrito en ningún curso"
        description="Explora el catálogo y empieza tu primer curso hoy mismo."
        action={
          <Link
            href="/cursos"
            className="text-sm font-medium text-gold-foreground underline underline-offset-2 dark:text-gold"
          >
            Explorar cursos
          </Link>
        }
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {enrollments.map((enrollment) => (
        <Card key={enrollment.id} className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs text-muted-foreground">
                {enrollment.course.category.name}
              </p>
              <Link
                href={`/cursos/${enrollment.course.slug}`}
                className="font-display text-lg tracking-tighter hover:text-gold-foreground"
              >
                {enrollment.course.title}
              </Link>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {formatDuration(enrollment.course.durationMinutes)}
              </p>
            </div>
            <div className="flex w-full flex-col gap-1.5 sm:w-40">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progreso</span>
                <span>{Math.round(enrollment.percentComplete)}%</span>
              </div>
              <Progress value={enrollment.percentComplete} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
