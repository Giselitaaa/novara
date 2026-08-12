"use client";

import { useTranslations } from "next-intl";

import { mainNavItems } from "@/config/nav";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground",
              "transition-colors hover:text-foreground",
              isActive && "text-foreground"
            )}
          >
            {t(item.labelKey)}
            {isActive && (
              <span className="absolute inset-x-3.5 -bottom-px h-px bg-gold" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
