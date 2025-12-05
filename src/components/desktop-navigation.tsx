import { cn } from "@/lib/utils";
import { type TRoomMain } from "@/types/TRoom";
import DesktopNavigationButton from "./desktop-navigation-button";

export default function DesktopNavigation({
  roomsData,
  themeColor = "orange",
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  roomsData: TRoomMain[];
  themeColor?: "orange" | "green";
}) {
  return (
    <nav
      className={cn(
        "bg-cream-100 sticky inset-x-0 top-0 z-10 hidden overflow-hidden px-10 py-6 lg:block",
        className,
      )}
      {...props}
      aria-label="Room navigation"
    >
      <ul className="max-w-8xl mx-auto flex gap-4 xl:gap-6">
        {roomsData.map((room) => (
          <li key={room.slug.current}>
            <DesktopNavigationButton
              name={room.name}
              slug={room.slug.current}
              themeColor={themeColor}
              className={cn(
                "hover:ring-2 lg:px-2.5 xl:px-5",
                themeColor === "orange" &&
                  "hover:ring-primary-700 focus-visible:ring-primary-700",
                themeColor === "green" &&
                  "hover:ring-secondary-500 focus-visible:ring-secondary-500",
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
