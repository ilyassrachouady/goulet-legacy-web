import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/lib/site-data";

/** Témoignages authentiques, navigation manuelle uniquement. */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index]!;

  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="border-y border-border bg-surface py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Témoignages"
            title={
              <>
                La confiance se construit
                <br className="hidden md:block" /> une transaction à la fois.
              </>
            }
          />
          <Reveal delay={0.1} className="flex gap-2">
            <Button
              variant="quiet"
              size="icon"
              onClick={() => go(-1)}
              aria-label="Témoignage précédent"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="quiet"
              size="icon"
              onClick={() => go(1)}
              aria-label="Témoignage suivant"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="rounded-lg border border-border bg-background p-8 shadow-soft md:p-12">
              {current.stars ? (
                <div className="flex gap-1" aria-label={`${current.stars} étoiles sur 5`}>
                  {Array.from({ length: current.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
              ) : null}
              <blockquote className="mt-6 font-display text-2xl leading-snug md:text-[2rem]">
                « {current.quote} »
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{current.title}</span>
                <span aria-hidden="true">·</span>
                <span>{current.author}</span>
                {current.year ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{current.year}</span>
                  </>
                ) : null}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <ul className="divide-y divide-border">
              {testimonials.map((t, i) => (
                <li key={t.slug}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={i === index}
                    className={`w-full py-5 text-left transition-colors ${
                      i === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="kicker text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-2 block font-display text-xl">{t.title}</span>
                    <span className="mt-1 block text-xs">{t.author}</span>
                  </button>
                </li>
              ))}
            </ul>
            <Button asChild variant="quiet" size="lg" className="mt-8">
              <Link to="/temoignages">Lire tous les témoignages</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
