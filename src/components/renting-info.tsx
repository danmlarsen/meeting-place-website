import { getSiteSettings } from "@/lib/siteSettings";
import { PortableText } from "next-sanity";

export default async function RentingInfo() {
  const siteSettings = await getSiteSettings();
  const rentingInfo = siteSettings?.rentingInfo;

  return (
    <div className="grid gap-[1.625rem] md:grid-cols-2">
      <h2 className="max-w-md text-center">{rentingInfo?.heading}</h2>
      <div className="space-y-6">
        {rentingInfo?.text && <PortableText value={rentingInfo.text} />}
      </div>
    </div>
  );
}
