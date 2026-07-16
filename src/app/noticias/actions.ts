"use server";

import { client } from "@/lib/sanity/client";
import { NOTICIAS_LIST_QUERY, NOTICIAS_PAGE_SIZE } from "@/lib/sanity/queries/noticias";

export async function loadMoreNoticias(offset: number) {
  return client.fetch(NOTICIAS_LIST_QUERY, {
    start: offset,
    end: offset + NOTICIAS_PAGE_SIZE,
  });
}
