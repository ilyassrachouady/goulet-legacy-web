import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { BuySection } from "@/components/home/BuySection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/acheter")({
  head: () => ({
    meta: [
      { title: "Acheter une propriété | Goulet Immobilier" },
      { name: "description", content: "Recherche ciblée, analyse de valeur et négociation pour acheter en toute confiance." },
      { property: "og:title", content: "Acheter une propriété | Goulet Immobilier" },
      { property: "og:description", content: "Recherche ciblée, analyse de valeur et négociation pour acheter en toute confiance." },
      { property: "og:url", content: "/acheter" },
    ],
    links: [{ rel: "canonical", href: "/acheter" }],
  }),
  component: BuyPage,
});

function BuyPage() {
  return (
    <>
      <PageHeader kicker="Acheter" title="Acheter avec un regard honnête sur la valeur." intro="Nous cherchons avec vous, analysons le juste prix et négocions pour protéger votre investissement." />
      <BuySection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
