import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { brokers, simon } from "@/lib/site-data";

/** Grande section finale de conversion, présente sur toutes les pages. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-charcoal-foreground md:py-32">
      <div className="container-editorial grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="kicker text-primary">Parlons-en</p>
            <h2 className="display-lg mt-6 max-w-xl text-charcoal-foreground">
              Parlons de votre prochain projet immobilier.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              Que vous envisagiez de vendre, d'acheter ou que vous souhaitiez simplement mieux
              comprendre vos options, notre équipe est disponible pour vous conseiller sans
              pression.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">Planifier une consultation</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <a href={simon.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Appeler au {simon.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <RevealImage className="grid grid-cols-2 gap-4">
            {brokers.map((b) => (
              <figure key={b.slug} className="rounded-lg bg-cream/8 p-4">
                <img
                  src={b.image}
                  alt={`${b.name}, ${b.title}`}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="aspect-4/5 w-full rounded-sm object-cover object-top"
                />
                <figcaption className="mt-4">
                  <p className="font-display text-lg">{b.name}</p>
                  <a href={b.phoneHref} className="mt-1 block text-xs text-cream/65">
                    {b.phone}
                  </a>
                </figcaption>
              </figure>
            ))}
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
