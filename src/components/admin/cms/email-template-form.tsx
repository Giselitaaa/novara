"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { updateEmailTemplate } from "@/modules/cms/server/email-actions";

type Template = {
  id: string;
  key: string;
  subject: string;
  bodyHtml: string;
  isActive: boolean;
};

export function EmailTemplateForm({ template }: { template: Template }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [preview, setPreview] = useState(false);
  const [bodyHtml, setBodyHtml] = useState(template.bodyHtml);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateEmailTemplate(template.id, formData);
      toast.success(result.message);
      router.refresh();
    });
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <form action={handleSubmit} className="flex flex-col gap-4">
        <FormField id="subject" label="Asunto">
          <Input id="subject" name="subject" defaultValue={template.subject} required />
        </FormField>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bodyHtml">Contenido HTML</Label>
          <textarea
            id="bodyHtml"
            name="bodyHtml"
            value={bodyHtml}
            onChange={(e) => setBodyHtml(e.target.value)}
            rows={12}
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <Checkbox id="isActive" name="isActive" defaultChecked={template.isActive} />
          <Label htmlFor="isActive" className="font-normal">
            Plantilla activa
          </Label>
        </div>

        <div className="flex gap-2">
          <Button type="submit" variant="gold" disabled={isPending}>
            {isPending ? "Guardando…" : "Guardar plantilla"}
          </Button>
          <Button type="button" variant="outline" onClick={() => setPreview((p) => !p)}>
            {preview ? "Ocultar vista previa" : "Vista previa"}
          </Button>
        </div>
      </form>

      {preview && (
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="border-b border-border bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
            Vista previa
          </div>
          <div className="bg-white p-4" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        </div>
      )}
    </div>
  );
}
