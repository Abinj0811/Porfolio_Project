import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { getAllNotes } from "@/lib/notes";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const notes = getAllNotes().filter((n) => !n.draft);

  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...(notes.length > 0
      ? [{ url: `${siteUrl}/notes`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 }]
      : []),
    ...notes.map((n) => ({
      url: `${siteUrl}/notes/${n.slug}`,
      lastModified: new Date(n.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
