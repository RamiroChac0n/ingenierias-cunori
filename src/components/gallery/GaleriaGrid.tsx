"use client";

import { useMemo, useState } from "react";
import { EventCard } from "./EventCard";
import { YearFilter } from "./YearFilter";
import type { EVENTOS_LIST_QUERY_RESULT } from "@/sanity.types";

type GaleriaGridProps = {
  eventos: EVENTOS_LIST_QUERY_RESULT;
};

export function GaleriaGrid({ eventos }: GaleriaGridProps) {
  const years = useMemo(
    () =>
      Array.from(new Set(eventos.map((evento) => new Date(evento.fechaEvento).getUTCFullYear()))).sort(
        (a, b) => b - a,
      ),
    [eventos],
  );
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filtered =
    selectedYear === null
      ? eventos
      : eventos.filter((evento) => new Date(evento.fechaEvento).getUTCFullYear() === selectedYear);

  return (
    <div>
      {years.length > 1 && (
        <div className="mb-8">
          <YearFilter years={years} selected={selectedYear} onSelect={setSelectedYear} />
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((evento) => (
          <EventCard key={evento.slug} {...evento} />
        ))}
      </div>
    </div>
  );
}
