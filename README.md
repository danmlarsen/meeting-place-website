# Meeting Place

A booking website built with Next.js and Sanity CMS as the primary data source, focused on providing users with a simple and efficient way to reserve rooms at Meeting Place.

## 📏 Features

- A homepage displaying featured rooms with key information such as area and capacity
- Property pages (templates) for each room with detailed descriptions, image galleries, facility lists, pricing, and customization options, as well as an accordion component with expanded information about various occasions and a "room card" slider linking to other rooms
- Property pages also feature two different theme colors configured in Sanity CMS
- An "About Us" page
- A booking modal that opens via a clear CTA (call to action)
- Room modal that can be opened in mobile and tablet view
- Sticky room navigation visible in desktop view
- Dynamic content delivered from Sanity CMS
- Responsive design for mobile, tablet, and desktop
- Automatic generation of schema data for each room, as well as schema data for the business. All data sourced from Sanity CMS.
- Focus on achieving the highest possible Lighthouse score on both mobile and desktop

## 🚀 Technologies Used

- Typescript
- React
- Next.js
- Sanity CMS (next-sanity)
- Tailwind CSS
- Shadcn-UI

## 🚧 Deployment

### How to deploy the project with Vercel:

- Go to [https://vercel.com](https://vercel.com) and log in with GitHub.
- Click "Add New..." and select "Project".
- Select the new GitHub repository.
- Under Environment Variables, fill in these variables:

  ```env
  SITE_URL=https://www.meeting-place.example/
  NEXT_PUBLIC_SANITY_PROJECT_ID=<sanity project id>
  NEXT_PUBLIC_SANITY_DATASET=production
  SANITY_API_READ_TOKEN=<api read token>
  SANITY_API_VERSION=2024-11-01
  ```

- Select `Next.js` as the framework if not automatically detected.
- Build command: `pnpm run build` (usually auto-detected)
- Output directory: `.next` (usually automatically filled)
- Click "Deploy" – your project will now be deployed. When the process is complete, you'll receive a public URL for your website.
