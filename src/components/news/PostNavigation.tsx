import Link from "next/link";

type NavItem = { titulo: string; slug: string } | null;

type PostNavigationProps = {
  prev: NavItem;
  next: NavItem;
};

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <div className="flex items-center justify-between gap-6 border-t border-black/5 py-6 text-sm">
      {prev ? (
        <Link href={`/noticias/${prev.slug}`} className="hover:underline">
          ← {prev.titulo}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/noticias/${next.slug}`} className="text-right hover:underline">
          {next.titulo} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
