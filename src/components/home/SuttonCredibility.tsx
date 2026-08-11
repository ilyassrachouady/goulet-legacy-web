import { Check } from "lucide-react";

import { AgencyBadge } from "@/components/site/AgencyBadge";
import { Reveal } from "@/components/site/Reveal";

const advantages = [
  "La force d'un réseau immobilier établi",
  "Des outils professionnels pour mieux positionner votre propriété",
  "Un accompagnement local, humain et directement accessible",
];

export function SuttonCredibility() {
  return (
    <section
      className="border-y border-border bg-secondary/45 py-16 md:py-20"
      aria-labelledby="sutton-title"
    >
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <AgencyBadge variant="dark" />
          <h2 id="sutton-title" className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            L'appui d'un grand réseau. La proximité d'une équipe familiale.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <ul className="grid gap-4 sm:grid-cols-3">
            {advantages.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
