"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { changePassword, type ActionState } from "@/modules/users/server/actions";

const initialState: ActionState = { status: "idle" };

export function SecurityTab({ hasPassword }: { hasPassword: boolean }) {
  const [state, formAction, isPending] = useActionState(changePassword, initialState);

  if (!hasPassword) {
    return (
      <p className="max-w-md text-sm text-muted-foreground">
        Iniciaste sesión con Google, así que no tienes una contraseña propia que cambiar
        aquí.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex max-w-sm flex-col gap-4">
      <FormField
        id="currentPassword"
        label="Contraseña actual"
        error={state.fieldErrors?.currentPassword}
      >
        <Input
          id="currentPassword"
          name="currentPassword"
          type="password"
          autoComplete="current-password"
        />
      </FormField>

      <FormField
        id="newPassword"
        label="Nueva contraseña"
        error={state.fieldErrors?.newPassword}
      >
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          autoComplete="new-password"
        />
      </FormField>

      <FormField
        id="confirmPassword"
        label="Confirmar nueva contraseña"
        error={state.fieldErrors?.confirmPassword}
      >
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
        />
      </FormField>

      {state.status === "success" && (
        <p className="text-sm text-success">{state.message}</p>
      )}
      {state.status === "error" && state.message && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
        {isPending ? "Actualizando…" : "Actualizar contraseña"}
      </Button>
    </form>
  );
}
