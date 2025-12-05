import Image from "next/image";
import { PortableText } from "next-sanity";
import { getSanityImageUrl } from "@/lib/utils";
import Header from "@/components/header";
import { sanityFetch } from "@/sanity/live";
import { ABOUT_QUERY } from "@/sanity/queries";
import { notFound } from "next/navigation";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

export const metadata = {
  title: "About us",
};

export default async function AboutUsPage() {
  const { data: aboutPageData } = await sanityFetch({ query: ABOUT_QUERY });

  if (!aboutPageData) notFound();

  return (
    <>
      <Header className="text-black" />
      <main>
        <FadeInOnScroll>
          <div className="px-4 sm:px-8 lg:px-10">
            <div className="max-w-8xl mx-auto pt-44 sm:pt-41.5 lg:pt-72">
              <section className="grid gap-4.5 sm:grid-cols-2">
                {aboutPageData?.heroTitle && (
                  <h1 className="lg:text-[4rem] lg:leading-[4.5rem]">
                    {aboutPageData.heroTitle}
                  </h1>
                )}
                <div className="max-w-lg space-y-6 sm:space-y-8 sm:pt-2 lg:space-y-12">
                  {aboutPageData?.heroText && (
                    <PortableText value={aboutPageData.heroText} />
                  )}
                </div>
              </section>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="max-w-8xl mx-auto mt-12.5 sm:mt-12 lg:mt-40">
            <Image
              src={
                getSanityImageUrl(aboutPageData.heroImage)
                  ?.width(1600)
                  .height(965)
                  .url() || "https://placehold.co/1600x965/png"
              }
              alt={aboutPageData?.heroImage.alt || "Image missing description"}
              className="object-cover"
              width={1600}
              height={965}
              quality={80}
              sizes="100vw"
              priority={true}
            />
          </div>
        </FadeInOnScroll>

        <div className="my-12 px-4 sm:my-16 sm:px-8 lg:mb-[5.5rem] lg:px-10">
          <div className="max-w-8xl mx-auto space-y-20">
            {aboutPageData?.textBlock && (
              <FadeInOnScroll>
                <section className="space-y-12">
                  <div className="max-w-lg space-y-4 lg:max-w-3xl lg:space-y-6">
                    <PortableText value={aboutPageData.textBlock} />
                  </div>
                </section>
              </FadeInOnScroll>
            )}

            {aboutPageData?.images && (
              <div className="grid gap-16 md:grid-cols-2 md:gap-[5.625rem]">
                {aboutPageData.images.map((image, index) =>
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
                        className="w-full object-cover pr-[3.75rem] md:pr-0"
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
                        className="w-full max-w-lg justify-self-end object-cover pl-[3.75rem] md:pl-0 lg:justify-self-center"
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
