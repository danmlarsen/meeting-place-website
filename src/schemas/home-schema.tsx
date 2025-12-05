import "server-only";

import { Graph } from "schema-dts";
import { getSiteSettings } from "@/lib/siteSettings";
import { getSanityImageUrl } from "@/lib/utils";

export default async function HomeSchema() {
  const siteSettings = await getSiteSettings();

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteSettings?.url}/#website`,
        url: siteSettings?.url,
        name: siteSettings?.title,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteSettings?.url}/#virksomhet`,
        name: siteSettings?.title || "",
        description: siteSettings?.metaDescription || "",
        image: siteSettings
          ? getSanityImageUrl(siteSettings?.localBusinessImage)
              ?.width(1680)
              .height(935)
              .quality(80)
              .auto("format")
              .url() || ""
          : "",
        logo: siteSettings
          ? getSanityImageUrl(siteSettings?.logoImage)
              ?.width(192)
              .height(192)
              .quality(80)
              .auto("format")
              .url() || ""
          : "",
        url: siteSettings?.url || "",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteSettings?.streetAddress || "",
          addressLocality: siteSettings?.addressLocality || "",
          postalCode: siteSettings?.postCode || "",
          addressCountry: "NO",
        },
        telephone: siteSettings?.phoneNumber || "",
        openingHours: siteSettings?.openingHours || "",
        sameAs: siteSettings?.socials || [],
      },
      {
        "@type": "Service",
        name: siteSettings?.services?.serviceName || "",
        description: siteSettings?.services?.serviceDescription || "",
        category: siteSettings?.services?.serviceCategories || [],
        provider: {
          "@id": `${siteSettings?.url}/#virksomhet`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
