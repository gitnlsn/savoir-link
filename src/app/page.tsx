import { PublicLayout } from "~/components/layout/public-layout";
import { Categories } from "~/components/sections/landing/categories";
import { Features } from "~/components/sections/landing/features";
import { FinalCta } from "~/components/sections/landing/final-cta";
import { Hero } from "~/components/sections/landing/hero";
import { HowItWorks } from "~/components/sections/landing/how-it-works";
import { Pricing } from "~/components/sections/landing/pricing";

// Cache the page (incl. the top-categories query) and refresh demand every 10 min.
export const revalidate = 600;

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <Pricing />
      <FinalCta />
    </PublicLayout>
  );
}
