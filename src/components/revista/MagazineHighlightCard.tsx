import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { REVISTA_QUERY_RESULT } from "@/sanity.types";

type MagazineHighlightCardProps = {
  nombreRevista: string;
  anioEdicionActual: number;
  linkEdicionActual: string;
  portadaEdicionActual: NonNullable<REVISTA_QUERY_RESULT>["portadaEdicionActual"];
};

export function MagazineHighlightCard({
  nombreRevista,
  anioEdicionActual,
  linkEdicionActual,
  portadaEdicionActual,
}: MagazineHighlightCardProps) {
  return (
    <div className="flex flex-col items-start gap-8 rounded-lg border border-black/10 p-6 sm:flex-row sm:items-center">
      {portadaEdicionActual && (
        <div className="relative h-56 w-40 shrink-0 overflow-hidden rounded bg-black/5">
          <Image
            src={urlFor(portadaEdicionActual).width(320).height(448).fit("crop").url()}
            alt={`Portada ${nombreRevista} — Edición ${anioEdicionActual}`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div>
        <p className="text-lg font-medium">
          {nombreRevista} — Edición {anioEdicionActual}
        </p>
        <a
          href={linkEdicionActual}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-black/80"
        >
          Leer edición {anioEdicionActual} ↗
        </a>
      </div>
    </div>
  );
}
