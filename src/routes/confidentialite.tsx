import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Goulet Immobilier" },
      { name: "description", content: "Comment nous recueillons et protégeons vos renseignements personnels." },
      { property: "og:title", content: "Politique de confidentialité | Goulet Immobilier" },
      { property: "og:description", content: "Comment nous recueillons et protégeons vos renseignements personnels." },
      { property: "og:url", content: "/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Confidentialité" title="Politique de confidentialité" intro="Nous recueillons uniquement les renseignements nécessaires pour répondre à vos demandes." />
      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>Les renseignements que vous nous transmettez par nos formulaires (nom, courriel, téléphone, détails de votre projet) servent uniquement à vous contacter et à vous accompagner dans votre projet immobilier.</p>
          <p>Ces renseignements ne sont jamais vendus. Ils peuvent être partagés avec les professionnels nécessaires à votre transaction (inspection, notariat, financement) uniquement avec votre accord.</p>
          <p>Notre site utilise des témoins (cookies) essentiels à son bon fonctionnement, ainsi que des témoins de mesure d'audience si vous y consentez. Vous pouvez modifier votre choix en tout temps.</p>
          <p>Pour toute question ou pour demander la suppression de vos renseignements, écrivez-nous à goulets@sutton.com.</p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
