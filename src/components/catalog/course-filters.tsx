"use client";

import { Search, X } from "lucide-react";
import { useTransition } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { CourseSort } from "@/modules/courses/shared/filters";

type LevelOption = { key: string; label: string };

interface CourseFiltersProps {
  levels: LevelOption[];
  defaultValues: {
    search?: string;
    levelKey?: string;
    accessType?: string;
    sort: CourseSort;
  };
}

const SORT_LABELS: Record<CourseSort, string> = {
  recientes: "Más recientes",
  duracion_asc: "Duración: menor a mayor",
  duracion_desc: "Duración: mayor a menor",
  titulo_asc: "Título (A-Z)",
};

/**
 * Filtros del catálogo. Cada cambio actualiza la URL (`?q=`, `?nivel=`,
 * `?access=`, `?sort=`) y resetea `page` a 1 — la URL es la única
 * fuente de verdad de los filtros activos, así que se puede compartir,
 * recargar o volver atrás sin perder el estado de búsqueda.
 */
export function CourseFilters({ levels, defaultValues }: CourseFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function updateParams(updates: Record<string, string | undefined>) {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(updates)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    params.delete("page");
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}` as never);
    });
  }

  const debouncedSearch = useDebouncedCallback((value: string) => {
    updateParams({ q: value || undefined });
  }, 400);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar cursos…"
          defaultValue={defaultValues.search}
          onChange={(e) => debouncedSearch(e.target.value)}
          className="pl-10"
          aria-label="Buscar cursos"
        />
      </div>

      <Select
        value={defaultValues.levelKey ?? "todos"}
        onValueChange={(value) =>
          updateParams({ nivel: value === "todos" ? undefined : value })
        }
      >
        <SelectTrigger className="sm:w-44">
          <SelectValue placeholder="Nivel" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos los niveles</SelectItem>
          {levels.map((level) => (
            <SelectItem key={level.key} value={level.key}>
              {level.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={defaultValues.accessType ?? "todos"}
        onValueChange={(value) =>
          updateParams({ access: value === "todos" ? undefined : value })
        }
      >
        <SelectTrigger className="sm:w-40">
          <SelectValue placeholder="Acceso" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos los cursos</SelectItem>
          <SelectItem value="premium">Solo premium</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={defaultValues.sort}
        onValueChange={(value) => updateParams({ sort: value })}
      >
        <SelectTrigger className="sm:w-52">
          <SelectValue placeholder="Ordenar" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(SORT_LABELS).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {(defaultValues.search || defaultValues.levelKey || defaultValues.accessType) && (
        <button
          type="button"
          onClick={() =>
            updateParams({ q: undefined, nivel: undefined, access: undefined })
          }
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <X className="size-3.5" /> Limpiar
        </button>
      )}

      <span className="sr-only" role="status">
        {isPending ? "Actualizando resultados…" : ""}
      </span>
    </div>
  );
}
