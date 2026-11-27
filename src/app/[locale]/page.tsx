import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/site";
import { shoppingCopy } from "@/locales/shopping";
import { routing } from "@/i18n/routing";
import HomePageClient from "./HomePageClient";

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = shoppingCopy(locale);
  return {
    title: `${siteConfig.name}: ${copy.hero}`,
    description: copy.intro,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((language) => [language, `/${language}`]),
      ),
    },
    openGraph: {
      title: siteConfig.name,
      description: copy.intro,
      url: `${siteConfig.url}/${locale}`,
    },
  };
}

export default async function LocaleHomePage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main id="main-content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: shoppingCopy(locale).intro,
        }}
      />
      <HomePageClient locale={locale} />
    </main>
  );
}
