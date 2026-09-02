"use client";

import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  FileText,
  GalleryHorizontalEnd,
  GripVertical,
  Image as ImageIcon,
  Lightbulb,
  ListChecks,
  Minus,
  Music,
  PenLine,
  Pencil,
  Plus,
  ShieldQuestion,
  StickyNote,
  Trash2,
  Type,
  Video,
  Volume2,
  WalletCards,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import {
  addBlock,
  deleteBlock,
  duplicateBlock,
  moveBlock,
  reorderBlocks,
  updateBlock,
  type BlockPatch,
} from "@/modules/lessons/server/block-actions";
import {
  applyTemplate,
  saveLessonAsTemplate,
} from "@/modules/lessons/server/template-actions";
import {
  BLOCK_META,
  LESSON_BLOCK_TYPES,
  type LessonBlockType,
} from "@/modules/lessons/types/blocks";

type BlockData = {
  id: string;
  type: string;
  title: string | null;
  content: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  audioUrl: string | null;
  data: Record<string, unknown> | null;
  deckId: string | null;
  deckTitle: string | null;
};

type DeckOption = { id: string; title: string; cards: number };
type ExerciseOption = { id: string; title: string; category: string };
type ExamOption = { id: string; title: string };
type TemplateOption = { id: string; name: string; blockCount: number };

const ICONS: Record<LessonBlockType, LucideIcon> = {
  TEXT: Type,
  GRAMMAR: BookOpen,
  SUMMARY: ListChecks,
  TIP: Lightbulb,
  NOTES: StickyNote,
  IMAGE: ImageIcon,
  GALLERY: GalleryHorizontalEnd,
  VIDEO: Video,
  AUDIO: Music,
  PRONUNCIATION: Volume2,
  PDF: FileText,
  RESOURCE: Download,
  FLASHCARDS: WalletCards,
  EXERCISE: PenLine,
  EXAM: ShieldQuestion,
  DIVIDER: Minus,
};

const CATEGORIES: { key: string; label: string }[] = [
  { key: "contenido", label: "Contenido" },
  { key: "media", label: "Multimedia" },
  { key: "interactivo", label: "Interactivo" },
  { key: "estructura", label: "Estructura" },
];

