import "server-only";

import { LocalBusiness, type Room, type WithContext } from "schema-dts";
import { toPlainText } from "next-sanity";
import { getSiteSettings } from "@/lib/siteSettings";
import { getSanityImageUrl } from "@/lib/utils";
import { type TRoom } from "@/types/TRoom";

export default async function RoomSchema({ roomData }: { roomData: TRoom }) {
  const siteSettings = await getSiteSettings();
  const {
    name,
    slug,
    description,
    roomCategories,
    capacity,
    area,
    prices,
    mainImage,
    facilities,
  } = roomData;

  const roomJsonLd: WithContext<Room> = {
    "@context": "https://schema.org",
    "@type": "Room",
    "@id": `${siteSettings?.url}/#${slug.current}`,
    name,
    description: !!description ? toPlainText(description) : "",
    maximumAttendeeCapacity: capacity,
    floorSize: {
      "@type": "QuantitativeValue",
      value: area,
      unitCode: "MTK",
    },
    amenityFeature: !!facilities
      ? facilities.map((facility) => ({
          "@type": "LocationFeatureSpecification",
          name: facility,
          value: "Yes",
        }))
      : [],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings?.streetAddress,
      addressLocality: siteSettings?.addressLocality,
      postalCode: siteSettings?.postCode,
      addressCountry: "NO",
    },
    image:
      getSanityImageUrl(mainImage)
        ?.width(1680)
        .height(935)
        .quality(80)
        .auto("format")
        .url() || "",
  };

  const localBusinessJsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteSettings?.title,
    description: siteSettings?.metaDescription,
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
    url: siteSettings?.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings?.streetAddress,
      addressLocality: siteSettings?.addressLocality,
      postalCode: siteSettings?.postCode,
      addressCountry: "NO",
    },
    telephone: siteSettings?.phoneNumber,
    openingHours: siteSettings?.openingHours,
    makesOffer: prices.map((price) => {
      let priceName = "Hourly rental";
      let priceDescription =
        "Rent per hour – perfect for short meetings or small events.";
      if (price.timeFrame === "hourly") {
        priceName = "Hourly rental";
        priceDescription =
          "Rent per hour – perfect for short meetings or small events.";
      }
      if (price.timeFrame === "halfday") {
        priceName = "Half-day rental";
        priceDescription =
          "Up to 5 hours – ideal for meetings, afternoon events, or smaller parties.";
      }
      if (price.timeFrame === "fullday") {
        priceName = "Full-day rental";
        priceDescription =
          "Up to 12 hours – perfect for weddings, conferences, and confirmations.";
      }

      return {
        "@type": "Offer",
        name: priceName,
        priceCurrency: "NOK",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "NOK",
          price: price.price,
          unitCode: price.timeFrame === "hourly" ? "HUR" : "DAY",
        },
        itemOffered: {
          "@type": "Service",
          name: `${priceName} of ${name}`,
          description: priceDescription,
          category: roomCategories,
          additionalProperty: !!facilities
            ? facilities.map((facility) => ({
                "@type": "PropertyValue",
                name: facility,
                value: "Yes",
              }))
            : [],
        },
        availability: "https://schema.org/InStock",
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
    </>
  );
}
