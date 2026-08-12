"use client";

import { useActionState, useState } from "react";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfile, type ActionState } from "@/modules/users/server/actions";

const initialState: ActionState = { status: "idle" };

export function ProfileInfoForm({
  firstName,
  lastName,
  bio,
  country,
  avatarUrl,
}: {
  firstName: string;
  lastName: string;
  bio: string | null;
  country: string | null;
  avatarUrl: string | null;
}) {
  const [state, formAction, isPending] = useActionState(updateProfile, initialState);
  const [avatar, setAvatar] = useState(avatarUrl ?? "");

  return (
    <form action={formAction} className="flex max-w-lg flex-col gap-4">
      <FileUpload
        label="Foto de perfil"
        value={avatar}
        onChange={setAvatar}
        folder="avatars"
      />
      <input type="hidden" name="avatarUrl" value={avatar} />

      <div className="grid grid-cols-2 gap-4">
        <FormField id="firstName" label="Nombre" error={state.fieldErrors?.firstName}>
          <Input id="firstName" name="firstName" defaultValue={firstName} />
        </FormField>
        <FormField id="lastName" label="Apellidos" error={state.fieldErrors?.lastName}>
          <Input id="lastName" name="lastName" defaultValue={lastName} />
        </FormField>
      </div>

      <FormField id="country" label="País" error={state.fieldErrors?.country}>
        <Input id="country" name="country" defaultValue={country ?? ""} />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="bio">Biografía</Label>
        <textarea
          id="bio"
          name="bio"
          defaultValue={bio ?? ""}
          rows={3}
          maxLength={280}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {state.status === "success" && (
        <p className="text-sm text-success">{state.message}</p>
      )}

      <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
        {isPending ? "Guardando…" : "Guardar cambios"}
      </Button>
    </form>
  );
}
