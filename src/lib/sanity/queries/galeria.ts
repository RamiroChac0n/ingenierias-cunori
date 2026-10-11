import { defineQuery } from "next-sanity";

export const EVENTOS_LIST_QUERY = defineQuery(`
  *[_type == "evento" && defined(slug.current)] | order(fechaEvento desc) {
    tituloEvento,
    "slug": slug.current,
    fechaEvento,
    soloAnio,
    imagenPortada
  }
`);

export const EVENTO_SLUGS_QUERY = defineQuery(`
  *[_type == "evento" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const EVENTO_BY_SLUG_QUERY = defineQuery(`
  *[_type == "evento" && slug.current == $slug][0] {
    tituloEvento,
    "slug": slug.current,
    fechaEvento,
    soloAnio,
    descripcion,
    fotosAlbum
  }
`);
