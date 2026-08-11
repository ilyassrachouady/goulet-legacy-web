import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { TeamSection } from "@/components/home/TeamSection";
import { SellSection } from "@/components/home/SellSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BuySection } from "@/components/home/BuySection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goulet Immobilier | Courtiers immobiliers Rive-Sud et Estrie" },
      { name: "description", content: "Deux générations de courtiers immobiliers pour vendre, acheter ou investir sur la Rive-Sud de Montréal et en Estrie. Évaluation gratuite et accompagnement humain." },
      { property: "og:title", content: "Goulet Immobilier | Courtiers immobiliers Rive-Sud et Estrie" },
      { property: "og:description", content: "Vendre, acheter ou investir avec une équipe de courtiers reconnue pour son écoute et sa transparence." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TeamSection />
      <SellSection />
      <FeaturedProperties />
      <ProcessSection />
      <BuySection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
