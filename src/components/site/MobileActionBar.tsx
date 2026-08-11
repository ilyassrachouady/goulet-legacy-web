import { Link } from "@tanstack/react-router";
import { Calculator, Phone } from "lucide-react";

import { simon } from "@/lib/site-data";

/** Barre d'action fixe en bas, mobile seulement. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-charcoal/10 bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <a
        href={simon.phoneHref}
        className="flex min-h-14 items-center justify-center gap-2 px-3 text-sm font-medium text-foreground"
      >
        <Phone className="size-4" aria-hidden="true" />
        Appeler
      </a>
      <Link
        to="/evaluation"
        className="flex min-h-14 items-center justify-center gap-2 bg-primary px-3 text-center text-sm font-medium text-primary-foreground"
      >
        <Calculator className="size-4" aria-hidden="true" />
        Évaluation gratuite
      </Link>
    </div>
  );
}
