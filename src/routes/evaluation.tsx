import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { SellSection } from "@/components/home/SellSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/evaluation")({
  head: () => ({
    meta: [
      { title: "Évaluation gratuite de propriété | Goulet Immobilier" },
      { name: "description", content: "Obtenez une analyse personnalisée de la valeur de votre propriété, sans engagement." },
      { property: "og:title", content: "Évaluation gratuite de propriété | Goulet Immobilier" },
      { property: "og:description", content: "Obtenez une analyse personnalisée de la valeur de votre propriété, sans engagement." },
      { property: "og:url", content: "/evaluation" },
    ],
    links: [{ rel: "canonical", href: "/evaluation" }],
  }),
  component: EvaluationPage,
});

function EvaluationPage() {
  return (
    <>
      <PageHeader kicker="Évaluation" title="Combien vaut votre propriété aujourd'hui ?" intro="Une analyse personnalisée de votre propriété et de votre secteur, sans engagement." />
      <SellSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
