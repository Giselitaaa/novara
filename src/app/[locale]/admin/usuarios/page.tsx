import { Users } from "lucide-react";
import type { Metadata } from "next";

import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@/i18n/navigation";
import { listUsersAdmin } from "@/modules/users/server/admin-queries";

export const metadata: Metadata = { title: "Usuarios" };

type Props = { searchParams: Promise<{ q?: string; page?: string }> };

export default async function AdminUsersPage({ searchParams }: Props) {
  const { q, page } = await searchParams;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { users, total, totalPages } = await listUsersAdmin({
    search: q,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/usuarios?${query}` : "/admin/usuarios";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Usuarios</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {total} usuario(s) registrados.
        </p>
      </div>

      <form action="/admin/usuarios" className="flex gap-2">
        <Input
          name="q"
          placeholder="Buscar por nombre o email…"
          defaultValue={q}
          className="max-w-xs"
        />
        <Button type="submit" variant="outline">
          Buscar
        </Button>
      </form>

      {users.length === 0 ? (
        <EmptyState icon={Users} title="No hay usuarios que coincidan con la búsqueda" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Cursos</TableHead>
              <TableHead>Pagos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/admin/usuarios/${user.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {user.profile
                      ? `${user.profile.firstName} ${user.profile.lastName}`
                      : user.email}
                  </Link>
                  <p className="text-xs font-normal text-muted-foreground">
                    {user.email}
                  </p>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user.roles.map((r) => r.role.name).join(", ") || "—"}
                </TableCell>
                <TableCell>
                  <StatusBadge statusKey={user.status.key} label={user.status.label} />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user._count.enrollments}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user._count.payments}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        buildHref={buildHref}
      />
    </div>
  );
}
