import { swpConfig } from "@/utils/data/swp-config";

export default function sitemap() {
  if (!swpConfig.siteUrl) return [];

  return ["/", "/privacidad", "/terminos"].map((path) => ({
    url: `${swpConfig.siteUrl}${path}`,
  }));
}