import { client } from "@/lib/sanity/client";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries/siteSettings";
import { HOME_PAGE_QUERY } from "@/lib/sanity/queries/home";
import { CARRERAS_LIST_QUERY } from "@/lib/sanity/queries/carreras";
import { Hero } from "@/components/home/Hero";
import { CareersGrid } from "@/components/home/CareersGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { AlumniGrid } from "@/components/home/AlumniGrid";
import { VideoGrid } from "@/components/home/VideoGrid";
import { ContactBlock } from "@/components/contact/ContactBlock";

const options = { next: { revalidate: 60 } };

export default async function Home() {
  const [home, careers, siteSettings] = await Promise.all([
    client.fetch(HOME_PAGE_QUERY, {}, options),
    client.fetch(CARRERAS_LIST_QUERY, {}, options),
    client.fetch(SITE_SETTINGS_QUERY, {}, options),
  ]);

  if (!home) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <p className="text-black/60">
          Todavía no hay contenido publicado para la Home en Sanity Studio.
        </p>
      </div>
    );
  }

  return (
    <>
      <Hero
        titulo={home.heroTitulo}
        subtitulo={home.heroSubtitulo}
        ctaTexto1={home.heroCtaTexto1}
        ctaTexto2={home.heroCtaTexto2}
        imagen={home.heroImagen}
      />
      <CareersGrid careers={careers} />
      <AboutSection mision={home.mision} vision={home.vision} />
      <AlumniGrid egresados={home.egresados} />
      <VideoGrid videos={home.videosDestacados} channelUrl={home.youtubeChannelUrl} />
      {siteSettings && <ContactBlock siteSettings={siteSettings} showSocial />}
    </>
  );
}
