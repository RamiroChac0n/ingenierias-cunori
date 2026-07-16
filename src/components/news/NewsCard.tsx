import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils/formatDate";
import type { NOTICIAS_LIST_QUERY_RESULT } from "@/sanity.types";

type NewsCardProps = NOTICIAS_LIST_QUERY_RESULT[number];

const TIPO_LABEL: Record<string, string> = {
  documento: "Documento",
  enlace_externo: "Enlace externo",
};

export function NewsCard({ titulo, slug, fechaPublicacion, autor, tipoPost, imagenDestacada }: NewsCardProps) {
  return (
    <Link href={`/noticias/${slug}`} className="block overflow-hidden rounded-lg border border-black/10">
      <div className="relative aspect-video bg-black/5">
        <Image
          src={urlFor(imagenDestacada).width(600).height(338).fit("crop").url()}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <span className="inline-block rounded bg-black px-2 py-0.5 text-xs font-medium text-white">
          {TIPO_LABEL[tipoPost] ?? tipoPost}
        </span>
        <h3 className="mt-2 font-semibold">{titulo}</h3>
        <p className="mt-1 text-xs text-black/50">
          {autor} · {formatDate(fechaPublicacion)}
        </p>
      </div>
    </Link>
  );
}
