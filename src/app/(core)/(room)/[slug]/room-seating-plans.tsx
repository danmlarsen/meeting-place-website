"use client";

import { cn } from "@/lib/utils";
import { type TSeatingPlans, seatingPlansMap } from "@/lib/seatingPlansMap";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function RoomSeatingPlans({
  seatingPlans,
  themeColor = "orange",
}: {
  seatingPlans: TSeatingPlans[];
  themeColor?: "orange" | "green";
}) {
  const isMobile = useMediaQuery("(max-width: 834px)");

  return (
    <section className="space-y-5.5 py-10 sm:py-12 lg:space-y-14 lg:pt-16 lg:pb-20">
      <div className="px-4 sm:px-8 lg:px-10">
        <h2 className="max-w-8xl mx-auto">Seating plans</h2>
      </div>
      {isMobile && (
        <Carousel
          opts={{
            skipSnaps: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent>
            {seatingPlans.map((seatingPlan) => (
              <RoomSeatingPlanCarouselItem
                key={seatingPlan}
                seatingPlan={seatingPlan}
                themeColor={themeColor}
              />
            ))}
          </CarouselContent>
        </Carousel>
      )}
      {!isMobile && (
        <div className="px-8 lg:px-10">
          <div className="max-w-8xl mx-auto">
            <ul className="grid grid-cols-3 gap-y-6 md:gap-y-8 lg:gap-y-10">
              {seatingPlans.map((seatingPlan) => (
                <RoomSeatingPlanItem
                  key={seatingPlan}
                  seatingPlan={seatingPlan}
                  themeColor={themeColor}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

function RoomSeatingPlanItem({
  seatingPlan,
  themeColor = "orange",
}: {
  seatingPlan: TSeatingPlans;
  themeColor?: "orange" | "green";
}) {
  const { name, svg } = seatingPlansMap[seatingPlan];
  const Illustration = svg;

  return (
    <li className={cn("flex flex-col gap-2")}>
      <div className="space-y-2 text-center lg:space-y-6">
        <h3 className="font-clarika-medium text-[1.25rem] leading-7.5">
          {name}
        </h3>
        <Illustration
          className={cn(
            "h-auto max-h-51.75 w-full sm:max-h-45 lg:max-h-71.25",
            themeColor === "orange" && "text-primary-700",
            themeColor === "green" && "text-secondary-500",
          )}
        />
      </div>
    </li>
  );
}

function RoomSeatingPlanCarouselItem({
  seatingPlan,
  themeColor = "orange",
}: {
  seatingPlan: TSeatingPlans;
  themeColor?: "orange" | "green";
}) {
  const { name, svg } = seatingPlansMap[seatingPlan];
  const Illustration = svg;

  return (
    <CarouselItem className={cn("flex basis-3/4 flex-col gap-2 sm:basis-1/2")}>
      <div className="space-y-2 text-center lg:space-y-6">
        <h3 className="font-clarika-medium text-[1.25rem] leading-7.5">
          {name}
        </h3>
        <Illustration
          className={cn(
            "h-auto max-h-51.75 w-full sm:max-h-45 lg:max-h-71.25",
            themeColor === "orange" && "text-primary-700",
            themeColor === "green" && "text-secondary-500",
          )}
        />
      </div>
    </CarouselItem>
  );
}
