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
          "display-lg mt-4 max-w-3xl sm:mt-5",
          align === "center" && "mx-auto",
          tone === "dark" && "text-charcoal-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:mt-6 md:text-lg",
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
    <section className="border-b border-border bg-surface pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      <div className="container-editorial">
        <Reveal>
          <p className="kicker text-primary">{kicker}</p>
          <h1 className="display-xl mt-4 max-w-4xl sm:mt-6">{title}</h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
