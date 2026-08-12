"use client";

import { Plus, X } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";
import {
  createAndAttachResource,
  detachResource,
} from "@/modules/courses/server/admin-actions";

type AttachedResource = {
  resource: { id: string; title: string; resourceType: { label: string } };
};

export function ResourcesEditor({
  courseId,
  attached,
  resourceTypes,
}: {
  courseId: string;
  attached: AttachedResource[];
  resourceTypes: { id: string; label: string }[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleAdd(formData: FormData) {
    const title = String(formData.get("title") ?? "").trim();
    const fileUrl = String(formData.get("fileUrl") ?? "").trim();
    const resourceTypeId = String(formData.get("resourceTypeId") ?? "");
    if (!title || !fileUrl) return;
    startTransition(async () => {
      await createAndAttachResource(courseId, { title, fileUrl, resourceTypeId });
      router.refresh();
    });
  }

  return (
    <div className="max-w-xl">
      <h3 className="mb-3 font-display text-lg tracking-tighter">
        Recursos descargables
      </h3>
      <ul className="mb-4 flex flex-col gap-2">
        {attached.map(({ resource }) => (
          <li
            key={resource.id}
            className="flex items-center justify-between rounded-md border border-border px-3.5 py-2 text-sm"
          >
            <span>
              {resource.title}{" "}
              <span className="text-xs text-muted-foreground">
                ({resource.resourceType.label})
              </span>
            </span>
            <button
              type="button"
              onClick={() =>
                startTransition(async () => {
                  await detachResource(courseId, resource.id);
                  router.refresh();
                })
              }
              className="text-muted-foreground hover:text-destructive"
              aria-label="Quitar recurso"
            >
              <X className="size-4" />
            </button>
          </li>
        ))}
        {attached.length === 0 && (
          <p className="text-sm text-muted-foreground">Sin recursos adjuntos todavía.</p>
        )}
      </ul>

      <form
        action={handleAdd}
        className="flex flex-col gap-3 rounded-md border border-dashed border-border p-4"
      >
        <FormField id="title" label="Título del recurso">
          <Input id="title" name="title" placeholder="Ej. Plantilla de ejercicios" />
        </FormField>
        <FormField id="fileUrl" label="URL del archivo">
          <Input id="fileUrl" name="fileUrl" placeholder="https://…" />
        </FormField>
        <select
          name="resourceTypeId"
          defaultValue={resourceTypes[0]?.id}
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {resourceTypes.map((rt) => (
            <option key={rt.id} value={rt.id}>
              {rt.label}
            </option>
          ))}
        </select>
        <Button type="submit" variant="outline" disabled={isPending} className="w-fit">
          <Plus className="size-4" /> Añadir recurso
        </Button>
      </form>
    </div>
  );
}
