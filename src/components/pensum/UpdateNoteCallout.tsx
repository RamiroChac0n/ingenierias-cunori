import { formatDate } from "@/lib/utils/formatDate";

type UpdateNoteCalloutProps = {
  updateNote: string | null;
  lastUpdated: string;
};

export function UpdateNoteCallout({ updateNote, lastUpdated }: UpdateNoteCalloutProps) {
  if (!updateNote) return null;

  return (
    <div className="flex gap-3 rounded-lg border border-black/10 bg-black/[0.03] p-5">
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
