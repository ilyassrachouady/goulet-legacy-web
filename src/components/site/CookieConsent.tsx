import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "goulet-consent-temoins";

/** Bandeau de consentement aux témoins (cookies). */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* stockage indisponible : on n'affiche rien */
    }
  }, []);

  const decide = (value: "accepte" | "refuse") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignoré */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux témoins"
      className="fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-45 rounded-lg border border-border bg-surface p-4 shadow-lift sm:p-5 lg:inset-x-auto lg:right-6 lg:bottom-6 lg:max-w-sm"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Nous utilisons des témoins essentiels au fonctionnement du site et, avec votre accord, des
        témoins de mesure d'audience.
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="accent" size="sm" onClick={() => decide("accepte")}>
          Accepter
        </Button>
        <Button variant="quiet" size="sm" onClick={() => decide("refuse")}>
          Refuser
        </Button>
      </div>
    </div>
  );
}
