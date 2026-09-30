import Image from "next/image";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";
import { getYoutubeThumbnailUrl } from "@/lib/utils/youtube";

type VideoGridProps = {
  videos: NonNullable<HOME_PAGE_QUERY_RESULT>["videosDestacados"];
  channelUrl?: string;
};

export function VideoGrid({ videos, channelUrl }: VideoGridProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Nuestros Videos</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {videos.map((video) => {
            const thumbnailUrl = video.youtubeUrl
              ? getYoutubeThumbnailUrl(video.youtubeUrl)
              : null;

            return (
              <a
                key={video._key}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-black text-white shadow-sm ring-1 ring-black/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20"
              >
                {thumbnailUrl && (
                  <Image
                    src={thumbnailUrl}
                    alt={video.titulo ?? "Miniatura del video de YouTube"}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="relative flex size-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-110"
                >
                  ▶
                </span>
                {video.titulo && (
                  <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-2 py-1 text-xs">
                    {video.titulo}
                  </span>
                )}
              </a>
            );
          })}
        </div>
        {channelUrl && (
          <div className="mt-8">
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/80 px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Ver más en YouTube →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
