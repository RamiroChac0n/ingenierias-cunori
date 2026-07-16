export function buildWhatsAppUrl(rawNumber: string, message?: string): string {
  const digits = rawNumber.replace(/\D/g, "");
  const url = new URL(`https://wa.me/${digits}`);
  if (message) url.searchParams.set("text", message);
  return url.toString();
}
