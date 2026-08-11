import { Reveal } from "@/components/site/Reveal";
import { trustPoints } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section id="confiance" className="border-b border-border bg-surface">
      <div className="container-editorial grid grid-cols-2 gap-x-4 gap-y-8 py-10 sm:gap-y-10 sm:py-12 md:grid-cols-4 md:py-14">
        {trustPoints.map((point, i) => (
          <Reveal
            key={point.label}
            delay={i * 0.07}
            y={14}
            className="border-border px-1 sm:px-2 md:not-first:border-l md:px-8"
          >
            <p className="font-display text-3xl leading-none md:text-4xl">{point.value}</p>
            <p className="mt-3 max-w-[16ch] text-xs leading-relaxed text-muted-foreground">
              {point.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
