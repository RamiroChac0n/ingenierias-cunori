import { CareerCard } from "@/components/career/CareerCard";
import type { CARRERAS_LIST_QUERY_RESULT } from "@/sanity.types";

type CareersGridProps = {
  careers: CARRERAS_LIST_QUERY_RESULT;
};

export function CareersGrid({ careers }: CareersGridProps) {
  if (careers.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl font-semibold">Nuestras Carreras</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <CareerCard key={career.slug} {...career} />
          ))}
        </div>
      </div>
    </section>
  );
}
