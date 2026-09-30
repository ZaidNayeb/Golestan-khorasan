import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: Update to production domain when ready.
    sitemap: "https://golestan-khorasan.vercel.app/sitemap.xml",
  };
}
