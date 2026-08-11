import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Décalage vertical initial, en pixels. */
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/** Apparition douce au scroll, respectueuse de prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className, y = 24, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

/** Révélation d'image par masque vertical. */
export function RevealImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(14% 0% 0% 0%)", opacity: 0.2 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
