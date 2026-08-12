import { FileText, Headphones, Link2, PlayCircle, PencilLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatSeconds } from "@/lib/format";
import type { CourseModuleDTO } from "@/modules/courses/types/course-dto";

const CONTENT_ICONS: Record<string, LucideIcon> = {
  video: PlayCircle,
  audio: Headphones,
  texto: FileText,
  pdf: FileText,
  enlace_externo: Link2,
  ejercicio: PencilLine,
};

export function CourseCurriculum({ modules }: { modules: CourseModuleDTO[] }) {
  if (modules.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        El contenido de este curso se está terminando de estructurar.
      </p>
    );
  }

  return (
    <Accordion type="multiple" defaultValue={[modules[0]!.id]} className="w-full">
      {modules.map((module, index) => (
        <AccordionItem key={module.id} value={module.id}>
          <AccordionTrigger>
            <span className="flex items-baseline gap-3 text-left">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{module.title}</span>
              <span className="font-sans text-xs font-normal text-muted-foreground">
                ({module.lessons.length} lección{module.lessons.length === 1 ? "" : "es"})
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {module.description && <p className="mb-3">{module.description}</p>}
            <ul className="flex flex-col gap-2.5">
              {module.lessons.map((lesson) => {
                const Icon = CONTENT_ICONS[lesson.contentTypeKey] ?? FileText;
                return (
                  <li
                    key={lesson.id}
                    className="flex items-center justify-between gap-3 text-foreground"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className="size-4 shrink-0 text-muted-foreground" />
                      {lesson.title}
                      {lesson.isPreview && (
                        <span className="bg-gold/12 rounded-full px-2 py-0.5 text-[11px] font-medium text-gold-foreground dark:text-gold">
                          Vista previa
                        </span>
                      )}
                    </span>
                    {formatSeconds(lesson.durationSeconds) && (
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {formatSeconds(lesson.durationSeconds)}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
