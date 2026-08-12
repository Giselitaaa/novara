import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseEditorHeader } from "@/components/admin/courses/course-editor-header";
import { CourseQualityReport } from "@/components/admin/courses/course-quality-report";
import { FinalProjectForm } from "@/components/admin/courses/final-project-form";
import { GeneralForm } from "@/components/admin/courses/general-form";
import { ListItemsEditor } from "@/components/admin/courses/list-items-editor";
import { ModulesEditor } from "@/components/admin/courses/modules-editor";
import { ResourcesEditor } from "@/components/admin/courses/resources-editor";
import { PricingForm, SEOForm } from "@/components/admin/courses/seo-pricing-forms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  addObjective,
  addRequirement,
  deleteObjective,
  deleteRequirement,
} from "@/modules/courses/server/admin-actions";
import {
  getCourseForEdit,
  listCatalogOptions,
} from "@/modules/courses/server/admin-queries";
import { getCourseQualityReport } from "@/modules/courses/server/quality-queries";

export const metadata: Metadata = { title: "Editar curso" };

type Props = { params: Promise<{ id: string }> };

export default async function EditCoursePage({ params }: Props) {
  const { id } = await params;
  const [course, options, qualityIssues] = await Promise.all([
    getCourseForEdit(id),
    listCatalogOptions(),
    getCourseQualityReport(id),
  ]);

  if (!course) notFound();

  return (
    <div className="flex flex-col gap-6">
      <CourseEditorHeader
        id={course.id}
        title={course.title}
        slug={course.slug}
        statusKey={course.status.key}
        statusLabel={course.status.label}
      />

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contenido">Contenido</TabsTrigger>
          <TabsTrigger value="objetivos">Objetivos y requisitos</TabsTrigger>
          <TabsTrigger value="recursos">Recursos</TabsTrigger>
          <TabsTrigger value="proyecto">Proyecto final</TabsTrigger>
          <TabsTrigger value="precio">Precio</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="calidad">Calidad</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <GeneralForm courseId={course.id} course={course} options={options} />
        </TabsContent>

        <TabsContent value="contenido">
          <ModulesEditor
            courseId={course.id}
            courseTitle={course.title}
            modules={course.modules}
            contentTypes={options.contentTypes}
          />
        </TabsContent>

        <TabsContent
          value="objetivos"
          className="flex flex-col gap-8 sm:flex-row sm:gap-16"
        >
          <ListItemsEditor
            title="Objetivos de aprendizaje"
            courseId={course.id}
            items={course.objectives}
            onAdd={addObjective}
            onDelete={deleteObjective}
            placeholder="Ej. Crear tu primera API en Python"
          />
          <ListItemsEditor
            title="Requisitos previos"
            courseId={course.id}
            items={course.requirements}
            onAdd={addRequirement}
            onDelete={deleteRequirement}
            placeholder="Ej. Nociones básicas de programación"
          />
        </TabsContent>

        <TabsContent value="recursos">
          <ResourcesEditor
            courseId={course.id}
            attached={course.resources}
            resourceTypes={options.resourceTypes}
          />
        </TabsContent>

        <TabsContent value="proyecto">
          <FinalProjectForm courseId={course.id} existing={course.finalProject} />
        </TabsContent>

        <TabsContent value="precio">
          <PricingForm
            courseId={course.id}
            accessTypeId={course.accessTypeId}
            price={course.price ? Number(course.price) : null}
            accessTypes={options.accessTypes}
          />
        </TabsContent>

        <TabsContent value="seo">
          <SEOForm
            courseId={course.id}
            courseTitle={course.title}
            courseDescription={course.description}
            seoTitle={course.seoTitle}
            seoDescription={course.seoDescription}
            seoKeywords={course.seoKeywords}
          />
        </TabsContent>

        <TabsContent value="calidad">
          <CourseQualityReport issues={qualityIssues ?? []} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
