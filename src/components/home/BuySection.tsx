import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { images } from "@/lib/site-data";

export function BuySection() {
  return (
    <section className="py-16 sm:py-20 md:py-32">
      <div className="container-editorial grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
        <RevealImage className="lg:col-span-6">
          <img
            src={images.acheter}
            alt="Salon lumineux d'une propriété rénovée avec grandes fenêtres"
            width={1400}
            height={1050}
            loading="lazy"
            className="aspect-4/3 w-full rounded-lg object-cover"
          />
        </RevealImage>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="kicker text-primary">Vous cherchez à acheter ?</p>
            <h2 className="display-lg mt-6">Trouvez la propriété qui vous ressemble.</h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              Nous prenons le temps de comprendre votre mode de vie, votre budget et vos priorités
              avant de vous proposer quoi que ce soit. Vous visitez moins de propriétés, mais les
              bonnes.
            </p>
            <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              {[
                {
                  t: "Recherche ciblée",
                  d: "Accès aux inscriptions du marché et veille active selon vos critères.",
                },
                {
                  t: "Analyse de valeur",
                  d: "Un regard honnête sur le juste prix avant de déposer une offre.",
                },
                {
                  t: "Négociation",
                  d: "Une stratégie d'offre construite pour protéger vos intérêts.",
                },
                {
                  t: "Suivi complet",
                  d: "Inspection, financement, notaire : vous n'êtes jamais seul.",
                },
              ].map((item) => (
                <div key={item.t}>
                  <dt className="font-display text-xl">{item.t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="ink" size="lg" className="w-full sm:w-auto">
                <Link to="/acheter">Comment nous vous accompagnons</Link>
              </Button>
              <Button asChild variant="quiet" size="lg" className="w-full sm:w-auto">
                <Link to="/recherche">Définir mes critères</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
