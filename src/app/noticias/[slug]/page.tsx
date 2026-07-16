import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import {
  NOTICIA_BY_SLUG_QUERY,
  NOTICIA_NEXT_QUERY,
  NOTICIA_PREV_QUERY,
  NOTICIA_SLUGS_QUERY,
} from "@/lib/sanity/queries/noticias";
import { PostHeader } from "@/components/news/PostHeader";
import { DocumentPreviewBlock } from "@/components/news/DocumentPreviewBlock";
import { ExternalArticleCard } from "@/components/news/ExternalArticleCard";
import { PostNavigation } from "@/components/news/PostNavigation";

const options = { next: { revalidate: 60 } };

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.withConfig({ useCdn: false }).fetch(NOTICIA_SLUGS_QUERY);
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await client.fetch(NOTICIA_BY_SLUG_QUERY, { slug }, { ...options, stega: false });
  if (!noticia) return {};
  return { title: noticia.titulo };
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params;
  const noticia = await client.fetch(NOTICIA_BY_SLUG_QUERY, { slug }, options);

  if (!noticia) return notFound();

  const [prev, next] = await Promise.all([
    client.fetch(NOTICIA_PREV_QUERY, { fecha: noticia.fechaPublicacion }, options),
    client.fetch(NOTICIA_NEXT_QUERY, { fecha: noticia.fechaPublicacion }, options),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-8">
      <PostHeader titulo={noticia.titulo} autor={noticia.autor} fechaPublicacion={noticia.fechaPublicacion} />

      {noticia.tipoPost === "documento" && noticia.documentoPdfUrl && (
        <DocumentPreviewBlock pdfUrl={noticia.documentoPdfUrl} fileName={noticia.documentoPdfName} />
      )}

      {noticia.tipoPost === "enlace_externo" && noticia.urlExterna && (
        <ExternalArticleCard
          titulo={noticia.titulo}
          urlExterna={noticia.urlExterna}
          fuenteEnlace={noticia.fuenteEnlace}
          imagenDestacada={noticia.imagenDestacada}
        />
      )}

      <div className="mt-8">
        <PostNavigation prev={prev} next={next} />
      </div>
    </div>
  );
}
