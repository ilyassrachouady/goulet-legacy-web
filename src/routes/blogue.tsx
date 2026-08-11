import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { articles } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/blogue")({
  head: () => ({
    meta: [
      { title: "Conseils immobiliers | Goulet Immobilier" },
      { name: "description", content: "Conseils pour vendre, acheter et mieux comprendre le marché immobilier québécois." },
      { property: "og:title", content: "Conseils immobiliers | Goulet Immobilier" },
      { property: "og:description", content: "Conseils pour vendre, acheter et mieux comprendre le marché immobilier québécois." },
      { property: "og:url", content: "/blogue" },
    ],
    links: [{ rel: "canonical", href: "/blogue" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader kicker="Conseils" title="Comprendre le marché avant de décider." intro="Des repères simples pour vendre, acheter et investir avec plus de clarté." />
      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-8 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.07}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
                <img src={a.image} alt={a.title} width={1200} height={900} loading="lazy" className="aspect-4/3 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="kicker text-primary">{a.category}</p>
                  <h2 className="mt-3 font-display text-2xl leading-tight">{a.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <p className="mt-5 text-xs tracking-wide text-muted-foreground">{a.readingTime} de lecture</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
