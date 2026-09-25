import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { EVENTO_BY_SLUG_QUERY, EVENTO_SLUGS_QUERY } from "@/lib/sanity/queries/galeria";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { formatDate } from "@/lib/utils/formatDate";

const options = { next: { revalidate: 60 } };

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.withConfig({ useCdn: false }).fetch(EVENTO_SLUGS_QUERY);
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const evento = await client.fetch(EVENTO_BY_SLUG_QUERY, { slug }, { ...options, stega: false });
  if (!evento) return {};
  return { title: evento.tituloEvento };
}

export default async function EventoPage({ params }: PageProps) {
  const { slug } = await params;
  const evento = await client.fetch(EVENTO_BY_SLUG_QUERY, { slug }, options);

  if (!evento) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
      <Link href="/galeria" className="text-sm text-black/60 transition-colors hover:text-black hover:underline">
        ← Volver a Galería
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{evento.tituloEvento}</h1>
      <p className="mt-2 text-sm text-black/50">{formatDate(evento.fechaEvento)}</p>
      {evento.descripcion && <p className="mt-4 max-w-3xl text-black/70">{evento.descripcion}</p>}
      <div className="mt-10">
        <PhotoGrid fotos={evento.fotosAlbum} />
      </div>
    </div>
  );
}
