import Image from "next/image";
import {
  cn,
  formatArea,
  formatCapacity,
  formatLowestPrice,
  getSanityImageUrl,
} from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { type TRoomMain } from "@/types/TRoom";

export default function RoomCard({
  roomData,
  roomPage = true,
  className,
  ...props
}: React.ComponentProps<"article"> & {
  roomData: TRoomMain;
  roomPage?: boolean;
}) {
  const { name, capacity, area, prices, mainImage, roomType } = roomData;

  if (roomPage) {
    return (
      <Card className={cn("rounded-sm bg-transparent", className)} {...props}>
        <CardContent className="grid min-h-[26.375rem] grid-rows-[auto_1fr_auto] gap-5 p-5 sm:min-h-[28.5625rem] sm:gap-6 lg:min-h-[37.6875rem] lg:p-6">
          <h2>{name}</h2>
          <ul className="font-clarika-medium self-end text-sm sm:space-y-0.5 lg:text-lg">
            {/* <p className="capitalize">{category}</p> */}
            <li>{formatCapacity(capacity)}</li>
            <li>{formatArea(area)}</li>
            <li>{formatLowestPrice(prices.map((price) => price.price))}</li>
          </ul>
          <Image
            src={
              getSanityImageUrl(mainImage)?.width(303).height(228).url() ||
              "https://placehold.co/303x228/png"
            }
            alt={mainImage.alt || "Image missing description"}
            width={303}
            height={228}
            quality={80}
            className="object-cover lg:max-w-[18.9375rem]"
            sizes="(max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={mainImage.asset?.metadata?.lqip || ""}
          />
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className={cn("bg-transparent", className)} {...props}>
        <CardContent className="grid grid-cols-2 gap-4 sm:gap-6 lg:min-h-[37.6875rem] lg:grid-cols-1 lg:grid-rows-[auto_1fr_auto] lg:py-6">
          <h2 className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 lg:col-start-1">
            {name}
          </h2>
          <Image
            src={
              getSanityImageUrl(mainImage)?.width(600).height(450).url() ||
              "https://placehold.co/600x450/png"
            }
            alt={mainImage.alt || "Image missing description"}
            width={600}
            height={450}
            quality={80}
            className="w-full object-cover sm:row-span-2 lg:row-span-1 lg:max-w-[18.9375rem]"
            sizes="(max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={mainImage.asset?.metadata?.lqip || ""}
          />
          <ul className="font-clarika-medium space-y-1 text-sm sm:col-start-2 sm:row-start-2 sm:self-end sm:text-lg lg:col-start-1">
            <li className="capitalize">{roomType}</li>
            <li>{formatCapacity(capacity)}</li>
            <li>{formatArea(area)}</li>
            <li>{formatLowestPrice(prices.map((price) => price.price))}</li>
          </ul>
        </CardContent>
      </Card>
    );
  }
}
