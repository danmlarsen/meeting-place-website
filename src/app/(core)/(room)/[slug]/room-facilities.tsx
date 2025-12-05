"use client";

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

export default function RoomFacilities({
  facilities,
}: {
  facilities: string[];
}) {
  return (
    <m.section
      variants={sectionVariant}
      initial="closed"
      whileInView="open"
      viewport={{ once: true, margin: "-100px 0px" }}
      className="grid gap-6 overflow-x-hidden py-10 sm:grid-cols-[15.0625rem_1fr] sm:py-12 lg:grid-cols-[32.625rem_1fr] lg:py-16"
    >
      <m.h2 variants={titleVariant}>Facilities</m.h2>
      <m.ul
        variants={listVariant}
        className="max-w-lg space-y-3 divide-y md:gap-8 lg:max-w-full lg:columns-2 lg:space-y-4"
      >
        {facilities.map((facility, index) => (
          <m.li
            key={index}
            variants={itemVariant}
            className="break-inside-avoid px-3 pb-3 last-of-type:border-b lg:px-4 lg:pb-4"
          >
            <p>{facility}</p>
          </m.li>
        ))}
      </m.ul>
    </m.section>
  );
}
