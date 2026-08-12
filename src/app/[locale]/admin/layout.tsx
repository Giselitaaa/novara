import type { Metadata } from "next";

import { AdminMobileSidebar } from "@/components/admin/admin-mobile-sidebar";
import { AdminSidebarNav } from "@/components/admin/admin-sidebar-nav";
import { Logo } from "@/components/layout/logo";
import { UserMenu } from "@/components/layout/user-menu";
import { requireAdmin } from "@/modules/admin/server/guard";

export const metadata: Metadata = {
  title: { default: "Panel de administración", template: "%s — Admin NOVARA" },
  robots: { index: false, follow: false },
};

/**
 * Layout raíz del panel de administración. `requireAdmin()` corta
 * aquí, una sola vez, para todas las páginas de `/admin/**` — ninguna
 * page individual necesita repetir la comprobación de rol.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card p-5 lg:flex">
        <Logo />
        <div className="mt-8">
          <AdminSidebarNav />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-5">
          <div className="flex items-center gap-3 lg:hidden">
            <AdminMobileSidebar />
            <Logo />
          </div>
          <span className="hidden text-sm text-muted-foreground lg:block">
            Panel de administración
          </span>
          <UserMenu />
        </header>

        <main id="main-content" className="flex-1 bg-muted/20 p-5 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
