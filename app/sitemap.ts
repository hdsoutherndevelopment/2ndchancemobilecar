import type { MetadataRoute } from "next";
import { business } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: business.siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${business.siteUrl}/#services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${business.siteUrl}/#work`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${business.siteUrl}/#areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${business.siteUrl}/#reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${business.siteUrl}/#quote`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
