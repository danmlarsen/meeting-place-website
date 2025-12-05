import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import RoomCard from "@/components/room-card";
import { type TRoomMain } from "@/types/TRoom";

export default function RoomOtherRooms({
  roomsData,
  themeColor,
}: {
  roomsData: TRoomMain[];
  themeColor: "orange" | "green";
}) {
  return (
    <section className="space-y-4 py-10 sm:space-y-6 sm:py-12 lg:space-y-10 lg:py-16">
      <div className="px-4 sm:px-8 lg:px-10">
        <h3 className="font-clarika-medium max-w-8xl mx-auto">Other rooms</h3>
      </div>
      <Carousel
        opts={{
          skipSnaps: true,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="mx-auto max-w-[105rem] gap-4 px-4 sm:gap-6 sm:px-8 lg:gap-8 lg:px-10">
          {roomsData.map((room) => (
            <CarouselItem
              key={room.slug.current}
              className="basis-[17.75rem] last-of-type:mr-4 sm:basis-[19.1875rem] sm:last-of-type:mr-8 lg:basis-[29.0625rem] lg:last-of-type:mr-10"
            >
              <Link href={`/${room.slug.current}`}>
                <RoomCard
                  roomData={room}
                  className={cn(
                    "bg-linear-to-r from-0% to-50% transition-colors duration-500",
                    themeColor === "orange" &&
                      "from-primary-500 to-primary-500 hover:from-cream-100 hover:to-primary-500",
                    themeColor === "green" &&
                      "from-secondary-300 to-secondary-300 hover:from-cream-100 hover:to-secondary-300",
                  )}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
