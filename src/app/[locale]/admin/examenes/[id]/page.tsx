import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ExamQuestionPicker,
  ExamSettingsForm,
} from "@/components/admin/exams/exam-editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@/i18n/navigation";
import { getExamForEdit, listQuestions } from "@/modules/exams/server/queries";

export const metadata: Metadata = { title: "Editar examen" };

type Props = { params: Promise<{ id: string }> };

export default async function ExamEditPage({ params }: Props) {
  const { id } = await params;
  const [exam, bank] = await Promise.all([getExamForEdit(id), listQuestions()]);
  if (!exam) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">{exam.title}</h1>
          {exam.course && (
            <p className="mt-1 text-sm text-muted-foreground">Curso: {exam.course.title}</p>
          )}
        </div>
        <Link
          href={`/admin/examenes/${exam.id}/composicion` as never}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent"
        >
          Composición por ejercicios →
        </Link>
      </div>

      <Tabs defaultValue="preguntas">
        <TabsList>
          <TabsTrigger value="preguntas">Preguntas</TabsTrigger>
          <TabsTrigger value="ajustes">Ajustes</TabsTrigger>
        </TabsList>

        <TabsContent value="preguntas">
          <ExamQuestionPicker examId={exam.id} attached={exam.questions} bank={bank} />
        </TabsContent>

        <TabsContent value="ajustes">
          <ExamSettingsForm
            examId={exam.id}
            title={exam.title}
            passingScore={Number(exam.passingScore)}
            timeLimitMinutes={exam.timeLimitMinutes}
            maxAttempts={exam.maxAttempts}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
