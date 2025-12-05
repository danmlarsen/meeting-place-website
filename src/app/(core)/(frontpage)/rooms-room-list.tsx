"use client";

import { type TRoomWithTheme } from "@/types/TRoom";
import RoomItem from "./rooms-room-item";
import { m } from "motion/react";

const listVariant = {
  open: {
    transition: { staggerChildren: 0.35, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function RoomList({
  roomsData,
}: {
  roomsData: TRoomWithTheme[];
}) {
  return (
    <m.ul
      variants={listVariant}
      initial="closed"
      whileInView="open"
      viewport={{ once: true, margin: "-150px 0px" }}
      className="flex flex-col gap-8 divide-y sm:gap-6 lg:flex-row lg:gap-0 lg:divide-y-0 lg:py-6"
    >
      {roomsData.map((room, index) => (
        <RoomItem
          key={room.slug.current}
          roomData={room}
          showRightDivider={index < roomsData.length - 1}
        />
      ))}
    </m.ul>
  );
}
