"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateGlobalSettings } from "@/modules/cms/server/settings-actions";
import type { SettingsMap } from "@/modules/cms/server/settings-queries";

export function SettingsForm({ settings }: { settings: SettingsMap }) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateGlobalSettings(formData);
      toast.success(result.message);
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-2xl flex-col gap-10">
      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">Marca</h2>
        <div className="flex flex-col gap-4">
          <FormField id="site_name" label="Nombre de la plataforma">
            <Input
              id="site_name"
              name="site_name"
              defaultValue={settings.site_name || "NOVARA"}
            />
          </FormField>
          <FormField id="site_logo_url" label="URL del logo">
            <Input
              id="site_logo_url"
              name="site_logo_url"
              defaultValue={settings.site_logo_url}
            />
          </FormField>
          <FormField id="site_favicon_url" label="URL del favicon">
            <Input
              id="site_favicon_url"
              name="site_favicon_url"
              defaultValue={settings.site_favicon_url}
            />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">Redes sociales</h2>
        <div className="flex flex-col gap-4">
          <FormField id="social_instagram" label="Instagram">
            <Input
              id="social_instagram"
              name="social_instagram"
              defaultValue={settings.social_instagram}
            />
          </FormField>
          <FormField id="social_linkedin" label="LinkedIn">
            <Input
              id="social_linkedin"
              name="social_linkedin"
              defaultValue={settings.social_linkedin}
            />
          </FormField>
          <FormField id="social_youtube" label="YouTube">
            <Input
              id="social_youtube"
              name="social_youtube"
              defaultValue={settings.social_youtube}
            />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">Contacto</h2>
        <div className="flex flex-col gap-4">
          <FormField id="contact_email" label="Email de contacto">
            <Input
              id="contact_email"
              name="contact_email"
              defaultValue={settings.contact_email}
            />
          </FormField>
          <FormField id="contact_phone" label="Teléfono de contacto">
            <Input
              id="contact_phone"
              name="contact_phone"
              defaultValue={settings.contact_phone}
            />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">Métodos de pago</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Se muestran al alumno en el checkout de cursos premium.
        </p>
        <div className="flex flex-col gap-4">
          <FormField id="payment_bizum_number" label="Número de Bizum">
            <Input
              id="payment_bizum_number"
              name="payment_bizum_number"
              defaultValue={settings.payment_bizum_number}
            />
          </FormField>
          <FormField id="payment_bank_iban" label="IBAN">
            <Input
              id="payment_bank_iban"
              name="payment_bank_iban"
              defaultValue={settings.payment_bank_iban}
            />
          </FormField>
          <FormField id="payment_bank_holder" label="Titular de la cuenta">
            <Input
              id="payment_bank_holder"
              name="payment_bank_holder"
              defaultValue={settings.payment_bank_holder}
            />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">SEO global</h2>
        <div className="flex flex-col gap-4">
          <FormField id="seo_default_title" label="Título por defecto">
            <Input
              id="seo_default_title"
              name="seo_default_title"
              defaultValue={settings.seo_default_title}
            />
          </FormField>
          <FormField id="seo_default_description" label="Descripción por defecto">
            <Input
              id="seo_default_description"
              name="seo_default_description"
              defaultValue={settings.seo_default_description}
            />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">Legal y cookies</h2>
        <div className="flex flex-col gap-4">
          <FormField id="legal_company_name" label="Razón social">
            <Input
              id="legal_company_name"
              name="legal_company_name"
              defaultValue={settings.legal_company_name}
            />
          </FormField>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cookies_notice">Aviso de cookies</Label>
            <textarea
              id="cookies_notice"
              name="cookies_notice"
              defaultValue={settings.cookies_notice}
              rows={3}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">
          Analíticas externas
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Se activan solo si rellenas su ID correspondiente. Ninguna se carga hasta que
          guardes esta configuración.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="analytics_enabled"
              name="analytics_enabled"
              defaultChecked={settings.analytics_enabled === "on"}
            />
            <Label htmlFor="analytics_enabled" className="font-normal">
              Activar analíticas externas
            </Label>
          </div>
          <FormField id="analytics_ga_id" label="Google Analytics (Measurement ID)">
            <Input
              id="analytics_ga_id"
              name="analytics_ga_id"
              placeholder="G-XXXXXXXXXX"
              defaultValue={settings.analytics_ga_id}
            />
          </FormField>
          <FormField id="analytics_gtm_id" label="Google Tag Manager (Container ID)">
            <Input
              id="analytics_gtm_id"
              name="analytics_gtm_id"
              placeholder="GTM-XXXXXXX"
              defaultValue={settings.analytics_gtm_id}
            />
          </FormField>
          <FormField id="analytics_clarity_id" label="Microsoft Clarity (Project ID)">
            <Input
              id="analytics_clarity_id"
              name="analytics_clarity_id"
              defaultValue={settings.analytics_clarity_id}
            />
          </FormField>
          <FormField
            id="analytics_plausible_domain"
            label="Plausible (dominio registrado)"
          >
            <Input
              id="analytics_plausible_domain"
              name="analytics_plausible_domain"
              placeholder="novara.academy"
              defaultValue={settings.analytics_plausible_domain}
            />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-lg tracking-tighter">
          Programa de afiliados
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Arquitectura completa preparada — actívalo cuando quieras empezar a operar con
          afiliados.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="affiliate_program_enabled"
              name="affiliate_program_enabled"
              defaultChecked={settings.affiliate_program_enabled === "on"}
            />
            <Label htmlFor="affiliate_program_enabled" className="font-normal">
              Activar programa de afiliados
            </Label>
          </div>
          <FormField id="affiliate_default_commission" label="Comisión por defecto (%)">
            <Input
              id="affiliate_default_commission"
              name="affiliate_default_commission"
              type="number"
              min={0}
              max={100}
              defaultValue={settings.affiliate_default_commission || "10"}
            />
          </FormField>
        </div>
      </section>

      <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
        {isPending ? "Guardando…" : "Guardar configuración"}
      </Button>
    </form>
  );
}
