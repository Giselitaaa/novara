import { CheckCircle2, Clock, XCircle } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { FinalProjectSubmissionForm } from "@/components/learning/final-project-submission-form";
import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { getFinalProjectSubmission } from "@/modules/courses/server/student-actions";

export const metadata: Metadata = { title: "Proyecto final" };

type Props = { params: Promise<{ slug: string }> };

export default async function FinalProjectPage({ params }: Props) {
  const { slug } = await params;
  const session = await requireSession();
  if (!session?.user?.id) {
    redirect(`/auth/iniciar-sesion?callbackUrl=/cursos/${slug}/proyecto-final`);
  }

  const course = await db.course.findFirst({
    where: { slug },
    include: { finalProject: true },
  });
  if (!course || !course.finalProject) notFound();

  const enrollment = await db.enrollment.findUnique({
    where: { userId_courseId: { userId: session.user.id, courseId: course.id } },
  });
  if (!enrollment) redirect(`/cursos/${slug}` as never);

  const submission = await getFinalProjectSubmission(
    course.finalProject.id,
    session.user.id
  );

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: course.title, href: `/cursos/${slug}` },
          { label: "Proyecto final" },
        ]}
      />

      <h1 className="mb-2 mt-6 font-display text-3xl tracking-tighter sm:text-4xl">
        {course.finalProject.title}
      </h1>
      <p className="mb-8 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
        {course.finalProject.instructions}
      </p>

      {submission?.status === "aprobado" ? (
        <div className="flex items-center gap-2.5 rounded-lg border border-success/30 bg-success/5 p-5">
          <CheckCircle2 className="size-5 text-success" />
          <div>
            <p className="font-medium">Proyecto aprobado</p>
            {submission.feedback && (
              <p className="text-sm text-muted-foreground">{submission.feedback}</p>
            )}
          </div>
        </div>
      ) : submission?.status === "rechazado" ? (
        <div className="mb-6 flex items-center gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 p-5">
          <XCircle className="size-5 text-destructive" />
          <div>
            <p className="font-medium">No aprobado todavía</p>
            {submission.feedback && (
              <p className="text-sm text-muted-foreground">{submission.feedback}</p>
            )}
          </div>
        </div>
      ) : submission ? (
        <div className="mb-6 flex items-center gap-2.5 rounded-lg border border-gold/30 bg-gold/5 p-5">
          <Clock className="size-5 text-gold" />
          <p className="text-sm">Tu entrega está pendiente de revisión.</p>
        </div>
      ) : null}

      {submission?.status !== "aprobado" && (
        <FinalProjectSubmissionForm
          courseSlug={slug}
          finalProjectId={course.finalProject.id}
          initialContent={submission?.content ?? ""}
        />
      )}
    </Container>
  );
}
