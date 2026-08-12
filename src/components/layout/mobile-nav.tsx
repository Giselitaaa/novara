"use client";

import { Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNavItems } from "@/config/nav";
import { Link } from "@/i18n/navigation";

export function MobileNav() {
  const t = useTranslations("nav");
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={t("openMenu")}
          className="md:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="sr-only">{t("openMenu")}</SheetTitle>
        <Logo />

        <nav aria-label="Navegación principal" className="flex flex-col gap-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-display text-lg tracking-tighter transition-colors hover:text-gold-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          {session?.user && (
            <Link
              href="/perfil"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-display text-lg tracking-tighter transition-colors hover:text-gold-foreground"
            >
              {t("profile")}
            </Link>
          )}
        </nav>

        <Separator />

        <div className="flex flex-col gap-3">
          {session?.user ? (
            <Button
              variant="outline"
              onClick={() => {
                setOpen(false);
                signOut({ callbackUrl: "/" });
              }}
            >
              {t("signOut")}
            </Button>
          ) : (
            <>
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link href="/auth/iniciar-sesion">{t("signIn")}</Link>
              </Button>
              <Button asChild variant="gold" onClick={() => setOpen(false)}>
                <Link href="/auth/crear-cuenta">{t("signUp")}</Link>
              </Button>
            </>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
