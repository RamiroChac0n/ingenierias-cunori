import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { EVENTOS_LIST_QUERY } from "@/lib/sanity/queries/galeria";
import { GaleriaGrid } from "@/components/gallery/GaleriaGrid";

const options = { next: { revalidate: 60 } };

export const metadata: Metadata = {
  title: "Galería",
};

export default async function GaleriaPage() {
  const eventos = await client.fetch(EVENTOS_LIST_QUERY, {}, options);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold">Galería</h1>
      <p className="mt-3 text-black/70">Fotos de nuestros eventos y actividades</p>
      {eventos.length === 0 ? (
        <p className="mt-8 text-black/60">Todavía no hay álbumes publicados.</p>
      ) : (
        <div className="mt-10">
          <GaleriaGrid eventos={eventos} />
        </div>
      )}
    </div>
  );
}
