"use client";

import {
  ChevronDown,
  ChevronUp,
  Copy,
  Pencil,
  Plus,
  Trash2,
  Upload,
  Volume2,
  Wand2,
} from "lucide-react";
import { useMemo, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import {
  createCard,
  deleteCard,
  duplicateCard,
  generateCardAudio,
  generateDeckAudio,
  importCards,
  moveCard,
  updateCard,
  updateDeck,
} from "@/modules/flashcards/server/actions";

type CardData = {
  id: string;
  term: string;
  translation: string;
  explanation: string | null;
  example: string | null;
  category: string | null;
  level: string | null;
  pronunciation: string | null;
  ipa: string | null;
  notes: string | null;
  audioUrl: string | null;
};

type DeckData = {
  id: string;
  title: string;
  description: string | null;
  language: string | null;
};

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function FlashcardDeckEditor({
  deck,
  cards,
}: {
  deck: DeckData;
  cards: CardData[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cards;
    return cards.filter((c) =>
      [c.term, c.translation, c.category, c.level]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(q))
    );
  }, [cards, query]);

  const withoutAudio = cards.filter((c) => !c.audioUrl).length;

  function run(fn: () => Promise<unknown>, okMsg?: string) {
    startTransition(async () => {
      try {
        await fn();
        if (okMsg) toast.success(okMsg);
        router.refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Algo ha fallado.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Cabecera del mazo */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate font-display text-2xl tracking-tighter">{deck.title}</h1>
          <p className="text-sm text-muted-foreground">
            {cards.length} tarjeta{cards.length === 1 ? "" : "s"}
            {deck.language && ` · ${deck.language.toUpperCase()}`} · {cards.length - withoutAudio}/
            {cards.length} con audio
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowSettings((s) => !s)}>
            <Pencil className="size-4" /> Ajustes
          </Button>
          <Button variant="outline" size="sm" onClick={() => setShowImport((s) => !s)}>
            <Upload className="size-4" /> Importar
          </Button>
          <Button
            variant="gold"
            size="sm"
            disabled={isPending || withoutAudio === 0}
            onClick={() =>
              run(
                () => generateDeckAudio(deck.id),
                `Audio generado para las tarjetas que faltaban.`
              )
            }
            title={
              withoutAudio === 0
                ? "Todas las tarjetas ya tienen audio"
                : `Generar audio para ${withoutAudio} tarjeta(s)`
            }
          >
            <Wand2 className="size-4" /> Generar audio ({withoutAudio})
          </Button>
        </div>
      </div>

      {showSettings && <DeckSettings deck={deck} onSaved={() => router.refresh()} />}
      {showImport && (
        <ImportPanel
          deckId={deck.id}
          onDone={() => {
            setShowImport(false);
            router.refresh();
          }}
        />
      )}

      {/* Alta rápida */}
      <QuickAdd deckId={deck.id} onAdded={() => router.refresh()} />

      {/* Buscador */}
      {cards.length > 8 && (
        <Input
          placeholder="Buscar en el mazo (palabra, traducción, categoría, nivel)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-md"
        />
      )}

      {/* Lista de tarjetas */}
      <div className="flex flex-col gap-2">
        {filtered.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            {cards.length === 0
              ? "Este mazo todavía no tiene tarjetas. Añade la primera arriba."
              : "Ninguna tarjeta coincide con la búsqueda."}
          </p>
        ) : (
          filtered.map((card, i) => (
            <CardRow
              key={card.id}
              card={card}
              index={i}
              total={filtered.length}
              isEditing={editingId === card.id}
              isPending={isPending}
              onToggleEdit={() =>
                setEditingId((id) => (id === card.id ? null : card.id))
              }
              onSave={(input) =>
                run(async () => {
                  await updateCard(card.id, input);
                  setEditingId(null);
                }, "Tarjeta guardada.")
              }
              onDelete={() =>
                confirm("¿Eliminar esta tarjeta?") &&
                run(() => deleteCard(card.id), "Tarjeta eliminada.")
              }
              onDuplicate={() => run(() => duplicateCard(card.id), "Tarjeta duplicada.")}
              onMove={(dir) => run(() => moveCard(card.id, dir))}
              onGenerateAudio={() =>
                run(() => generateCardAudio(card.id), "Audio generado.")
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

function DeckSettings({ deck, onSaved }: { deck: DeckData; onSaved: () => void }) {
  const [isPending, startTransition] = useTransition();
  return (
    <Card className="p-4">
      <form
        action={(fd) =>
          startTransition(async () => {
            try {
              await updateDeck(deck.id, fd);
              toast.success("Mazo actualizado.");
              onSaved();
            } catch (error) {
              toast.error(error instanceof Error ? error.message : "No se pudo guardar.");
            }
          })
        }
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <FormField id="title" label="Título">
          <Input id="title" name="title" defaultValue={deck.title} required />
        </FormField>
        <FormField id="language" label="Idioma (ISO)">
          <Input id="language" name="language" defaultValue={deck.language ?? ""} placeholder="en" />
        </FormField>
        <FormField id="description" label="Descripción">
          <Input id="description" name="description" defaultValue={deck.description ?? ""} />
        </FormField>
        <Button type="submit" variant="gold" size="sm" disabled={isPending} className="w-fit">
          {isPending ? "Guardando…" : "Guardar ajustes"}
        </Button>
      </form>
    </Card>
  );
}

function ImportPanel({ deckId, onDone }: { deckId: string; onDone: () => void }) {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  return (
    <Card className="flex flex-col gap-3 p-4">
      <p className="font-display text-sm tracking-tighter">Importar tarjetas</p>
      <p className="text-xs text-muted-foreground">
        Una tarjeta por línea. Columnas separadas por <code>;</code> o tabulador, en este
        orden: <strong>palabra ; traducción ; ejemplo ; explicación ; categoría ; nivel</strong>.
        Solo palabra y traducción son obligatorias.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder={"break the ice;romper el hielo;Let's break the ice;;expresiones;B1\nkeen on;interesado en;;;adjetivos;B2"}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 font-mono text-xs"
      />
      <div className="flex gap-2">
        <Button
          variant="gold"
          size="sm"
          disabled={isPending || !text.trim()}
          onClick={() =>
            startTransition(async () => {
              const result = await importCards(deckId, text);
              if (result.status === "success") {
                toast.success(result.message);
                setText("");
                onDone();
              } else {
                toast.error(result.message);
              }
            })
          }
        >
          {isPending ? "Importando…" : "Importar"}
        </Button>
      </div>
    </Card>
  );
}

function QuickAdd({ deckId, onAdded }: { deckId: string; onAdded: () => void }) {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Card className="p-4">
      <form
        ref={formRef}
        action={(fd) =>
          startTransition(async () => {
            try {
              await createCard(deckId, {
                term: String(fd.get("term") ?? ""),
                translation: String(fd.get("translation") ?? ""),
                example: String(fd.get("example") ?? ""),
                category: String(fd.get("category") ?? ""),
                level: String(fd.get("level") ?? ""),
              });
              formRef.current?.reset();
              onAdded();
            } catch (error) {
              toast.error(error instanceof Error ? error.message : "No se pudo añadir.");
            }
          })
        }
        className="flex flex-col gap-3"
      >
        <p className="font-display text-sm tracking-tighter">Añadir tarjeta</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          <Input name="term" placeholder="Palabra *" required />
          <Input name="translation" placeholder="Traducción *" required />
          <Input name="example" placeholder="Ejemplo" />
          <Input name="category" placeholder="Categoría" />
          <select
            name="level"
            defaultValue=""
            className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
          >
            <option value="">Nivel…</option>
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" variant="outline" size="sm" disabled={isPending} className="w-fit">
          <Plus className="size-4" /> {isPending ? "Añadiendo…" : "Añadir"}
        </Button>
      </form>
    </Card>
  );
}

function CardRow({
  card,
  index,
  total,
  isEditing,
  isPending,
  onToggleEdit,
  onSave,
  onDelete,
  onDuplicate,
  onMove,
  onGenerateAudio,
}: {
  card: CardData;
  index: number;
  total: number;
  isEditing: boolean;
  isPending: boolean;
  onToggleEdit: () => void;
  onSave: (input: {
    term: string;
    translation: string;
    explanation?: string;
    example?: string;
    category?: string;
    level?: string;
    pronunciation?: string;
    ipa?: string;
    notes?: string;
  }) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onMove: (dir: "up" | "down") => void;
  onGenerateAudio: () => void;
}) {
  const [f, setF] = useState({
    term: card.term,
    translation: card.translation,
    explanation: card.explanation ?? "",
    example: card.example ?? "",
    category: card.category ?? "",
    level: card.level ?? "",
    pronunciation: card.pronunciation ?? "",
    ipa: card.ipa ?? "",
    notes: card.notes ?? "",
  });

  return (
    <Card className="p-3.5">
      {!isEditing ? (
        <div className="flex items-center gap-3">
          <div className="flex shrink-0 flex-col">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Subir"
              disabled={isPending || index === 0}
              onClick={() => onMove("up")}
              className="h-5"
            >
              <ChevronUp className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Bajar"
              disabled={isPending || index === total - 1}
              onClick={() => onMove("down")}
              className="h-5"
            >
              <ChevronDown className="size-3.5" />
            </Button>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              {card.term} <span className="text-muted-foreground">— {card.translation}</span>
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {[card.category, card.level, card.ipa && `/${card.ipa}/`]
                .filter(Boolean)
                .join(" · ") || (card.example ?? "")}
            </p>
          </div>
          {card.audioUrl ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio controls src={card.audioUrl} className="h-8 w-40" />
          ) : (
            <Button
              variant="ghost"
              size="sm"
              disabled={isPending}
              onClick={onGenerateAudio}
              title="Generar audio de pronunciación"
            >
              <Volume2 className="size-4" /> Audio
            </Button>
          )}
          <div className="flex shrink-0 items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Editar"
              disabled={isPending}
              onClick={onToggleEdit}
            >
              <Pencil className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Duplicar"
              disabled={isPending}
              onClick={onDuplicate}
            >
              <Copy className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Eliminar"
              disabled={isPending}
              onClick={onDelete}
            >
              <Trash2 className="size-4 text-destructive" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormField id={`term-${card.id}`} label="Palabra">
              <Input
                id={`term-${card.id}`}
                value={f.term}
                onChange={(e) => setF({ ...f, term: e.target.value })}
              />
            </FormField>
            <FormField id={`tr-${card.id}`} label="Traducción">
              <Input
                id={`tr-${card.id}`}
                value={f.translation}
                onChange={(e) => setF({ ...f, translation: e.target.value })}
              />
            </FormField>
          </div>
          <FormField id={`ex-${card.id}`} label="Ejemplo de uso">
            <Input
              id={`ex-${card.id}`}
              value={f.example}
              onChange={(e) => setF({ ...f, example: e.target.value })}
            />
          </FormField>
          <FormField id={`exp-${card.id}`} label="Explicación / matices">
            <Input
              id={`exp-${card.id}`}
              value={f.explanation}
              onChange={(e) => setF({ ...f, explanation: e.target.value })}
            />
          </FormField>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <FormField id={`cat-${card.id}`} label="Categoría">
              <Input
                id={`cat-${card.id}`}
                value={f.category}
                onChange={(e) => setF({ ...f, category: e.target.value })}
              />
            </FormField>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`lvl-${card.id}`}>Nivel</Label>
              <select
                id={`lvl-${card.id}`}
                value={f.level}
                onChange={(e) => setF({ ...f, level: e.target.value })}
                className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
              >
                <option value="">—</option>
                {LEVELS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <FormField id={`ipa-${card.id}`} label="IPA">
              <Input
                id={`ipa-${card.id}`}
                value={f.ipa}
                onChange={(e) => setF({ ...f, ipa: e.target.value })}
                placeholder="breɪk"
              />
            </FormField>
            <FormField id={`pron-${card.id}`} label="Pronunciación">
              <Input
                id={`pron-${card.id}`}
                value={f.pronunciation}
                onChange={(e) => setF({ ...f, pronunciation: e.target.value })}
              />
            </FormField>
          </div>
          <FormField id={`notes-${card.id}`} label="Notas del profesor">
            <Input
              id={`notes-${card.id}`}
              value={f.notes}
              onChange={(e) => setF({ ...f, notes: e.target.value })}
            />
          </FormField>
          <div className="flex gap-2">
            <Button
              variant="gold"
              size="sm"
              disabled={isPending}
              onClick={() => onSave(f)}
              className="w-fit"
            >
              {isPending ? "Guardando…" : "Guardar"}
            </Button>
            <Button variant="ghost" size="sm" onClick={onToggleEdit} className="w-fit">
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
