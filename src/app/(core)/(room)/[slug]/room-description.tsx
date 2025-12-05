import { PortableText, PortableTextBlock } from "next-sanity";
import BookingButton from "@/components/booking-button";
import Bomb from "@/components/ui/bomb";
import SvgArrowLongRight from "@/components/ui/svg/SvgArrowLongRight";

export default function RoomDescription({
  description,
  themeColor = "orange",
}: {
  description: PortableTextBlock[];
  themeColor?: "orange" | "green";
}) {
  return (
    <section
      className="grid gap-12 pb-10 sm:grid-cols-2 sm:pb-20.5 lg:pt-41.25 lg:pb-0"
      aria-describedby="room-description-title"
    >
      <h2 id="room-description-title" className="sr-only">
        Room description
      </h2>
      <div className="space-y-6 md:space-y-8 lg:max-w-lg lg:space-y-10 lg:justify-self-end">
        <PortableText value={description} />
      </div>
      <div className="grid place-items-center md:items-start md:pt-px md:pl-13 lg:pl-40">
        <Bomb bombColor={themeColor}>
          <BookingButton className="rounded-full p-6">
            <span className="uppercase">Reserve room</span>
            <SvgArrowLongRight
              className="absolute inset-x-0 bottom-4 mx-auto lg:bottom-7"
              aria-hidden
            />
          </BookingButton>
        </Bomb>
      </div>
    </section>
  );
}
