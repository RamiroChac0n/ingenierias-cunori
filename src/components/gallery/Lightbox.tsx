"use client";

import { useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { EVENTO_BY_SLUG_QUERY_RESULT } from "@/sanity.types";

type LightboxProps = {
  fotos: NonNullable<EVENTO_BY_SLUG_QUERY_RESULT>["fotosAlbum"];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ fotos, index, onClose, onIndexChange }: LightboxProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndexChange((index + 1) % fotos.length);
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + fotos.length) % fotos.length);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, fotos.length, onClose, onIndexChange]);

  const foto = fotos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white text-black"
      >
        ✕
      </button>

      {fotos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onIndexChange((index - 1 + fotos.length) % fotos.length);
            }}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onIndexChange((index + 1) % fotos.length);
            }}
            aria-label="Foto siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white"
          >
            ›
          </button>
        </>
      )}

      <div className="relative h-[80vh] w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <Image src={urlFor(foto).width(1600).url()} alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
