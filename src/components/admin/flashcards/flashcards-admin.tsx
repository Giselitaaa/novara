"use client";

import { Plus, Trash2, Volume2, WalletCards } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Link, useRouter } from "@/i18n/navigation";
import { createDeck, deleteDeck } from "@/modules/flashcards/server/actions";

type Deck = {
  id: string;
  title: string;
  description: string | null;
  language: string | null;
  total: number;
  withAudio: number;
};

export function FlashcardsAdmin({ decks }: { decks: Deck[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showForm, setShowForm] = useState(decks.length === 0);

  function handleCreate(formData: FormData) {
    startTransition(async () => {
      try {
        const deck = await createDeck(formData);
        toast.success("Mazo creado.");
        router.push(`/admin/flashcards/${deck.id}` as never);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo crear el mazo.");
      }
    });
  }

  function handleDelete(id: string, title: string) {
    if (!confirm(`¿Eliminar el mazo "${title}" y todas sus tarjetas?`)) return;
    startTransition(async () => {
      try {
        await deleteDeck(id);
        toast.success("Mazo eliminado.");
        router.refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo eliminar.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        {showForm ? (
          <Card className="p-5">
            <form action={handleCreate} className="flex max-w-lg flex-col gap-4">
              <p className="font-display text-sm tracking-tighter">Nuevo mazo</p>
              <FormField id="title" label="Título">
                <Input id="title" name="title" placeholder="Vocabulario de negocios" required />
              </FormField>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField id="language" label="Idioma (ISO, p. ej. en, es)">
                  <Input id="language" name="language" placeholder="en" />
                </FormField>
                <FormField id="description" label="Descripción (opcional)">
                  <Input id="description" name="description" />
                </FormField>
              </div>
              <div className="flex gap-2">
                <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
                  {isPending ? "Creando…" : "Crear mazo"}
                </Button>
                {decks.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowForm(false)}
                    className="w-fit"
                  >
                    Cancelar
                  </Button>
                )}
              </div>
            </form>
          </Card>
        ) : (
          <Button variant="gold" onClick={() => setShowForm(true)} className="w-fit">
            <Plus className="size-4" /> Nuevo mazo
          </Button>
        )}
      </div>

      {decks.length === 0 && !showForm ? (
        <EmptyState
          icon={WalletCards}
          title="Todavía no hay mazos"
          description="Crea el primer mazo de flashcards para empezar a añadir vocabulario."
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Card key={deck.id} className="flex flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <Link
                  href={`/admin/flashcards/${deck.id}` as never}
                  className="min-w-0 flex-1 hover:underline"
                >
                  <p className="truncate font-display text-base tracking-tighter">
                    {deck.title}
                  </p>
                  {deck.description && (
                    <p className="truncate text-xs text-muted-foreground">{deck.description}</p>
                  )}
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Eliminar mazo"
                  disabled={isPending}
                  onClick={() => handleDelete(deck.id, deck.title)}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                  {deck.total} tarjeta{deck.total === 1 ? "" : "s"}
                </span>
                {deck.language && (
                  <span className="rounded bg-muted px-1.5 py-0.5 uppercase">
                    {deck.language}
                  </span>
                )}
                <span className="ml-auto flex items-center gap-1">
                  <Volume2 className="size-3.5" /> {deck.withAudio}/{deck.total}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
