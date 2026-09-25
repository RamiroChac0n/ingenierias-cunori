type RequirementsListProps = {
  requisitos: string[];
};

export function RequirementsList({ requisitos }: RequirementsListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {requisitos.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-5 shrink-0 items-center justify-center rounded-full border border-black/20 bg-black/5 text-xs text-black/70"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
