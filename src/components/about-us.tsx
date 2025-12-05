import Image from "next/image";
import Link from "next/link";
import { cn, getSanityImageUrl } from "@/lib/utils";
import { getSiteSettings } from "@/lib/siteSettings";
import { Button } from "@/components/ui/button";

export default async function AboutUs({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const siteSettings = await getSiteSettings();
  const aboutUsData = siteSettings?.aboutUs;

  if (!aboutUsData) return null;

  return (
    <section
      className={cn(
        "grid gap-8 md:grid-cols-[2fr_1fr] lg:items-center",
        className,
      )}
      {...props}
      aria-describedby="about-us-title"
    >
      <div className="grid place-items-center md:col-start-2">
        <Image
          src={
            getSanityImageUrl(aboutUsData.image)?.url() ||
            "https://placehold.co/238x310/png"
          }
          alt={aboutUsData?.image.alt || "Image missing description"}
          width={238}
          height={310}
          quality={80}
          className="h-auto w-40.75 object-cover sm:w-43.75 md:justify-self-start lg:w-59.5"
          sizes="50vw"
        />
      </div>
      <div className="grid justify-center text-center md:row-start-1">
        <div className="flex flex-col justify-between gap-6 lg:gap-10">
          <div className="max-w-lg space-y-6 lg:space-y-10">
            <h2 id="about-us-title">{aboutUsData?.heading}</h2>
            <p className="max-w-sm">{aboutUsData?.text}</p>
          </div>
          <div className="mb-5.5">
            <Button variant="ghost" asChild size="sm">
              <Link href="/about-us">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
