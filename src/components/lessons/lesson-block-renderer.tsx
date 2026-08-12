import type { LessonBlock } from "@prisma/client";
import { Download, FileText, Lightbulb, WalletCards } from "lucide-react";


function asStringArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

const NOTE_STYLES: Record<string, string> = {
  info: "border-primary/25 bg-primary/5",
  warning: "border-destructive/30 bg-destructive/5",
  success: "border-gold/30 bg-gold/5",
};

export function LessonBlockRenderer({ block }: { block: LessonBlock }) {
  const data = (block.data ?? null) as Record<string, unknown> | null;

  switch (block.type) {
    case "TEXT":
      return <div className="prose prose-sm max-w-none whitespace-pre-line dark:prose-invert">{block.content}</div>;

    case "GRAMMAR":
      return (
        <div className="rounded-lg border border-border bg-muted/30 p-5">
          {block.title && (
            <p className="mb-2 font-display text-base tracking-tighter">{block.title}</p>
          )}
          <div className="prose prose-sm max-w-none whitespace-pre-line dark:prose-invert">
            {block.content}
          </div>
        </div>
      );

    case "TIP":
    case "NOTES": {
      const variant = (data?.variant as string) ?? (block.type === "TIP" ? "success" : "info");
      return (
        <div
          className={`flex gap-3 rounded-lg border p-4 ${NOTE_STYLES[variant] ?? NOTE_STYLES.info}`}
        >
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-gold" />
          <div>
            {block.title && <p className="mb-1 text-sm font-medium">{block.title}</p>}
            <p className="whitespace-pre-line text-sm">{block.content}</p>
          </div>
        </div>
      );
    }

    case "IMAGE":
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.imageUrl ?? ""} alt={block.content ?? ""} className="w-full rounded-lg" />
          {block.content && (
            <figcaption className="mt-1.5 text-center text-xs text-muted-foreground">
              {block.content}
            </figcaption>
          )}
        </figure>
      );

    case "GALLERY": {
      const images = asStringArray(data?.images);
      if (images.length === 0) return null;
      return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" className="aspect-square w-full rounded-md object-cover" />
          ))}
        </div>
      );
    }

    case "VIDEO":
      return (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video controls src={block.videoUrl ?? ""} className="aspect-video w-full rounded-lg bg-black" />
      );

    case "AUDIO":
      return (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio controls src={block.audioUrl ?? ""} className="w-full" />
      );

    case "PRONUNCIATION":
      return (
        <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3">
          <span className="font-medium">{block.content}</span>
          {block.audioUrl && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio controls src={block.audioUrl} className="h-8" />
          )}
        </div>
      );

    case "PDF":
      return (
        <div className="flex flex-col gap-2">
          {block.content && (
            <iframe
              src={block.content}
              title={block.title ?? "Documento PDF"}
              className="h-[70vh] w-full rounded-lg border border-border"
            />
          )}
          {block.content && (
            <a
              href={block.content}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-1.5 text-sm font-medium text-gold-foreground hover:underline dark:text-gold"
            >
              <FileText className="size-3.5" /> {block.title || "Abrir documento"}
            </a>
          )}
        </div>
      );

    case "RESOURCE":
      return block.content ? (
        <a
          href={block.content}
          target="_blank"
          rel="noreferrer"
          className="flex w-fit items-center gap-2 rounded-md border border-border px-3.5 py-2.5 text-sm font-medium hover:bg-accent"
        >
          <Download className="size-4 text-gold" /> {block.title || "Descargar recurso"}
        </a>
      ) : null;

    case "SUMMARY": {
      const items = asStringArray(data?.items);
      if (items.length === 0) return null;
      return (
        <div className="rounded-lg border border-border bg-muted/30 p-5">
          {block.title && (
            <p className="mb-2 font-display text-base tracking-tighter">{block.title}</p>
          )}
          <ul className="flex flex-col gap-1.5 text-sm">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gold">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case "FLASHCARDS":
      return (
        <div className="flex items-center gap-3 rounded-lg border border-gold/25 bg-gold/5 p-4">
          <WalletCards className="size-5 shrink-0 text-gold" />
          <p className="text-sm font-medium">Mazo de flashcards para practicar vocabulario.</p>
        </div>
      );

    case "DIVIDER":
      return <hr className="border-border" />;

    default:
      return null;
  }
}
