import type { MetadataRoute } from "next";

const BASE = "https://divisio.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE,                                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/features`,                            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/features/debt-simplification`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/flexible-splits`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/real-time-balances`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/group-management`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/settle-summary`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/use-cases`,                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`,                               lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/changelog`,                           lastModified: now, changeFrequency: "weekly",  priority: 0.5 },
    { url: `${BASE}/contact`,                             lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
  ];
}
