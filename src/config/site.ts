export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "BAKUDO Wiki",
  shortName: "BAKUDO",
  logoText: "B",
  tagline: "Boss Rush Combat Guides, Characters & Release Updates",
  description: "Explore BAKUDO with character profiles, boss guides, combat mechanics, story details, trailers, platform news, and release updates for PC and Nintendo Switch 2.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bakudo.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bakudo.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2275860/BAKUDO/",
  heroVideoId: "fFpngdvQtTs", // BAKUDO official announcement trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=fFpngdvQtTs",
    twitter: "https://x.com/shueisha_games",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
