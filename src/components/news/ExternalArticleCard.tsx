import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { NOTICIA_BY_SLUG_QUERY_RESULT } from "@/sanity.types";

type ExternalArticleCardProps = {
  titulo: string;
  urlExterna: string;
  fuenteEnlace: string | null;
  imagenDestacada: NonNullable<NOTICIA_BY_SLUG_QUERY_RESULT>["imagenDestacada"];
};

export function ExternalArticleCard({
  titulo,
  urlExterna,
  fuenteEnlace,
  imagenDestacada,
}: ExternalArticleCardProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
      <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-xl bg-black/5">
        <Image
          src={urlFor(imagenDestacada).width(320).height(224).fit("crop").url()}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="font-medium">{titulo}</p>
        {fuenteEnlace && <p className="mt-1 text-xs text-black/50">Fuente: {fuenteEnlace}</p>}
        <a
          href={urlExterna}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-lg"
        >
          Leer artículo completo ↗
        </a>
      </div>
    </div>
  );
}
