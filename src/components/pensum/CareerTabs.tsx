import Link from "next/link";
import type { CARRERAS_LIST_QUERY_RESULT } from "@/sanity.types";
import { getCarreraPalette } from "@/lib/theme/carreraPalette";

type CareerTabsProps = {
  careers: CARRERAS_LIST_QUERY_RESULT;
  activeSlug: string;
};

export function CareerTabs({ careers, activeSlug }: CareerTabsProps) {
  return (
    <nav aria-label="Carreras" className="flex flex-wrap gap-2 overflow-x-auto border-b border-black/5 pt-6">
      {careers.map((career) => {
        const isActive = career.slug === activeSlug;
        const palette = getCarreraPalette(career.slug);
        return (
          <Link
            key={career.slug}
            href={`/pensum/${career.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-t-xl border border-b-0 px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              isActive ? "text-black shadow-sm" : "border-transparent text-black/60 hover:bg-black/5 hover:text-black"
            }`}
            style={isActive ? { borderColor: palette.accent, backgroundColor: palette.accent } : undefined}
          >
            {career.nombre}
          </Link>
        );
      })}
    </nav>
  );
}
