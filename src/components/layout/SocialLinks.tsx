type SocialLinksProps = {
  facebookUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  className?: string;
};

const ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.33 4.25c-2.15 0-3.63 1.31-3.63 3.72V10.5H8.2v3H10.7V21h2.8Z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M18.3 3h3.2l-7 8 8.2 10h-6.4l-5-6.5-5.7 6.5H1.4l7.5-8.6L1 3h6.6l4.5 6 6.2-6Zm-1.1 16.2h1.8L7 4.7H5l12.2 14.5Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M21.6 7.6a3 3 0 0 0-2.1-2.1C17.7 5 12 5 12 5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.4 3 3 0 0 0 2.1 2.1C6.3 19 12 19 12 19s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M12 4.6c2.4 0 2.7 0 3.6.05 2.4.11 3.5 1.24 3.6 3.6.05.9.06 1.17.06 3.75s0 2.85-.06 3.75c-.11 2.36-1.23 3.49-3.6 3.6-.9.05-1.17.05-3.6.05s-2.7 0-3.6-.05c-2.37-.11-3.5-1.25-3.6-3.6C4.65 14.85 4.65 14.58 4.65 12s0-2.85.05-3.75c.11-2.37 1.24-3.5 3.6-3.6.9-.05 1.17-.05 3.6-.05h.1ZM12 3c-2.44 0-2.75 0-3.71.06-3.15.14-4.9 1.9-5.04 5.04C3.2 9.06 3.2 9.37 3.2 12s0 2.94.06 3.9c.14 3.13 1.9 4.9 5.04 5.03.96.05 1.27.06 3.71.06s2.75 0 3.71-.06c3.13-.14 4.9-1.9 5.03-5.04.06-.95.06-1.26.06-3.9s0-2.94-.06-3.9c-.13-3.13-1.9-4.9-5.03-5.03C14.75 3 14.44 3 12 3Zm0 4.7A4.3 4.3 0 1 0 12 16.3 4.3 4.3 0 0 0 12 7.7Zm0 7.1A2.8 2.8 0 1 1 12 9.2a2.8 2.8 0 0 1 0 5.6Zm4.47-7.27a1 1 0 1 0 0-2.01 1 1 0 0 0 0 2Z" />
    </svg>
  ),
};

export function SocialLinks({
  facebookUrl,
  twitterUrl,
  youtubeUrl,
  instagramUrl,
  className,
}: SocialLinksProps) {
  const links = [
    { href: facebookUrl, label: "Facebook", icon: ICONS.facebook },
    { href: twitterUrl, label: "Twitter/X", icon: ICONS.twitter },
    { href: youtubeUrl, label: "YouTube", icon: ICONS.youtube },
    { href: instagramUrl, label: "Instagram", icon: ICONS.instagram },
  ].filter((link) => Boolean(link.href));

  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-current opacity-80 transition-all duration-200 hover:scale-110 hover:opacity-100"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
