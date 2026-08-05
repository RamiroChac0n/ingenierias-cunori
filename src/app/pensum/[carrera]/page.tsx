import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import {
  CARRERAS_LIST_QUERY,
  CARRERA_BY_SLUG_QUERY,
  CARRERA_SLUGS_QUERY,
} from "@/lib/sanity/queries/carreras";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries/siteSettings";
import { CareerTabs } from "@/components/pensum/CareerTabs";
import { CareerHeader } from "@/components/pensum/CareerHeader";
import { AreaChips } from "@/components/pensum/AreaChips";
import { UpdateNoteCallout } from "@/components/pensum/UpdateNoteCallout";
import { PensumGallery } from "@/components/pensum/PensumGallery";
import { ContactBlock } from "@/components/contact/ContactBlock";
import { getCarreraPalette } from "@/lib/theme/carreraPalette";

const options = { next: { revalidate: 60 } };

type PageProps = {
  params: Promise<{ carrera: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.withConfig({ useCdn: false }).fetch(CARRERA_SLUGS_QUERY);
  return slugs.map((item) => ({ carrera: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { carrera: slug } = await params;
  const carrera = await client.fetch(CARRERA_BY_SLUG_QUERY, { slug }, { ...options, stega: false });
  if (!carrera) return {};
  return {
    title: `${carrera.nombre} — Pénsum`,
    description: carrera.descripcionCorta,
  };
}

export default async function PensumPage({ params }: PageProps) {
  const { carrera: slug } = await params;
  const [carrera, careers, siteSettings] = await Promise.all([
    client.fetch(CARRERA_BY_SLUG_QUERY, { slug }, options),
    client.fetch(CARRERAS_LIST_QUERY, {}, options),
    client.fetch(SITE_SETTINGS_QUERY, {}, options),
  ]);

  if (!carrera) return notFound();

  const palette = getCarreraPalette(carrera.slug);

  return (
    <>
      <div style={{ backgroundColor: palette.bg }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <CareerTabs careers={careers} activeSlug={carrera.slug} />
          <CareerHeader
            slug={carrera.slug}
            nombre={carrera.nombre}
            descripcionCorta={carrera.descripcionCorta}
            semestres={carrera.semestres}
            creditos={carrera.creditos}
            sistemaCreditos={carrera.sistemaCreditos}
          />
          <AreaChips slug={carrera.slug} areas={carrera.areasAcademicas} />
          <UpdateNoteCallout
            slug={carrera.slug}
            updateNote={carrera.updateNote}
            lastUpdated={carrera.lastUpdated}
          />
          <PensumGallery slug={carrera.slug} images={carrera.pensumImages} pdfUrl={carrera.pensumPdfUrl} />
        </div>
      </div>
      {siteSettings && (
        <ContactBlock siteSettings={siteSettings} title="Contacto" showMap={false} showWhatsapp={false} />
      )}
    </>
  );
}
