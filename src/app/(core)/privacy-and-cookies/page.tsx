import Image from "next/image";
import { PortableText } from "next-sanity";
import { getSanityImageUrl } from "@/lib/utils";
import Header from "@/components/header";
import { sanityFetch } from "@/sanity/live";
import { PRIVACY_QUERY } from "@/sanity/queries";
import { notFound } from "next/navigation";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

export const metadata = {
  title: "Privacy and cookies",
};

export default async function PrivacyPage() {
  const { data: privacyPageData } = await sanityFetch({ query: PRIVACY_QUERY });

  if (!privacyPageData) notFound();

  return (
    <>
      <Header className="text-black" />
      <main>
        <FadeInOnScroll>
          <div className="px-4 sm:px-8 lg:px-10">
            <div className="max-w-8xl mx-auto pt-44 sm:pt-41.5 lg:pt-72">
              <section className="grid gap-4.5 sm:grid-cols-2">
                {privacyPageData?.heroTitle && (
                  <h1 className="lg:text-[4rem] lg:leading-18">
                    {privacyPageData.heroTitle}
                  </h1>
                )}
                <div className="max-w-lg space-y-6 sm:space-y-8 sm:pt-2 lg:space-y-12">
                  {privacyPageData?.heroText && (
                    <PortableText value={privacyPageData.heroText} />
                  )}
                </div>
              </section>
            </div>
          </div>
        </FadeInOnScroll>

        {privacyPageData?.heroImage && (
          <FadeInOnScroll>
            <div className="max-w-8xl mx-auto mt-12.5 sm:mt-12 lg:mt-40">
              <Image
                src={
                  getSanityImageUrl(privacyPageData.heroImage)
                    ?.width(1600)
                    .height(965)
                    .url() || "https://placehold.co/1600x965/png"
                }
                alt={
                  privacyPageData.heroImage.alt || "Image missing description"
                }
                className="object-cover"
                width={1600}
                height={965}
                quality={80}
                sizes="100vw"
                priority={true}
              />
            </div>
          </FadeInOnScroll>
        )}

        <div className="my-12 px-4 sm:my-16 sm:px-8 lg:mb-22 lg:px-10">
          <div className="max-w-8xl mx-auto space-y-20">
            {privacyPageData?.textBlock && (
              <FadeInOnScroll>
                <section className="space-y-12">
                  <div className="max-w-lg space-y-4 lg:max-w-3xl lg:space-y-6">
                    <PortableText value={privacyPageData.textBlock} />
                  </div>
                </section>
              </FadeInOnScroll>
            )}

            {privacyPageData?.images && (
              <div className="grid gap-16 md:grid-cols-2 md:gap-22.5">
                {privacyPageData.images.map((image, index) =>
                  index % 2 === 0 ? (
                    <FadeInOnScroll key={index}>
                      <Image
                        src={
                          getSanityImageUrl(image)
                            ?.width(776)
                            .height(473)
                            .url() || "https://placehold.co/776x473/png"
                        }
                        alt={image.alt || "Image missing description"}
                        width={776}
                        height={473}
                        quality={80}
                        className="w-full object-cover pr-15 md:pr-0"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </FadeInOnScroll>
                  ) : (
                    <FadeInOnScroll key={index}>
                      <Image
                        src={
                          getSanityImageUrl(image)
                            ?.width(512)
                            .height(667)
                            .url() || "https://placehold.co/512x667/png"
                        }
                        alt={image.alt || "Image missing description"}
                        width={776}
                        height={473}
                        quality={80}
                        className="w-full max-w-lg justify-self-end object-cover pl-15 md:pl-0 lg:justify-self-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </FadeInOnScroll>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
