"use client";

import { cn, formatPrice } from "@/lib/utils";
import { type TRoom } from "@/types/TRoom";
import { m } from "motion/react";

const sectionVariant = {
  open: {
    transition: { staggerChildren: 0.07 },
  },
};

const titleVariant = {
  open: {
    opacity: 1,
    x: 0,
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

export default function RoomPrices({
  prices,
  priceDescription,
}: {
  prices: TRoom["prices"];
  priceDescription?: string;
}) {
  return (
    <m.section
      variants={sectionVariant}
      initial="closed"
      whileInView="open"
      viewport={{ once: true, margin: "-100px 0px" }}
      className="grid gap-6 overflow-x-hidden py-10 sm:grid-cols-[15.0625rem_1fr] sm:pt-12 sm:pb-[3.375rem] lg:grid-cols-[32.625rem_1fr] lg:py-16"
    >
      <m.h2 variants={titleVariant}>Prices</m.h2>
      <m.ul
        variants={listVariant}
        className={cn("max-w-lg space-y-3 divide-y lg:space-y-4")}
      >
        {prices.map((price, index) => (
          <m.li
            variants={itemVariant}
            key={index}
            className="grid grid-cols-2 px-3 pb-3 lg:px-4 lg:pb-4"
          >
            <p>{price.priceTitle}</p>
            <p>{formatPrice(price.price)}</p>
          </m.li>
        ))}
        {!!priceDescription && (
          <m.li variants={itemVariant} className="px-3 lg:mt-6 lg:px-4">
            <p>{priceDescription}</p>
          </m.li>
        )}
      </m.ul>
    </m.section>
  );
}
