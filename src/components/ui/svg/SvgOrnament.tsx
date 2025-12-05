// import { cn } from "@/lib/utils";
import Image from "next/image";
import OrnamentImage from "@/assets/images/ornament.png";

export default function SvgOrnament(
  {
    // className,
  }: React.ComponentProps<"svg">,
) {
  return (
    // Replaced actual SVG for white-labeling
    <Image
      src={OrnamentImage}
      alt="Ornament"
      width={96}
      height={32}
      className="h-8"
    />
  );
}
