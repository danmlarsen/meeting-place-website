import { sanityFetch } from "@/sanity/live";
import { NAVIGATION_QUERY } from "@/sanity/queries";
import { getSiteSettings } from "@/lib/siteSettings";
import { cn } from "@/lib/utils";
import { TRoomMain } from "@/types/TRoom";
import Logo from "./logo";
import BookingButton from "./booking-button";
import RoomMobileNav from "./room-mobile-nav";

export default async function Header({
  className,
  ...props
}: React.ComponentProps<"header">) {
  const siteSettings = await getSiteSettings();

  const { data } = await sanityFetch({ query: NAVIGATION_QUERY });
  const roomsData = (data?.roomNavItems || []) as TRoomMain[];

  return (
    <header
      className={cn(
        "font-clarika-medium absolute inset-x-0 top-0 z-10 text-white",
        className,
      )}
      {...props}
    >
      <div className="max-w-8xl relative mx-auto flex min-h-20 items-center justify-between lg:min-h-30">
        <div className="hidden text-[1.25rem] leading-7.5 lg:block lg:pl-10 xl:pl-0">
          {siteSettings?.streetAddress}
        </div>
        <div className="lg:hidden">
          <RoomMobileNav roomsData={roomsData} />
        </div>
        <div className="absolute top-6.5 left-1/2 flex -translate-x-1/2 items-center justify-center">
          <Logo title={siteSettings?.title || "Meeting Place"} />
        </div>
        <div className="flex justify-end">
          <BookingButton className="hover:text-accent-500 px-6 py-2 text-lg transition-colors duration-200 sm:px-8 lg:px-10 lg:text-xl">
            Booking
          </BookingButton>
        </div>
      </div>
    </header>
  );
}
