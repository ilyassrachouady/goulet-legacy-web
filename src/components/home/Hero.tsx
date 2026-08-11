import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { AgencyBadge } from "@/components/site/AgencyBadge";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [videoAllowed, setVideoAllowed] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (reducedMotion || connection.connection?.saveData) setVideoAllowed(false);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video || !videoAllowed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [videoAllowed]);

  return (
    <section ref={heroRef} className="hero relative flex min-h-[94svh] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/video/hero-neighborhood-poster.jpg"
          alt=""
          width={1440}
          height={810}
          fetchPriority="high"
          className="hero-poster size-full object-cover object-[62%_center]"
        />
        {videoAllowed ? (
          <video
            ref={videoRef}
            className="hero-video absolute inset-0 size-full object-cover"
            poster="/video/hero-neighborhood-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/video/hero-neighborhood.webm" type="video/webm" />
            <source src="/video/hero-neighborhood.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="hero-veil absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
      </div>

      <div className="container-editorial relative z-10 pt-36 pb-24 md:pb-28 lg:pb-24">
        <div className="max-w-[49rem]">
          <p className="hero-reveal hero-reveal-1 kicker flex items-center gap-3 text-cream/78">
            <span className="h-px w-8 bg-primary" />
            Goulet Immobilier <span className="text-cream/35">•</span> Rive-Sud &amp; Estrie
          </p>

          <h1 className="hero-reveal hero-reveal-2 display-xl mt-7 text-charcoal-foreground">
            Votre projet immobilier mérite plus qu’une transaction.
          </h1>

          <p className="hero-reveal hero-reveal-3 mt-7 max-w-[40rem] text-base leading-relaxed text-cream/82 md:text-lg">
            Deux générations de courtiers, plus de 20 ans d’expérience et un accompagnement
            réellement humain pour vendre, acheter ou investir en toute confiance.
          </p>

          <div className="hero-reveal hero-reveal-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="xl" className="shadow-[0_14px_38px_-16px_rgba(0,0,0,0.7)]">
              <Link to="/evaluation">Faire évaluer ma propriété</Link>
            </Button>
            <Button asChild variant="onDark" size="xl" className="group">
              <Link to="/proprietes">
                Voir nos propriétés
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="hero-reveal hero-reveal-5 mt-8 border-t border-cream/18 pt-5 sm:max-w-xl">
            <AgencyBadge variant="light" />
          </div>
        </div>
      </div>

      <a
        href="#confiance"
        className={`hero-scroll-indicator absolute right-6 bottom-8 z-10 hidden items-center gap-3 text-cream/65 transition-all duration-500 lg:flex ${
          hasScrolled ? "pointer-events-none translate-y-2 opacity-0" : "opacity-100"
        }`}
        aria-label="Descendre à la section suivante"
      >
        <span className="kicker text-[0.58rem]">Découvrir</span>
        <span className="flex size-10 items-center justify-center rounded-full border border-cream/30 transition-colors hover:border-cream/70 hover:text-cream">
          <ArrowDown className="size-4" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
