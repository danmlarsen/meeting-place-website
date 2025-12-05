import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/live";
import { HOME_QUERY } from "@/sanity/queries";
import { TRoomMain, TRoomWithTheme } from "@/types/TRoom";
import Header from "@/components/header";
import HomeSchema from "@/schemas/home-schema";
import Hero from "./hero";
import Affordable from "./affordable";
import FeaturedRooms from "./featured-rooms";
import Rooms from "./rooms";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });

  const descriptionBlock = data?.descriptionBlock;
  const featuredRooms = data?.featuredRooms as TRoomMain[] | null;
  const mainFeaturedRoom = data?.mainFeaturedRoom as TRoomMain | null;
  const otherRooms = data?.otherRooms as TRoomWithTheme[] | null;

  if (!featuredRooms || !mainFeaturedRoom) notFound();

  return (
    <>
      <HomeSchema />
      <Header />
      <main>
        <Hero />

        <FadeInOnScroll>
          <div className="my-18 px-4 sm:px-8 md:mt-[7.875rem] md:mb-[9.3125rem] lg:mt-[8.5rem] lg:mb-[4.5rem] lg:px-10">
            <div className="max-w-8xl mx-auto">
              <Affordable text={descriptionBlock?.text} />
            </div>
          </div>
        </FadeInOnScroll>

        <FeaturedRooms
          featuredRooms={featuredRooms}
          mainFeaturedRoom={mainFeaturedRoom}
        />

        {!!otherRooms && otherRooms.length > 0 && (
          <div className="px-4 sm:px-8 lg:px-0">
            <div className="mx-auto mt-11 max-w-[105rem] lg:my-16">
              <Rooms rooms={otherRooms} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
