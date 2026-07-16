import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(
  `*[_id == "homePage" && _type == "homePage"][0]`,
);

export const HOME_CAREERS_QUERY = defineQuery(`
  *[_type == "carrera"] | order(lower(nombre) asc) {
    nombre,
    "slug": slug.current,
    descripcionCorta
  }
`);
