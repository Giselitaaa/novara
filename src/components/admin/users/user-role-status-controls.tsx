"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { setUserRole, setUserStatus } from "@/modules/users/server/admin-actions";

export function UserRoleStatusControls({
  userId,
  currentRoleId,
  currentStatusKey,
  roles,
  statuses,
}: {
  userId: string;
  currentRoleId?: string;
  currentStatusKey: string;
  roles: { id: string; name: string }[];
  statuses: { id: string; key: string; label: string }[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-1.5">
        <Label>Rol</Label>
        <select
          defaultValue={currentRoleId}
          disabled={isPending}
          onChange={(e) =>
            startTransition(async () => {
              const result = await setUserRole(userId, e.target.value);
              toast.success(result.message);
              router.refresh();
            })
          }
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Estado de la cuenta</Label>
        <select
          defaultValue={currentStatusKey}
          disabled={isPending}
          onChange={(e) =>
            startTransition(async () => {
              try {
                const result = await setUserStatus(userId, e.target.value);
                toast.success(result.message);
                router.refresh();
              } catch (error) {
                toast.error(
                  error instanceof Error ? error.message : "No se pudo actualizar."
                );
              }
            })
          }
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {statuses.map((status) => (
            <option key={status.id} value={status.key}>
              {status.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
