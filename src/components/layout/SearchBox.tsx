type SearchBoxProps = {
  className?: string;
};

export function SearchBox({ className }: SearchBoxProps) {
  return (
    <form
      action="/buscar"
      method="get"
      role="search"
      className={`flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
        className="size-4 shrink-0 opacity-70"
      >
        <circle cx={11} cy={11} r={7} />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        name="q"
        placeholder="Buscar…"
        aria-label="Buscar en el sitio"
        className="w-28 bg-transparent placeholder:text-current/60 focus:outline-none sm:w-40"
      />
    </form>
  );
}
