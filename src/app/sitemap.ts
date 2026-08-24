import type { MetadataRoute } from "next";

const baseUrl = "https://pintukrgupta.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/blog", "/resources"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
