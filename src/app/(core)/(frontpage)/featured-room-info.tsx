import Link from "next/link";
import { cn, formatArea, formatCapacity, formatLowestPrice } from "@/lib/utils";
import { type TRoomMain } from "@/types/TRoom";
import { Button } from "@/components/ui/button";

export default function FeaturedRoomInfo({
  roomData,
  variant = "sm",
  bookingButton,
}: {
  roomData: TRoomMain;
  variant?: "sm" | "lg";
  bookingButton: React.ReactNode;
}) {
  const {
    slug: { current: slug },
    roomType,
    capacity,
    area,
    prices,
  } = roomData;

  return (
    <div
      className={cn(
        "space-y-6 sm:space-y-4 md:space-y-6",
        variant === "lg" &&
          "space-y-10 sm:space-y-10 md:space-y-12 lg:space-y-[5.625rem]",
      )}
    >
      <ul
        className={cn(
          "font-clarika-medium grid grid-cols-2 gap-x-[0.3125rem] gap-y-1 text-sm lg:text-xl",
          variant === "lg" && "gap-x-4",
        )}
      >
        <li className="capitalize">{roomType}</li>
        <li>{formatArea(area)}</li>
        <li>{formatCapacity(capacity)}</li>
        <li>{formatLowestPrice(prices.map((price) => price.price))}</li>
      </ul>
      <div className="flex gap-3">
        <div>
          <Button variant="outline" asChild>
            <Link href={`/${slug}`}>Learn more</Link>
          </Button>
        </div>
        <div>{bookingButton}</div>
      </div>
    </div>
  );
}
