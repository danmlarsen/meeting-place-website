import { cn } from "@/lib/utils";
import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";

export default function SvgLogo({
  className,
  title,
  ...props
}: React.ComponentProps<"svg"> & { title: string }) {
  return (
    // Replaced actual SVG for white-labeling
    <Image src={LogoImage} alt="Meeting Place logo" width={96} height={73} />
  );
}
