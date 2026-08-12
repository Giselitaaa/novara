import { z } from "zod";

/**
 * Formato de importación de curso completo. Es intencionadamente un
 * superconjunto de lo que genera el asistente de IA (mismos campos
 * de estructura), con lo necesario para el estándar NOVARA completo:
 * tipo de contenido y cuerpo por lección, pedagogía de 10 puntos,
 * ejercicios, test de módulo, examen final y proyecto final.
 *
 * Esta es la única fuente de verdad de qué forma debe tener un JSON
 * de importación — documentarlo aquí (y en `/admin/cursos/importar`)
 * es lo que permite añadir cursos completos en el futuro sin tocar
 * código, tal como se pidió explícitamente.
 */
export const courseImportSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional().default(""),
  description: z.string().min(1),
  objectives: z.array(z.string()).default([]),
  requirements: z.array(z.string()).default([]),
  modules: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().optional().default(""),
      test: z
        .object({
          title: z.string(),
          passingScore: z.number().min(0).max(100).default(70),
        })
        .optional(),
      lessons: z.array(
        z.object({
          title: z.string().min(1),
          contentTypeKey: z
            .enum(["video", "texto", "audio", "pdf", "enlace_externo", "ejercicio"])
            .default("texto"),
          durationSeconds: z.number().optional(),
          isPreview: z.boolean().optional().default(false),
          body: z.string().optional(),
          externalUrl: z.string().optional(),
          exerciseInstructions: z.string().optional(),
          pedagogy: z
            .object({
              objective: z.string().optional(),
              examples: z.array(z.string()).optional(),
              commonMistakes: z.array(z.string()).optional(),
              visualSchemaUrl: z.string().optional(),
              mindMapUrl: z.string().optional(),
              summary: z.string().optional(),
              reviewPrompts: z.array(z.string()).optional(),
            })
            .optional(),
        })
      ),
    })
  ),
  finalProject: z
    .object({
      title: z.string(),
      instructions: z.string(),
    })
    .optional(),
});

export type CourseImportData = z.infer<typeof courseImportSchema>;
