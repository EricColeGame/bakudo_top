import Link from "next/link";
import { ChevronRight, Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ClientThemeToggle } from "@/components/theme-toggle";
import { categories, shoppingHref, translate } from "@/lib/shopping";
import { shoppingCopy } from "@/locales/shopping";

export function Brand() {
  return (
    <span className="shop-brand">
      <span className="shop-brand-icon">
        <ShoppingBag size={21} strokeWidth={1.8} />
      </span>
      <span>
        Bakudo<span className="shop-brand-light">Picks</span>
        <span className="shop-brand-dot">.</span>
      </span>
    </span>
  );
}

export function SiteHeader({ locale }: { locale: string }) {
  const copy = shoppingCopy(locale);
  const links = [
    { href: "", label: copy.home },
    { href: "#categories", label: copy.categories },
    { href: "/browse", label: copy.guides },

    { href: "/about", label: copy.about },
  ];
  return (
    <header className="shop-header">
      <a className="shop-skip" href="#main-content">
        {copy.skip}
      </a>
      <div className="shop-container shop-header-inner">
        <Link href={shoppingHref(locale)} aria-label="Bakudo Picks">
          <Brand />
        </Link>
        <nav className="shop-desktop-nav" aria-label={copy.menu}>
          {links.map((link) => (
            <Link key={link.label} href={shoppingHref(locale, link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="shop-header-tools">
          <LanguageSwitcher locale={locale} />
          <ClientThemeToggle label={copy.theme} />
          <Link
            className="shop-button shop-button-small shop-header-cta"
            href={shoppingHref(locale, "/browse")}
          >
            {copy.explore}
            <ChevronRight size={14} />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shop-mobile-menu"
                aria-label={copy.menu}
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent aria-describedby={undefined}>
              <SheetTitle>{copy.categories}</SheetTitle>
              <nav className="shop-mobile-links" aria-label={copy.menu}>
                {links.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link href={shoppingHref(locale, link.href)}>
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                {categories.map((category) => (
                  <SheetClose asChild key={category.slug}>
                    <Link
                      href={shoppingHref(locale, `/category/${category.slug}`)}
                    >
                      {translate(category.name, locale)}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: string }) {
  const copy = shoppingCopy(locale);
  return (
    <footer className="shop-footer">
      <div className="shop-container">
        <div className="shop-footer-grid">
          <div className="shop-footer-brand">
            <Link href={shoppingHref(locale)}>
              <Brand />
            </Link>
            <p>{copy.footerIntro}</p>
          </div>
          <div>
            <h2>{copy.categories}</h2>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={shoppingHref(locale, `/category/${category.slug}`)}
              >
                {translate(category.name, locale)}
              </Link>
            ))}
          </div>
          <div>
            <h2>{copy.explore}</h2>
            <Link href={shoppingHref(locale, "/browse")}>{copy.guides}</Link>
            <Link href={shoppingHref(locale, "/about")}>{copy.about}</Link>
            <a href="mailto:support@bakudo.top">support@bakudo.top</a>
          </div>
          <div>
            <h2>{copy.information}</h2>
            {[
              ["privacy-policy", copy.privacy],
              ["terms-of-service", copy.terms],
              ["copyright", copy.copyright],
              ["contact", "Contact"],
              ["affiliate-disclosure", "Affiliate disclosure"],
            ].map(([path, label]) => (
              <Link key={path} href={shoppingHref(locale, `/${path}`)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="shop-footer-note">{copy.disclaimer}</div>
        <div className="shop-footer-bottom">
          <span>
            © {new Date().getFullYear()} Bakudo Picks. {copy.rights}
          </span>
          <span>bakudo.top</span>
        </div>
      </div>
    </footer>
  );
}

export const localizeHref = (href: string, locale: string) =>
  shoppingHref(locale, href === "/" ? "" : href);

export function Breadcrumbs({
  items,
}: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="shop-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <ChevronRight size={13} />}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
