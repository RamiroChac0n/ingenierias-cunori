import { MapEmbed } from "./MapEmbed";
import { WhatsAppButton } from "./WhatsAppButton";
import { SocialLinks } from "@/components/layout/SocialLinks";
import type { SITE_SETTINGS_QUERY_RESULT } from "@/sanity.types";

type ContactBlockProps = {
  siteSettings: NonNullable<SITE_SETTINGS_QUERY_RESULT>;
  title?: string;
  id?: string;
  showMap?: boolean;
  showWhatsapp?: boolean;
  showSocial?: boolean;
};

export function ContactBlock({
  siteSettings,
  title = "Contáctanos",
  id = "contacto",
  showMap = true,
  showWhatsapp = true,
  showSocial = false,
}: ContactBlockProps) {
  const { telefono, email, direccion, mapsUrl, mapsEmbedUrl, whatsapp } = siteSettings;

  return (
    <section id={id} className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={`tel:${telefono}`}
            className="flex items-center gap-3 rounded-lg border border-black/10 p-5 hover:bg-black/[0.02]"
          >
            <span aria-hidden="true">📞</span>
            <span>{telefono}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 rounded-lg border border-black/10 p-5 hover:bg-black/[0.02]"
          >
            <span aria-hidden="true">✉️</span>
            <span>{email}</span>
          </a>
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-black/10 p-5 hover:bg-black/[0.02]"
            >
              <span aria-hidden="true">📍</span>
              <span>{direccion}</span>
            </a>
          ) : (
            <div className="flex items-center gap-3 rounded-lg border border-black/10 p-5">
              <span aria-hidden="true">📍</span>
              <span>{direccion}</span>
            </div>
          )}
        </div>

        {((showMap && mapsEmbedUrl) || (showWhatsapp && whatsapp)) && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {showMap && <MapEmbed embedUrl={mapsEmbedUrl} />}
            {showWhatsapp && whatsapp && (
              <div className="flex flex-col items-start justify-center gap-3 rounded-lg border border-black/10 p-6">
                <p>¿Prefieres chatear?</p>
                <WhatsAppButton whatsapp={whatsapp} />
              </div>
            )}
          </div>
        )}

        {showSocial && (
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm">Síguenos:</span>
            <SocialLinks
              facebookUrl={siteSettings.facebookUrl}
              twitterUrl={siteSettings.twitterUrl}
              youtubeUrl={siteSettings.youtubeUrl}
              instagramUrl={siteSettings.instagramUrl}
            />
          </div>
        )}
      </div>
    </section>
  );
}
