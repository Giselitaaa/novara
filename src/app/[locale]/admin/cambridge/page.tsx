import { GraduationCap } from "lucide-react";
import type { Metadata } from "next";

import { CambridgeGenerator } from "@/components/admin/cambridge/cambridge-generator";
import { listLessonsForInsert } from "@/modules/cambridge/server/queries";
import { CAMBRIDGE_LEVELS } from "@/modules/cambridge/shared/levels";
import { CAMBRIDGE_MODES } from "@/modules/cambridge/shared/prompts";

export const metadata: Metadata = { title: "Tutor Cambridge" };

export default async function AdminCambridgePage() {
  const lessons = await listLessonsForInsert();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2.5">
        <GraduationCap className="size-5 text-gold" />
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Tutor Cambridge</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Genera lecciones, ejercicios, simulacros y más para los 8 niveles de Cambridge
            English, anclados al contenido maestro validado.
          </p>
        </div>
      </div>

      <CambridgeGenerator
        levels={CAMBRIDGE_LEVELS.map((l) => ({
          id: l.id,
          name: l.name,
          exam: l.exam,
          cefr: l.cefr,
          ageRange: l.ageRange,
          forWhom: l.forWhom,
        }))}
        modes={CAMBRIDGE_MODES.map((m) => ({
          id: m.id,
          label: m.label,
          description: m.description,
          fields: [...m.fields],
        }))}
        lessons={lessons}
      />
    </div>
  );
}
