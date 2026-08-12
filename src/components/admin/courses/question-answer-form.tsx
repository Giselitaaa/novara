"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { answerCourseQuestion } from "@/modules/courses/server/qa-actions";

export function QuestionAnswerForm({ questionId }: { questionId: string }) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function submit() {
    setError(null);
    startTransition(async () => {
      const res = await answerCourseQuestion(questionId, body);
      if (res.status === "error")
        setError(res.message ?? "No se pudo enviar la respuesta.");
      else {
        setBody("");
        router.refresh();
      }
    });
  }

  return (
    <div className="mt-3 flex flex-col gap-2">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        maxLength={4000}
        placeholder="Responder…"
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
      <div>
        <Button
          size="sm"
          variant="gold"
          onClick={submit}
          disabled={isPending || body.trim().length === 0}
        >
          {isPending ? "Enviando…" : "Responder"}
        </Button>
      </div>
    </div>
  );
}
