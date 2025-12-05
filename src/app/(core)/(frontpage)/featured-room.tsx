import {
  cn,
  formatArea,
  formatCapacity,
  formatLowestPrice,
  getSanityImageUrl,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BookingButton from "@/components/booking-button";
import { Button } from "@/components/ui/button";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";
import { type TRoomMain } from "@/types/TRoom";
import FeaturedRoomInfo from "./featured-room-info";

export default function FeaturedRoom({
  roomData,
  variant = "small",
  reverse = false,
}: {
  roomData: TRoomMain;
  variant?: "small" | "big";
  reverse?: boolean;
}) {
  const {
    name,
    slug: { current: slug },
    roomType,
    capacity,
    area,
    prices,
    mainImage,
  } = roomData;

  if (variant === "big") {
    return (
      <article>
        <FadeInOnScroll>
          <div className="relative grid aspect-square px-4 sm:aspect-7/5 sm:px-8 lg:aspect-9/5">
            <Image
              src={
                getSanityImageUrl(mainImage)?.width(1920).height(1080).url() ||
                "https://placehold.co/1920x1080/png"
              }
              alt={mainImage.alt || "Image missing description"}
              fill
              quality={80}
              className="z-[-1] object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL={mainImage.asset?.metadata?.lqip || ""}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="max-w-8xl relative mx-auto w-full text-white">
              <h1 className="absolute bottom-4 left-0 max-w-xs sm:hidden lg:block lg:max-w-2xl xl:max-w-4xl">
                {name}
              </h1>
              <div className="font-clarika-medium absolute top-[3.75rem] right-0 hidden w-[23.5rem] lg:block">
                <ul className="space-y-2 font-medium">
                  <li className="capitalize">{roomType}</li>
                  <li>{formatCapacity(capacity)}</li>
                  <li>{formatArea(area)}</li>
                  <li>
                    {formatLowestPrice(prices.map((price) => price.price))}
                  </li>
                </ul>
                <div className="mt-[1.3125rem] flex gap-3">
                  <Button variant="outline" asChild>
                    <Link className="border-white" href={`/${slug}`}>
                      Learn more
                    </Link>
                  </Button>
                  <BookingButton asChild>
                    <Button className="border-cream-100 bg-white text-black">
                      Reserve now
                    </Button>
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="grid items-center gap-6 px-4 py-5 sm:grid-cols-2 sm:px-8 md:py-6 lg:hidden">
            <div className="hidden sm:block">
              <h1 className="max-w-sm">{name}</h1>
            </div>
            <FeaturedRoomInfo
              roomData={roomData}
              bookingButton={
                <BookingButton asChild>
                  <Button>Reserve now</Button>
                </BookingButton>
              }
            />
          </div>
        </FadeInOnScroll>
      </article>
    );
  } else {
    return (
      <li className="lg:py-16">
        <article className="grid items-center gap-4 sm:gap-6 lg:grid-cols-2">
          <Image
            src={
              getSanityImageUrl(mainImage)?.width(784).height(588).url() ||
              "https://placehold.co/784x588/png"
            }
            alt={mainImage.alt || "Image missing description"}
            width={784}
            height={588}
            quality={80}
            className={cn("object-cover", reverse && "lg:order-2")}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL={mainImage.asset?.metadata?.lqip || ""}
          />

          <div
            className={cn("grid space-y-6 lg:items-center lg:pl-[8.625rem]")}
          >
            <FadeInOnScroll>
              <div className="space-y-4 lg:space-y-6">
                <h2>{name}</h2>
                <FeaturedRoomInfo
                  roomData={roomData}
                  variant="lg"
                  bookingButton={
                    <BookingButton asChild>
                      <Button>Reserve now</Button>
                    </BookingButton>
                  }
                />
              </div>
            </FadeInOnScroll>
          </div>
        </article>
      </li>
    );
  }
}
