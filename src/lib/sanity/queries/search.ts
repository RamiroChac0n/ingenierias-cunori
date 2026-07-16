import { defineQuery } from "next-sanity";

export const SEARCH_QUERY = defineQuery(`
  *[
    (_type == "noticia" && defined(slug.current) && titulo match $q) ||
    (_type == "carrera" && defined(slug.current) && nombre match $q) ||
    (_type == "evento" && defined(slug.current) && tituloEvento match $q) ||
    (_type == "revista" && nombreRevista match $q)
  ] | order(_type asc) {
    _type,
    _id,
    "title": coalesce(titulo, nombre, tituloEvento, nombreRevista),
    "href": select(
      _type == "noticia" => "/noticias/" + slug.current,
      _type == "carrera" => "/pensum/" + slug.current,
      _type == "evento" => "/galeria/" + slug.current,
      _type == "revista" => "/revista"
    )
  }
`);
