import {
  informationMetadata,
  ShoppingInformation,
} from "@/components/shopping-information";

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }) {
  return informationMetadata((await params).locale, "copyright");
}

export default async function CopyrightPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  return (
    <ShoppingInformation locale={(await params).locale} page="copyright" />
  );
}
