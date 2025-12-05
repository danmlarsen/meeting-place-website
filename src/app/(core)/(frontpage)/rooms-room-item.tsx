"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type TRoomWithTheme } from "@/types/TRoom";
import RoomCard from "@/components/room-card";
import { m } from "motion/react";

const itemVariant = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 20,
  },
};

export default function RoomItem({
  roomData,
  className,
  showRightDivider,
  ...props
}: React.ComponentProps<"a"> & {
  roomData: TRoomWithTheme;
  showRightDivider: boolean;
}) {
  return (
    <m.li
      variants={itemVariant}
      transition={{ duration: 0.4 }}
      className="relative grow pb-5 sm:pb-6 lg:py-0"
    >
      <Link
        href={`/${roomData.slug.current}`}
        className={cn(
          "lg:from-cream-100 lg:to-cream-100 block lg:bg-linear-to-r lg:from-0% lg:to-50% lg:px-18 lg:py-9 lg:transition-colors lg:duration-500",
          roomData.roomThemeColor === "orange" &&
            "lg:hover:from-cream-100 lg:hover:to-primary-500",
          roomData.roomThemeColor === "green" &&
            "lg:hover:from-cream-100 lg:hover:to-secondary-300",
          className,
        )}
        {...props}
      >
        <RoomCard roomData={roomData} roomPage={false} />
      </Link>
      {showRightDivider && (
        <div className="bg-border absolute inset-y-0 right-0 my-15 hidden w-0.5 lg:block" />
      )}
    </m.li>
  );
}
