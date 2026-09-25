type MapEmbedProps = {
  embedUrl?: string;
};

export function MapEmbed({ embedUrl }: MapEmbedProps) {
  if (!embedUrl) return null;

  return (
    <iframe
      src={embedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-56 w-full rounded-2xl border border-black/5 shadow-sm sm:h-full sm:min-h-[220px]"
      title="Ubicación en el mapa"
    />
  );
}
