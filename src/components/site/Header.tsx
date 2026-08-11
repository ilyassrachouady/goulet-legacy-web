import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, simon } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent ? "bg-transparent" : "border-b border-border/70 bg-surface/95 backdrop-blur-md",
      )}
    >
      <div className="container-editorial flex h-18 items-center justify-between gap-6 md:h-20">
        <Link
          to="/"
          className={cn(
            "flex min-w-0 items-center gap-3 leading-none transition-colors",
            transparent ? "text-charcoal-foreground" : "text-foreground",
          )}
          aria-label="Goulet Immobilier — accueil"
        >
          <span className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap font-display text-[1.25rem] tracking-tight md:text-[1.5rem]">
              Goulet <span className="text-primary">Immobilier</span>
            </span>
            <span
              className={cn(
                "mt-1 whitespace-nowrap text-[0.5rem] tracking-[0.1em] uppercase sm:text-[0.55rem]",
                transparent ? "text-cream/70" : "text-muted-foreground",
              )}
            >
              Courtiers immobiliers
              <span className="hidden sm:inline"> · Groupe Sutton-Actuel inc.</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "link-underline text-[0.8125rem] font-medium tracking-wide transition-colors",
                transparent
                  ? "text-cream/85 hover:text-charcoal-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              activeProps={{
                className: cn(transparent ? "text-charcoal-foreground" : "text-foreground"),
              }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={simon.phoneHref}
            className={cn(
              "flex items-center gap-2 text-[0.8125rem] font-medium tracking-wide transition-colors",
              transparent
                ? "text-cream/85 hover:text-charcoal-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {simon.phone}
          </a>
          <Button asChild variant="accent" size="lg">
            <Link to="/evaluation">Évaluer ma propriété</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "flex size-10 items-center justify-center rounded-md transition-colors xl:hidden",
            transparent ? "text-charcoal-foreground" : "text-foreground",
          )}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Menu plein écran mobile */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col overflow-y-auto bg-charcoal text-charcoal-foreground transition-all duration-400 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-editorial flex h-18 items-center justify-between">
          <span className="font-display text-[1.4rem]">
            Goulet <span className="text-primary">Immobilier</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center rounded-md"
            aria-label="Fermer le menu"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav
          className="container-editorial flex flex-1 flex-col justify-center gap-1 py-8 pb-24"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-3 font-display text-2xl text-cream/90 sm:py-4 sm:text-3xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/secteurs"
            onClick={() => setOpen(false)}
            className="border-b border-cream/10 py-3 font-display text-2xl text-cream/90 sm:py-4 sm:text-3xl"
          >
            Secteurs desservis
          </Link>
          <div className="mt-8 space-y-2 text-sm text-cream/70">
            <a href={simon.phoneHref} className="block">
              Simon Goulet · {simon.phone}
            </a>
            <a href="tel:+15146047695" className="block">
              Sylvain Goulet · 514 604-7695
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
