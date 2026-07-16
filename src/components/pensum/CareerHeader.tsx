type CareerHeaderProps = {
  nombre: string;
  descripcionCorta: string;
  semestres: number;
  creditos: number;
  sistemaCreditos: "tradicional" | "CLAR";
};

export function CareerHeader({
  nombre,
  descripcionCorta,
  semestres,
  creditos,
  sistemaCreditos,
}: CareerHeaderProps) {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold sm:text-4xl">{nombre}</h1>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border border-black/20 px-4 py-1.5">{semestres} semestres</span>
        <span className="rounded-full border border-black/20 px-4 py-1.5">{creditos} créditos</span>
        <span
          className={`rounded-full px-4 py-1.5 ${
            sistemaCreditos === "CLAR" ? "bg-black text-white" : "border border-black/20"
          }`}
        >
          {sistemaCreditos === "CLAR" ? "CLAR" : "Sistema tradicional"}
        </span>
      </div>
      <p className="mt-4 max-w-3xl text-black/70">{descripcionCorta}</p>
    </div>
  );
}
