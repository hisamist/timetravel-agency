"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/paris-1889.png"
      >
        <source
          src="/videos/TimeTravel Teaser1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p
          className={`mb-4 text-xs uppercase tracking-[0.4em] text-gold transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Luxury Time Travel Experiences
        </p>

        <h1
          className={`font-serif text-5xl font-light leading-tight tracking-wide text-foreground transition-all delay-200 duration-1000 md:text-7xl lg:text-8xl ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <span className="text-balance">TimeTravel Agency</span>
        </h1>

        <div
          className={`mt-6 h-px w-24 bg-gold transition-all delay-500 duration-1000 ${loaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        />

        <p
          className={`mt-6 font-serif text-lg italic tracking-wide text-gold-light md:text-xl ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} transition-all delay-700 duration-1000`}
        >
          Le temps est votre destination
        </p>

        <a
          href="#destinations"
          className={`mt-10 border border-gold bg-transparent px-10 py-3 text-xs uppercase tracking-[0.3em] text-gold transition-all delay-1000 duration-700 hover:bg-gold hover:text-background ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Explore Destinations
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
          aria-label="Scroll to destinations"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
