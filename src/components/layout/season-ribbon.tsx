import { getSeason } from "@/lib/seasons";
import { getAllSettings } from "@/modules/cms/server/settings-queries";

/**
 * Banner de temporada (Navidad, Halloween…) que aparece en el sitio según el
 * ajuste `active_theme` del panel. Componente de servidor: sin JS en cliente.
 */
export async function SeasonRibbon() {
  const settings = await getAllSettings();
  const season = getSeason(settings.active_theme);
  if (!season) return null;

  return (
    <div className={`w-full px-4 py-1.5 text-center text-sm font-medium ${season.className}`}>
      <span aria-hidden="true">{season.emoji} </span>
      {season.message}
    </div>
  );
}
