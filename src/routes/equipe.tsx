import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { AgencyBadge } from "@/components/site/AgencyBadge";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { agency, brokers } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Notre équipe de courtiers | Goulet Immobilier" },
      {
        name: "description",
        content:
          "Simon et Sylvain Goulet : deux générations de courtiers immobiliers au service de vos projets.",
      },
      { property: "og:title", content: "Notre équipe de courtiers | Goulet Immobilier" },
      {
        property: "og:description",
        content:
          "Simon et Sylvain Goulet : deux générations de courtiers immobiliers au service de vos projets.",
      },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        kicker="Notre équipe"
        title="Deux générations de courtiers."
        intro={`Simon et Sylvain Goulet, courtiers affiliés à ${agency.brokerage} — ${agency.brokerageTagline}.`}
      />
      <section className="border-b border-border/70 py-10">
        <div className="container-editorial flex justify-center">
          <AgencyBadge variant="dark" />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-editorial space-y-20">
          {brokers.map((b) => (
            <Reveal key={b.slug} className="scroll-mt-28 grid gap-10 lg:grid-cols-12" as="section">
              <span id={b.slug} className="sr-only" aria-hidden="true" />
              <div className="lg:col-span-5">
                <img
                  src={b.image}
                  alt={`${b.name}, ${b.title}`}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="aspect-4/5 w-full rounded-lg bg-secondary object-cover object-top"
                />
              </div>
              <div className="lg:col-span-7">
                <h2 className="display-lg">{b.name}</h2>
                <p className="mt-4 text-sm text-muted-foreground">{b.title}</p>
                <p className="mt-2 text-xs font-medium tracking-[0.16em] text-primary uppercase">
                  {b.brokerage} · {agency.brokerageTagline}
                </p>
                <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
                  {b.bio.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="ink" size="lg">
                    <a href={b.phoneHref}>{b.phone}</a>
                  </Button>
                  <Button asChild variant="quiet" size="lg">
                    <a href={`mailto:${b.email}`}>{b.email}</a>
                  </Button>
                </div>
                <p className="mt-5 text-xs tracking-wide text-muted-foreground">{b.base}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
