import { agency } from "@/lib/site-data";
import suttonLogo from "@/assets/sutton-actuel-logo.png";
import { cn } from "@/lib/utils";

type AgencyBadgeProps = {
  variant?: "light" | "dark" | "inline";
  className?: string;
  showTagline?: boolean;
};

export function AgencyBadge({ variant = "dark", className, showTagline = true }: AgencyBadgeProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-3", variant === "inline" && "gap-2.5", className)}
    >
      <img
        src={suttonLogo}
        alt={`${agency.brokerage} — ${agency.brokerageTagline}`}
        width={variant === "inline" ? 120 : 160}
        height={variant === "inline" ? 32 : 42}
        className={cn(
          "h-auto w-auto object-contain",
          variant === "inline" ? "max-h-7 max-w-[6.75rem]" : "max-h-12 max-w-[11rem]",
        )}
      />
      {showTagline && variant !== "inline" ? (
        <div className="hidden sm:block">
          <p
            className={cn(
              "text-[0.625rem] font-medium tracking-[0.18em] uppercase",
              variant === "light" ? "text-cream/60" : "text-muted-foreground",
            )}
          >
            Réseau immobilier
          </p>
          <p
            className={cn(
              "mt-0.5 text-xs",
              variant === "light" ? "text-cream/75" : "text-muted-foreground",
            )}
          >
            Groupe Sutton-Actuel inc.
          </p>
        </div>
      ) : null}
    </div>
  );
}
