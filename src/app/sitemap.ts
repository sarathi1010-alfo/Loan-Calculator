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
  const dataPath = path.join(
    process.cwd(),
    "data",
    "generated",
    "seo-pages.json",
  );
  let programmaticRoutes: MetadataRoute.Sitemap = [];

  try {
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      const entities = JSON.parse(fileContents);

      programmaticRoutes = entities.map((entity: any) => ({
        url: `${SITE_URL}/loan/${entity.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Error generating programmatic sitemap entries:", error);
  }

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
