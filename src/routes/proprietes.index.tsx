import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { properties } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/proprietes/")({
  head: () => ({
    meta: [
      { title: "Propriétés à vendre | Goulet Immobilier" },
      { name: "description", content: "Nos inscriptions résidentielles et commerciales à Montréal, sur la Rive-Sud et en Estrie." },
      { property: "og:title", content: "Propriétés à vendre | Goulet Immobilier" },
      { property: "og:description", content: "Nos inscriptions résidentielles et commerciales à Montréal, sur la Rive-Sud et en Estrie." },
      { property: "og:url", content: "/proprietes" },
    ],
    links: [{ rel: "canonical", href: "/proprietes" }],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <>
      <PageHeader kicker="Inscriptions" title="Nos propriétés" intro="Une sélection de propriétés résidentielles et de projets d'investissement, mise à jour au fil du marché." />
      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <PropertyCard property={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
