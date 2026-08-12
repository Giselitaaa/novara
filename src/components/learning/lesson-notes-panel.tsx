"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { saveLessonNote } from "@/modules/enrollments/server/actions";

export function LessonNotesPanel({
  lessonId,
  initialNote,
}: {
  lessonId: string;
  initialNote: string;
}) {
  const [value, setValue] = useState(initialNote);
  const [saved, setSaved] = useState(true);

  const debouncedSave = useDebouncedCallback((text: string) => {
    saveLessonNote(lessonId, text).then(() => setSaved(true));
  }, 800);

  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-display text-sm tracking-tighter">Mis notas</p>
        {saved ? (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="size-3" /> Guardado
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">Guardando…</span>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSaved(false);
          debouncedSave(e.target.value);
        }}
        placeholder="Escribe aquí lo que quieras recordar de esta lección…"
        rows={6}
        className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
    </div>
  );
}
