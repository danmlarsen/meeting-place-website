import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getSiteSettings } from "@/lib/siteSettings";
import { SanityLive } from "@/sanity/live";
import { getSanityImageUrl } from "@/lib/utils";
import MotionProvider from "@/components/motion-provider";
// import { GoogleTagManager } from "@next/third-parties/google";

const sSonder = localFont({
  src: [
    {
      path: "../assets/fonts/Ssonder/SSonder-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ssonder",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

const clarikaMedium = localFont({
  src: [
    {
      path: "../assets/fonts/Clarika/ClarikaProGrotesqueMedium/font.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clarika-medium",
  display: "swap",
  fallback: ["Segoe UI", "Roboto", "Arial", "sans-serif"],
});

const clarika = localFont({
  src: [
    {
      path: "../assets/fonts/Clarika/ClarikaProGrotRg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Clarika/ClarikaProGrotesqueItalic/font.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Clarika/ClarikaProGrotDm.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clarika",
  display: "swap",
  fallback: ["Segoe UI", "Roboto", "Arial", "sans-serif"],
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  const siteTitle = siteSettings?.title || "Meeting Place";

  return {
    title: {
      default: siteTitle,
      template: `${siteTitle} / %s`,
    },
    description: siteSettings?.metaDescription || "",
    openGraph: {
      title: siteTitle,
      description: siteSettings?.metaDescription || "",
      url: siteSettings?.url,
      siteName: siteTitle,
      images: [
        {
          url: siteSettings
            ? getSanityImageUrl(siteSettings?.localBusinessImage)
                ?.width(1200)
                .height(630)
                .quality(80)
                .auto("format")
                .url() || ""
            : "",
          alt: siteTitle,
        },
      ],
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteSettings?.title,
      description: siteSettings?.metaDescription,
      images: [
        siteSettings
          ? getSanityImageUrl(siteSettings?.localBusinessImage)
              ?.width(1200)
              .height(630)
              .quality(80)
              .auto("format")
              .url() || ""
          : "",
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="light">
      {/* {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="" />
      )} */}
      <body
        className={`${sSonder.variable} ${clarikaMedium.variable} ${clarika.variable} selection:bg-accent-500 bg-cream-100 antialiased selection:text-black`}
      >
        <MotionProvider>{children}</MotionProvider>
        <SanityLive />
      </body>
    </html>
  );
}
