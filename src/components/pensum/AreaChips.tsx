import { getCarreraPalette } from "@/lib/theme/carreraPalette";

type AreaChipsProps = {
  slug: string;
  areas: string[];
};

export function AreaChips({ slug, areas }: AreaChipsProps) {
  if (areas.length === 0) return null;

  const palette = getCarreraPalette(slug);

  return (
    <div className="py-6">
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-black/50">Áreas académicas</p>
      <div className="flex flex-wrap gap-2">
        {areas.map((area) => (
          <span
            key={area}
            className="rounded-full px-4 py-1.5 text-sm"
            style={{ backgroundColor: palette.accentSoft }}
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
