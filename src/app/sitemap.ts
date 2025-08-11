import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.growthcapital.example/", lastModified: new Date() },
    { url: "https://www.growthcapital.example/about", lastModified: new Date() },
    { url: "https://www.growthcapital.example/contact", lastModified: new Date() },
    { url: "https://www.growthcapital.example/insights", lastModified: new Date() },
    { url: "https://www.growthcapital.example/performance", lastModified: new Date() },
    { url: "https://www.growthcapital.example/solutions/wealth-management", lastModified: new Date() },
    { url: "https://www.growthcapital.example/legal/privacy", lastModified: new Date() },
    { url: "https://www.growthcapital.example/legal/terms", lastModified: new Date() },
    { url: "https://www.growthcapital.example/legal/cookies", lastModified: new Date() },
    { url: "https://www.growthcapital.example/legal/disclosures", lastModified: new Date() },
  ];
}


