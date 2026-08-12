"use client";

import { ChevronDown, ChevronUp, Power, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import {
  deleteCategory,
  moveCategory,
  toggleCategoryStatus,
} from "@/modules/categories/server/admin-actions";

export function CategoryRowActions({
  categoryId,
  isFirst,
  isLast,
}: {
  categoryId: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function run(fn: () => Promise<unknown>) {
    startTransition(async () => {
      try {
        await fn();
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo completar la acción."
        );
      }
    });
  }

  return (
    <div className="flex items-center justify-end gap-1">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Subir categoría"
        disabled={isPending || isFirst}
        onClick={() => run(() => moveCategory(categoryId, "up"))}
      >
        <ChevronUp className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Bajar categoría"
        disabled={isPending || isLast}
        onClick={() => run(() => moveCategory(categoryId, "down"))}
      >
        <ChevronDown className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Activar o desactivar categoría"
        disabled={isPending}
        onClick={() => run(() => toggleCategoryStatus(categoryId))}
      >
        <Power className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Eliminar categoría"
        disabled={isPending}
        onClick={() => {
          if (confirm("¿Eliminar esta categoría?")) run(() => deleteCategory(categoryId));
        }}
      >
        <Trash2 className="size-4 text-destructive" />
      </Button>
    </div>
  );
}
