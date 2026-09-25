import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";

type AlumniGridProps = {
  egresados: NonNullable<HOME_PAGE_QUERY_RESULT>["egresados"];
};

export function AlumniGrid({ egresados }: AlumniGridProps) {
  if (!egresados || egresados.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Nuestros Egresados</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {egresados.map((egresado) => (
            <div key={egresado._key} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-black/5 shadow-sm ring-1 ring-black/5">
                <Image
                  src={urlFor(egresado.foto).width(400).height(400).fit("crop").url()}
                  alt={egresado.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-sm">
                {egresado.nombre}
                {egresado.carrera ? ` — ${egresado.carrera}` : ""}
              </p>
              {egresado.testimonio && (
                <p className="mt-1 line-clamp-4 text-sm leading-relaxed text-black/60 italic">
                  “{egresado.testimonio}”
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
