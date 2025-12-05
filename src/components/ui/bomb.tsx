import { cn } from "@/lib/utils";
import SvgBomb from "./svg/SvgBomb";

export default function Bomb({
  children,
  className,
  bombColor = "orange",
  ...props
}: React.ComponentProps<"div"> & { bombColor?: "orange" | "green" }) {
  return (
    <div
      className={cn(
        "group font-clarika relative grid size-[9.25rem] rounded-full text-base font-semibold lg:size-[11.25rem] lg:text-xl",
        className,
      )}
      {...props}
    >
      <SvgBomb
        className={cn(
          "group-hover:fill-accent-500 absolute inset-0 z-[-1] transition duration-200 group-hover:scale-105 lg:size-[11.25rem]",
          bombColor === "orange" && "fill-primary-700",
          bombColor === "green" && "fill-secondary-500",
        )}
      />
      {/* <SvgArrowLongRight className="absolute inset-x-0 bottom-8 mx-auto" /> */}
      {children}
    </div>
  );
}
