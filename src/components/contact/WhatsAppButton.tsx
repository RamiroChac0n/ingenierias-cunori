import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";

type WhatsAppButtonProps = {
  whatsapp?: string;
  message?: string;
};

export function WhatsAppButton({ whatsapp, message }: WhatsAppButtonProps) {
  if (!whatsapp) return null;

  return (
    <a
      href={buildWhatsAppUrl(whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-black/80 px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
    >
      💬 Escríbenos por WhatsApp
    </a>
  );
}
