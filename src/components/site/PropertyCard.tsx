import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { Property } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  const sold = property.status === "vendu";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-soft transition-shadow duration-500 hover:shadow-lift">
      <Link
        to="/proprietes/$slug"
        params={{ slug: property.slug }}
        className="relative block aspect-4/3 overflow-hidden"
        aria-label={`Voir la propriété : ${property.address}`}
      >
        <img
          src={property.image}
          alt={`${property.type} à ${property.city} — ${property.district}`}
          width={1200}
          height={900}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <span
          className={cn(
            "kicker absolute top-4 left-4 rounded-sm px-2.5 py-1.5",
            sold ? "bg-charcoal text-charcoal-foreground" : "bg-primary text-primary-foreground",
          )}
        >
          {sold ? "Vendu" : "À vendre"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="kicker text-muted-foreground">
          {property.district} · {property.city}
        </p>
        <p className="mt-3 font-display text-3xl leading-none">{property.priceLabel}</p>
        <div className="hairline my-5" />
        <p className="text-sm font-medium">{property.type}</p>
        <p className="mt-1 text-sm text-muted-foreground">{property.address}</p>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
          {property.bedrooms ? <li>{property.bedrooms} chambres</li> : null}
          {property.bathrooms ? <li>{property.bathrooms} salles de bain</li> : null}
          {property.area ? <li>{property.area}</li> : null}
          {property.units ? <li>{property.units}</li> : null}
        </ul>

        <div className="mt-6 flex items-end justify-between gap-4 pt-2">
          {property.centris !== "—" ? (
            <p className="text-[0.6875rem] tracking-wide text-muted-foreground">
              Référence Centris : {property.centris}
            </p>
          ) : (
            <span />
          )}
          <Link
            to="/proprietes/$slug"
            params={{ slug: property.slug }}
            className="link-underline flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            Voir la propriété
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
