import Link from "next/link";
import { getCarreraPalette } from "@/lib/theme/carreraPalette";

type CareerCardProps = {
  nombre: string;
  slug: string;
  descripcionCorta: string;
};

export function CareerCard({ nombre, slug, descripcionCorta }: CareerCardProps) {
  const palette = getCarreraPalette(slug);

  return (
    <div
      className="group flex h-full flex-col justify-between rounded-2xl border border-t-4 border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
      style={{ borderTopColor: palette.accent }}
    >
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{nombre}</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/60">{descripcionCorta}</p>
      </div>
      <Link href={`/pensum/${slug}`} className="mt-4 inline-block text-sm font-medium transition-colors group-hover:underline">
        Ver pénsum →
      </Link>
    </div>
  );
}
