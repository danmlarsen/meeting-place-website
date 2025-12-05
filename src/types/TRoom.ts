import { type TSeatingPlans } from "@/lib/seatingPlansMap";
import { PortableTextBlock } from "next-sanity";

export type TRoom = TRoomMain & TRoomExtras;

export type TRoomGallery = {
  asset?: {
    _id?: string;
    url?: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
      lqip: string | null;
    };
  };
  alt?: string;
};

export type TRoomMain = {
  name: string;
  slug: { current: string };
  roomType: string;
  area: number;
  capacity: number;
  prices: { priceTitle: string; timeFrame: string; price: number }[];
  mainImage: {
    asset: {
      _id?: string;
      url?: string;
      metadata?: {
        lqip: string | null;
      };
    };
    alt: string;
  };
};

export type TRoomExtras = {
  priceDescription: string;
  roomCategories: string[];
  description: PortableTextBlock[];
  roomThemeColor: "orange" | "green";
  facilities: string[];
  gallery: TRoomGallery[];
  extraImage: {
    asset: {
      _id?: string;
      url?: string;
      metadata?: {
        lqip: string | null;
      };
    };
    alt: string;
  };
  seatingPlans: TSeatingPlans[];
  occasions: {
    name: string;
    description: PortableTextBlock[];
    hasCateringLink: boolean;
  }[];
};

export type TRoomWithTheme = TRoomMain & { roomThemeColor: "orange" | "green" };
