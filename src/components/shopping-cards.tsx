import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  House,
  Dumbbell,
  Headphones,
  Moon,
  Sparkles,
} from "lucide-react";
import {
  categories,
  guideImage,
  guides,
  shoppingHref,
  translate,
  type ShoppingGuide,
} from "@/lib/shopping";
import { shoppingCopy } from "@/locales/shopping";
import { ShoppingImage } from "@/components/shopping-image";

const categoryIcons = {
  home: House,
  fitness: Dumbbell,
  tech: Headphones,
  sleep: Moon,
  care: Sparkles,
};

export function CategoryCards({ locale }: { locale: string }) {
  const copy = shoppingCopy(locale);
  return (
    <div className="shop-categories">
      {categories.map((category, index) => {
        const Icon = categoryIcons[category.icon as keyof typeof categoryIcons];
        return (
          <Link
            className={`shop-category shop-tone-${index}`}
            key={category.slug}
            href={shoppingHref(locale, `/category/${category.slug}`)}
          >
            <span className="shop-category-icon">
              <Icon size={25} strokeWidth={1.6} />
            </span>
            <h3>{translate(category.name, locale)}</h3>
            <p>{translate(category.description, locale)}</p>
            <span className="shop-category-count">
              {
                guides.filter((guide) => guide.category === category.slug)
                  .length
              }{" "}
              {copy.topics}
              <ArrowUpRight size={13} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function GuideCard({
  guide,
  locale,
}: { guide: ShoppingGuide; locale: string }) {
  const copy = shoppingCopy(locale);
  const categoryIndex = categories.findIndex(
    (category) => category.slug === guide.category,
  );
  const category = categories[categoryIndex];
  const href = shoppingHref(locale, `/guides/${guide.slug}`);
  return (
    <article className="shop-guide-card">
      <Link
        href={href}
        className="shop-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ShoppingImage
          src={guideImage(guide)}
          alt={translate(guide.imageAlt, locale)}
        />
        <span className={`shop-card-label shop-tone-${categoryIndex}`}>
          {translate(category.name, locale)}
        </span>
      </Link>
      <div className="shop-card-content">
        <span className="shop-card-topic">
          {translate(guide.topic, locale)}
        </span>
        <h3>
          <Link href={href}>{translate(guide.title, locale)}</Link>
        </h3>
        <p>{translate(guide.description, locale)}</p>
        <div className="shop-card-links">
          <Link href={href}>
            {copy.read}
            <ArrowRight size={15} />
          </Link>
          <a
            href={guide.merchants[0].url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.visit}: ${guide.merchants[0].name}`}
          >
            {guide.merchants[0].name}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
