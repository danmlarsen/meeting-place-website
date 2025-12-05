"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import FadeInOnScroll from "./ui/fade-in-on-scroll";

export default function FooterConditional({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname();

  if (pathname === "/about-us") return null;

  return (
    <FadeInOnScroll>
      <div
        className={cn(
          "grid gap-10.5 border-t pt-12 sm:gap-8 md:grid-cols-[1fr_auto_2fr] lg:min-h-125 lg:gap-12 xl:grid-cols-[28.625rem_auto_1fr]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </FadeInOnScroll>
  );
}
