"import server-only";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { projectId, dataset } = client.config();
export function getSanityImageUrl(source: SanityImageSource) {
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatLowestPrice(prices: number[]) {
  const price =
    prices.length > 0
      ? prices.reduce((min, cur) => (cur < min ? cur : min), prices[0])
      : 0;
  return `From ${formatPrice(price)}`;
}

export function formatCapacity(amount: number) {
  return amount <= 1 ? `1 person` : `Up to ${amount} people`;
}

export function formatArea(area: number) {
  return `${area.toLocaleString("en-US")} m²`;
}
