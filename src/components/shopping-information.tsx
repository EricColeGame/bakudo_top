import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { shoppingCopy } from "@/locales/shopping";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

export type InformationPage = "about" | "privacy" | "terms" | "copyright";
const bodies = {
  about: "aboutBody",
  privacy: "privacyBody",
  terms: "termsBody",
  copyright: "copyrightBody",
} as const;
const paths = {
  about: "about",
  privacy: "privacy-policy",
  terms: "terms-of-service",
  copyright: "copyright",
};

export function informationMetadata(
  locale: string,
  page: InformationPage,
): Metadata {
  const copy = shoppingCopy(locale);
  return {
    title: `${copy[page]}: ${siteConfig.name}`,
    description: copy[bodies[page]],
    alternates: {
      canonical: `/${locale}/${paths[page]}`,
      languages: Object.fromEntries(
        routing.locales.map((language) => [
          language,
          `/${language}/${paths[page]}`,
        ]),
      ),
    },
  };
}

export function ShoppingInformation({
  locale,
  page,
}: { locale: string; page: InformationPage }) {
  const copy = shoppingCopy(locale);
  return (
    <LegalPage title={copy[page]}>
      <p>{copy[bodies[page]]}</p>
      {page === "about" && (
        <>
          <h2 className="text-2xl font-bold text-foreground">
            How we put a guide together
          </h2>
          <p>
            We organize common purchase decisions into clear checklists, using
            official brand pages for shopping destinations and model-specific
            details. We focus on fit for purpose, compatibility, maintenance and
            purchase terms. Lifestyle photos illustrate a category and do not
            show a tested product.
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            What our content means
          </h2>
          <p>
            These are editorial buying guides, not laboratory tests or customer
            reviews. We do not claim that products have been used or tested by
            us unless a page explicitly explains the method. We do not sell
            products or accept payments.
          </p>
          <p>
            {copy.disclaimer}{" "}
            <Link href="/en/affiliate-disclosure">
              Read our affiliate disclosure.
            </Link>
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Corrections and enquiries
          </h2>
          <p>
            Specifications and store terms can change. Verify the exact item at
            the retailer and <Link href="/en/contact">contact us</Link> if you
            notice an error. Bakudo Picks is the shopping publication at
            bakudo.top and is not an official game website.
          </p>
        </>
      )}
      {page === "privacy" && (
        <>
          <h2 className="text-2xl font-bold text-foreground">
            Technical data and third parties
          </h2>
          <p>
            Cloudflare provides hosting and security services. Analytics and
            advertising integrations may use cookies or similar identifiers to
            measure visits, deliver advertising and prevent abuse. Your browser
            settings can restrict cookies; doing so may affect third-party
            features.
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            When you contact us
          </h2>
          <p>
            An email enquiry includes the address and information you choose to
            send. We use it to handle your enquiry. Avoid sending sensitive
            personal data. We do not require an account or collect payment
            information on this website.
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Questions and requests
          </h2>
          <p>
            For privacy enquiries or requests concerning information you have
            sent to us, email{" "}
            <a href="mailto:support@bakudo.top">support@bakudo.top</a>. External
            stores and affiliate services operate under their own policies.
          </p>
        </>
      )}
      {page === "terms" && (
        <>
          <h2 className="text-2xl font-bold text-foreground">
            Using the guides
          </h2>
          <p>
            Use the information as a starting point for your own comparison.
            Content may change as we update our guides. No price, promotion or
            product availability is guaranteed. Follow manufacturer safety
            instructions and seek qualified advice where appropriate.
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Third-party destinations
          </h2>
          <p>
            We are not responsible for a retailer's checkout, service or
            policies. Check its identity and terms before sharing information or
            purchasing. Questions about this website can be sent through our{" "}
            <Link href="/en/contact">contact page</Link>.
          </p>
        </>
      )}
    </LegalPage>
  );
}
