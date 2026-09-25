type Step = {
  titulo: string;
  descripcion: string;
};

type StepListProps = {
  steps: Step[];
};

export function StepList({ steps }: StepListProps) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.titulo} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-black font-medium text-white shadow-md shadow-black/20">
            {index + 1}
          </span>
          <div>
            <p className="font-medium">{step.titulo}</p>
            <p className="mt-1 text-sm text-black/60">{step.descripcion}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
