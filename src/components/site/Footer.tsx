import { Link } from "@tanstack/react-router";
import { Facebook, Mail, Phone } from "lucide-react";

import { agency, brokers, navLinks } from "@/lib/site-data";
import { AgencyBadge } from "@/components/site/AgencyBadge";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal text-charcoal-foreground">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-3xl leading-none">
            Goulet <span className="text-primary">Immobilier</span>
          </p>
          <AgencyBadge variant="light" className="mt-4" showTagline={false} />
          <p className="kicker mt-3 text-cream/55">
            {agency.brokerage} · {agency.brokerageTagline}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
            {agency.promise} Place d'affaires à Boucherville, service sur la Rive-Sud, dans la
            grande région de Montréal et en Estrie.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href={agency.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Goulet Immobilier"
              className="flex size-10 items-center justify-center rounded-md border border-cream/20 transition-colors hover:border-cream/60"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="kicker text-cream/45">Nos courtiers</p>
          <ul className="mt-6 space-y-6">
            {brokers.map((b) => (
              <li key={b.slug}>
                <p className="font-display text-xl">{b.name}</p>
                <p className="mt-1 text-xs text-cream/55">{b.title}</p>
                <p className="mt-1 text-[0.625rem] tracking-wide text-cream/45">
                  {b.brokerage} · {agency.brokerageTagline}
                </p>
                <a
                  href={b.phoneHref}
                  className="mt-2 flex items-center gap-2 text-sm text-cream/85 hover:text-charcoal-foreground"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {b.phone}
                </a>
                <a
                  href={`mailto:${b.email}`}
                  className="mt-1 flex items-center gap-2 text-sm text-cream/70 hover:text-charcoal-foreground"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {b.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="kicker text-cream/45">Navigation</p>
          <ul className="mt-6 grid grid-cols-2 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-cream/75 hover:text-charcoal-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/secteurs" className="text-sm text-cream/75 hover:text-charcoal-foreground">
                Secteurs
              </Link>
            </li>
            <li>
              <Link
                to="/evaluation"
                className="text-sm text-cream/75 hover:text-charcoal-foreground"
              >
                Évaluation
              </Link>
            </li>
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-cream/45">
            Simon et Sylvain Goulet, courtiers immobiliers affiliés à Groupe Sutton-Actuel inc.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-editorial flex flex-col gap-4 py-6 pb-24 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>
            © {new Date().getFullYear()} {agency.name} — {agency.brokerage}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/confidentialite" className="hover:text-charcoal-foreground">
              Politique de confidentialité
            </Link>
            <Link to="/confidentialite" hash="temoins" className="hover:text-charcoal-foreground">
              Politique relative aux témoins
            </Link>
            <Link to="/confidentialite" hash="mentions" className="hover:text-charcoal-foreground">
              Mentions légales
            </Link>
            <span className="text-charcoal-foreground">Français</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
