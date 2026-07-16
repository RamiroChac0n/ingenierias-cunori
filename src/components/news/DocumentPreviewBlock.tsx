type DocumentPreviewBlockProps = {
  pdfUrl: string;
  fileName: string | null;
};

export function DocumentPreviewBlock({ pdfUrl, fileName }: DocumentPreviewBlockProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-lg border border-black/10 p-6 sm:flex-row sm:items-center">
      <div
        aria-hidden="true"
        className="flex h-40 w-32 shrink-0 items-center justify-center rounded border border-black/10 bg-black/5 text-4xl"
      >
        📄
      </div>
      <div>
        <p className="font-medium">{fileName ?? "Documento adjunto"}</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-black/80"
        >
          ⬇ Descargar PDF
        </a>
      </div>
    </div>
  );
}
