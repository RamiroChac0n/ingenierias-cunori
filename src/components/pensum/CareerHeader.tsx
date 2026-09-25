import { getCarreraPalette } from "@/lib/theme/carreraPalette";

type CareerHeaderProps = {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  semestres: number;
  creditos: number;
  sistemaCreditos: "tradicional" | "CLAR";
};

export function CareerHeader({
  slug,
  nombre,
  descripcionCorta,
  semestres,
  creditos,
  sistemaCreditos,
}: CareerHeaderProps) {
  const palette = getCarreraPalette(slug);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{nombre}</h1>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border px-4 py-1.5 shadow-sm" style={{ borderColor: palette.accent }}>
          {semestres} semestres
        </span>
        <span className="rounded-full border px-4 py-1.5 shadow-sm" style={{ borderColor: palette.accent }}>
          {creditos} créditos
        </span>
        <span
          className="rounded-full px-4 py-1.5 font-medium shadow-sm"
          style={
            sistemaCreditos === "CLAR"
              ? { backgroundColor: palette.accent }
              : { border: "1px solid", borderColor: palette.accent }
          }
        >
          {sistemaCreditos === "CLAR" ? "CLAR" : "Sistema tradicional"}
        </span>
      </div>
      <p className="mt-4 max-w-3xl text-black/70">{descripcionCorta}</p>
    </div>
  );
}
