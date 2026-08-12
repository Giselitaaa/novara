"use client";

import { Copy, Users } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import { becomeAffiliate } from "@/modules/affiliates/server/actions";

type AffiliateData = {
  affiliate: { code: string; commissionRate: unknown } | null;
  stats: {
    totalReferrals: number;
    confirmedCommission: number;
    paidOut: number;
    pendingPayout: number;
  } | null;
  enabled: boolean;
};

export function AffiliateTab({ affiliate, stats, enabled }: AffiliateData) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (!enabled) {
    return (
      <EmptyState
        icon={Users}
        title="El programa de afiliados no está activo todavía"
        description="NOVARA ya tiene preparada toda la infraestructura — se activará próximamente."
      />
    );
  }

  if (!affiliate) {
    return (
      <div className="flex flex-col items-start gap-3">
        <p className="text-sm text-muted-foreground">
          Únete al programa de afiliados y gana comisión por cada alumno que traigas a
          NOVARA.
        </p>
        <Button
          variant="gold"
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await becomeAffiliate();
              toast.success("¡Ya eres afiliado!");
              router.refresh();
            })
          }
        >
          Unirme al programa de afiliados
        </Button>
      </div>
    );
  }

  const referralUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/?ref=${affiliate.code}`;

  return (
    <div className="flex max-w-xl flex-col gap-6">
      <div>
        <p className="mb-1.5 text-sm font-medium">Tu enlace de afiliado</p>
        <div className="flex gap-2">
          <Input readOnly value={referralUrl} />
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(referralUrl);
              toast.success("Enlace copiado.");
            }}
          >
            <Copy className="size-4" />
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Comisión: {Number(affiliate.commissionRate)}% por cada compra confirmada.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="font-display text-xl tracking-tighter">
              {stats?.totalReferrals ?? 0}
            </p>
            <p className="text-xs text-muted-foreground">Referidos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="font-display text-xl tracking-tighter">
              {formatPrice(stats?.confirmedCommission ?? 0)}
            </p>
            <p className="text-xs text-muted-foreground">Comisión confirmada</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="font-display text-xl tracking-tighter">
              {formatPrice(stats?.pendingPayout ?? 0)}
            </p>
            <p className="text-xs text-muted-foreground">Pendiente de pago</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
