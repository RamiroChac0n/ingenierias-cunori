import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { NOTICIAS_COUNT_QUERY, NOTICIAS_LIST_QUERY, NOTICIAS_PAGE_SIZE } from "@/lib/sanity/queries/noticias";
import { NoticiasList } from "@/components/news/NoticiasList";

const options = { next: { revalidate: 60 } };

export const metadata: Metadata = {
  title: "Noticias",
};

export default async function NoticiasPage() {
  const [items, total] = await Promise.all([
    client.fetch(NOTICIAS_LIST_QUERY, { start: 0, end: NOTICIAS_PAGE_SIZE }, options),
    client.fetch(NOTICIAS_COUNT_QUERY, {}, options),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold">Noticias</h1>
      {items.length === 0 ? (
        <p className="mt-8 text-black/60">Todavía no hay noticias publicadas.</p>
      ) : (
        <div className="mt-10">
          <NoticiasList initialItems={items} total={total} />
        </div>
      )}
    </div>
  );
}
