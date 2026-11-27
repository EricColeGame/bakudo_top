import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  ListChecks,
  Store,
  Heart,
  Sparkles,
} from "lucide-react";
import {
  categories,
  getCategory,
  guides,
  guideImage,
  shoppingHref,
  translate,
} from "@/lib/shopping";
import { shoppingCopy } from "@/locales/shopping";
import { CategoryCards, GuideCard } from "@/components/shopping-cards";
import { ShoppingImage } from "@/components/shopping-image";
import {
  AdBanner,
  DismissibleStickyBanner,
  NativeBannerAd,
} from "@/components/ads";

export default function HomePageClient({ locale }: { locale: string }) {
  const copy = shoppingCopy(locale);
  const featured = [
    guides[0],
    guides[4],
    guides[6],
    guides[2],
    guides[8],
    guides[1],
  ];
  const more = guides.filter((guide) => !featured.includes(guide));
  return (
    <>
      <DismissibleStickyBanner />
      <section className="shop-hero">
        <div className="shop-hero-orbit" />
        <div className="shop-container shop-hero-inner">
          <span className="shop-eyebrow">
            <Sparkles size={13} />
            {copy.eyebrow}
          </span>
          <h1>
            {copy.hero}
            <br />
            <span>{copy.heroAccent}</span>
          </h1>
          <p>{copy.intro}</p>
          <div className="shop-hero-points">
            {[copy.clear, copy.official, copy.noSignup].map((point) => (
              <span key={point}>
                <Check size={15} />
                {point}
              </span>
            ))}
          </div>
          <div className="shop-hero-actions">
            <Link
              className="shop-button"
              href={shoppingHref(locale, "/browse")}
            >
              {copy.browse}
              <ArrowRight size={17} />
            </Link>
            <a className="shop-button shop-button-outline" href="#featured">
              {copy.featured}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="shop-hero-index">
            <div>
              <strong>{String(categories.length).padStart(2, "0")}</strong>
              <span>{copy.categories}</span>
            </div>
            <div>
              <strong>{String(guides.length).padStart(2, "0")}</strong>
              <span>{copy.guides}</span>
            </div>
            <div>
              <Store size={25} />
              <span>{copy.official}</span>
            </div>
            <div>
              <Heart size={25} />
              <span>{copy.noSignup}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="shop-container py-8">
        <NativeBannerAd className="my-0" />
      </div>
      <section id="categories" className="shop-container shop-section">
        <div className="shop-heading shop-center">
          <span className="shop-kicker">{copy.categoryKicker}</span>
          <h2>{copy.categoryTitle}</h2>
          <p>{copy.categoryIntro}</p>
        </div>
        <CategoryCards locale={locale} />
      </section>
      <div className="shop-container py-8">
        <AdBanner size="728x90" />
      </div>
      <section id="featured" className="shop-container shop-section">
        <div className="shop-heading shop-heading-row">
          <div>
            <span className="shop-kicker">{copy.edit}</span>
            <h2>{copy.featuredTitle}</h2>
            <p>{copy.featuredIntro}</p>
          </div>
          <Link
            className="shop-text-link"
            href={shoppingHref(locale, "/browse")}
          >
            {copy.browse}
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="shop-guide-grid">
          {featured.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} locale={locale} />
          ))}
        </div>
      </section>
      <div className="shop-container py-8">
        <AdBanner size="300x250" />
      </div>
      <section className="shop-more-section">
        <div className="shop-container shop-section">
          <div className="shop-heading">
            <span className="shop-kicker">{copy.explore}</span>
            <h2>{copy.more}</h2>
            <p>{copy.moreIntro}</p>
          </div>
          <div className="shop-more-grid">
            {more.map((guide) => (
              <Link
                className="shop-more-card"
                key={guide.slug}
                href={shoppingHref(locale, `/guides/${guide.slug}`)}
              >
                <div className="shop-more-image">
                  <ShoppingImage
                    src={guideImage(guide, 200)}
                    alt={translate(guide.imageAlt, locale)}
                  />
                </div>
                <div>
                  <span>
                    {translate(getCategory(guide.category).name, locale)}
                  </span>
                  <h3>{translate(guide.topic, locale)}</h3>
                </div>
                <ArrowUpRight size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        id="approach"
        className="shop-container shop-section shop-approach"
      >
        <div className="shop-heading shop-center">
          <span className="shop-kicker">Bakudo PICKS</span>
          <h2>{copy.approachTitle}</h2>
          <p>{copy.approachIntro}</p>
        </div>
        <div className="shop-value-grid">
          {[
            { Icon: ListChecks, title: copy.value1, body: copy.value1body },
            { Icon: Store, title: copy.value2, body: copy.value2body },
            { Icon: Compass, title: copy.value3, body: copy.value3body },
          ].map(({ Icon, title, body }, index) => (
            <div key={title}>
              <span className={`shop-value-icon shop-tone-${index}`}>
                <Icon size={24} strokeWidth={1.7} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <Link className="shop-text-link" href={shoppingHref(locale, "/about")}>
          {copy.about}
          <ArrowRight size={15} />
        </Link>
      </section>
      <div className="shop-container py-8">
        <AdBanner size="728x90" />
      </div>
    </>
  );
}
