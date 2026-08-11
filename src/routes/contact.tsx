import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { agency, brokers } from "@/lib/site-data";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Goulet Immobilier" },
      { name: "description", content: "Parlons de votre projet immobilier. Téléphone, courriel et formulaire de contact." },
      { property: "og:title", content: "Contact | Goulet Immobilier" },
      { property: "og:description", content: "Parlons de votre projet immobilier. Téléphone, courriel et formulaire de contact." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader kicker="Contact" title="Parlons de votre projet." intro="Écrivez-nous ou appelez directement l'un de nos courtiers." />
      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="space-y-8">
              {brokers.map((b) => (
                <div key={b.slug} className="border-b border-border pb-6">
                  <p className="font-display text-2xl">{b.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.title}</p>
                  <a href={b.phoneHref} className="link-underline mt-3 block text-sm font-medium text-primary">{b.phone}</a>
                  <a href={`mailto:${b.email}`} className="mt-1 block text-sm text-muted-foreground">{b.email}</a>
                </div>
              ))}
              <p className="text-sm leading-relaxed text-muted-foreground">{agency.brokerage} · {agency.city}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7"><Reveal delay={0.1}><ContactForm /></Reveal></div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
