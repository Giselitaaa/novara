import type { Metadata } from "next";

import { AIQuestionGenerator } from "@/components/admin/exams/ai-question-generator";
import { QuestionBankList } from "@/components/admin/exams/question-bank-list";
import { QuestionForm } from "@/components/admin/exams/question-form";
import { listQuestions, listQuestionTypes } from "@/modules/exams/server/queries";

export const metadata: Metadata = { title: "Banco de preguntas" };

export default async function QuestionBankPage() {
  const [questions, questionTypes] = await Promise.all([
    listQuestions(),
    listQuestionTypes(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Banco de preguntas</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Reutilizable entre exámenes — {questions.length} pregunta(s) en total.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
        <QuestionBankList questions={questions} questionTypes={questionTypes} />

        <div className="flex flex-col gap-6">
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="mb-4 font-display text-lg tracking-tighter">
              Nueva pregunta manual
            </h2>
            <QuestionForm questionTypes={questionTypes} />
          </div>
          <AIQuestionGenerator />
        </div>
      </div>
    </div>
  );
}
