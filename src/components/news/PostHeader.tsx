import { formatDate } from "@/lib/utils/formatDate";

type PostHeaderProps = {
  titulo: string;
  autor: string;
  fechaPublicacion: string;
};

export function PostHeader({ titulo, autor, fechaPublicacion }: PostHeaderProps) {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{titulo}</h1>
      <p className="mt-3 text-sm text-black/50">
        Por {autor} · {formatDate(fechaPublicacion)} · Categoría: Noticias
      </p>
    </div>
  );
}
