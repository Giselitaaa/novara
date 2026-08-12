"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { submitFinalProject } from "@/modules/courses/server/student-actions";

export function FinalProjectSubmissionForm({
  courseSlug,
  finalProjectId,
  initialContent,
}: {
  courseSlug: string;
  finalProjectId: string;
  initialContent: string;
}) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [isPending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await submitFinalProject(courseSlug, finalProjectId, content);
        toast.success(result.message);
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo enviar el proyecto."
        );
      }
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Describe tu entrega, o pega un enlace a tu trabajo…"
        rows={8}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      <Button
        variant="gold"
        disabled={isPending}
        onClick={handleSubmit}
        className="w-fit"
      >
        {isPending ? "Enviando…" : "Entregar proyecto final"}
      </Button>
    </div>
  );
}
