import { defineQuery } from "next-sanity";

export const NUEVO_INGRESO_QUERY = defineQuery(
  `*[_id == "nuevoIngreso" && _type == "nuevoIngreso"][0]`,
);
