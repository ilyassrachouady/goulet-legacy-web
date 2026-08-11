import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { properties, simon } from "@/lib/site-data";

export const Route = createFileRoute("/proprietes/$slug")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.slug === params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Propriété non disponible | Goulet Immobilier" }, { name: "robots", content: "noindex" }],
      };
    }
    const { property } = loaderData;
    const title = `${property.type} à ${property.city} — ${property.priceLabel} | Goulet Immobilier`;
    const description = `${property.type} ${property.status === "vendu" ? "vendu" : "à vendre"} au ${property.address}. Référence Centris ${property.centris}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/proprietes/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/proprietes/${params.slug}` }],
    };
  },
  component: PropertyPage,
});

function PropertyPage() {
  const { property } = Route.useLoaderData();
  const sold = property.status === "vendu";

  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial">
          <Button asChild variant="quiet" size="lg">
            <Link to="/proprietes">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Toutes les propriétés
            </Link>
          </Button>

          <Reveal className="mt-8">
            <p className="kicker text-primary">
              {sold ? "Vendu" : "À vendre"} · {property.district}, {property.city}
            </p>
            <h1 className="display-xl mt-6 max-w-3xl">{property.address}</h1>
            <p className="mt-6 font-display text-4xl">{property.priceLabel}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <img
              src={property.image}
              alt={`${property.type} à ${property.city}, secteur ${property.district}`}
              width={1600}
              height={1200}
              className="aspect-16/9 w-full rounded-lg object-cover"
            />
          </Reveal>

          <div className="mt-14 grid gap-12 pb-20 lg:grid-cols-12 md:pb-28">
            <Reveal className="lg:col-span-7">
              <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {[
                  { t: "Type", d: property.type },
                  { t: "Catégorie", d: property.category === "commercial" ? "Commercial" : "Résidentiel" },
                  { t: "Secteur", d: `${property.district}, ${property.city}` },
                  { t: "Référence Centris", d: property.centris },
                  ...(property.units ? [{ t: "Nombre d'unités", d: property.units }] : []),
                ].map((row) => (
                  <div key={row.t} className="bg-background p-6">
                    <dt className="kicker text-muted-foreground">{row.t}</dt>
                    <dd className="mt-2 font-display text-xl">{row.d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Les détails complets, les dimensions des pièces et les documents de l'inscription
                sont disponibles sur demande ou sur la fiche officielle.
              </p>
              <Button asChild variant="quiet" size="lg" className="mt-6">
                <a href={property.source} target="_blank" rel="noopener noreferrer">
                  Voir la fiche officielle
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-lg border border-border bg-surface p-8 shadow-soft">
                <p className="kicker text-primary">Visiter cette propriété</p>
                <p className="mt-5 font-display text-2xl leading-snug">
                  Planifions une visite à un moment qui vous convient.
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <Button asChild variant="accent" size="lg">
                    <a href={simon.phoneHref}>Appeler {simon.firstName} · {simon.phone}</a>
                  </Button>
                  <Button asChild variant="ink" size="lg">
                    <Link to="/contact">Écrire à l'équipe</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
