import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EmailTemplateForm } from "@/components/admin/cms/email-template-form";
import { getEmailTemplateById } from "@/modules/cms/server/email-queries";

export const metadata: Metadata = { title: "Editar plantilla" };

type Props = { params: Promise<{ id: string }> };

export default async function EditEmailTemplatePage({ params }: Props) {
  const { id } = await params;
  const template = await getEmailTemplateById(id);
  if (!template) notFound();

  return (
    <div>
      <h1 className="mb-1 font-mono text-sm text-muted-foreground">{template.key}</h1>
      <h2 className="mb-6 font-display text-2xl tracking-tighter">Editar plantilla</h2>
      <EmailTemplateForm template={template} />
    </div>
  );
}
