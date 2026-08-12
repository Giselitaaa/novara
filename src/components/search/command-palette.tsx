"use client";

import {
  BookOpen,
  Clock,
  FileText,
  Folder,
  Paperclip,
  Search,
  TrendingUp,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { useRouter } from "@/i18n/navigation";
import {
  getTrendingCourses,
  globalSearch,
  type SearchResult,
} from "@/modules/search/server/actions";

const TYPE_ICONS: Record<SearchResult["type"] | "faq", LucideIcon> = {
  curso: BookOpen,
  categoria: Folder,
  blog: FileText,
  recurso: Paperclip,
  faq: Search,
};

const TYPE_LABELS: Record<SearchResult["type"] | "faq", string> = {
  curso: "Curso",
  categoria: "Categoría",
  blog: "Blog",
  recurso: "Recurso",
  faq: "Pregunta frecuente",
};

const RECENT_SEARCHES_KEY = "novara:recent-searches";
const MAX_RECENT = 5;

function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(RECENT_SEARCHES_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function pushRecentSearch(query: string) {
  const current = getRecentSearches().filter((q) => q !== query);
  const next = [query, ...current].slice(0, MAX_RECENT);
  window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(next));
  return next;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trending, setTrending] = useState<{ id: string; title: string; slug: string }[]>(
    []
  );
  const router = useRouter();
  const tFaq = useTranslations("home.faq.items");

  const faqEntries = ["free", "payment", "certificate", "quality", "mobile"].map(
    (key) => ({
      key,
      question: tFaq(`${key}.question`),
    })
  );

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (open) {
      setRecentSearches(getRecentSearches());
      getTrendingCourses(5).then(setTrending);
    }
  }, [open]);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.trim().length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }
    globalSearch(value).then((r) => {
      setResults(r);
      setIsSearching(false);
    });
  }, 300);

  function runSearch(value: string) {
    setQuery(value);
    setIsSearching(true);
    debouncedSearch(value);
    if (value.trim().length >= 2) setRecentSearches(pushRecentSearch(value.trim()));
  }

  const matchingFaqs =
    query.trim().length >= 2
      ? faqEntries.filter((f) => f.question.toLowerCase().includes(query.toLowerCase()))
      : [];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Buscar"
        onClick={() => setOpen(true)}
        className="hidden sm:flex"
      >
        <Search className="size-4.5" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="sm:max-w-md">
          <SheetTitle className="sr-only">Búsqueda global</SheetTitle>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              // Autofoco intencionado: el palette se abre bajo demanda del
              // usuario (botón/atajo) y el patrón esperado es escribir de
              // inmediato, igual que un ⌘K. No roba foco al cargar la página.
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              placeholder="Buscar cursos, categorías, blog…"
              className="pl-10"
              value={query}
              onChange={(e) => runSearch(e.target.value)}
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {query.trim().length < 2 ? (
              <div className="flex flex-col gap-6 py-2">
                {recentSearches.length > 0 && (
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 px-1 text-xs uppercase tracking-widest text-muted-foreground">
                      <Clock className="size-3.5" /> Búsquedas recientes
                    </p>
                    <ul className="flex flex-col gap-0.5">
                      {recentSearches.map((q) => (
                        <li key={q}>
                          <button
                            type="button"
                            onClick={() => runSearch(q)}
                            className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm hover:bg-accent"
                          >
                            {q}
                            <X
                              className="size-3.5 text-muted-foreground hover:text-destructive"
                              onClick={(e) => {
                                e.stopPropagation();
                                const next = recentSearches.filter((r) => r !== q);
                                setRecentSearches(next);
                                window.localStorage.setItem(
                                  RECENT_SEARCHES_KEY,
                                  JSON.stringify(next)
                                );
                              }}
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {trending.length > 0 && (
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 px-1 text-xs uppercase tracking-widest text-muted-foreground">
                      <TrendingUp className="size-3.5" /> Tendencias
                    </p>
                    <ul className="flex flex-col gap-0.5">
                      {trending.map((course) => (
                        <li key={course.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setOpen(false);
                              router.push(`/cursos/${course.slug}` as never);
                            }}
                            className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm hover:bg-accent"
                          >
                            <BookOpen className="size-4 text-gold" />
                            {course.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {recentSearches.length === 0 && trending.length === 0 && (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    Escribe al menos 2 caracteres para buscar.
                  </p>
                )}
              </div>
            ) : isSearching ? (
              <p className="py-8 text-center text-sm text-muted-foreground">Buscando…</p>
            ) : results.length === 0 && matchingFaqs.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Sin resultados.
              </p>
            ) : (
              <ul className="flex flex-col gap-0.5 py-2">
                {results.map((result) => {
                  const Icon = TYPE_ICONS[result.type];
                  return (
                    <li key={`${result.type}-${result.id}`}>
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          router.push(result.href as never);
                        }}
                        className="flex w-full items-center gap-3 rounded-md px-2.5 py-2.5 text-left text-sm hover:bg-accent"
                      >
                        <Icon className="size-4 shrink-0 text-gold" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-medium">
                            {result.title}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {TYPE_LABELS[result.type]}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
                {matchingFaqs.map((faq) => (
                  <li key={faq.key}>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        router.push("/#faq" as never);
                      }}
                      className="flex w-full items-center gap-3 rounded-md px-2.5 py-2.5 text-left text-sm hover:bg-accent"
                    >
                      <Search className="size-4 shrink-0 text-gold" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{faq.question}</span>
                        <span className="block text-xs text-muted-foreground">
                          {TYPE_LABELS.faq}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
