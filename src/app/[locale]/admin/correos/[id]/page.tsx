import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EmailTemplateForm } from "@/components/admin/cms/email-template-form";
import { EmailTemplatePreview } from "@/components/admin/cms/email-template-preview";
import { EMAIL_SAMPLE_VARS } from "@/lib/email-sample-vars";
import { interpolate } from "@/lib/interpolate";
import { requireAdmin } from "@/modules/admin/server/guard";
import { getEmailTemplateById } from "@/modules/cms/server/email-queries";

export const metadata: Metadata = { title: "Editar plantilla" };

type Props = { params: Promise<{ id: string }> };

export default async function EditEmailTemplatePage({ params }: Props) {
  const { id } = await params;
  const [template, session] = await Promise.all([getEmailTemplateById(id), requireAdmin()]);
  if (!template) notFound();

  const previewHtml = interpolate(template.bodyHtml, EMAIL_SAMPLE_VARS);

  return (
    <div>
      <h1 className="mb-1 font-mono text-sm text-muted-foreground">{template.key}</h1>
      <h2 className="mb-6 font-display text-2xl tracking-tighter">Editar plantilla</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <EmailTemplateForm template={template} />
        <div>
          <h3 className="mb-3 font-display text-lg tracking-tighter">Previsualización</h3>
          <EmailTemplatePreview
            templateId={template.id}
            html={previewHtml}
            adminEmail={session.user.email ?? "tu correo"}
          />
        </div>
      </div>
    </div>
  );
}
