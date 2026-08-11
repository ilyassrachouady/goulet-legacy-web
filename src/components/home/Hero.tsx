import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

import { AgencyBadge } from "@/components/site/AgencyBadge";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-data";

const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/19120567/19120567-hd_1920_1080_30fps.mp4";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1200}
          className="size-full object-cover"
        />
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="hero-veil absolute inset-0" />
      </div>

      <div className="container-editorial relative z-10 pt-32 pb-24 md:pb-28">
        <AgencyBadge variant="light" className="mb-6" />
        <p className="kicker text-cream/75">Courtiers immobiliers • Rive-Sud • Estrie</p>
        <h1 className="display-xl mt-7 max-w-4xl text-charcoal-foreground">
          Votre projet immobilier mérite plus qu'une transaction.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
          Deux générations de courtiers, plus de 20 ans d'expérience et un accompagnement réellement
          humain pour vendre, acheter ou investir en toute confiance.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="accent" size="xl">
            <Link to="/evaluation">Faire évaluer ma propriété</Link>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <Link to="/proprietes">Découvrir nos propriétés</Link>
          </Button>
        </div>

        <p className="kicker mt-10 text-cream/60">
          Résidentiel • Commercial • Accompagnement personnalisé
        </p>
      </div>

      <a
        href="#confiance"
        className="absolute right-6 bottom-24 z-10 hidden size-11 items-center justify-center rounded-full border border-cream/30 text-charcoal-foreground transition-colors hover:border-cream/70 lg:flex"
        aria-label="Descendre à la section suivante"
      >
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  );
}
