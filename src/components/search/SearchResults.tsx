import Link from "next/link";
import type { SEARCH_QUERY_RESULT } from "@/sanity.types";

const TYPE_LABEL: Record<string, string> = {
  noticia: "Noticia",
  carrera: "Carrera",
  evento: "Galería",
  revista: "Revista",
};

type SearchResultsProps = {
  results: SEARCH_QUERY_RESULT;
  query: string;
};

export function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return <p className="mt-8 text-black/60">No se encontraron resultados para “{query}”.</p>;
  }

  return (
    <ul className="mt-8 divide-y divide-black/10">
      {results.map((result) => (
        <li key={result._id} className="py-4">
          <Link href={result.href} className="group flex items-center justify-between gap-4">
            <span>
              <span className="mr-2 inline-block rounded bg-black/5 px-2 py-0.5 text-xs uppercase tracking-wide text-black/50">
                {TYPE_LABEL[result._type] ?? result._type}
              </span>
              <span className="font-medium group-hover:underline">{result.title}</span>
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
