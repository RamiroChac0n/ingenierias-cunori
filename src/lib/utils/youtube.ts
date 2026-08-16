/**
 * Extrae el ID de un video de YouTube a partir de las URLs más comunes:
 * - https://www.youtube.com/watch?v=ID
 * - https://youtu.be/ID
 * - https://www.youtube.com/embed/ID
 * - https://www.youtube.com/shorts/ID
 */
export function getYoutubeVideoId(url: string): string | null {
  try {
    const { hostname, pathname, searchParams } = new URL(url);

    if (hostname.includes("youtu.be")) {
      return pathname.slice(1) || null;
    }

    if (hostname.includes("youtube.com")) {
      if (pathname === "/watch") return searchParams.get("v");

      const match = pathname.match(/^\/(embed|shorts)\/([^/?]+)/);
      if (match) return match[2];
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Construye la URL de la miniatura pública de un video de YouTube.
 * `hqdefault` siempre existe; `maxresdefault` no está garantizado para todos los videos.
 */
export function getYoutubeThumbnailUrl(url: string): string | null {
  const videoId = getYoutubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
