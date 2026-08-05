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
      className="flex h-full flex-col justify-between rounded-lg border border-t-4 border-black/10 p-6"
      style={{ borderTopColor: palette.accent }}
    >
      <div>
        <h3 className="text-lg font-semibold">{nombre}</h3>
        <p className="mt-2 text-sm text-black/60">{descripcionCorta}</p>
      </div>
      <Link href={`/pensum/${slug}`} className="mt-4 inline-block text-sm font-medium hover:underline">
        Ver pénsum →
      </Link>
    </div>
  );
}
