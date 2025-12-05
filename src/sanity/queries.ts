import "server-only";

import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(`
*[_type == 'siteSettings'][0]
  `);

export const HOME_QUERY = defineQuery(`
  *[_type == 'frontPage']
    { 
      descriptionBlock,
      featuredRooms[]-> {
        name, 
        slug, 
        roomType, 
        area, 
        capacity, 
        prices, 
        mainImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        }
      },
      mainFeaturedRoom-> {
        name, 
        slug, 
        roomType, 
        area, 
        capacity, 
        prices, 
        mainImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        }
      },
      otherRooms[]-> {
        name, 
        slug, 
        roomType, 
        area, 
        capacity, 
        prices, 
        mainImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        },
        roomThemeColor
      }
    }[0]
`);

export const ROOM_QUERY = defineQuery(`{
  "currentRoom": *[
    _type == "room"
    && defined(slug.current)
    && slug.current == $slug
  ]{
    name, 
    slug, 
    roomType, 
    area, 
    capacity, 
    prices, 
    mainImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        }, 
    description, 
    roomCategories, 
    roomThemeColor, 
    facilities, 
    gallery[]{
      alt,
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      }
    },  
    extraImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        }, 
    seatingPlans, 
    occasions[]->{name, description, hasCateringLink}, 
    priceDescription
  }[0],
  "roomNavigation": *[
    _type == "roomNavigation"
  ][0]{
    roomNavItems[]-> {
      name, 
      slug, 
      roomType, 
      area, 
      capacity, 
      prices, 
      mainImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        }
    }
  },
}`);

export const ROOM_SLUG_QUERY = defineQuery(`
  *[_type == 'room' && defined(slug.current)]{slug}
`);

export const ROOM_METADATA_QUERY = defineQuery(
  `*[_type == "room" && slug.current == $slug][0]{ name, slug, description, mainImage }`,
);

export const ABOUT_QUERY = defineQuery(`
  *[_type == 'aboutPage']{heroTitle, heroText, heroImage, textBlock, images}[0]
`);

export const PRIVACY_QUERY = defineQuery(`
  *[_type == 'privacyPage']{heroTitle, heroText, heroImage, textBlock, images}[0]
`);

export const TERMS_QUERY = defineQuery(`
  *[_type == 'termsPage']{heroTitle, heroText, heroImage, textBlock, images}[0]
`);

export const NAVIGATION_QUERY = defineQuery(`
*[_type == 'roomNavigation'][0]{roomNavItems[]-> {
      name, slug, roomType, area, capacity, prices, mainImage {
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        }
    }}
`);