export function LessonBlocksEditor({
  lessonId,
  courseSlug,
  blocks,
  decks,
  exerciseOptions,
  examOptions,
  templates,
}: {
  lessonId: string;
  courseSlug: string | null;
  blocks: BlockData[];
  decks: DeckOption[];
  exerciseOptions: ExerciseOption[];
  examOptions: ExamOption[];
  templates: TemplateOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(blocks.length === 0);

  // Orden local para el arrastrar-y-soltar; se re-sincroniza con el servidor
  // cuando `blocks` cambia (tras cada guardado/refresh).
  const [ordered, setOrdered] = useState(blocks);
  useEffect(() => setOrdered(blocks), [blocks]);
  const dragIndex = useRef<number | null>(null);

  function handleDragStart(i: number) {
    dragIndex.current = i;
  }
  function handleDragEnter(i: number) {
    if (dragIndex.current === null || dragIndex.current === i) return;
    setOrdered((prev) => {
      const next = [...prev];
      const [moved] = next.splice(dragIndex.current!, 1);
      next.splice(i, 0, moved!);
      dragIndex.current = i;
      return next;
    });
  }
  function handleDrop() {
    if (dragIndex.current === null) return;
    dragIndex.current = null;
    run(() => reorderBlocks(lessonId, ordered.map((b) => b.id)));
  }

  function run(fn: () => Promise<unknown>, opts?: { done?: () => void }) {
    setStatus("saving");
    startTransition(async () => {
      try {
        await fn();
        setStatus("saved");
        opts?.done?.();
        router.refresh();
      } catch (error) {
        setStatus("error");
        toast.error(error instanceof Error ? error.message : "No se pudo guardar.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Barra de estado + acciones */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <span
            className={
              status === "error"
                ? "text-destructive"
                : status === "saving"
                  ? "text-muted-foreground"
                  : "text-muted-foreground"
            }
          >
            {status === "saving"
              ? "Guardando…"
              : status === "saved"
                ? "Todos los cambios guardados"
                : status === "error"
                  ? "Error al guardar — reintenta"
                  : `${blocks.length} bloque(s)`}
          </span>
        </div>
        <div className="flex gap-2">
          {courseSlug && (
            <Button asChild variant="outline" size="sm">
              <a
                href={`/cursos/${courseSlug}/aprender/${lessonId}`}
                target="_blank"
                rel="noreferrer"
              >
                Vista previa como alumno
              </a>
            </Button>
          )}
          <Button variant="gold" size="sm" onClick={() => setShowAdd((s) => !s)}>
            <Plus className="size-4" /> Añadir bloque
          </Button>
        </div>
      </div>

      {showAdd && (
        <AddBlockSelector
          onPick={(type) =>
            run(() => addBlock(lessonId, type), { done: () => setShowAdd(false) })
          }
          onClose={() => setShowAdd(false)}
          disabled={isPending}
        />
      )}

      {/* Plantillas de lección (esqueleto reutilizable) */}
      <div className="flex flex-wrap items-center gap-2 rounded-md border border-dashed border-border p-2.5 text-sm">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Plantillas
        </span>
        {templates.length > 0 && (
          <select
            aria-label="Aplicar plantilla"
            disabled={isPending}
            defaultValue=""
            onChange={(e) => {
              const id = e.target.value;
              e.target.value = "";
              if (id) run(() => applyTemplate(lessonId, id));
            }}
            className="h-8 rounded-md border border-input bg-background px-2 text-xs"
          >
            <option value="">Aplicar plantilla…</option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.blockCount} bloques)
              </option>
            ))}
          </select>
        )}
        <Button
          variant="ghost"
          size="sm"
          disabled={isPending || ordered.length === 0}
          onClick={() => {
            const name = prompt("Nombre de la plantilla (esqueleto de bloques):");
            if (name?.trim())
              run(() => saveLessonAsTemplate(lessonId, name), {
                done: () => toast.success("Plantilla guardada."),
              });
          }}
        >
          Guardar esta lección como plantilla
        </Button>
      </div>

      {/* Lista de bloques */}
      {ordered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Esta lección todavía no tiene bloques. Añade el primero con el botón de arriba.
        </p>
      ) : (
        <div className="flex flex-col gap-2.5">
          {ordered.map((block, i) => (
            <BlockCard
              key={block.id}
              block={block}
              index={i}
              total={ordered.length}
              decks={decks}
              exerciseOptions={exerciseOptions}
              examOptions={examOptions}
              isPending={isPending}
              onDragStart={() => handleDragStart(i)}
              onDragEnter={() => handleDragEnter(i)}
              onDrop={handleDrop}
              isEditing={editingId === block.id}
              onToggleEdit={() => setEditingId((id) => (id === block.id ? null : block.id))}
              onSave={(patch) =>
                run(() => updateBlock(block.id, patch), {
                  done: () => setEditingId(null),
                })
              }
              onDelete={() =>
                confirm("¿Eliminar este bloque?") && run(() => deleteBlock(block.id))
              }
              onDuplicate={() => run(() => duplicateBlock(block.id))}
              onMove={(dir) => run(() => moveBlock(block.id, dir))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function AddBlockSelector({
  onPick,
  onClose,
  disabled,
}: {
  onPick: (type: LessonBlockType) => void;
  onClose: () => void;
  disabled: boolean;
}) {
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm tracking-tighter">Elige un tipo de bloque</p>
        <Button variant="ghost" size="icon" aria-label="Cerrar" onClick={onClose}>
          <X className="size-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {CATEGORIES.map((cat) => {
          const types = LESSON_BLOCK_TYPES.filter((t) => BLOCK_META[t].category === cat.key);
          if (types.length === 0) return null;
          return (
            <div key={cat.key}>
              <p className="mb-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                {cat.label}
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {types.map((t) => {
                  const Icon = ICONS[t];
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={disabled}
                      onClick={() => onPick(t)}
                      className="flex items-start gap-2.5 rounded-md border border-border p-2.5 text-left transition-colors hover:bg-accent disabled:opacity-50"
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">{BLOCK_META[t].label}</span>
                        <span className="block text-xs text-muted-foreground">
                          {BLOCK_META[t].description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function typeLabel(type: string) {
  return (BLOCK_META as Record<string, { label: string }>)[type]?.label ?? type;
}

function BlockCard({
  block,
  index,
  total,
  decks,
  exerciseOptions,
  examOptions,
  isPending,
  isEditing,
  onToggleEdit,
  onSave,
  onDelete,
  onDuplicate,
  onMove,
  onDragStart,
  onDragEnter,
  onDrop,
}: {
  block: BlockData;
  index: number;
  total: number;
  decks: DeckOption[];
  exerciseOptions: ExerciseOption[];
  examOptions: ExamOption[];
  isPending: boolean;
  isEditing: boolean;
  onToggleEdit: () => void;
  onSave: (patch: BlockPatch) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onMove: (dir: "up" | "down") => void;
  onDragStart: () => void;
  onDragEnter: () => void;
  onDrop: () => void;
}) {
  const Icon = ICONS[block.type as LessonBlockType] ?? Type;
  return (
    <Card
      className="p-3"
      onDragEnter={(e) => {
        e.preventDefault();
        onDragEnter();
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <div className="flex items-center gap-3">
        {/* Asa de arrastre (reordena por drag-and-drop). */}
        <span
          draggable
          onDragStart={onDragStart}
          onDragEnd={onDrop}
          aria-label="Arrastrar para reordenar"
          className="cursor-grab text-muted-foreground active:cursor-grabbing"
        >
          <GripVertical className="size-4" />
        </span>
        <div className="flex shrink-0 flex-col">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Subir bloque"
            className="h-5"
            disabled={isPending || index === 0}
            onClick={() => onMove("up")}
          >
            <ChevronUp className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Bajar bloque"
            className="h-5"
            disabled={isPending || index === total - 1}
            onClick={() => onMove("down")}
          >
            <ChevronDown className="size-3.5" />
          </Button>
        </div>
        <Icon className="size-4 shrink-0 text-gold" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">
            {typeLabel(block.type)}
            {block.title && <span className="text-muted-foreground"> · {block.title}</span>}
          </p>
          <p className="truncate text-xs text-muted-foreground">{blockPreview(block)}</p>
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Editar bloque"
            disabled={isPending}
            onClick={onToggleEdit}
          >
            <Pencil className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Duplicar bloque"
            disabled={isPending}
            onClick={onDuplicate}
          >
            <Copy className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Eliminar bloque"
            disabled={isPending}
            onClick={onDelete}
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      </div>

      {isEditing && (
        <div className="mt-3 border-t border-border pt-3">
          <BlockEditForm
            block={block}
            decks={decks}
            exerciseOptions={exerciseOptions}
            examOptions={examOptions}
            isPending={isPending}
            onSave={onSave}
            onCancel={onToggleEdit}
          />
        </div>
      )}
    </Card>
  );
}

function blockPreview(block: BlockData): string {
  switch (block.type) {
    case "TEXT":
    case "GRAMMAR":
    case "TIP":
    case "NOTES":
      return block.content?.slice(0, 80) || "(vacío)";
    case "IMAGE":
      return block.imageUrl || "(sin imagen)";
    case "GALLERY":
      return `${((block.data?.images as string[]) ?? []).length} imagen(es)`;
    case "VIDEO":
      return block.videoUrl || "(sin vídeo)";
    case "AUDIO":
    case "PRONUNCIATION":
      return block.audioUrl || "(sin audio)";
    case "PDF":
    case "RESOURCE":
      return block.content || "(sin URL)";
    case "SUMMARY":
      return `${((block.data?.items as string[]) ?? []).length} punto(s)`;
    case "FLASHCARDS":
      return block.deckTitle ? `Mazo: ${block.deckTitle}` : "(sin mazo asignado)";
    case "EXERCISE":
    case "EXAM":
      return "Se conecta desde el módulo de ejercicios/exámenes";
    case "DIVIDER":
      return "—";
    default:
      return "";
  }
}

function BlockEditForm({
  block,
  decks,
  exerciseOptions,
  examOptions,
  isPending,
  onSave,
  onCancel,
}: {
  block: BlockData;
  decks: DeckOption[];
  exerciseOptions: ExerciseOption[];
  examOptions: ExamOption[];
  isPending: boolean;
  onSave: (patch: BlockPatch) => void;
  onCancel: () => void;
}) {
  const [content, setContent] = useState(block.content ?? "");
  const [title, setTitle] = useState(block.title ?? "");
  const [imageUrl, setImageUrl] = useState(block.imageUrl ?? "");
  const [videoUrl, setVideoUrl] = useState(block.videoUrl ?? "");
  const [audioUrl, setAudioUrl] = useState(block.audioUrl ?? "");
  const [deckId, setDeckId] = useState(block.deckId ?? "");
  const [exerciseId, setExerciseId] = useState((block.data?.exerciseId as string) ?? "");
  const [examId, setExamId] = useState((block.data?.examId as string) ?? "");
  const [variant, setVariant] = useState(
    (block.data?.variant as string) ?? "info"
  );
  const [items, setItems] = useState<string>(
    ((block.data?.items as string[]) ?? []).join("\n")
  );
  const [images, setImages] = useState<string>(
    ((block.data?.images as string[]) ?? []).join("\n")
  );
  const [genAudio, setGenAudio] = useState(false);

  /**
   * Genera el audio del texto con la capa de voz (Piper local u otro proveedor)
   * y guarda la URL resultante. Degrada con honestidad: si la voz o el
   * almacenamiento no están configurados, avisa y NO inventa audio.
   */
  async function generateAudio() {
    const text = content.trim();
    if (!text) {
      toast.error("Escribe primero el texto/guion a locutar.");
      return;
    }
    setGenAudio(true);
    try {
      const res = await fetch("/api/voice/synthesize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language: "en" }),
      });
      if (res.status === 503) {
        toast.error("Voz no disponible: configura VOICE_PROVIDER (p. ej. piper).");
        return;
      }
      const ctype = res.headers.get("content-type") ?? "";
      if (res.ok && ctype.includes("application/json")) {
        const data = (await res.json()) as { url?: string };
        if (data.url) {
          setAudioUrl(data.url);
          toast.success("Audio generado. Guarda el bloque para conservarlo.");
          return;
        }
      }
      if (res.ok) {
        // El proveedor devolvió bytes (sin almacenamiento): no hay URL persistente.
        toast.error("Configura almacenamiento (STORAGE_PROVIDER=local) para guardar el audio.");
        return;
      }
      toast.error("No se pudo generar el audio.");
    } catch {
      toast.error("No se pudo generar el audio.");
    } finally {
      setGenAudio(false);
    }
  }

  function save() {
    const patch: BlockPatch = {};
    switch (block.type) {
      case "TEXT":
        patch.content = content || null;
        break;
      case "GRAMMAR":
        patch.title = title || null;
        patch.content = content || null;
        break;
      case "TIP":
        patch.content = content || null;
        patch.data = { variant };
        break;
      case "NOTES":
        patch.title = title || null;
        patch.content = content || null;
        patch.data = { variant };
        break;
      case "IMAGE":
        patch.imageUrl = imageUrl || null;
        patch.content = content || null; // pie de imagen
        break;
      case "GALLERY":
        patch.data = {
          images: images
            .split(/\n/)
            .map((s) => s.trim())
            .filter(Boolean),
        };
        break;
      case "VIDEO":
        patch.videoUrl = videoUrl || null;
        break;
      case "AUDIO":
        patch.audioUrl = audioUrl || null;
        patch.content = content || null; // guion/transcripción para regenerar audio
        break;
      case "PRONUNCIATION":
        patch.content = content || null;
        patch.audioUrl = audioUrl || null;
        break;
      case "PDF":
      case "RESOURCE":
        patch.title = title || null;
        patch.content = content || null; // URL
        break;
      case "SUMMARY":
        patch.data = {
          items: items
            .split(/\n/)
            .map((s) => s.trim())
            .filter(Boolean),
        };
        break;
      case "FLASHCARDS":
        patch.deckId = deckId || null;
        break;
      case "EXERCISE":
        patch.data = { exerciseId: exerciseId || null };
        break;
      case "EXAM":
        patch.data = { examId: examId || null };
        break;
      default:
        break;
    }
    onSave(patch);
  }

  const textArea = (
    value: string,
    setValue: (v: string) => void,
    placeholder: string,
    rows = 4
  ) => (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
    />
  );

  return (
    <div className="flex flex-col gap-3">
      {(block.type === "TEXT" || block.type === "GRAMMAR") && (
        <>
          {block.type === "GRAMMAR" && (
            <FormField id={`t-${block.id}`} label="Título">
              <Input id={`t-${block.id}`} value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormField>
          )}
          <Label>Contenido</Label>
          {textArea(content, setContent, "Escribe el texto de la lección…", 6)}
        </>
      )}

      {(block.type === "TIP" || block.type === "NOTES") && (
        <>
          {block.type === "NOTES" && (
            <FormField id={`t-${block.id}`} label="Título (opcional)">
              <Input id={`t-${block.id}`} value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormField>
          )}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`v-${block.id}`}>Estilo</Label>
            <select
              id={`v-${block.id}`}
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              className="h-10 w-fit rounded-md border border-input bg-background px-2.5 text-sm"
            >
              <option value="info">Información</option>
              <option value="warning">Atención</option>
              <option value="success">Consejo</option>
            </select>
          </div>
          <Label>Contenido</Label>
          {textArea(content, setContent, "Texto del aviso…")}
        </>
      )}

      {block.type === "IMAGE" && (
        <>
          <FormField id={`img-${block.id}`} label="URL de la imagen">
            <Input
              id={`img-${block.id}`}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://…"
            />
          </FormField>
          <FormField id={`cap-${block.id}`} label="Pie de imagen (opcional)">
            <Input id={`cap-${block.id}`} value={content} onChange={(e) => setContent(e.target.value)} />
          </FormField>
        </>
      )}

      {block.type === "GALLERY" && (
        <>
          <Label>URLs de imágenes (una por línea)</Label>
          {textArea(images, setImages, "https://…\nhttps://…", 5)}
        </>
      )}

      {block.type === "VIDEO" && (
        <FormField id={`vid-${block.id}`} label="URL del vídeo">
          <Input
            id={`vid-${block.id}`}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://…"
          />
        </FormField>
      )}

      {(block.type === "AUDIO" || block.type === "PRONUNCIATION") && (
        <>
          {block.type === "PRONUNCIATION" && (
            <FormField id={`w-${block.id}`} label="Palabra o frase">
              <Input id={`w-${block.id}`} value={content} onChange={(e) => setContent(e.target.value)} />
            </FormField>
          )}
          {block.type === "AUDIO" && (
            <>
              <Label htmlFor={`gs-${block.id}`}>Guion (texto para generar el audio)</Label>
              <textarea
                id={`gs-${block.id}`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                placeholder="Escribe aquí el texto que se locutará (p. ej. el guion del Listening)…"
                className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
              />
            </>
          )}
          <FormField id={`aud-${block.id}`} label="URL del audio">
            <Input
              id={`aud-${block.id}`}
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              placeholder="https://… (o genera el audio con el botón)"
            />
          </FormField>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={generateAudio}
            disabled={genAudio || !content.trim()}
            className="w-fit"
          >
            <Volume2 className="size-4" /> {genAudio ? "Generando…" : "Generar audio"}
          </Button>
        </>
      )}

      {(block.type === "PDF" || block.type === "RESOURCE") && (
        <>
          <FormField id={`t-${block.id}`} label="Título / etiqueta">
            <Input id={`t-${block.id}`} value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormField>
          <FormField id={`u-${block.id}`} label="URL del archivo">
            <Input
              id={`u-${block.id}`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="https://…"
            />
          </FormField>
        </>
      )}

      {block.type === "SUMMARY" && (
        <>
          <Label>Puntos clave (uno por línea)</Label>
          {textArea(items, setItems, "Primer punto\nSegundo punto", 5)}
        </>
      )}

      {block.type === "FLASHCARDS" && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`d-${block.id}`}>Mazo de flashcards</Label>
          {decks.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              No hay mazos todavía. Crea uno en la sección Flashcards.
            </p>
          ) : (
            <select
              id={`d-${block.id}`}
              value={deckId}
              onChange={(e) => setDeckId(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
            >
              <option value="">— Selecciona un mazo —</option>
              {decks.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title} ({d.cards})
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {block.type === "EXERCISE" && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`ex-${block.id}`}>Ejercicio de la lección</Label>
          {exerciseOptions.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              No hay ejercicios en esta lección. Créalos en «Ejercicios de la lección».
            </p>
          ) : (
            <select
              id={`ex-${block.id}`}
              value={exerciseId}
              onChange={(e) => setExerciseId(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
            >
              <option value="">— Selecciona un ejercicio —</option>
              {exerciseOptions.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.title} ({ex.category})
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {block.type === "EXAM" && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`exam-${block.id}`}>Examen</Label>
          {examOptions.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              No hay exámenes en el curso. Créalos en la sección Exámenes.
            </p>
          ) : (
            <select
              id={`exam-${block.id}`}
              value={examId}
              onChange={(e) => setExamId(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
            >
              <option value="">— Selecciona un examen —</option>
              {examOptions.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.title}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {block.type === "DIVIDER" && (
        <p className="text-xs text-muted-foreground">
          Separador visual. No requiere configuración.
        </p>
      )}

      {block.type !== "DIVIDER" && (
        <div className="flex gap-2">
          <Button variant="gold" size="sm" disabled={isPending} onClick={save} className="w-fit">
            {isPending ? "Guardando…" : "Guardar bloque"}
          </Button>
          <Button variant="ghost" size="sm" onClick={onCancel} className="w-fit">
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
}
