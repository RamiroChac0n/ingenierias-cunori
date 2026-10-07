import { defineQuery } from "next-sanity";

export const NOTICIAS_PAGE_SIZE = 3;

export const NOTICIAS_LIST_QUERY = defineQuery(`
  *[_type == "noticia" && defined(slug.current)] | order(fechaPublicacion desc) [$start...$end] {
    titulo,
    "slug": slug.current,
    fechaPublicacion,
    autor,
    tipoPost,
    imagenDestacada
  }
`);

export const NOTICIAS_COUNT_QUERY = defineQuery(`
  count(*[_type == "noticia" && defined(slug.current)])
`);

export const NOTICIA_SLUGS_QUERY = defineQuery(`
  *[_type == "noticia" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const NOTICIA_BY_SLUG_QUERY = defineQuery(`
  *[_type == "noticia" && slug.current == $slug][0] {
    titulo,
    "slug": slug.current,
    fechaPublicacion,
    autor,
    tipoPost,
    imagenDestacada,
    "documentoPdfUrl": documentoPdf.asset->url,
    "documentoPdfName": documentoPdf.asset->originalFilename,
    "documentosAdicionales": documentosAdicionales[] {
      _key,
      "url": asset->url,
      "name": asset->originalFilename
    },
    urlExterna,
    fuenteEnlace
  }
`);

export const NOTICIA_PREV_QUERY = defineQuery(`
  *[_type == "noticia" && defined(slug.current) && fechaPublicacion < $fecha] | order(fechaPublicacion desc) [0] {
    titulo,
    "slug": slug.current
  }
`);

export const NOTICIA_NEXT_QUERY = defineQuery(`
  *[_type == "noticia" && defined(slug.current) && fechaPublicacion > $fecha] | order(fechaPublicacion asc) [0] {
    titulo,
    "slug": slug.current
  }
`);
