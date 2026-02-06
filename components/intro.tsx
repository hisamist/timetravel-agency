"use client";

import { Sparkles } from "lucide-react";

export function Intro() {
  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-card via-card/50 to-background p-8 md:p-12 backdrop-blur-sm">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/50">
              <Sparkles size={24} className="text-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-foreground mb-4">
                Bienvenue chez TimeTravel Agency
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Découvrez l'expérience ultime du voyage dans le temps. Depuis 2089,
                nous connectons les voyageurs avec les moments les plus époustouflants
                de l'histoire. De la Belle Époque parisienne aux mystères préhistoriques,
                chaque destination est une opportunité de vivre l'histoire comme jamais
                auparavant.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Avec nos guides experts et notre technologie temporelle de pointe,
                nous garantissons des expériences immersives, sûres et transformatrices.
                <span className="text-gold"> Le temps est votre destination.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
