"use client";

import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Cutting-edge temporal technology that makes time travel safe and accessible.",
  },
  {
    icon: Shield,
    title: "Safety",
    description:
      "100% timeline protection guarantee. Your journey through history is our priority.",
  },
  {
    icon: Globe,
    title: "Authenticity",
    description:
      "Genuine experiences across real historical moments and authentic cultural encounters.",
  },
];

const timeline = [
  {
    year: "2089",
    title: "Founded",
    description:
      "TimeTravel Agency established by temporal physicist Dr. Elena Rousseau.",
  },
  {
    year: "2095",
    title: "First Expedition",
    description:
      "Successful maiden voyage to 1889 Paris. Revolution in historical tourism begins.",
  },
  {
    year: "2102",
    title: "Global Expansion",
    description:
      "Opened offices on 5 continents. Now offering 500+ unique temporal destinations.",
  },
  {
    year: "2126",
    title: "Present Day",
    description:
      "Industry leader with over 100,000 satisfied time travelers. Still innovating.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            Our Story
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">About TimeTravel Agency</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-2 mb-16">
          <div>
            <h3 className="font-serif text-2xl tracking-wide text-foreground mb-4">
              Pioneers of Temporal Tourism
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Since 2089, TimeTravel Agency has been revolutionizing how we
              experience history. What began as a bold scientific experiment has
              transformed into the world's most trusted provider of temporal
              travel experiences.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Our mission is simple: to bring history alive. Not through textbooks
              or documentaries, but through direct, immersive experiences that
              connect you with pivotal moments across time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With state-of-the-art technology and expert guides, we ensure every
              journey is safe, educational, and unforgettable. Join thousands of
              temporal tourists who have experienced history the way it was meant
              to be lived.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/50">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg tracking-wide text-foreground">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl tracking-wide text-foreground mb-12 text-center">
            Our Journey Through Time
          </h3>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-background">
                    <span className="text-xs font-semibold text-gold">
                      {index + 1}
                    </span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 h-16 w-0.5 bg-gold/30" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm uppercase tracking-widest text-gold font-semibold">
                    {item.year}
                  </p>
                  <h4 className="mt-1 font-serif text-xl tracking-wide text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-border bg-card/50 p-8 text-center backdrop-blur-sm md:p-12">
          <h3 className="font-serif text-2xl tracking-wide text-foreground mb-4">
            Ready to Explore History?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Choose your destination across time and embark on an unforgettable
            journey.
          </p>
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 border border-gold bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background"
          >
            Explore Destinations
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
