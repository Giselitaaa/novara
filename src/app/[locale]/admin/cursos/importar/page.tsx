import type { Metadata } from "next";

import { CourseImportForm } from "@/components/admin/courses/course-import-form";
import { listCatalogOptions } from "@/modules/courses/server/admin-queries";

export const metadata: Metadata = { title: "Importar curso" };

export default async function ImportCoursePage() {
  const options = await listCatalogOptions();

  return (
    <div className="max-w-4xl">
      <h1 className="mb-1 font-display text-2xl tracking-tighter">
        Importar curso completo
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Pega un JSON con la estructura completa del curso (módulos, lecciones, pedagogía,
        tests de módulo y proyecto final) para crearlo de una sola vez, como borrador.
        Pensado para escalar a cientos de cursos sin tocar código: cualquier herramienta
        externa que respete este formato puede generar cursos en NOVARA.
      </p>
      <CourseImportForm options={options} />
    </div>
  );
}
