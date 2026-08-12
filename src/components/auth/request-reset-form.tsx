"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { requestPasswordReset, type ActionState } from "@/modules/users/server/actions";

const initialState: ActionState = { status: "idle" };

export function RequestResetForm() {
  const [state, formAction, isPending] = useActionState(
    requestPasswordReset,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-2xl tracking-tighter">Revisa tu email</h1>
        <p className="text-sm text-muted-foreground">{state.message}</p>
        <Link href="/auth/iniciar-sesion" className="text-sm font-medium underline">
          Volver a iniciar sesión
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="font-display text-2xl tracking-tighter">Recupera tu contraseña</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Te enviaremos un enlace para restablecerla.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4" noValidate>
        <FormField id="email" label="Email" error={state.fieldErrors?.email}>
          <Input id="email" name="email" type="email" autoComplete="email" />
        </FormField>

        <Button type="submit" variant="gold" disabled={isPending}>
          {isPending ? "Enviando…" : "Enviar enlace"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        <Link
          href="/auth/iniciar-sesion"
          className="font-medium text-foreground hover:underline"
        >
          Volver a iniciar sesión
        </Link>
      </p>
    </div>
  );
}
