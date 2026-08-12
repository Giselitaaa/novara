import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExamCompositionEditor } from "@/components/admin/exams/exam-composition-editor";
import { Link } from "@/i18n/navigation";
import {
  getExamComposition,
  listAvailableExercises,
} from "@/modules/exams/server/composition-queries";

export const metadata: Metadata = { title: "Composición del examen" };

type Props = { params: Promise<{ id: string }> };

export default async function AdminExamCompositionPage({ params }: Props) {
  const { id: examId } = await params;
  const [exam, available] = await Promise.all([
    getExamComposition(examId),
    listAvailableExercises(examId),
  ]);
  if (!exam) notFound();

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={`/admin/examenes/${examId}` as never}
        className="flex w-fit items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Volver al examen
      </Link>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Composición del examen{exam.course && ` · ${exam.course.title}`}
        </p>
        <h1 className="font-display text-2xl tracking-tighter">{exam.title}</h1>
      </div>

      <ExamCompositionEditor
        exam={{
          id: exam.id,
          title: exam.title,
          passingScore: Number(exam.passingScore),
          timeLimitMinutes: exam.timeLimitMinutes,
          randomizeSections: exam.randomizeSections,
        }}
        sections={exam.sections.map((s) => ({
          id: s.id,
          weight: Number(s.weight),
          timeLimitMinutes: s.timeLimitMinutes,
          exerciseTitle: s.exercise.title,
          category: s.exercise.category,
          questionCount: s.exercise._count.questions,
        }))}
        available={available}
      />
    </div>
  );
}
