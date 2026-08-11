import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

/** En-tête de section éditoriale : petit libellé + titre + intro optionnelle. */
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {kicker ? (
        <p className={cn("kicker", tone === "dark" ? "text-primary" : "text-primary")}>{kicker}</p>
      ) : null}
      <h2
        className={cn(
          "display-lg mt-5 max-w-3xl",
          align === "center" && "mx-auto",
          tone === "dark" && "text-charcoal-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

/** En-tête de page intérieure, cohérent sur tout le site. */
export function PageHeader({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-editorial">
        <Reveal>
          <p className="kicker text-primary">{kicker}</p>
          <h1 className="display-xl mt-6 max-w-4xl">{title}</h1>
          {intro ? (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
