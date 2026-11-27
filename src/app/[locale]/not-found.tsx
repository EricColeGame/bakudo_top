"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { shoppingCopy } from "@/locales/shopping";
import { shoppingHref, translate, words } from "@/lib/shopping";

export default function NotFoundPage() {
  const locale = useLocale();
  const copy = shoppingCopy(locale);
  return (
    <main
      id="main-content"
      className="shop-container shop-empty shop-not-found"
    >
      <span className="shop-kicker">404 / Bakudo PICKS</span>
      <h1>
        {translate(
          words(
            "This page has moved on.",
            "Esta página ya no está aquí.",
            "Esta página não está mais aqui.",
            "Diese Seite ist weitergezogen.",
          ),
          locale,
        )}
      </h1>
      <Link className="shop-button" href={shoppingHref(locale, "/browse")}>
        {copy.browse}
      </Link>
    </main>
  );
}
