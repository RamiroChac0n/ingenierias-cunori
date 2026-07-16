"use client";

import { useState, useTransition } from "react";
import { NewsCard } from "./NewsCard";
import { loadMoreNoticias } from "@/app/noticias/actions";
import type { NOTICIAS_LIST_QUERY_RESULT } from "@/sanity.types";

type NoticiasListProps = {
  initialItems: NOTICIAS_LIST_QUERY_RESULT;
  total: number;
};

export function NoticiasList({ initialItems, total }: NoticiasListProps) {
  const [items, setItems] = useState(initialItems);
  const [isPending, startTransition] = useTransition();
  const hasMore = items.length < total;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                const more = await loadMoreNoticias(items.length);
                setItems((prev) => [...prev, ...more]);
              });
            }}
            className="rounded-full border border-black px-6 py-2.5 text-sm font-medium hover:bg-black/5 disabled:opacity-50"
          >
            {isPending ? "Cargando…" : "Cargar más"}
          </button>
        </div>
      )}
    </div>
  );
}
