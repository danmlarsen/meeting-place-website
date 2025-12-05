import Link from "next/link";
import { getSiteSettings } from "@/lib/siteSettings";

export default async function Footer() {
  const siteSettings = await getSiteSettings();

  return (
    <footer className="bg-cream-300 font-clarika-medium mt-12 grid grid-rows-[1fr_auto] pt-7 md:min-h-135 lg:min-h-184.25">
      <div className="flex flex-col justify-between gap-y-28 px-4 md:px-8 lg:px-10">
        <div className="max-w-8xl mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-18.75 text-sm md:grid-cols-3 lg:grid-cols-[1fr_2fr_1fr] lg:text-lg">
          <div>
            <Link
              href="/about-us"
              className="hover:text-accent-500 leading-6 transition-colors duration-200"
            >
              About us
            </Link>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="hover:text-accent-500 leading-6 transition-colors duration-200"
              >
                Privacy and cookies
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-accent-500 leading-6 transition-colors duration-200"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="https://www.danmarius.no"
                target="_blank"
                className="hover:text-accent-500 leading-6 transition-colors duration-200"
              >
                Visit danmarius.no
              </Link>
            </li>
          </ul>
          <div>
            {siteSettings?.addressMapUrl && siteSettings?.streetAddress && (
              <Link
                href={siteSettings.addressMapUrl}
                target="_blank"
                className="hover:text-accent-500 leading-6 transition-colors duration-200"
              >
                {`${siteSettings?.streetAddress}${!!siteSettings?.addressLocality && `, ${siteSettings?.addressLocality}`}`}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-29.25 px-4.5 pb-5 md:mt-0 md:px-8 md:pb-9 lg:px-10 lg:pb-10">
        <h2 className="font-ssonder footer-clamp z-10 text-center text-black">
          {siteSettings?.title}
        </h2>
      </div>
    </footer>
  );
}
