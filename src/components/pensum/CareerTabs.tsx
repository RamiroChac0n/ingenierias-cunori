import Link from "next/link";
import type { CARRERAS_LIST_QUERY_RESULT } from "@/sanity.types";

type CareerTabsProps = {
  careers: CARRERAS_LIST_QUERY_RESULT;
  activeSlug: string;
};

export function CareerTabs({ careers, activeSlug }: CareerTabsProps) {
  return (
    <nav aria-label="Carreras" className="flex flex-wrap gap-2 overflow-x-auto border-b border-black/10 pt-6">
      {careers.map((career) => {
        const isActive = career.slug === activeSlug;
        return (
          <Link
            key={career.slug}
            href={`/pensum/${career.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-t-lg border border-b-0 px-5 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-black bg-black text-white"
                : "border-transparent text-black/60 hover:text-black"
            }`}
          >
            {career.nombre}
          </Link>
        );
      })}
    </nav>
  );
}
