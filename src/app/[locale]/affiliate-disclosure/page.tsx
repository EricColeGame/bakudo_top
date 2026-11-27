import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Affiliate disclosure | Bakudo Picks",
  description:
    "How Bakudo Picks uses affiliate links and separates commercial relationships from its shopping guides.",
  alternates: { canonical: "/en/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage title="Affiliate disclosure">
      <p>Last updated November 27, 2026.</p>
      <p>
        Bakudo Picks is an independent shopping guide and discovery website. We
        may participate in affiliate programs. When a link is identified as an
        affiliate link, we may earn a commission if you make a qualifying
        purchase through it, at no additional charge from us.
      </p>
      <h2 className="text-2xl font-bold text-foreground">
        Which links are commercial?
      </h2>
      <p>
        Affiliate links are disclosed on the page where they appear and marked
        as sponsored in the link attributes. A normal link to an official store
        does not, by itself, mean we have a commercial relationship with that
        brand. Our current buying guides use direct official-store links.
      </p>
      <h2 className="text-2xl font-bold text-foreground">
        How we select topics
      </h2>
      <p>
        Our guides explain practical purchase considerations such as
        compatibility, care, ongoing costs and return terms. We do not publish
        invented hands-on results, customer ratings or sales figures. Brand
        inclusion is a browsing starting point and does not imply endorsement by
        that brand.
      </p>
      <h2 className="text-2xl font-bold text-foreground">Your purchase</h2>
      <p>
        The retailer sets prices and handles availability, delivery, payments
        and returns. An affiliate network or retailer may use tracking
        technologies after you follow a commercial link; its own privacy policy
        applies.
      </p>
      <p>
        Read <Link href="/en/about">our editorial approach</Link> or{" "}
        <Link href="/en/contact">contact us</Link> with questions about a link
        or commercial relationship.
      </p>
    </LegalPage>
  );
}
