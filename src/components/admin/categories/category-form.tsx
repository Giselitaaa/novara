"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import {
  createCategory,
  updateCategory,
} from "@/modules/categories/server/admin-actions";

const ICON_OPTIONS = [
  "Code2",
  "Briefcase",
  "Languages",
  "Palette",
  "TrendingUp",
  "Sparkles",
];

interface CategoryFormProps {
  parentOptions: { id: string; name: string }[];
  existing?: {
    id: string;
    name: string;
    icon: string | null;
    color: string | null;
    imageUrl: string | null;
    parentId: string | null;
  };
}

export function CategoryForm({ parentOptions, existing }: CategoryFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      if (existing) {
        const result = await updateCategory(existing.id, formData);
        toast.success(result.message);
      } else {
        await createCategory(formData);
        toast.success("Categoría creada.");
        router.push("/admin/categorias");
        return;
      }
      router.refresh();
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-md flex-col gap-4">
      <FormField id="name" label="Nombre">
        <Input id="name" name="name" defaultValue={existing?.name} required />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="parentId">Categoría padre (opcional)</Label>
        <select
          id="parentId"
          name="parentId"
          defaultValue={existing?.parentId ?? ""}
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          <option value="">Ninguna (categoría raíz)</option>
          {parentOptions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="icon">Icono</Label>
        <select
          id="icon"
          name="icon"
          defaultValue={existing?.icon ?? "Sparkles"}
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {ICON_OPTIONS.map((icon) => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>
      </div>

      <FormField id="imageUrl" label="URL de imagen (opcional)">
        <Input id="imageUrl" name="imageUrl" defaultValue={existing?.imageUrl ?? ""} />
      </FormField>

      <FormField id="color" label="Color (hex, opcional)">
        <Input
          id="color"
          name="color"
          defaultValue={existing?.color ?? ""}
          placeholder="#C9973D"
        />
      </FormField>

      <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
        {isPending ? "Guardando…" : existing ? "Guardar cambios" : "Crear categoría"}
      </Button>
    </form>
  );
}
