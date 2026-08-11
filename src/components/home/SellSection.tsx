import { EvaluationForm } from "@/components/forms/EvaluationForm";
import { Reveal } from "@/components/site/Reveal";

export function SellSection() {
  return (
    <section id="evaluation" className="bg-charcoal py-24 text-charcoal-foreground md:py-32">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker text-primary">Vous pensez vendre ?</p>
            <h2 className="display-lg mt-6 text-charcoal-foreground">
              Découvrez la vraie valeur de votre propriété.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-cream/70 md:text-lg">
              Obtenez une analyse personnalisée de votre propriété et une stratégie de mise en
              marché adaptée à votre secteur, à vos objectifs et aux conditions actuelles du marché.
            </p>
            <div className="mt-10 space-y-4 border-t border-cream/12 pt-8">
              {[
                "Analyse comparative de votre secteur",
                "Recommandations de mise en valeur",
                "Plan de mise en marché et échéancier",
              ].map((item) => (
                <p key={item} className="flex gap-3 text-sm text-cream/75">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1} className="rounded-lg border border-cream/15 bg-cream/4 p-6 md:p-10">
            <EvaluationForm tone="dark" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
