import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const SITE_URL = "https://emicalculatorpro.alfo.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticRoutes = [
    "",
    "/home-loan-calculator",
    "/personal-loan-calculator",
    "/car-loan-calculator",
    "/privacy",
    "/terms",
    "/faq",
    "/blog",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Programmatic Loan Pages
  const { TIER2_PAGES } = await import("@/lib/tier2-data");
  const programmaticRoutes: MetadataRoute.Sitemap = TIER2_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.type}/${page.slug}`,
    lastModified: new Date(page.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Blog Posts
  const { BLOG_POSTS } = await import("@/lib/blog-data");
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...programmaticRoutes, ...blogRoutes];
}
