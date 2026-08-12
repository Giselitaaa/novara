"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NotificationBell } from "@/components/layout/notification-bell";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { UserMenu } from "@/components/layout/user-menu";
import { CommandPalette } from "@/components/search/command-palette";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function SiteHeader() {
  const t = useTranslations("nav");
  const { data: session, status } = useSession();
  const { scrollY } = useScroll();

  // Condensa suavemente la cabecera (altura y opacidad de fondo) a
  // medida que se hace scroll, en vez de un salto brusco a un estado
  // "con sombra" — una microanimación continua, no binaria.
  const headerHeight = useTransform(scrollY, [0, 120], [88, 64]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header
      style={{ height: headerHeight }}
      className="sticky top-0 z-40 flex items-center bg-background/80 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border"
      />
      <Container className="flex items-center justify-between gap-4">
        <Logo />
        <MainNav />
        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1.5 sm:flex">
            <CommandPalette />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <div className="ml-2 hidden items-center gap-2 md:flex">
            {status === "authenticated" && session ? (
              <>
                <NotificationBell />
                <UserMenu />
              </>
            ) : status === "loading" ? (
              <div className="size-9 animate-pulse rounded-full bg-muted" />
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/auth/iniciar-sesion">{t("signIn")}</Link>
                </Button>
                <Button asChild variant="gold" size="sm">
                  <Link href="/auth/crear-cuenta">{t("signUp")}</Link>
                </Button>
              </>
            )}
          </div>
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}
