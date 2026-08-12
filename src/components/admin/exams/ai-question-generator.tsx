"use client";

import { Sparkles, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";
import {
  generateExamQuestions,
  type GeneratedExamQuestions,
} from "@/modules/ai/server/generation";
import { createQuestionsFromGenerated } from "@/modules/exams/server/actions";

export function AIQuestionGenerator() {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState<GeneratedExamQuestions["questions"]>([]);
  const [isGenerating, startGenerating] = useTransition();
  const [isSaving, startSaving] = useTransition();

  function handleGenerate() {
    if (!topic.trim()) {
      toast.error("Indica sobre qué tema generar preguntas.");
      return;
    }
    startGenerating(async () => {
      try {
        const result = await generateExamQuestions(topic, count);
        setQuestions(result.questions);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudieron generar preguntas."
        );
      }
    });
  }

  function handleSave() {
    startSaving(async () => {
      const result = await createQuestionsFromGenerated(questions);
      toast.success(result.message);
      setQuestions([]);
      setTopic("");
      router.refresh();
    });
  }

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h2 className="mb-4 font-display text-lg tracking-tighter">Generar con IA</h2>
      <div className="flex flex-col gap-3">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Tema, ej. Fundamentos de Python"
        />
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min={1}
            max={15}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-20"
          />
          <span className="text-sm text-muted-foreground">preguntas</span>
        </div>
        <Button
          variant="outline"
          disabled={isGenerating}
          onClick={handleGenerate}
          className="w-fit"
        >
          <Sparkles className="size-4" />
          {isGenerating ? "Generando…" : "Generar"}
        </Button>
      </div>

      {questions.length > 0 && (
        <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Revisa antes de añadir al banco
          </p>
          {questions.map((q, qi) => (
            <div key={qi} className="rounded-md border border-border p-3">
              <div className="mb-2 flex items-start justify-between gap-2">
                <Input
                  value={q.statement}
                  onChange={(e) => {
                    const next = [...questions];
                    next[qi] = { ...q, statement: e.target.value };
                    setQuestions(next);
                  }}
                  className="text-sm font-medium"
                />
                <button
                  type="button"
                  aria-label="Descartar esta pregunta generada"
                  onClick={() => setQuestions(questions.filter((_, i) => i !== qi))}
                  className="shrink-0 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <ul className="flex flex-col gap-1 pl-2 text-xs text-muted-foreground">
                {q.options.map((o, oi) => (
                  <li key={oi} className={o.isCorrect ? "font-medium text-success" : ""}>
                    {o.isCorrect ? "✓ " : "· "}
                    {o.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Button
            variant="gold"
            disabled={isSaving}
            onClick={handleSave}
            className="w-fit"
          >
            {isSaving ? "Guardando…" : `Añadir ${questions.length} pregunta(s) al banco`}
          </Button>
        </div>
      )}
    </div>
  );
}
