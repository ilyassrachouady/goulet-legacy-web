import { agency } from "@/lib/site-data";
import suttonLogo from "@/assets/sutton-actuel-logo.png";
import { cn } from "@/lib/utils";

type AgencyBadgeProps = {
  variant?: "light" | "dark" | "inline";
  className?: string;
  showTagline?: boolean;
};

export function AgencyBadge({
  variant = "dark",
  className,
  showTagline = true,
}: AgencyBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        variant === "inline" && "gap-2.5",
        className,
      )}
    >
      <img
        src={suttonLogo}
        alt={`${agency.brokerage} — ${agency.brokerageTagline}`}
        width={variant === "inline" ? 120 : 160}
        height={variant === "inline" ? 32 : 42}
        className={cn(
          "h-auto w-auto object-contain",
          variant === "inline" ? "max-h-8 max-w-[7.5rem]" : "max-h-10 max-w-[10rem]",
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
            Courtiers affiliés
          </p>
          <p
            className={cn(
              "mt-0.5 text-xs",
              variant === "light" ? "text-cream/75" : "text-muted-foreground",
            )}
          >
            {agency.brokerageTagline}
          </p>
        </div>
      ) : null}
    </div>
  );
}
