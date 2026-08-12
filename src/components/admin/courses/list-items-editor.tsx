"use client";

import { Plus, X } from "lucide-react";
import { useRef, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";

interface ListItemsEditorProps {
  title: string;
  courseId: string;
  items: { id: string; text: string }[];
  onAdd: (courseId: string, text: string) => Promise<void>;
  onDelete: (id: string, courseId: string) => Promise<void>;
  placeholder: string;
}

/**
 * Editor genérico de listas simples (objetivos, requisitos): añadir
 * y quitar líneas, cada una persistida al instante. Reutilizado dos
 * veces en el editor de curso para no duplicar este patrón.
 */
export function ListItemsEditor({
  title,
  courseId,
  items,
  onAdd,
  onDelete,
  placeholder,
}: ListItemsEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdd(formData: FormData) {
    const text = String(formData.get("text") ?? "").trim();
    if (!text) return;
    startTransition(async () => {
      await onAdd(courseId, text);
      if (inputRef.current) inputRef.current.value = "";
      router.refresh();
    });
  }

  function handleDelete(id: string) {
    startTransition(async () => {
      await onDelete(id, courseId);
      router.refresh();
    });
  }

  return (
    <div className="max-w-xl">
      <h3 className="mb-3 font-display text-lg tracking-tighter">{title}</h3>
      <ul className="mb-3 flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-md border border-border px-3.5 py-2 text-sm"
          >
            {item.text}
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
              disabled={isPending}
              className="text-muted-foreground hover:text-destructive"
              aria-label="Eliminar"
            >
              <X className="size-4" />
            </button>
          </li>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">Todavía no hay elementos.</p>
        )}
      </ul>
      <form action={handleAdd} className="flex gap-2">
        <Input ref={inputRef} name="text" placeholder={placeholder} />
        <Button type="submit" variant="outline" disabled={isPending}>
          <Plus className="size-4" />
        </Button>
      </form>
    </div>
  );
}
