import { Button } from "@/components/ui/button";
import { getSiteSettings } from "@/lib/siteSettings";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function MemberDiscount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const siteSettings = await getSiteSettings();
  const memberDiscountData = siteSettings?.memberDiscount;

  return (
    <section
      className={cn(
        "grid justify-center text-center lg:place-items-center",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-between gap-6 lg:min-h-55 lg:gap-10">
        <h2 className="max-w-sm md:max-w-62.5 lg:max-w-full">
          {memberDiscountData?.text}
        </h2>
        {!!memberDiscountData?.linkUrl && memberDiscountData?.linkText && (
          <div className="md:mb-5.5">
            <Button variant="ghost" size="sm" asChild>
              <Link href={memberDiscountData.linkUrl} target="_blank">
                {memberDiscountData.linkText}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
