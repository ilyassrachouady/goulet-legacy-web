import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/temoignages")({
  head: () => ({
    meta: [
      { title: "Témoignages de clients | Goulet Immobilier" },
      { name: "description", content: "Ce que nos clients disent de notre écoute, de notre transparence et de notre suivi." },
      { property: "og:title", content: "Témoignages de clients | Goulet Immobilier" },
      { property: "og:description", content: "Ce que nos clients disent de notre écoute, de notre transparence et de notre suivi." },
      { property: "og:url", content: "/temoignages" },
    ],
    links: [{ rel: "canonical", href: "/temoignages" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHeader kicker="Témoignages" title="Ce que nos clients racontent." intro="Des mots de clients qui nous ont fait confiance pour vendre ou acheter." />
      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-surface p-8 shadow-soft">
                <h2 className="font-display text-2xl">{t.title}</h2>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">« {t.quote} »</blockquote>
                <figcaption className="mt-6 text-xs tracking-wide text-muted-foreground">{t.author}{t.year ? ` · ${t.year}` : ""}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
