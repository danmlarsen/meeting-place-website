import { getSiteSettings } from "@/lib/siteSettings";
import { cn } from "@/lib/utils";
import HeroVideo from "./hero-video";

export default async function Hero({
  className,
  ...props
}: React.ComponentProps<"section">) {
  const siteSettings = await getSiteSettings();

  return (
    <section
      className={cn(
        "relative flex min-h-svh items-end justify-center overflow-hidden text-center",
        className,
      )}
      {...props}
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-black/25" />
      <h1 className="font-ssonder main-heading-clamp z-10 -translate-y-5 text-white md:-translate-y-10">
        {siteSettings?.title}
      </h1>
    </section>
  );
}
