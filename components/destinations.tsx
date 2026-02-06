"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const destinations = [
  {
    title: "Paris 1889",
    subtitle: "Belle Epoque",
    description:
      "Witness the grand unveiling of the Eiffel Tower during the World Fair. Stroll gaslit boulevards, attend lavish salons, and experience the golden age of Parisian culture.",
    image: "/images/paris-1889.jpg",
    date: "April 15, 1889",
    location: "Paris, France",
    price: "From 12,500",
  },
  {
    title: "Cretaceous -65M",
    subtitle: "Age of Dinosaurs",
    description:
      "Journey to the final days of the Cretaceous period. Observe magnificent dinosaurs in their natural habitat from the safety of our temporal observation pods.",
    image: "/images/cretaceous.jpg",
    date: "65 Million Years Ago",
    location: "Prehistoric Earth",
    price: "From 24,000",
  },
  {
    title: "Florence 1504",
    subtitle: "Renaissance",
    description:
      "Walk through the streets of Renaissance Florence alongside Da Vinci and Michelangelo. Witness the creation of David and the flourishing of art and science.",
    image: "/images/florence-1504.jpg",
    date: "March 8, 1504",
    location: "Florence, Italy",
    price: "From 15,800",
  },
];

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative flex h-[520px] flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-gold/50 lg:h-[600px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden lg:h-72">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.title} - ${destination.subtitle}`}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center border border-gold/50 text-xs text-gold">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-background/80 px-3 py-1 text-xs tracking-wider text-gold backdrop-blur-sm">
          {destination.price}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-gold">
          {destination.subtitle}
        </p>
        <h3 className="font-serif text-2xl tracking-wide text-foreground">
          {destination.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-gold" />
            {destination.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-gold" />
            {destination.location}
          </span>
        </div>

        <button
          type="button"
          className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:gap-3"
        >
          Discover
          <ArrowRight
            size={14}
            className={`transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
          />
        </button>
      </div>
    </article>
  );
}

export function Destinations() {
  return (
    <section
      id="destinations"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            Curated Journeys
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">Choose Your Era</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
