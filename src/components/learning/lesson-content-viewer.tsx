"use client";

import { ExternalLink } from "lucide-react";
import { useRef } from "react";

import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { saveLessonProgress } from "@/modules/enrollments/server/actions";

type LessonContentData = {
  contentTypeKey: string;
  body: string | null;
  externalUrl: string | null;
  exerciseInstructions: string | null;
  lastPositionSeconds: number;
};

/**
 * Renderiza el contenido según su tipo. Para vídeo/audio, guarda la
 * posición automáticamente cada pocos segundos y retoma exactamente
 * donde el alumno lo dejó — "continuar donde se quedó" no es un texto
 * decorativo, es este `currentTime` real.
 */
export function LessonContentViewer({
  lessonId,
  content,
}: {
  lessonId: string;
  content: LessonContentData;
}) {
  const hasResumed = useRef(false);

  const debouncedSave = useDebouncedCallback((seconds: number) => {
    saveLessonProgress(lessonId, {
      watchedSeconds: Math.round(seconds),
      lastPositionSeconds: Math.round(seconds),
    });
  }, 4000);

  function handleTimeUpdate(
    e: React.SyntheticEvent<HTMLVideoElement | HTMLAudioElement>
  ) {
    debouncedSave(e.currentTarget.currentTime);
  }

  function handleLoadedMetadata(
    e: React.SyntheticEvent<HTMLVideoElement | HTMLAudioElement>
  ) {
    if (!hasResumed.current && content.lastPositionSeconds > 0) {
      e.currentTarget.currentTime = content.lastPositionSeconds;
      hasResumed.current = true;
    }
  }

  switch (content.contentTypeKey) {
    case "video":
      return content.externalUrl ? (
        // Sin pista de subtítulos: el contenido de vídeo referencia una URL
        // externa y el modelo aún no incluye un fichero de subtítulos (.vtt).
        // Cuando exista, se añadirá aquí un <track kind="captions">.
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          controls
          className="aspect-video w-full rounded-lg bg-black"
          src={content.externalUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      ) : (
        <EmptyContentNotice />
      );

    case "audio":
      return content.externalUrl ? (
        <div className="rounded-lg border border-border bg-muted/40 p-6">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio
            controls
            className="w-full"
            src={content.externalUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
        </div>
      ) : (
        <EmptyContentNotice />
      );

    case "pdf":
      return content.externalUrl ? (
        <div className="flex flex-col gap-3">
          <iframe
            src={content.externalUrl}
            title="Documento PDF"
            className="h-[70vh] w-full rounded-lg border border-border"
          />
          <a
            href={content.externalUrl}
            target="_blank"
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-gold-foreground hover:underline dark:text-gold"
          >
            Abrir en una pestaña nueva <ExternalLink className="size-3.5" />
          </a>
        </div>
      ) : (
        <EmptyContentNotice />
      );

    case "enlace_externo":
      return content.externalUrl ? (
        <a
          href={content.externalUrl}
          target="_blank"
          className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 p-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <ExternalLink className="size-4" /> Abrir enlace externo
        </a>
      ) : (
        <EmptyContentNotice />
      );

    case "ejercicio":
      return (
        <div className="prose prose-sm max-w-none rounded-lg border border-border bg-muted/30 p-6 dark:prose-invert">
          <p className="whitespace-pre-line">
            {content.exerciseInstructions || "Sin instrucciones todavía."}
          </p>
        </div>
      );

    case "texto":
    default:
      return (
        <div className="prose prose-sm max-w-none whitespace-pre-line dark:prose-invert">
          {content.body || "Sin contenido todavía."}
        </div>
      );
  }
}

function EmptyContentNotice() {
  return (
    <p className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
      El contenido de esta lección todavía no está disponible.
    </p>
  );
}
