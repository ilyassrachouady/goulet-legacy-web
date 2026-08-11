import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AgencyBadge } from "@/components/site/AgencyBadge";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { agency, brokers } from "@/lib/site-data";

export function TeamSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker text-primary">Notre équipe</p>
            <h2 className="display-lg mt-6">Deux générations. Une même vision du service.</h2>
            <AgencyBadge variant="dark" className="mt-6" />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              Chez Goulet Immobilier, l'expérience et le regard d'une nouvelle génération se
              rencontrent autour d'une même priorité : comprendre votre réalité, protéger vos
              intérêts et vous accompagner avec attention à chaque étape.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="ink" size="lg">
                <Link to="/equipe">Rencontrer l'équipe</Link>
              </Button>
              {brokers.map((b) => (
                <Button key={b.slug} asChild variant="quiet" size="lg">
                  <a href={b.phoneHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    Appeler {b.firstName}
                  </a>
                </Button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-5 md:gap-7">
            {brokers.map((b, i) => (
              <RevealImage key={b.slug} className={i === 1 ? "md:mt-14" : undefined}>
                <figure className="group">
                  <div className="overflow-hidden rounded-lg bg-secondary">
                    <img
                      src={b.image}
                      alt={`${b.name}, ${b.title}`}
                      width={900}
                      height={1125}
                      loading="lazy"
                      className="aspect-4/5 w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="font-display text-2xl leading-none">{b.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.title}</p>
                    <p className="mt-1.5 text-[0.625rem] font-medium tracking-[0.16em] text-primary uppercase">
                      {b.brokerage} · {agency.brokerageTagline}
                    </p>
                    <a
                      href={b.phoneHref}
                      className="link-underline mt-3 inline-block text-sm font-medium text-primary"
                    >
                      {b.phone}
                    </a>
                    <Link
                      to="/equipe"
                      hash={b.slug}
                      className="link-underline mt-3 ml-5 inline-block text-sm font-medium"
                    >
                      Voir le profil
                    </Link>
                    <p className="mt-2 text-[0.6875rem] tracking-wide text-muted-foreground">
                      {b.base}
                    </p>
                  </figcaption>
                </figure>
              </RevealImage>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
