"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { categories, guides, translate } from "@/lib/shopping";
import { shoppingCopy } from "@/locales/shopping";
import { GuideCard } from "@/components/shopping-cards";

export function ShoppingDirectory({
  locale,
  initialCategory = "all",
}: { locale: string; initialCategory?: string }) {
  const copy = shoppingCopy(locale);
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const search = query.trim().toLocaleLowerCase(locale);
  const filtered = guides.filter(
    (guide) =>
      (category === "all" || guide.category === category) &&
      [
        translate(guide.topic, locale),
        translate(guide.title, locale),
        translate(guide.description, locale),
        ...guide.merchants.map((merchant) => merchant.name),
      ]
        .join(" ")
        .toLocaleLowerCase(locale)
        .includes(search),
  );
  const reset = () => {
    setQuery("");
    setCategory("all");
  };
  return (
    <div className="shop-directory">
      <div className="shop-search">
        <Search size={20} />
        <label className="sr-only" htmlFor="guide-search">
          {copy.searchLabel}
        </label>
        <input
          id="guide-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.search}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label={copy.reset}
          >
            <X size={17} />
          </button>
        )}
      </div>
      <div className="shop-filters" aria-label={copy.categories}>
        {[{ slug: "all", name: null }, ...categories].map((item) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={category === item.slug}
            onClick={() => setCategory(item.slug)}
          >
            {item.name ? translate(item.name, locale) : copy.all}
          </button>
        ))}
      </div>
      <div className="shop-result-row">
        <output aria-live="polite">
          {filtered.length} {copy.results}
        </output>
        {(query || category !== "all") && (
          <button type="button" onClick={reset}>
            {copy.reset}
            <X size={13} />
          </button>
        )}
      </div>
      {filtered.length ? (
        <div className="shop-guide-grid">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="shop-empty">
          <Search size={30} />
          <h2>{copy.empty}</h2>
          <button className="shop-button" type="button" onClick={reset}>
            {copy.reset}
          </button>
        </div>
      )}
    </div>
  );
}
