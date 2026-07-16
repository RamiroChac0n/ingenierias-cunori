import { defineQuery } from "next-sanity";

export const REVISTA_QUERY = defineQuery(
  `*[_id == "revista" && _type == "revista"][0]`,
);
