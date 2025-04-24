import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qorbaxk.github.io/findsy/",
      lastModified: new Date(),
      changeFrequency:"yearly",
      priority:0.8
    },
    {
      url: "https://qorbaxk.github.io/findsy/projects",
      lastModified: new Date(),
      changeFrequency:"weekly",
      priority:1
    },
    {
      url: "https://qorbaxk.github.io/findsy/contact",
      lastModified: new Date(),
      changeFrequency:"yearly",
      priority:0.5
    },
  ];
}