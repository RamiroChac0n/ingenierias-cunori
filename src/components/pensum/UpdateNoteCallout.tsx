import { formatDate } from "@/lib/utils/formatDate";
import { getCarreraPalette } from "@/lib/theme/carreraPalette";

type UpdateNoteCalloutProps = {
  slug: string;
  updateNote: string | null;
  lastUpdated: string;
};

export function UpdateNoteCallout({ slug, updateNote, lastUpdated }: UpdateNoteCalloutProps) {
  if (!updateNote) return null;

  const palette = getCarreraPalette(slug);

  return (
    <div
      className="flex gap-3 rounded-lg border-l-4 bg-white/70 p-5"
      style={{ borderLeftColor: palette.accent }}
    >
      <span aria-hidden="true" className="text-xl">
        ℹ️
      </span>
      <div>
        <p>{updateNote}</p>
        <p className="mt-1 text-xs text-black/50">Última actualización: {formatDate(lastUpdated)}</p>
      </div>
    </div>
  );
}
