export function formatDate(iso: string, options?: Intl.DateTimeFormatOptions): string {
  // Un campo `date` de Sanity ("2025-01-20") se parsea como medianoche UTC; formatearlo
  // en la zona local (UTC-6 en Guatemala) lo mostraría como el día anterior.
  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(iso);
  return new Date(iso).toLocaleDateString("es-GT", {
    ...(options ?? { day: "2-digit", month: "long", year: "numeric" }),
    ...(isDateOnly && { timeZone: "UTC" }),
  });
}
