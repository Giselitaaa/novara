import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectReviewForm } from "@/components/admin/courses/project-review-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { requireAdmin } from "@/modules/admin/server/guard";
import { getProjectSubmissionById } from "@/modules/courses/server/project-review-queries";

export const metadata: Metadata = { title: "Revisar proyecto" };

const STATUS_LABEL: Record<string, string> = {
  pendiente: "Pendiente",
  aprobado: "Aprobado",
  rechazado: "Requiere cambios",
};
const STATUS_TONE: Record<string, "gold" | "success" | "outline" | "neutral"> = {
  pendiente: "gold",
  aprobado: "success",
  rechazado: "outline",
};

type Props = { params: Promise<{ id: string }> };

export default async function AdminProjectReviewPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const submission = await getProjectSubmissionById(id);
  if (!submission) notFound();

  const studentName = submission.user.profile
    ? `${submission.user.profile.firstName} ${submission.user.profile.lastName}`
    : submission.user.email;

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/admin/proyectos"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Volver a proyectos
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">
            {submission.finalProject.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {studentName} · {submission.finalProject.course.title} ·{" "}
            {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
              submission.submittedAt
            )}
          </p>
        </div>
        <Badge variant={STATUS_TONE[submission.status] ?? "neutral"}>
          {STATUS_LABEL[submission.status] ?? submission.status}
        </Badge>
      </div>

      <Card>
        <CardContent className="p-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Enunciado
          </p>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
            {submission.finalProject.instructions}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Entrega del alumno
          </p>
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {submission.content}
          </p>
        </CardContent>
      </Card>

      {submission.feedback && (
        <Card className="border-gold/40 bg-gold/5">
          <CardContent className="p-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Feedback enviado
            </p>
            <p className="whitespace-pre-wrap text-sm leading-relaxed">
              {submission.feedback}
            </p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-5">
          <ProjectReviewForm
            submissionId={submission.id}
            currentStatus={submission.status}
            currentFeedback={submission.feedback}
          />
        </CardContent>
      </Card>
    </div>
  );
}
