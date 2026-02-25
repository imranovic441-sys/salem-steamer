import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

const BASE = "https://salemsteamer.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/discretion`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/cities/${c.city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
