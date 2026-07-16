import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";

type HeroProps = {
  titulo: string;
  subtitulo: string;
  ctaTexto1: string;
  ctaTexto2: string;
  imagen: NonNullable<HOME_PAGE_QUERY_RESULT>["heroImagen"];
};

export function Hero({ titulo, subtitulo, ctaTexto1, ctaTexto2, imagen }: HeroProps) {
  const imageUrl = urlFor(imagen).width(1600).height(900).fit("crop").url();

  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden">
      <Image src={imageUrl} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-8">
        <div className="max-w-xl bg-white p-8">
          <h1 className="text-3xl font-semibold sm:text-4xl">{titulo}</h1>
          <p className="mt-3 text-black/70">{subtitulo}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/nuevo-ingreso"
              className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-black/80"
            >
              {ctaTexto1}
            </Link>
            <Link
              href="/noticias"
              className="rounded-full border border-black px-6 py-2.5 text-sm font-medium hover:bg-black/5"
            >
              {ctaTexto2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
