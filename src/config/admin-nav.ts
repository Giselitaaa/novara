import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  FileText,
  FolderCheck,
  GraduationCap,
  LayoutDashboard,
  Layers,
  LifeBuoy,
  Mail,
  MessageCircleQuestion,
  Palette,
  PenLine,
  Receipt,
  Settings,
  ShieldQuestion,
  Star,
  Tags,
  Users,
  UserPlus,
  WalletCards,
} from "lucide-react";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Cursos", href: "/admin/cursos", icon: BookOpen },
  { label: "Categorías", href: "/admin/categorias", icon: Tags },
  { label: "Exámenes", href: "/admin/examenes", icon: ShieldQuestion },
  { label: "Proyectos", href: "/admin/proyectos", icon: FolderCheck },
  { label: "Ejercicios", href: "/admin/ejercicios", icon: PenLine },
  { label: "Flashcards", href: "/admin/flashcards", icon: WalletCards },
  { label: "Tutor Cambridge", href: "/admin/cambridge", icon: GraduationCap },
  { label: "Reseñas", href: "/admin/resenas", icon: Star },
  { label: "Preguntas", href: "/admin/preguntas", icon: MessageCircleQuestion },
  { label: "Pagos", href: "/admin/pagos", icon: Receipt },
  { label: "Soporte", href: "/admin/soporte", icon: LifeBuoy },
  { label: "Usuarios", href: "/admin/usuarios", icon: Users },
  { label: "Afiliados", href: "/admin/afiliados", icon: UserPlus },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Correos", href: "/admin/correos", icon: Mail },
  { label: "Analíticas", href: "/admin/analiticas", icon: BarChart3 },
  { label: "Temas", href: "/admin/temas", icon: Palette },
  { label: "Configuración", href: "/admin/configuracion", icon: Settings },
];

export const adminBrandIcon = Layers;
