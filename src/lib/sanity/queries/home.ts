import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(
  `*[_id == "homePage" && _type == "homePage"][0]`,
);
