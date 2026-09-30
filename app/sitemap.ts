import { MetadataRoute } from "next";

// TODO: Update BASE to the production domain when ready.
const BASE = "https://golestan-khorasan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/news`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/contact`,  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/privacy`,  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
