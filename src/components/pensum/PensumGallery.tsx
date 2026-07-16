import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { CARRERA_BY_SLUG_QUERY_RESULT } from "@/sanity.types";

type PensumGalleryProps = {
  images: NonNullable<CARRERA_BY_SLUG_QUERY_RESULT>["pensumImages"];
  pdfUrl: string | null;
};

export function PensumGallery({ images, pdfUrl }: PensumGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="py-8">
      <div className={`grid gap-4 ${images.length > 1 ? "sm:grid-cols-3" : "max-w-2xl"}`}>
        {images.map((image) => (
          <a
            key={image._key}
            href={urlFor(image).width(2000).url()}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border border-black/10"
          >
            <Image
              src={urlFor(image).width(900).url()}
              alt="Página del pénsum"
              width={900}
              height={1200}
              className="h-auto w-full object-contain"
            />
          </a>
        ))}
      </div>
      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-black/80"
        >
          ⬇ Descargar PDF
        </a>
      )}
    </div>
  );
}
