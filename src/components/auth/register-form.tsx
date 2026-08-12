"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useActionState } from "react";

import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { registerUser, type ActionState } from "@/modules/users/server/actions";

const initialState: ActionState = { status: "idle" };

export function RegisterForm() {
  const t = useTranslations("nav");
  const [state, formAction, isPending] = useActionState(registerUser, initialState);

  useEffect(() => {
    if (state.status === "success") {
      // Navegación dura: el registro ya inició sesión en el servidor
      // (`signIn` en la server action); recargar contra "/" garantiza que
      // la home se pinte ya autenticada. Ver nota en login-form.
      window.location.assign("/");
    }
  }, [state.status]);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="font-display text-2xl tracking-tighter">{t("signUp")}</h1>
      </div>

      <GoogleSignInButton />

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">o</span>
        <Separator className="flex-1" />
      </div>

      <form action={formAction} className="flex flex-col gap-4" noValidate>
        <div className="grid grid-cols-2 gap-4">
          <FormField id="firstName" label="Nombre" error={state.fieldErrors?.firstName}>
            <Input id="firstName" name="firstName" autoComplete="given-name" />
          </FormField>
          <FormField id="lastName" label="Apellidos" error={state.fieldErrors?.lastName}>
            <Input id="lastName" name="lastName" autoComplete="family-name" />
          </FormField>
        </div>

        <FormField id="email" label="Email" error={state.fieldErrors?.email}>
          <Input id="email" name="email" type="email" autoComplete="email" />
        </FormField>

        <FormField id="password" label="Contraseña" error={state.fieldErrors?.password}>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
          />
        </FormField>

        <FormField
          id="confirmPassword"
          label="Confirmar contraseña"
          error={state.fieldErrors?.confirmPassword}
        >
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
          />
        </FormField>

        <div className="flex items-start gap-2.5 pt-1">
          <Checkbox id="acceptTerms" name="acceptTerms" className="mt-0.5" />
          <Label
            htmlFor="acceptTerms"
            className="text-sm font-normal text-muted-foreground"
          >
            Acepto los{" "}
            <Link href="/legal/terminos" className="underline underline-offset-2">
              términos y condiciones
            </Link>{" "}
            y la{" "}
            <Link href="/legal/privacidad" className="underline underline-offset-2">
              política de privacidad
            </Link>
            .
          </Label>
        </div>
        {state.fieldErrors?.acceptTerms && (
          <p className="text-xs text-destructive">{state.fieldErrors.acceptTerms}</p>
        )}

        {state.status === "error" && state.message && (
          <p role="alert" className="text-sm text-destructive">
            {state.message}
          </p>
        )}

        <Button type="submit" variant="gold" disabled={isPending} className="mt-2">
          {isPending ? "Creando cuenta…" : t("signUp")}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/auth/iniciar-sesion"
          className="font-medium text-foreground hover:underline"
        >
          {t("signIn")}
        </Link>
      </p>
    </div>
  );
}
