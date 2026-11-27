import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { shoppingPaths } from "@/lib/shopping";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...shoppingPaths,
    "/about",
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/contact",
    "/affiliate-disclosure",
  ];
  const entries = routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/browse" ? 0.8 : 0.6,
    })),
  );
  return entries;
}
