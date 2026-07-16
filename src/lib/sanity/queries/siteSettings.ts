import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_id == "siteSettings" && _type == "siteSettings"][0]`,
);
