import Image from "next/image";
import { getSiteSettings } from "@/lib/siteSettings";
import { getSanityImageUrl } from "@/lib/utils";

export default async function BookingHelp() {
  const siteSettings = await getSiteSettings();
  const bookingAssistanceData = siteSettings?.bookingAssistance;

  if (!bookingAssistanceData) return null;

  return (
    <section
      className="grid gap-8 md:grid-cols-[1fr_2fr] lg:grid-cols-2"
      aria-describedby="booking-help-title"
    >
      <div className="grid place-items-center lg:pl-32">
        <Image
          src={
            getSanityImageUrl(bookingAssistanceData.image)?.url() ||
            "https://placehold.co/238x310/png"
          }
          width={238}
          height={310}
          quality={80}
          className="h-[13.25rem] w-[10.1875rem] object-cover md:h-[14.25rem] md:w-[10.9375rem] md:justify-self-end lg:h-[19.375rem] lg:w-[14.875rem] lg:justify-self-center"
          sizes="50vw"
          alt={bookingAssistanceData?.image?.alt || "Image missing description"}
        />
      </div>
      <div className="grid place-items-center text-center lg:pr-32">
        <div className="space-y-6 lg:space-y-10">
          <h2 id="booking-help-title" className="max-w-2xs lg:max-w-md">
            {bookingAssistanceData?.text}
          </h2>
          <address className="space-y-1 not-italic">
            <a
              href={`mailto:${bookingAssistanceData?.email.trim()}`}
              className="block"
            >
              {bookingAssistanceData?.email.trim()}
            </a>
            <a
              href={`tel:${bookingAssistanceData?.phoneNumber.replace(/[^\d+]/g, "")}`}
              className="block"
            >
              {bookingAssistanceData?.phoneNumber}
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}
