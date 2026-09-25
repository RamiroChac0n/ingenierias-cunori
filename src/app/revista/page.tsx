import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { REVISTA_QUERY } from "@/lib/sanity/queries/revista";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries/siteSettings";
import { MagazineHighlightCard } from "@/components/revista/MagazineHighlightCard";
import { ContactBlock } from "@/components/contact/ContactBlock";

const options = { next: { revalidate: 60 } };

export const metadata: Metadata = {
  title: "Revista",
};

export default async function RevistaPage() {
  const [revista, siteSettings] = await Promise.all([
    client.fetch(REVISTA_QUERY, {}, options),
    client.fetch(SITE_SETTINGS_QUERY, {}, options),
  ]);

  if (!revista) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <p className="text-black/60">Todavía no hay contenido publicado para la Revista.</p>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{revista.nombreRevista}</h1>
        <p className="mt-3 max-w-2xl text-black/70">{revista.descripcion}</p>

        <div className="mt-10">
          <h2 className="mb-6 text-xl font-semibold">Edición Actual</h2>
          <MagazineHighlightCard
            nombreRevista={revista.nombreRevista}
            anioEdicionActual={revista.anioEdicionActual}
            linkEdicionActual={revista.linkEdicionActual}
            portadaEdicionActual={revista.portadaEdicionActual}
          />
        </div>

        {revista.linkListadoEdicionesAnteriores && (
          <div className="mt-10">
            <h2 className="mb-6 text-xl font-semibold">Ediciones Anteriores</h2>
            <a
              href={revista.linkListadoEdicionesAnteriores}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/80 px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Ver todas las ediciones ↗
            </a>
          </div>
        )}
      </div>

      {siteSettings && (
        <ContactBlock
          siteSettings={{ ...siteSettings, email: revista.emailContacto }}
          title="Contacto de Revista"
          showMap={false}
          showWhatsapp={false}
        />
      )}
    </>
  );
}
