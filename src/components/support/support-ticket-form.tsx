"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createSupportTicket,
  type SupportTicketActionState,
} from "@/modules/support/server/actions";

const initialState: SupportTicketActionState = { status: "idle" };

const CATEGORY_KEYS = ["pagos", "tecnico", "contenido", "cuenta"] as const;

export function SupportTicketForm() {
  const t = useTranslations("support");
  const [state, formAction, isPending] = useActionState(
    createSupportTicket,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-success/30 bg-success/5 p-6 text-center">
        <p className="font-display text-lg tracking-tighter">{t("successTitle")}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <FormField id="subject" label={t("fields.subject")}>
        <Input id="subject" name="subject" required maxLength={150} />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="category">{t("fields.category")}</Label>
        <select
          id="category"
          name="category"
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {CATEGORY_KEYS.map((key) => (
            <option key={key} value={key}>
              {t(`fields.categories.${key}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">{t("fields.message")}</Label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
        {isPending ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
