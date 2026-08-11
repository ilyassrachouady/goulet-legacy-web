import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SellSection } from "@/components/home/SellSection";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/vendre")({
  head: () => ({
    meta: [
      { title: "Vendre sa propriété | Goulet Immobilier" },
      { name: "description", content: "Stratégie de mise en marché, évaluation et négociation : notre accompagnement pour vendre au juste prix." },
      { property: "og:title", content: "Vendre sa propriété | Goulet Immobilier" },
      { property: "og:description", content: "Stratégie de mise en marché, évaluation et négociation : notre accompagnement pour vendre au juste prix." },
      { property: "og:url", content: "/vendre" },
    ],
    links: [{ rel: "canonical", href: "/vendre" }],
  }),
  component: SellPage,
});

function SellPage() {
  return (
    <>
      <PageHeader kicker="Vendre" title="Vendre au juste prix, sans mauvaise surprise." intro="Nous préparons votre propriété, la positionnons correctement et défendons vos intérêts jusqu'à la signature." />
      <ProcessSection />
      <SellSection />
      <FinalCta />
    </>
  );
}
