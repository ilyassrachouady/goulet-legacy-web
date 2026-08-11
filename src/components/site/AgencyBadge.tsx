import { agency } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type AgencyBadgeProps = {
  variant?: "light" | "dark" | "inline";
  className?: string;
  showTagline?: boolean;
};

export function AgencyBadge({ variant = "dark", className, showTagline = true }: AgencyBadgeProps) {
  const light = variant === "light";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3.5",
        variant === "inline" && "gap-2.5",
        className,
      )}
      aria-label={`Courtiers affiliés à ${agency.brokerage}`}
    >
      <span
        className={cn(
          "font-display leading-none font-semibold tracking-[-0.05em] text-primary italic",
          variant === "inline" ? "text-xl" : "text-3xl",
        )}
        aria-hidden="true"
      >
        Sutton
      </span>
      <span
        className={cn("h-8 border-l", light ? "border-cream/25" : "border-border")}
        aria-hidden="true"
      />
      <div className="leading-tight">
        <p
          className={cn(
            "font-medium tracking-[0.08em]",
            variant === "inline" ? "text-[0.55rem] uppercase" : "text-xs",
            light ? "text-cream/85" : "text-foreground/80",
          )}
        >
          Groupe Sutton-Actuel inc.
        </p>
        {showTagline && variant !== "inline" ? (
          <p
            className={cn(
              "mt-1 text-[0.625rem] tracking-[0.12em] uppercase",
              light ? "text-cream/55" : "text-muted-foreground",
            )}
          >
            Agence immobilière
          </p>
        ) : null}
      </div>
    </div>
  );
}
