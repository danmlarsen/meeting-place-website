import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/live";
import { toPlainText } from "next-sanity";
import { getSanityImageUrl } from "@/lib/utils";
import {
  ROOM_METADATA_QUERY,
  ROOM_QUERY,
  ROOM_SLUG_QUERY,
} from "@/sanity/queries";
import { type TRoomMain, type TRoom } from "@/types/TRoom";
import RoomSchema from "@/schemas/room-schema";
import Header from "@/components/header";
import RoomHero from "./room-hero";
import DesktopNavigation from "@/components/desktop-navigation";
import RoomDescription from "./room-description";
import RoomGallery from "./room-gallery";
import RoomFacilities from "./room-facilities";
import RoomPrices from "./room-prices";
import RoomSeatingPlans from "./room-seating-plans";
import RoomOccasions from "./room-occasions";
import RoomOtherRooms from "./room-other-rooms";
import BorderSetter from "./room-border-setter";
import { getSiteSettings } from "@/lib/siteSettings";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

export async function generateStaticParams() {
  const { data: rooms } = await sanityFetch({
    query: ROOM_SLUG_QUERY,
    perspective: "published",
    stega: false,
  });

  return rooms.map((room) => ({
    slug: room.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: room } = await sanityFetch({
    query: ROOM_METADATA_QUERY,
    params: await params,
  });

  const siteSettings = await getSiteSettings();

  return {
    title: room?.name || "",
    description: room?.description ? toPlainText(room.description) : "",
    openGraph: {
      title: room?.name || siteSettings?.title || "",
      description: room?.description ? toPlainText(room.description) : "",
      url: `${siteSettings?.url}/${room?.slug.current}`,
      siteName: siteSettings?.title,
      images: [
        {
          url: room?.mainImage
            ? getSanityImageUrl(room?.mainImage)
                ?.width(1200)
                .height(630)
                .quality(80)
                .auto("format")
                .url() || ""
            : "",
          alt: room?.name,
        },
      ],
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: room?.name || siteSettings?.title || "",
      description: room?.description ? toPlainText(room.description) : "",
      images: [
        room?.mainImage
          ? getSanityImageUrl(room?.mainImage)
              ?.width(1200)
              .height(630)
              .quality(80)
              .auto("format")
              .url() || ""
          : "",
      ],
    },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = (await sanityFetch({
    query: ROOM_QUERY,
    params: await params,
  })) as {
    data: { currentRoom: TRoom; roomNavigation: { roomNavItems: TRoomMain[] } };
  };
  const { currentRoom: roomData, roomNavigation } = data;

  const { roomNavItems } = roomNavigation;
  const otherRooms = roomNavItems.filter((room) => room.slug.current !== slug);

  if (!roomData) return notFound();

  const {
    description,
    prices,
    gallery,
    facilities,
    seatingPlans,
    occasions,
    extraImage,
    roomThemeColor,
    priceDescription,
  } = roomData;

  return (
    <>
      <RoomSchema roomData={roomData} />
      <Header />
      <BorderSetter
        color={
          roomThemeColor === "green"
            ? "var(--color-secondary-300)"
            : "var(--color-primary-500)"
        }
      />
      <RoomHero roomData={roomData} />
      <DesktopNavigation roomsData={roomNavItems} themeColor={roomThemeColor} />
      <main>
        <article aria-labelledby="room-title">
          <h1 id="room-title" className="sr-only">
            {roomData.name}
          </h1>

          <div className="flex flex-col sm:mt-12 lg:mt-0 lg:flex-col-reverse lg:pb-35.75">
            <div className="px-4 sm:px-8 lg:px-10">
              <div className="max-w-8xl mx-auto mt-8 lg:mt-0">
                <FadeInOnScroll>
                  <RoomDescription
                    description={description}
                    themeColor={roomThemeColor}
                  />
                </FadeInOnScroll>
              </div>
            </div>
            {gallery && gallery.length > 0 && <RoomGallery images={gallery} />}
          </div>
          <div className="px-4 sm:px-8 lg:px-10">
            <div className="max-w-8xl mx-auto mt-8 lg:mt-0">
              <div className="sm:mt-12 lg:mt-0">
                {!!facilities && facilities.length > 0 && (
                  <RoomFacilities facilities={facilities} />
                )}
                <RoomPrices
                  prices={prices}
                  priceDescription={priceDescription}
                />
              </div>
            </div>
          </div>
          {extraImage && (
            <FadeInOnScroll>
              <section className="max-w-8xl mx-auto mt-10 sm:mt-12 lg:mt-16">
                <Image
                  src={
                    getSanityImageUrl(extraImage)
                      ?.width(1600)
                      .height(965)
                      .url() || "https://placehold.co/1600x965/png"
                  }
                  alt={extraImage.alt || "Bildet mangler beskrivelse"}
                  width={1600}
                  height={965}
                  quality={80}
                  className="aspect-video object-cover sm:aspect-5/3"
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={extraImage.asset?.metadata?.lqip || ""}
                />
              </section>
            </FadeInOnScroll>
          )}
          {!!seatingPlans && seatingPlans.length > 0 && (
            <FadeInOnScroll>
              <RoomSeatingPlans
                seatingPlans={seatingPlans}
                themeColor={roomThemeColor}
              />
            </FadeInOnScroll>
          )}
          {!!occasions && occasions.length > 0 && (
            <FadeInOnScroll>
              <div className="px-4 sm:px-8 lg:px-10">
                <div className="max-w-8xl mx-auto">
                  <RoomOccasions
                    occations={occasions}
                    themeColor={roomThemeColor}
                  />
                </div>
              </div>
            </FadeInOnScroll>
          )}
          {!!otherRooms && otherRooms.length > 0 && (
            <FadeInOnScroll>
              <RoomOtherRooms
                roomsData={otherRooms}
                themeColor={roomThemeColor}
              />
            </FadeInOnScroll>
          )}
        </article>
      </main>
    </>
  );
}
