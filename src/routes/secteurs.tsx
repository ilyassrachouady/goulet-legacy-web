import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { sectors } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/secteurs")({
  head: () => ({
    meta: [
      { title: "Secteurs desservis | Goulet Immobilier" },
      { name: "description", content: "Rive-Sud de Montréal, grande région métropolitaine et Estrie : nos secteurs d'expertise." },
      { property: "og:title", content: "Secteurs desservis | Goulet Immobilier" },
      { property: "og:description", content: "Rive-Sud de Montréal, grande région métropolitaine et Estrie : nos secteurs d'expertise." },
      { property: "og:url", content: "/secteurs" },
    ],
    links: [{ rel: "canonical", href: "/secteurs" }],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <>
      <PageHeader kicker="Secteurs" title="Là où nous connaissons le terrain." intro="Rive-Sud de Montréal, grande région métropolitaine et Estrie." />
      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05} className="bg-background p-8">
              <p className="kicker text-primary">{s.region}</p>
              <h2 className="mt-4 font-display text-2xl">{s.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
