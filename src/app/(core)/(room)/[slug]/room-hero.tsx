"use client";

import Image from "next/image";
import {
  formatArea,
  formatCapacity,
  formatLowestPrice,
  getSanityImageUrl,
} from "@/lib/utils";
import { TRoomMain } from "@/types/TRoom";
import { m } from "motion/react";

const sectionVariant = {
  open: {
    transition: { staggerChildren: 0.07 },
  },
};

const divVariant = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const titleVariant = {
  open: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 },
  },
  closed: {
    opacity: 0,
    x: -20,
  },
};

const listVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const itemVariant = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 20,
  },
};

export default function RoomHero({ roomData }: { roomData: TRoomMain }) {
  const { name, roomType, area, capacity, prices, mainImage } = roomData;

  return (
    <m.section
      variants={sectionVariant}
      initial="closed"
      whileInView="open"
      viewport={{ once: true }}
      className="relative"
    >
      <m.div
        variants={divVariant}
        className="relative grid min-h-96 sm:aspect-4/3 md:aspect-auto md:min-h-160.75 lg:min-h-lvh"
      >
        <Image
          src={
            getSanityImageUrl(mainImage)?.width(1920).height(1080).url() ||
            "https://placehold.co/1920x1080/png"
          }
          alt={mainImage.alt || "Bildet mangler beskrivelse"}
          fill
          quality={80}
          className="absolute top-0 left-0 z-[-2] object-cover"
          priority={true}
          placeholder="blur"
          blurDataURL={mainImage?.asset?.metadata?.lqip || ""}
        />

        <div className="absolute inset-0 z-[-1] bg-black/20" />

        <div className="hidden px-10 py-11 lg:grid">
          <div className="max-w-8xl mx-auto flex w-full items-end justify-between text-white">
            <m.h1
              variants={titleVariant}
              aria-hidden
              className="z-10 lg:max-w-2xl xl:max-w-200"
            >
              {name}
            </m.h1>
            <m.ul
              variants={listVariant}
              className="font-clarika-medium mb-6 w-94 space-y-2 lg:text-[1.25rem] lg:leading-7.5"
            >
              <m.li variants={itemVariant} className="capitalize">
                {roomType}
              </m.li>
              <m.li variants={itemVariant}>{formatCapacity(capacity)}</m.li>
              <m.li variants={itemVariant}>Area {formatArea(area)}</m.li>
              <m.li variants={itemVariant}>
                {formatLowestPrice(prices.map((price) => price.price))}
              </m.li>
            </m.ul>
          </div>
        </div>
      </m.div>
      <m.div
        variants={divVariant}
        className="grid gap-28 px-4 pt-7 sm:grid-cols-[1fr_auto] sm:px-8 sm:pt-8.75 lg:hidden"
      >
        <m.h1 variants={titleVariant} aria-hidden>
          {name}
        </m.h1>
        <m.ul
          variants={listVariant}
          className="font-clarika-medium space-y-1 text-sm md:w-60.25 md:space-y-2 md:pt-1.5"
        >
          <m.li variants={itemVariant} className="capitalize">
            {roomType}
          </m.li>
          <m.li variants={itemVariant}>{formatCapacity(capacity)}</m.li>
          <m.li variants={itemVariant}>Areal {formatArea(area)}</m.li>
          <m.li variants={itemVariant}>
            {formatLowestPrice(prices.map((price) => price.price))}
          </m.li>
        </m.ul>
      </m.div>
    </m.section>
  );
}
