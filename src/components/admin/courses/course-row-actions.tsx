"use client";

import { Archive, CheckCircle2, Copy, Eye, EyeOff, Send, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "@/i18n/navigation";
import {
  changeCourseStatus,
  deleteCourse,
  duplicateCourse,
} from "@/modules/courses/server/admin-actions";

export function CourseRowActions({
  courseId,
  statusKey,
}: {
  courseId: string;
  statusKey: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function run(fn: () => Promise<unknown>, successMessage: string) {
    startTransition(async () => {
      try {
        await fn();
        toast.success(successMessage);
        router.refresh();
      } catch {
        toast.error("No se pudo completar la acción.");
      }
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={isPending}>
          Acciones
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {statusKey === "borrador" && (
          <DropdownMenuItem
            onSelect={() =>
              run(
                () => changeCourseStatus(courseId, "en_revision"),
                "Enviado a revisión."
              )
            }
          >
            <Send className="mr-2 size-4" /> Enviar a revisión
          </DropdownMenuItem>
        )}
        {statusKey === "en_revision" && (
          <DropdownMenuItem
            onSelect={() =>
              run(() => changeCourseStatus(courseId, "aprobado"), "Curso aprobado.")
            }
          >
            <CheckCircle2 className="mr-2 size-4" /> Aprobar
          </DropdownMenuItem>
        )}
        {(statusKey === "aprobado" || statusKey === "archivado") && (
          <DropdownMenuItem
            onSelect={() =>
              run(() => changeCourseStatus(courseId, "publicado"), "Curso publicado.")
            }
          >
            <Eye className="mr-2 size-4" /> Publicar
          </DropdownMenuItem>
        )}
        {statusKey === "publicado" && (
          <DropdownMenuItem
            onSelect={() =>
              run(() => changeCourseStatus(courseId, "aprobado"), "Curso despublicado.")
            }
          >
            <EyeOff className="mr-2 size-4" /> Despublicar
          </DropdownMenuItem>
        )}
        {statusKey !== "archivado" && (
          <DropdownMenuItem
            onSelect={() =>
              run(() => changeCourseStatus(courseId, "archivado"), "Curso archivado.")
            }
          >
            <Archive className="mr-2 size-4" /> Archivar
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onSelect={() => run(() => duplicateCourse(courseId), "Curso duplicado.")}
        >
          <Copy className="mr-2 size-4" /> Duplicar
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            if (
              confirm(
                "¿Eliminar este curso? Podrás recuperarlo solo desde la base de datos."
              )
            ) {
              run(() => deleteCourse(courseId), "Curso eliminado.");
            }
          }}
        >
          <span className="flex items-center text-destructive">
            <Trash2 className="mr-2 size-4" /> Eliminar
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
