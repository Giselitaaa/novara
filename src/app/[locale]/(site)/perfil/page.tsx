import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { Container } from "@/components/layout/container";
import { AffiliateTab } from "@/components/profile/affiliate-tab";
import { CertificatesTab } from "@/components/profile/certificates-tab";
import { EnrolledCoursesTab } from "@/components/profile/enrolled-courses-tab";
import { PreferencesTab } from "@/components/profile/preferences-tab";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileInfoForm } from "@/components/profile/profile-info-form";
import { PurchasesTab } from "@/components/profile/purchases-tab";
import { SecurityTab } from "@/components/profile/security-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { requireSession } from "@/lib/require-session";
import {
  getAffiliateByUserId,
  getAffiliateStats,
  isAffiliateProgramEnabled,
} from "@/modules/affiliates/server/queries";
import { listMyPurchases } from "@/modules/payments/server/queries";
import { getLearningDashboard, getProfileByUserId } from "@/modules/users/server/queries";

export const metadata: Metadata = { title: "Mi perfil" };

/**
 * Ruta protegida por el middleware (`PROTECTED_PREFIXES`), pero se
 * repite la comprobación aquí: si algún día esta página se renderiza
 * fuera de ese flujo (ej. tests, llamada directa), nunca debe exponer
 * datos de un usuario sin sesión.
 */
export default async function ProfilePage() {
  const session = await requireSession();
  if (!session?.user?.id) redirect("/auth/iniciar-sesion?callbackUrl=/perfil");

  const [user, dashboard, affiliateEnabled, purchases] = await Promise.all([
    getProfileByUserId(session.user.id),
    getLearningDashboard(session.user.id),
    isAffiliateProgramEnabled(),
    listMyPurchases(session.user.id),
  ]);

  const affiliate = await getAffiliateByUserId(session.user.id);
  const affiliateStats = affiliate ? await getAffiliateStats(affiliate.id) : null;

  if (!user || !user.profile) redirect("/auth/iniciar-sesion");

  return (
    <Container className="py-10 sm:py-14">
      <ProfileHeader
        firstName={user.profile.firstName}
        lastName={user.profile.lastName}
        email={user.email}
        avatarUrl={user.profile.avatarUrl}
        statusLabel={user.status.label}
      />

      <Tabs defaultValue="cursos" className="mt-10">
        <TabsList>
          <TabsTrigger value="cursos">Mis cursos</TabsTrigger>
          <TabsTrigger value="certificados">Certificados</TabsTrigger>
          <TabsTrigger value="compras">Compras</TabsTrigger>
          <TabsTrigger value="informacion">Información personal</TabsTrigger>
          <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
          <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
          <TabsTrigger value="afiliados">Afiliados</TabsTrigger>
        </TabsList>

        <TabsContent value="cursos">
          <EnrolledCoursesTab enrollments={dashboard.enrollments} />
        </TabsContent>

        <TabsContent value="certificados">
          <CertificatesTab certificates={dashboard.certificates} />
        </TabsContent>

        <TabsContent value="compras">
          <PurchasesTab
            purchases={purchases.map((p) => ({
              id: p.id,
              amount: Number(p.amount),
              currency: p.currency,
              createdAt: p.createdAt,
              course: p.course,
              paymentMethod: p.paymentMethod,
              status: p.status,
              invoice: p.invoice,
            }))}
          />
        </TabsContent>

        <TabsContent value="informacion">
          <ProfileInfoForm
            firstName={user.profile.firstName}
            lastName={user.profile.lastName}
            bio={user.profile.bio}
            country={user.profile.country}
            avatarUrl={user.profile.avatarUrl}
          />
        </TabsContent>

        <TabsContent value="seguridad">
          <SecurityTab hasPassword={!!user.passwordHash} />
        </TabsContent>

        <TabsContent value="preferencias">
          <PreferencesTab
            showInRanking={user.profile.showInRanking}
            acceptsMarketing={user.profile.acceptsMarketing}
          />
        </TabsContent>

        <TabsContent value="afiliados">
          <AffiliateTab
            affiliate={affiliate}
            stats={affiliateStats}
            enabled={affiliateEnabled}
          />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
