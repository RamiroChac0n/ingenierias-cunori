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
    <div className="flex flex-col items-start gap-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
      {portadaEdicionActual && (
        <div className="relative h-56 w-40 shrink-0 overflow-hidden rounded-xl bg-black/5 shadow-sm">
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
          className="mt-4 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-lg"
        >
          Leer edición {anioEdicionActual} ↗
        </a>
      </div>
    </div>
  );
}
