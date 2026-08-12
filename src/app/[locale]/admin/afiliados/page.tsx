import { Users } from "lucide-react";
import type { Metadata } from "next";

import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { listAllAffiliatesAdmin } from "@/modules/affiliates/server/queries";
import { isAffiliateProgramEnabled } from "@/modules/affiliates/server/queries";

export const metadata: Metadata = { title: "Afiliados" };

export default async function AdminAffiliatesPage() {
  const [affiliates, enabled] = await Promise.all([
    listAllAffiliatesAdmin(),
    isAffiliateProgramEnabled(),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Afiliados</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Programa {enabled ? "activo" : "desactivado"} — configúralo en Configuración
          global.
        </p>
      </div>

      {affiliates.length === 0 ? (
        <EmptyState icon={Users} title="Todavía no hay afiliados registrados" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Afiliado</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Comisión</TableHead>
              <TableHead>Referidos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {affiliates.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">
                  {a.user.profile
                    ? `${a.user.profile.firstName} ${a.user.profile.lastName}`
                    : a.user.email}
                </TableCell>
                <TableCell className="font-mono text-xs">{a.code}</TableCell>
                <TableCell className="text-muted-foreground">
                  {Number(a.commissionRate)}%
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {a._count.referrals}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
