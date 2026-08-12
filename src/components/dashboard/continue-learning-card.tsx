import { PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/navigation";

type ContinueCourse = {
  percentComplete: number;
  course: { slug: string; title: string; category: { name: string } };
} | null;

export function ContinueLearningCard({ course }: { course: ContinueCourse }) {
  if (!course) {
    return (
      <Card>
        <CardContent className="pt-6">
          <EmptyState
            icon={PlayCircle}
            title="Todavía no has empezado ningún curso"
            description="Explora el catálogo y da tu primer paso."
            action={
              <Button asChild variant="gold" size="sm">
                <Link href="/cursos">Explorar cursos</Link>
              </Button>
            }
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-gold/30">
      <CardContent className="flex flex-col gap-4 pt-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {course.course.category.name}
          </p>
          <h3 className="font-display text-xl tracking-tighter">{course.course.title}</h3>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progreso</span>
            <span>{Math.round(course.percentComplete)}%</span>
          </div>
          <Progress value={course.percentComplete} />
        </div>
        <Button asChild variant="gold" className="w-fit">
          <Link href={`/cursos/${course.course.slug}/aprender`}>
            <PlayCircle className="size-4" />
            Continuar donde lo dejé
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
