import { swpConfig } from "@/utils/data/swp-config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(swpConfig.siteUrl ? { sitemap: `${swpConfig.siteUrl}/sitemap.xml` } : {}),
  };
}