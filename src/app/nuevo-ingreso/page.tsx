import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { NUEVO_INGRESO_QUERY } from "@/lib/sanity/queries/nuevoIngreso";
import { CARRERAS_LIST_QUERY } from "@/lib/sanity/queries/carreras";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries/siteSettings";
import { StepList } from "@/components/ingreso/StepList";
import { RequirementsList } from "@/components/ingreso/RequirementsList";
import { ImportantDates } from "@/components/ingreso/ImportantDates";
import { CareersGrid } from "@/components/career/CareersGrid";
import { ContactBlock } from "@/components/contact/ContactBlock";

const options = { next: { revalidate: 60 } };

export const metadata: Metadata = {
  title: "Nuevo Ingreso",
};

export default async function NuevoIngresoPage() {
  const [nuevoIngreso, careers, siteSettings] = await Promise.all([
    client.fetch(NUEVO_INGRESO_QUERY, {}, options),
    client.fetch(CARRERAS_LIST_QUERY, {}, options),
    client.fetch(SITE_SETTINGS_QUERY, {}, options),
  ]);

  if (!nuevoIngreso) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <p className="text-black/60">Todavía no hay contenido publicado para Nuevo Ingreso.</p>
      </div>
    );
  }

  return (
    <>
      <div className="border-b border-black/5 bg-gradient-to-b from-black/[0.02] to-transparent py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{nuevoIngreso.titulo}</h1>
          <p className="mt-3 max-w-xl text-black/70">{nuevoIngreso.subtitulo}</p>
          <Link
            href="/#contacto"
            className="mt-6 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-lg hover:shadow-black/25"
          >
            Inscríbete ahora
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Proceso de Admisión</h2>
        <div className="mt-10">
          <StepList steps={nuevoIngreso.pasosAdmision} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Requisitos</h2>
        <div className="mt-8">
          <RequirementsList requisitos={nuevoIngreso.requisitos} />
        </div>
      </div>

      <CareersGrid careers={careers} title="Carreras Disponibles" />

      {nuevoIngreso.fechasImportantes && nuevoIngreso.fechasImportantes.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Fechas Importantes</h2>
          <div className="mt-8">
            <ImportantDates fechas={nuevoIngreso.fechasImportantes} />
          </div>
        </div>
      )}

      {siteSettings && (
        <ContactBlock
          siteSettings={{ ...siteSettings, whatsapp: nuevoIngreso.whatsapp ?? siteSettings.whatsapp }}
          title="¿Dudas sobre el proceso?"
          showMap={false}
        />
      )}
    </>
  );
}
