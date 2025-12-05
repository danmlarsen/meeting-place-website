"use client";

import Image from "next/image";
import { cn, getSanityImageUrl } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TRoomGallery } from "@/types/TRoom";

import { m } from "motion/react";

export default function RoomGallery({ images }: { images: TRoomGallery[] }) {
  return (
    <m.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.4 }}
      aria-describedby="room-gallery-title"
    >
      <h2 id="room-gallery-title" className="sr-only">
        Image gallery
      </h2>
      <Carousel
        tabIndex={0}
        className="focus:outline-none"
        opts={{
          skipSnaps: true,
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent className="mx-auto max-w-420 gap-3 px-4 sm:gap-6.5 sm:px-8 lg:gap-8 lg:px-10">
          {images.map((image, index) => {
            if (!image.asset?.url || !image.asset.metadata?.dimensions)
              return null;

            const { width, height } = image.asset.metadata.dimensions;
            const aspect = width / height;
            const isPortrait = aspect < 1;

            return (
              <CarouselItem
                key={`gallery_img_${index}`}
                className={cn(
                  "aspect-4/3 max-h-147 basis-full items-center overflow-hidden last-of-type:mr-3 sm:basis-157.5 sm:last-of-type:mr-6.5 lg:basis-196 lg:last-of-type:mr-8",
                  isPortrait && "basis-5/8 sm:basis-90 lg:basis-120",
                )}
              >
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative h-full"
                >
                  <Image
                    src={
                      getSanityImageUrl(image)?.width(784).height(588).url() ||
                      "https://placehold.co/784x588/png"
                    }
                    alt={image.alt || "Image missing description"}
                    fill
                    quality={80}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={image.asset.metadata.lqip || ""}
                  />
                </m.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </m.section>
  );
}
