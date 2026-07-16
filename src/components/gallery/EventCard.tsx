import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils/formatDate";
import type { EVENTOS_LIST_QUERY_RESULT } from "@/sanity.types";

type EventCardProps = EVENTOS_LIST_QUERY_RESULT[number];

export function EventCard({ tituloEvento, slug, fechaEvento, imagenPortada }: EventCardProps) {
  return (
    <Link href={`/galeria/${slug}`} className="block overflow-hidden rounded-lg border border-black/10">
      <div className="relative aspect-4/3 bg-black/5">
        <Image
          src={urlFor(imagenPortada).width(500).height(375).fit("crop").url()}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="font-medium">{tituloEvento}</p>
        <p className="mt-1 text-xs text-black/50">{formatDate(fechaEvento)}</p>
      </div>
    </Link>
  );
}
