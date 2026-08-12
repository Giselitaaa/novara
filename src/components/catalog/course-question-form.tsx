"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { askCourseQuestion } from "@/modules/courses/server/qa-actions";

export function CourseQuestionForm({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(
    null
  );
  const [isPending, startTransition] = useTransition();

  function submit() {
    setMessage(null);
    startTransition(async () => {
      const res = await askCourseQuestion(courseId, body);
      if (res.status === "error") {
        setMessage({
          type: "error",
          text: res.message ?? "No se pudo publicar la pregunta.",
        });
      } else {
        setMessage({ type: "ok", text: res.message ?? "Pregunta publicada." });
        setBody("");
        router.refresh();
      }
    });
  }

  return (
    <div className="mb-8 rounded-lg border border-border p-5">
      <p className="mb-3 font-medium">Haz una pregunta sobre el curso</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        maxLength={1000}
        placeholder="Escribe tu pregunta…"
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      {message && (
        <p
          className={
            message.type === "ok"
              ? "mt-2 text-sm text-success"
              : "mt-2 text-sm text-destructive"
          }
          role="status"
        >
          {message.text}
        </p>
      )}
      <div className="mt-3">
        <Button
          variant="gold"
          onClick={submit}
          disabled={isPending || body.trim().length < 5}
        >
          {isPending ? "Publicando…" : "Publicar pregunta"}
        </Button>
      </div>
    </div>
  );
}
