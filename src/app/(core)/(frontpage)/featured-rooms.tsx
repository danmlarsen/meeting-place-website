import { type TRoomMain } from "@/types/TRoom";
import FeaturedRoom from "./featured-room";

export default function FeaturedRooms({
  featuredRooms,
  mainFeaturedRoom,
}: {
  featuredRooms: TRoomMain[];
  mainFeaturedRoom: TRoomMain;
}) {
  return (
    <section
      className="space-y-16 md:space-y-20 lg:space-y-0"
      aria-labelledby="featured-rooms-title"
    >
      <h2 id="featured-rooms-title" className="sr-only">
        Featured rooms
      </h2>
      <div className="px-4 md:px-8">
        <div className="max-w-8xl mx-auto">
          <ul className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-0">
            {featuredRooms.map((roomData, index) => (
              <FeaturedRoom
                key={roomData.slug.current}
                roomData={roomData}
                reverse={index % 2 === 0}
              />
            ))}
          </ul>
        </div>
      </div>
      <FeaturedRoom roomData={mainFeaturedRoom} variant="big" />
    </section>
  );
}
