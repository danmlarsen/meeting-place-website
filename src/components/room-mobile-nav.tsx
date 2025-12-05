"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { TRoomMain } from "@/types/TRoom";
import { Button } from "./ui/button";
import { DialogDescription, DialogTitle } from "./ui/dialog";
import { Drawer, DrawerClose, DrawerContent } from "./ui/drawer";
import RoomItem from "./room-mobile-nav-item";
import { m } from "motion/react";

const listVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {},
};

export default function RoomMobileNav({
  roomsData,
}: {
  roomsData: TRoomMain[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (isDesktop) return null;

  return (
    <Drawer
      direction="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      autoFocus={true}
    >
      <Button
        variant="ghost"
        className="border-none px-4 text-lg sm:px-8 lg:text-xl"
        onClick={() => setIsOpen(true)}
      >
        Rooms
      </Button>
      <DrawerContent className="bg-primary-700 border-none">
        <div className="h-dvh items-start overflow-y-auto px-4 pt-5 pb-10 sm:px-8">
          <DialogTitle className="hidden">Mobile navigation</DialogTitle>
          <DialogDescription className="hidden">
            Mobile navigation
          </DialogDescription>
          <DrawerClose asChild>
            <Button variant="ghost" className="border-none px-0">
              Close rooms
            </Button>
          </DrawerClose>
          <nav className="mt-8">
            <m.ul
              initial="closed"
              animate="open"
              variants={listVariant}
              className="space-y-[1.125rem] sm:space-y-10"
            >
              {roomsData.map((roomData) => (
                <RoomItem
                  key={roomData.slug.current}
                  roomData={roomData}
                  onLinkClick={() => setIsOpen(false)}
                />
              ))}
            </m.ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
