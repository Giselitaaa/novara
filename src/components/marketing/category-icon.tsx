import {
  Briefcase,
  Code2,
  Languages,
  Palette,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Briefcase,
  Languages,
  Palette,
  TrendingUp,
  Sparkles,
};

/**
 * Las categorías guardan el nombre del icono como texto (para poder
 * gestionarlo desde el panel de admin sin desplegar código). Este
 * componente resuelve ese texto al icono real en tiempo de render.
 */
export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
