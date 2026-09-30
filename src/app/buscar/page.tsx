import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { SEARCH_QUERY } from "@/lib/sanity/queries/search";
import { SearchResults } from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Buscar",
};

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function BuscarPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const results = query ? await client.fetch(SEARCH_QUERY, { q: `${query}*` }) : [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Buscar</h1>
      {query ? (
        <>
          <p className="mt-2 text-black/60">Resultados para “{query}”</p>
          <SearchResults results={results} query={query} />
        </>
      ) : (
        <p className="mt-8 text-black/60">Escribe algo en el buscador para empezar.</p>
      )}
    </div>
  );
}
