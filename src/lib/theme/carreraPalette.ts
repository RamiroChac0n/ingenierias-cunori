export type CarreraPalette = {
  /** Fondo pastel de la sección (header, tabs, chips, galería del pénsum) */
  bg: string;
  /** Color de acento principal: tab activo, badges, botones */
  accent: string;
  /** Tono secundario de acento: chips, hovers, bordes */
  accentSoft: string;
};

/**
 * Paleta de color por carrera, tomada de /paletas/{civil,industrial,sistemas}.css.
 * Las claves son los slugs reales en Sanity (carrera.slug.current).
 *
 * Nota: los colores solo deben usarse como backgroundColor/borderColor.
 * No usar como color de texto: varios tonos son demasiado claros y no
 * cumplen contraste AA sobre fondo blanco.
 */
const CARRERA_PALETTES: Record<string, CarreraPalette> = {
  civil: {
    bg: "#FCE2EC", // petal-frost
    accent: "#F4869E", // cotton-candy-2
    accentSoft: "#FBCDDB", // pastel-petal
  },
  industrial: {
    bg: "#E2EFDD", // honeydew
    accent: "#7EB071", // sage-green
    accentSoft: "#9EBC94", // muted-olive
  },
  "ciencias-y-sistemas": {
    bg: "#FBE3D9", // powder-petal
    accent: "#EC824E", // coral-glow
    accentSoft: "#B57654", // cinnamon-wood
  },
};

/** Paleta neutra para slugs sin carrera conocida (no debería usarse en producción). */
const DEFAULT_PALETTE: CarreraPalette = {
  bg: "#F5F5F5",
  accent: "#171717",
  accentSoft: "#D4D4D4",
};

export function getCarreraPalette(slug: string): CarreraPalette {
  return CARRERA_PALETTES[slug] ?? DEFAULT_PALETTE;
}
