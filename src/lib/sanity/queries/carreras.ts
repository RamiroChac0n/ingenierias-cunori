import { defineQuery } from "next-sanity";

export const CARRERAS_LIST_QUERY = defineQuery(`
  *[_type == "carrera"] | order(lower(nombre) asc) {
    nombre,
    "slug": slug.current,
    descripcionCorta
  }
`);

export const CARRERA_SLUGS_QUERY = defineQuery(`
  *[_type == "carrera" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const CARRERA_BY_SLUG_QUERY = defineQuery(`
  *[_type == "carrera" && slug.current == $slug][0] {
    nombre,
    "slug": slug.current,
    descripcionCorta,
    semestres,
    creditos,
    sistemaCreditos,
    areasAcademicas,
    pensumImages,
    "pensumPdfUrl": pensumPdf.asset->url,
    updateNote,
    lastUpdated
  }
`);
