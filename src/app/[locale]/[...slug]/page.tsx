import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Store } from "lucide-react";
import {
  categories,
  getCategory,
  guides,
  guideImage,
  shoppingPaths,
  shoppingHref,
  translate,
} from "@/lib/shopping";
import { shoppingCopy } from "@/locales/shopping";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { Breadcrumbs, JsonLd } from "@/components/site";
import { ShoppingDirectory } from "@/components/shopping-directory";
import { ShoppingImage } from "@/components/shopping-image";
import { GuideCard } from "@/components/shopping-cards";
import { buyingNotes } from "@/lib/buying-notes";

export const dynamicParams = false;

export function generateStaticParams() {
  return shoppingPaths.map((path) => ({ slug: path.slice(1).split("/") }));
}

function resolvePage(slug: string[], locale: string) {
  const path = `/${slug.join("/")}`;
  const copy = shoppingCopy(locale);
  if (path === "/browse")
    return { title: copy.directoryTitle, description: copy.directoryIntro };
  const category = categories.find((item) => path === `/category/${item.slug}`);
  if (category)
    return {
      title: translate(category.name, locale),
      description: translate(category.description, locale),
    };
  const guide = guides.find((item) => path === `/guides/${item.slug}`);
  if (guide)
    return {
      title: translate(guide.topic, locale),
      description: translate(guide.description, locale),
    };
  return null;
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = resolvePage(slug, locale);
  if (!page) return {};
  const path = `/${slug.join("/")}`;
  return {
    title: `${page.title}: ${siteConfig.name}`,
    description: page.description,
    alternates: {
      canonical: shoppingHref(locale, path),
      languages: Object.fromEntries(
        routing.locales.map((language) => [
          language,
          shoppingHref(language, path),
        ]),
      ),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteConfig.url}${shoppingHref(locale, path)}`,
    },
  };
}

export default async function ShoppingPage({
  params,
}: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale, slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = resolvePage(slug, locale);
  if (!page) notFound();
  const copy = shoppingCopy(locale);
  const category = categories.find((item) => path === `/category/${item.slug}`);
  const guide = guides.find((item) => path === `/guides/${item.slug}`);
  if (!guide)
    return (
      <main id="main-content" className="shop-container shop-directory-page">
        <Breadcrumbs
          items={[
            { label: copy.home, href: shoppingHref(locale) },
            { label: page.title },
          ]}
        />
        <div className="shop-page-heading">
          <span className="shop-kicker">{copy.guides}</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
        <ShoppingDirectory
          key={category?.slug || "all"}
          locale={locale}
          initialCategory={category?.slug}
        />
      </main>
    );
  const guideCategory = getCategory(guide.category);
  const related = [
    ...guides.filter(
      (item) => item.category === guide.category && item.slug !== guide.slug,
    ),
    ...guides.filter((item) => item.category !== guide.category),
  ].slice(0, 3);
  return (
    <main id="main-content" className="shop-container shop-detail-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { name: copy.home, item: `${siteConfig.url}/${locale}` },
            {
              name: translate(guideCategory.name, locale),
              item: `${siteConfig.url}/${locale}/category/${guide.category}`,
            },
            { name: page.title, item: `${siteConfig.url}/${locale}${path}` },
          ].map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            ...item,
          })),
        }}
      />
      <Breadcrumbs
        items={[
          { label: copy.home, href: shoppingHref(locale) },
          {
            label: translate(guideCategory.name, locale),
            href: shoppingHref(locale, `/category/${guide.category}`),
          },
          { label: page.title },
        ]}
      />
      <div className="shop-page-heading">
        <span className="shop-kicker">
          {translate(guideCategory.name, locale)} / {copy.guides}
        </span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </div>
      <div className="shop-detail-grid">
        <article>
          <figure className="shop-detail-photo">
            <ShoppingImage
              src={guideImage(guide, 1200)}
              alt={translate(guide.imageAlt, locale)}
              eager
            />
            <figcaption>{copy.photoNote}</figcaption>
          </figure>
          <section className="shop-detail-section">
            <span className="shop-kicker">{copy.checklist}</span>
            <h2>{copy.focus}</h2>
            <p>{translate(guide.focus, locale)}</p>
            <ul className="shop-checklist">
              {guideCategory.tips.map((tip) => (
                <li key={tip.en}>
                  <Check size={19} />
                  <span>{translate(tip, locale)}</span>
                </li>
              ))}
            </ul>
          </section>
          {(buyingNotes[guide.slug] || []).map((note) => (
            <section className="shop-detail-section" key={note.title}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </section>
          ))}
          <section className="shop-detail-section">
            <h2>Before you place an order</h2>
            <p>
              Use the official store links to check the exact model,
              specifications and purchase terms for your region. This guide is
              general buying information, not a hands-on test or a verified
              product ranking. Retailer pages are the source for current prices
              and availability.
            </p>
            <p>
              Editorially reviewed November 27, 2026.{" "}
              <Link href="/en/about">Read our editorial approach</Link> or{" "}
              <Link href="/en/contact">send a correction</Link>.
            </p>
          </section>
          <p className="shop-disclosure">
            {copy.disclaimer}{" "}
            <Link href="/en/affiliate-disclosure">
              Read our affiliate disclosure.
            </Link>
          </p>
        </article>
        <aside className="shop-store-panel">
          <span className="shop-store-icon">
            <Store size={25} />
          </span>
          <h2>{copy.destinations}</h2>
          <p>{copy.destinationIntro}</p>
          {guide.merchants.map((merchant) => (
            <a
              className="shop-store-link"
              key={merchant.url}
              href={merchant.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <strong>{merchant.name}</strong>
                <small>{copy.visit}</small>
              </span>
              <ArrowUpRight size={21} />
            </a>
          ))}
          <p className="shop-store-note">{copy.storeNote}</p>
        </aside>
      </div>
      <section className="shop-section shop-related">
        <div className="shop-heading shop-heading-row">
          <h2>{copy.related}</h2>
          <Link
            className="shop-text-link"
            href={shoppingHref(locale, "/browse")}
          >
            {copy.browse}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="shop-guide-grid">
          {related.map((item) => (
            <GuideCard key={item.slug} guide={item} locale={locale} />
          ))}
        </div>
      </section>
    </main>
  );
}
