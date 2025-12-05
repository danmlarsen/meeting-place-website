import { formatCapacity, getSanityImageUrl } from "@/lib/utils";
import { TRoomMain } from "@/types/TRoom";
import Image from "next/image";
import Link from "next/link";
import { m } from "motion/react";

const itemVariant = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: -20,
  },
};

export default function RoomItem({
  roomData,
  onLinkClick,
}: {
  roomData: TRoomMain;
  onLinkClick: () => void;
}) {
  const {
    name,
    capacity,
    mainImage,
    slug: { current: slug },
  } = roomData;

  return (
    <m.li variants={itemVariant}>
      <Link
        href={`/${slug}`}
        className="grid grid-cols-[6.5rem_1fr] gap-4 sm:grid-cols-[10.9375rem_1fr]"
        onClick={onLinkClick}
      >
        <Image
          src={
            getSanityImageUrl(mainImage)?.width(175).height(131).url() ||
            "https://placehold.co/176x132/png"
          }
          alt={mainImage.alt || ""}
          width={175}
          height={131}
          quality={80}
          sizes="33vw"
          placeholder="blur"
          blurDataURL={mainImage.asset?.metadata?.lqip || ""}
          className="object-cover"
        />
        <div className="space-y-0.5 sm:space-y-4">
          <h2 className="text-[1.5rem] leading-8 sm:text-[2rem] sm:leading-10">
            {name}
          </h2>
          <p className="font-clarika-medium text-sm">
            {formatCapacity(capacity)}
          </p>
        </div>
      </Link>
    </m.li>
  );
}
