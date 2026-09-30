import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { CARRERA_BY_SLUG_QUERY_RESULT } from "@/sanity.types";
import { getCarreraPalette } from "@/lib/theme/carreraPalette";

type PensumGalleryProps = {
  slug: string;
  images: NonNullable<CARRERA_BY_SLUG_QUERY_RESULT>["pensumImages"];
  pdfUrl: string | null;
};

export function PensumGallery({ slug, images, pdfUrl }: PensumGalleryProps) {
  if (images.length === 0) return null;

  const palette = getCarreraPalette(slug);

  return (
    <div className="py-8">
      <div className={`grid gap-4 ${images.length > 1 ? "sm:grid-cols-3" : "max-w-2xl"}`}>
        {images.map((image) => (
          <a
            key={image._key}
            href={urlFor(image).width(2000).url()}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-black/5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <Image
              src={urlFor(image).width(900).url()}
              alt="Página del pénsum"
              width={900}
              height={1200}
              className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </a>
        ))}
      </div>
      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-medium text-black shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
          style={{ backgroundColor: palette.accent }}
        >
          ⬇ Descargar PDF
        </a>
      )}
    </div>
  );
}
