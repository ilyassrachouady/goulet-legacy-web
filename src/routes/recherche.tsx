import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SearchForm } from "@/components/forms/SearchForm";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/recherche")({
  head: () => ({
    meta: [
      { title: "Recherche de propriété | Goulet Immobilier" },
      { name: "description", content: "Décrivez vos critères et recevez les propriétés qui correspondent réellement à votre projet." },
      { property: "og:title", content: "Recherche de propriété | Goulet Immobilier" },
      { property: "og:description", content: "Décrivez vos critères et recevez les propriétés qui correspondent réellement à votre projet." },
      { property: "og:url", content: "/recherche" },
    ],
    links: [{ rel: "canonical", href: "/recherche" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  return (
    <>
      <PageHeader kicker="Recherche" title="Dites-nous ce que vous cherchez." intro="Nous faisons une veille active et vous proposons uniquement ce qui correspond à vos critères." />
      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-3xl"><Reveal><SearchForm /></Reveal></div>
      </section>
      <FinalCta />
    </>
  );
}
