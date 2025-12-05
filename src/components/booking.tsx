import { getSiteSettings } from "@/lib/siteSettings";
import BookingHelp from "./booking-help";
import RentingInfo from "./renting-info";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Separator } from "./ui/separator";

export default async function Booking() {
  const siteSettings = await getSiteSettings();
  const contactInfo = siteSettings?.contactInfo;

  return (
    <DialogContent className="h-full gap-0 overflow-y-auto p-4 sm:p-8 lg:p-10 xl:p-10">
      <div className="max-w-8xl relative mx-auto grid grid-rows-[auto_auto_1fr]">
        <DialogClose className="ring-offset-background focus-visible:ring-ring data-[state=open]:text-muted-foreground hover:text-accent-500 font-clarika-medium absolute top-3 right-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none sm:top-0 sm:right-0 lg:top-2 lg:right-0">
          Close
        </DialogClose>
        <DialogHeader className="mt-16 gap-8 text-left sm:mt-12 lg:mt-0">
          <DialogTitle asChild>
            <h1>{contactInfo?.heading || "Contact us"}</h1>
          </DialogTitle>
          <DialogDescription className="max-w-[40.5rem]">
            {contactInfo?.text}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-28">
          <BookingHelp />
          <Separator className="my-10 sm:my-20 lg:my-28" />
          <RentingInfo />
        </div>
      </div>
    </DialogContent>
  );
}
