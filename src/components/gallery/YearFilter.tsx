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
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          selected === null ? "bg-black text-white shadow-md shadow-black/20" : "border border-black/20 hover:border-black/40 hover:bg-black/5"
        }`}
      >
        Todos
      </button>
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onSelect(year)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
            selected === year ? "bg-black text-white shadow-md shadow-black/20" : "border border-black/20 hover:border-black/40 hover:bg-black/5"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
