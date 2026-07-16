export function formatDate(iso: string, options?: Intl.DateTimeFormatOptions): string {
  return new Date(iso).toLocaleDateString(
    "es-GT",
    options ?? { day: "2-digit", month: "long", year: "numeric" },
  );
}
