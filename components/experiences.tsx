"use client";

import { useState } from "react";
import { Check, Star } from "lucide-react";

const experiences = [
  {
    title: "Temporal Observation Package",
    icon: "🔭",
    description:
      "Safely observe historical events from our temporal observation pods without affecting the timeline.",
    price: "From $8,500",
    features: [
      "Professional temporal guide",
      "Private observation pod",
      "Historical briefing",
      "Temporal insurance included",
      "Complimentary period attire",
    ],
    popular: false,
  },
  {
    title: "Immersive Historical Experience",
    icon: "🎭",
    description:
      "Fully immerse yourself in the culture, customs, and atmosphere of your chosen era.",
    price: "From $15,000",
    features: [
      "Expert local guides",
      "Authentic period accommodation",
      "Cultural immersion activities",
      "Gourmet historical cuisine",
      "Exclusive access events",
      "Professional photographer",
    ],
    popular: true,
  },
  {
    title: "Adventure Time Expedition",
    icon: "⚡",
    description:
      "Experience thrilling moments of history firsthand. For the adventurous time traveler.",
    price: "From $25,000",
    features: [
      "Extreme sports in historical settings",
      "Expert adrenaline team",
      "Premium safety equipment",
      "VIP experience access",
      "Custom adventure planning",
      "Documentation & editing service",
    ],
    popular: false,
  },
];

export function Experiences() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experiences" className="relative px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            Our Services
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">Experience Packages</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Choose from our curated selection of temporal experiences, each
            designed to provide unforgettable moments across time.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden border transition-all duration-300 ${
                experience.popular
                  ? "md:scale-105 border-gold bg-gradient-to-br from-gold/10 to-transparent"
                  : "border-border hover:border-gold/50"
              } ${hoveredIndex === index ? "shadow-xl shadow-gold/20" : ""}`}
            >
              {/* Popular badge */}
              {experience.popular && (
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-xs uppercase tracking-widest text-gold">
                  <Star size={12} />
                  Popular
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="mb-4 text-4xl">{experience.icon}</div>

                {/* Title and price */}
                <h3 className="font-serif text-2xl tracking-wide text-foreground">
                  {experience.title}
                </h3>
                <p className="mt-2 text-2xl font-light text-gold">
                  {experience.price}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3 border-t border-border/50 pt-6">
                  {experience.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-gold"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  type="button"
                  className={`mt-8 w-full py-3 text-xs uppercase tracking-widest transition-all ${
                    experience.popular
                      ? "border border-gold bg-gold text-background hover:bg-gold/90"
                      : "border border-gold bg-transparent text-gold hover:bg-gold hover:text-background"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 rounded-lg border border-border bg-card/50 p-8 text-center backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            All packages include temporal insurance, professional guides, and our
            <span className="text-gold"> 100% Timeline Safety Guarantee</span>.
            Custom experiences available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
