import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

const QUICK_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Noticias", href: "/noticias" },
  { label: "Galería", href: "/galeria" },
  { label: "Nuevo Ingreso", href: "/nuevo-ingreso" },
];

type FooterProps = {
  siteName?: string;
  logoUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
};

export function Footer({
  siteName = "Facultad de Ingeniería CUNORI",
  logoUrl,
  facebookUrl,
  twitterUrl,
  youtubeUrl,
  instagramUrl,
}: FooterProps) {
  return (
    <footer className="mt-auto bg-brand-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            {logoUrl && (
              <Image
                src={logoUrl}
                alt={siteName}
                width={32}
                height={32}
                className="size-8 rounded-full bg-white/10 object-contain"
              />
            )}
            <p className="font-semibold">{siteName}</p>
          </div>
          <nav aria-label="Enlaces del pie de página" className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:justify-start">
            {QUICK_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <SocialLinks
          facebookUrl={facebookUrl}
          twitterUrl={twitterUrl}
          youtubeUrl={youtubeUrl}
          instagramUrl={instagramUrl}
        />
      </div>

      <p className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {siteName}
      </p>
    </footer>
  );
}
