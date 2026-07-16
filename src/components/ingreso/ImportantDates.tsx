import { formatDate } from "@/lib/utils/formatDate";

type Fecha = {
  nombre: string;
  fecha: string;
};

type ImportantDatesProps = {
  fechas: Fecha[];
};

export function ImportantDates({ fechas }: ImportantDatesProps) {
  if (fechas.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {fechas.map((item) => (
        <div key={item.nombre} className="rounded-lg border border-black/10 p-5 text-center">
          <p className="text-xl font-semibold">{formatDate(item.fecha, { day: "2-digit", month: "short" })}</p>
          <p className="mt-1 text-sm text-black/60">{item.nombre}</p>
        </div>
      ))}
    </div>
  );
}
