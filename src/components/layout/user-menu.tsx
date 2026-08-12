"use client";

import { GraduationCap, LogOut, User as UserIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { getInitials } from "@/lib/format";

export function UserMenu() {
  const { data: session } = useSession();
  const t = useTranslations("nav");

  if (!session?.user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t("profile")}
          className="rounded-full transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Avatar>
            <AvatarImage src={session.user.image ?? undefined} alt="" />
            <AvatarFallback>{getInitials(session.user.name)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        <div className="px-2.5 py-2">
          <p className="truncate text-sm font-medium">{session.user.name}</p>
          <p className="truncate text-xs text-muted-foreground">{session.user.email}</p>
        </div>
        <DropdownMenuItem asChild>
          <Link href="/perfil">
            <span className="flex items-center gap-2">
              <UserIcon className="size-4" /> {t("profile")}
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/mi-aprendizaje">
            <span className="flex items-center gap-2">
              <GraduationCap className="size-4" /> {t("myLearning")}
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => signOut({ callbackUrl: "/" })}>
          <span className="flex items-center gap-2 text-destructive">
            <LogOut className="size-4" /> {t("signOut")}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
