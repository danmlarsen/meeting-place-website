import Link from "next/link";
import { PortableText } from "next-sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type TRoom } from "@/types/TRoom";

export default function RoomOccasions({
  occations,
  themeColor = "orange",
}: {
  occations: TRoom["occasions"];
  themeColor?: "orange" | "green";
}) {
  return (
    <section className="relative py-10 sm:pt-12 sm:pb-9 lg:py-16">
      <div className="grid gap-6 sm:grid-cols-[15.0625rem_1fr] lg:grid-cols-[32.625rem_1fr]">
        <h2>Occasions</h2>
        <Accordion
          type="single"
          collapsible
          className={cn(
            "border-t",
            themeColor === "orange" && "border-primary-500",
            themeColor === "green" && "border-secondary-300",
          )}
        >
          {occations.map((occation, index) => (
            <AccordionItem
              key={`accordion_item_${index}`}
              value={`${occation.name}-${index}`}
              className={cn(
                themeColor === "orange" && "border-primary-500",
                themeColor === "green" && "border-secondary-300",
              )}
            >
              <AccordionTrigger
                className={cn(
                  "hover:text-accent-500 cursor-pointer text-[1.3125rem] leading-6.5 lg:py-6 lg:text-[1.5rem] lg:leading-8",
                  themeColor === "orange" && "text-primary-700",
                  themeColor === "green" && "text-secondary-500",
                )}
              >
                <h3 className="font-clarika-medium text-black">
                  {occation.name}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="relative lg:flex lg:flex-wrap lg:items-start lg:justify-between lg:gap-6">
                <div className="portable-text max-w-150 space-y-6">
                  <PortableText value={occation.description} />
                </div>
                {occation.hasCateringLink && (
                  <div className="mt-4 lg:mt-0 lg:pr-8 xl:pr-28.25">
                    <Button
                      variant="ghost"
                      className="h-7.5 px-0 py-0 sm:col-start-2 lg:h-7.5 lg:px-0"
                      asChild
                    >
                      <Link href="https://danmarius.no/" target="_blank">
                        Read more about Catering
                      </Link>
                    </Button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
