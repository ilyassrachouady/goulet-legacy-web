import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/Section";
import { properties } from "@/lib/site-data";

const filters = [
  { label: "Toutes", value: "toutes" },
  { label: "À vendre", value: "a-vendre" },
  { label: "Vendu", value: "vendu" },
] as const;

export function FeaturedProperties() {
  const [filter, setFilter] = useState<"toutes" | "a-vendre" | "vendu">("a-vendre");

  const visible = useMemo(
    () => (filter === "toutes" ? properties : properties.filter((p) => p.status === filter)),
    [filter],
  );

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Inscriptions"
            title="Nos propriétés"
            intro="Découvrez les inscriptions actuellement représentées par Goulet Immobilier à Montréal et sur la Rive-Sud."
          />
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`rounded-full border px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
                  filter === f.value
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {visible.map((property, i) => (
            <Reveal key={property.slug} delay={i * 0.08}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-3">
          <Button asChild variant="ink" size="lg">
            <Link to="/proprietes">Voir toutes les propriétés</Link>
          </Button>
          <Button asChild variant="quiet" size="lg">
            <Link to="/recherche">Me faire proposer des propriétés</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
