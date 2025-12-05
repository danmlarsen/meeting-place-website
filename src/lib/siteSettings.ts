import "server-only";

import { sanityFetch } from "@/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";

export async function getSiteSettings() {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
  const siteSettings = data;

  return siteSettings;
}
