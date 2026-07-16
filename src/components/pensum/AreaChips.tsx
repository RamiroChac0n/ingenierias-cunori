type AreaChipsProps = {
  areas: string[];
};

export function AreaChips({ areas }: AreaChipsProps) {
  if (areas.length === 0) return null;

  return (
    <div className="py-6">
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-black/50">Áreas académicas</p>
      <div className="flex flex-wrap gap-2">
        {areas.map((area) => (
          <span key={area} className="rounded-full border border-black/20 px-4 py-1.5 text-sm">
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
