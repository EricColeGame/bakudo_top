import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Contact | Bakudo Picks",
  description:
    "Contact Bakudo Picks about editorial corrections, content rights or brand partnerships.",
  alternates: { canonical: "/en/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact Bakudo Picks">
      <p>
        For editorial corrections, content rights concerns and partnership
        enquiries, email{" "}
        <a href="mailto:support@bakudo.top">support@bakudo.top</a>.
      </p>
      <h2 className="text-2xl font-bold text-foreground">
        Help us find the right page
      </h2>
      <p>
        Include the page URL and a clear description of your request. For a
        factual correction, include the official source and the information you
        believe should change. Please do not send payment details, passwords or
        other sensitive information.
      </p>
      <h2 className="text-2xl font-bold text-foreground">Orders and returns</h2>
      <p>
        Bakudo Picks publishes shopping information. We do not operate the
        stores linked from our guides, take orders or handle payments. Contact
        the retailer directly for delivery, returns, warranties and order
        support.
      </p>
      <h2 className="text-2xl font-bold text-foreground">
        Brand and affiliate enquiries
      </h2>
      <p>
        Share your official website and the relevant product category. A
        partnership enquiry does not guarantee coverage or a favorable
        recommendation. Any commercial shopping links are identified when used.
      </p>
    </LegalPage>
  );
}
