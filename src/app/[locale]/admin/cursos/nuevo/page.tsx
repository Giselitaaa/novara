import type { Metadata } from "next";

import { AICourseGenerator } from "@/components/admin/ai/ai-course-generator";
import { NewCourseForm } from "@/components/admin/courses/new-course-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { listCatalogOptions } from "@/modules/courses/server/admin-queries";

export const metadata: Metadata = { title: "Nuevo curso" };

export default async function NewCoursePage() {
  const options = await listCatalogOptions();

  return (
    <div className="max-w-3xl">
      <h1 className="mb-1 font-display text-2xl tracking-tighter">Nuevo curso</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Empieza desde cero o pide al asistente de IA una primera estructura para revisar.
      </p>

      <Tabs defaultValue="manual">
        <TabsList>
          <TabsTrigger value="manual">Manual</TabsTrigger>
          <TabsTrigger value="ia">Con asistente de IA</TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="max-w-xl">
          <NewCourseForm options={options} />
        </TabsContent>

        <TabsContent value="ia">
          <AICourseGenerator options={options} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
