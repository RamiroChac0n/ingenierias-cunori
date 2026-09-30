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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-8">
        <div className="max-w-xl rounded-2xl bg-white/95 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{titulo}</h1>
          <p className="mt-3 text-black/70">{subtitulo}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/nuevo-ingreso"
              className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-lg hover:shadow-black/25"
            >
              {ctaTexto1}
            </Link>
            <Link
              href="/noticias"
              className="rounded-full border border-black/80 px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              {ctaTexto2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
