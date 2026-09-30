type DocumentPreviewBlockProps = {
  pdfUrl: string;
  fileName: string | null;
};

export function DocumentPreviewBlock({ pdfUrl, fileName }: DocumentPreviewBlockProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
      <div
        aria-hidden="true"
        className="flex h-40 w-32 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-black/5 text-4xl shadow-inner"
      >
        📄
      </div>
      <div>
        <p className="font-medium">{fileName ?? "Documento adjunto"}</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-lg"
        >
          ⬇ Descargar PDF
        </a>
      </div>
    </div>
  );
}
