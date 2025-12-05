"use client";

import { cn } from "@/lib/utils";
import React from "react";
import * as m from "motion/react-m";

export default function FadeInOnScroll({
  children,
  fromDirection = { x: 0, y: 20 },
  className,
}: {
  children: React.ReactNode;
  fromDirection?: { x?: number; y?: number };
  className?: string;
}) {
  return (
    <m.div
      className={cn("", className)}
      initial={{ opacity: 0, ...fromDirection }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: ["easeOut"] }}
      viewport={{ once: true, margin: "-150px 0px" }}
    >
      {children}
    </m.div>
  );
}
