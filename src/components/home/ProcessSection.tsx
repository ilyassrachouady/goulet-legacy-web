import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/Section";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeading
          kicker="Notre approche"
          title="Un accompagnement clair, du premier appel à la signature."
          description="Chaque projet est différent, mais notre méthode reste la même : écouter, conseiller, préparer, négocier et vous accompagner jusqu'au bout."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="bg-background p-8">
              <span className="kicker text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-2xl leading-tight">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
