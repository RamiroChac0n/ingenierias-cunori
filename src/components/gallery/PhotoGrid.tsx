"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { Lightbox } from "./Lightbox";
import type { EVENTO_BY_SLUG_QUERY_RESULT } from "@/sanity.types";

type PhotoGridProps = {
  fotos: NonNullable<EVENTO_BY_SLUG_QUERY_RESULT>["fotosAlbum"];
};

export function PhotoGrid({ fotos }: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {fotos.map((foto, index) => (
          <button
            key={foto._key}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="relative aspect-square overflow-hidden rounded-lg bg-black/5"
          >
            <Image
              src={urlFor(foto).width(400).height(400).fit("crop").url()}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          fotos={fotos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
