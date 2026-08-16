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
        <h2 className="text-2xl font-semibold">Nuestros Videos</h2>
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
                className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-black text-white"
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
                  className="relative flex size-12 items-center justify-center rounded-full bg-white/90 text-black transition-transform group-hover:scale-110"
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
              className="inline-block rounded-full border border-black px-6 py-2.5 text-sm font-medium hover:bg-black/5"
            >
              Ver más en YouTube →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
