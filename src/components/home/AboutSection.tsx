import Link from "next/link";

type AboutSectionProps = {
  mision: string;
  vision: string;
};

export function AboutSection({ mision, vision }: AboutSectionProps) {
  return (
    <section id="sobre-nosotros" className="scroll-mt-20 bg-black/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl font-semibold">Sobre Nosotros</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">Misión</h3>
            <p className="mt-2 whitespace-pre-line text-black/70">{mision}</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">Visión</h3>
            <p className="mt-2 whitespace-pre-line text-black/70">{vision}</p>
          </div>
        </div>
        <div className="mt-6 flex gap-6 text-sm font-medium">
          <Link href="/galeria" className="hover:underline">
            Galería →
          </Link>
          <Link href="/revista" className="hover:underline">
            Revista →
          </Link>
        </div>
      </div>
    </section>
  );
}
