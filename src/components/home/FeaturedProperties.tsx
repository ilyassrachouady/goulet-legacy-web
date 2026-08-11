import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/Section";
import { properties } from "@/lib/site-data";

const filters = ["Toutes", "À vendre", "Vendu"] as const;

export function FeaturedProperties() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Toutes");

  const visible = useMemo(
    () => (filter === "Toutes" ? properties : properties.filter((p) => p.status === filter)),
    [filter],
  );

  return (
    <section className="border-y border-border bg-surface py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Inscriptions"
            title="Nos propriétés"
            description="Une sélection soignée de propriétés résidentielles et de projets d'investissement, à Montréal comme sur la Rive-Sud."
          />
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
                  filter === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((property, i) => (
            <Reveal key={property.slug} delay={i * 0.08}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-3">
          <Button asChild variant="ink" size="lg">
            <Link to="/proprietes">Voir toutes les inscriptions</Link>
          </Button>
          <Button asChild variant="quiet" size="lg">
            <Link to="/recherche">Me faire proposer des propriétés</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
