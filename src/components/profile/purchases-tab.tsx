import { Download, Receipt } from "lucide-react";

import { StatusBadge } from "@/components/admin/status-badge";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/format";

type Purchase = {
  id: string;
  amount: number;
  currency: string;
  createdAt: Date;
  course: { title: string } | null;
  paymentMethod: { label: string };
  status: { key: string; label: string };
  invoice: { id: string; invoiceNumber: string } | null;
};

export function PurchasesTab({ purchases }: { purchases: Purchase[] }) {
  if (purchases.length === 0) {
    return (
      <EmptyState
        icon={Receipt}
        title="Todavía no tienes compras"
        description="Cuando compres un curso, aquí verás el historial y podrás descargar tus facturas."
      />
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Curso</TableHead>
          <TableHead>Método</TableHead>
          <TableHead>Importe</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Factura</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases.map((purchase) => (
          <TableRow key={purchase.id}>
            <TableCell className="font-medium">{purchase.course?.title ?? "—"}</TableCell>
            <TableCell className="text-muted-foreground">
              {purchase.paymentMethod.label}
            </TableCell>
            <TableCell className="font-mono text-xs">
              {formatPrice(purchase.amount)}
            </TableCell>
            <TableCell>
              <StatusBadge
                statusKey={purchase.status.key}
                label={purchase.status.label}
              />
            </TableCell>
            <TableCell className="text-muted-foreground">
              {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                purchase.createdAt
              )}
            </TableCell>
            <TableCell>
              {purchase.invoice ? (
                <a
                  href={`/api/facturas/${purchase.invoice.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-foreground hover:underline dark:text-gold"
                >
                  <Download className="size-3.5" /> {purchase.invoice.invoiceNumber}
                </a>
              ) : (
                <span className="text-xs text-muted-foreground">—</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
