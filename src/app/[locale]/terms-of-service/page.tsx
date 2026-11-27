import {
  informationMetadata,
  ShoppingInformation,
} from "@/components/shopping-information";

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }) {
  return informationMetadata((await params).locale, "terms");
}

export default async function TermsPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  return <ShoppingInformation locale={(await params).locale} page="terms" />;
}
