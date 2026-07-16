"use client";

type YearFilterProps = {
  years: number[];
  selected: number | null;
  onSelect: (year: number | null) => void;
};

export function YearFilter({ years, selected, onSelect }: YearFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`rounded-full px-4 py-1.5 text-sm ${
          selected === null ? "bg-black text-white" : "border border-black/20 hover:bg-black/5"
        }`}
      >
        Todos
      </button>
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onSelect(year)}
          className={`rounded-full px-4 py-1.5 text-sm ${
            selected === year ? "bg-black text-white" : "border border-black/20 hover:bg-black/5"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
