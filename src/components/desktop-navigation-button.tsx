"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function DesktopNavigationButton({
  className,
  name,
  slug,
  themeColor = "orange",
  ...props
}: React.ComponentProps<"button"> & {
  name: string;
  slug: string;
  themeColor?: "orange" | "green";
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentSlug = segments[segments.length - 1];

  return (
    <Button
      asChild
      className={cn(
        className,
        "bg-transparent text-black hover:bg-transparent",
        currentSlug === slug && themeColor === "orange" && "bg-primary-700",
        currentSlug === slug && themeColor === "green" && "bg-secondary-500",
      )}
      {...props}
    >
      <Link href={`/${slug}`}>{name}</Link>
    </Button>
  );
}
