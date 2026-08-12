"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { resetPassword, type ActionState } from "@/modules/users/server/actions";

const initialState: ActionState = { status: "idle" };

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, formAction, isPending] = useActionState(resetPassword, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-2xl tracking-tighter">Contraseña actualizada</h1>
        <p className="text-sm text-muted-foreground">{state.message}</p>
        <Button asChild variant="gold">
          <Link href="/auth/iniciar-sesion">Iniciar sesión</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="font-display text-2xl tracking-tighter">Nueva contraseña</h1>
      </div>

      <form action={formAction} className="flex flex-col gap-4" noValidate>
        <input type="hidden" name="token" value={token} />

        <FormField
          id="password"
          label="Nueva contraseña"
          error={state.fieldErrors?.password}
        >
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

        {state.status === "error" && state.message && (
          <p role="alert" className="text-sm text-destructive">
            {state.message}
          </p>
        )}

        <Button type="submit" variant="gold" disabled={isPending}>
          {isPending ? "Guardando…" : "Guardar nueva contraseña"}
        </Button>
      </form>
    </div>
  );
}
