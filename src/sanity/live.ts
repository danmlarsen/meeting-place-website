import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";

const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

const apiVersion = process.env.SANITY_API_VERSION;
if (!apiVersion) {
  throw new Error("Missing SANITY_API_VERSION");
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion }),
  serverToken: token,
  browserToken: token,
});
