"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface QuizResult {
  destination: "paris" | "cretaceous" | "florence";
  title: string;
  description: string;
  price: number;
  image: string;
}

const quizQuestions = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous?",
    options: [
      { label: "Art & Culture", value: "art" },
      { label: "Aventure & Découverte", value: "adventure" },
      { label: "Luxe & Raffinement", value: "luxury" },
      { label: "Histoire Immersive", value: "history" },
    ],
  },
  {
    id: 2,
    question: "Quelle époque vous fascine le plus?",
    options: [
      { label: "La Renaissance (1504)", value: "renaissance" },
      { label: "La Belle Époque (1889)", value: "belle-epoque" },
      { label: "L'Ère Préhistorique (-65M)", value: "prehistoric" },
      { label: "Sans préférence", value: "any" },
    ],
  },
  {
    id: 3,
    question: "Quel environnement vous attire?",
    options: [
      { label: "Nature sauvage & Dinosaures", value: "wild-nature" },
      { label: "Ville cosmopolite & Arts", value: "city-arts" },
      { label: "Galeries & Ateliers d'artistes", value: "galleries" },
      { label: "Monuments & Architecture", value: "monuments" },
    ],
  },
  {
    id: 4,
    question: "Quelle activité vous serait idéale?",
    options: [
      { label: "Cours privé avec maître artiste", value: "art-class" },
      { label: "Safari temporel aux dinosaures", value: "safari" },
      { label: "Soirée dans un cabaret légendaire", value: "nightlife" },
      { label: "Visite guidée d'œuvres emblématiques", value: "tour" },
    ],
  },
];

const destinations: Record<string, QuizResult> = {
  paris: {
    destination: "paris",
    title: "Paris 1889 - La Belle Époque",
    description:
      "Plongez dans l'atmosphère magique de Paris au moment de l'Exposition Universelle. Vivez la grandeur de la Tour Eiffel en construction, explorez les cabarets mythiques et imprégnez-vous de la raffinement parisien.",
    price: 12500,
    image: "/images/paris-1889.svg",
  },
  cretaceous: {
    destination: "cretaceous",
    title: "Crétacé -65 Millions d'Années",
    description:
      "L'aventure ultime! Observez les dinosaures dans leur habitat naturel, explorez une nature préhistorique indomptée et vivez une expérience que peu de privilégiés pourront jamais oublier.",
    price: 18500,
    image: "/images/cretaceous.svg",
  },
  florence: {
    destination: "florence",
    title: "Florence 1504 - La Renaissance",
    description:
      "Assistez au dévoilement du David de Michel-Ange, participez à des cours privés avec les grands maîtres, et immergez-vous dans le contexte créatif de la Renaissance italienne la plus brillante.",
    price: 14200,
    image: "/images/florence-1504.svg",
  },
};

export function TemporalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedDestination, setRecommendedDestination] =
    useState<QuizResult | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, calculate recommendation
      const result = calculateRecommendation(newAnswers);
      setRecommendedDestination(result);
      setShowResult(true);
    }
  };

  const calculateRecommendation = (answers: string[]): QuizResult => {
    const [experience, period, environment, activity] = answers;

    // Scoring system
    let parisScore = 0;
    let createceousScore = 0;
    let florenceScore = 0;

    // Experience scoring
    if (experience === "luxury") parisScore += 3;
    if (experience === "adventure") createceousScore += 3;
    if (experience === "art" || experience === "history") florenceScore += 3;

    // Period scoring
    if (period === "belle-epoque") parisScore += 3;
    if (period === "prehistoric") createceousScore += 3;
    if (period === "renaissance") florenceScore += 3;

    // Environment scoring
    if (environment === "wild-nature") createceousScore += 2;
    if (environment === "city-arts") parisScore += 2;
    if (environment === "galleries" || environment === "monuments")
      florenceScore += 2;

    // Activity scoring
    if (activity === "nightlife") parisScore += 2;
    if (activity === "safari") createceousScore += 2;
    if (activity === "art-class" || activity === "tour") florenceScore += 2;

    // Determine winner
    const scores = {
      paris: parisScore,
      cretaceous: createceousScore,
      florence: florenceScore,
    };

    const winner = Object.keys(scores).reduce((a, b) =>
      scores[a as keyof typeof scores] > scores[b as keyof typeof scores]
        ? a
        : b
    ) as "paris" | "cretaceous" | "florence";

    return destinations[winner];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendedDestination(null);
  };

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
            Trouvez Votre Destination
          </p>
          <h2 className="font-serif text-5xl font-light tracking-wide text-foreground md:text-6xl">
            Quiz de Voyage Temporel
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Répondez à quelques questions pour découvrir la destination temporelle
            parfaite pour vous.
          </p>
        </div>

        {/* Quiz Container */}
        {!showResult ? (
          <div className="relative">
            {/* Progress bar */}
            <div className="mb-8 flex justify-between items-center gap-2">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="flex-1">
                  <div
                    className={`h-1 transition-all duration-500 ${
                      idx < currentQuestion
                        ? "bg-gold"
                        : idx === currentQuestion
                          ? "bg-gold/60"
                          : "bg-border"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Question Card */}
            <div
              key={currentQuestion}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              <div className="rounded-none border border-border bg-card p-8 md:p-12">
                {/* Question Header */}
                <div className="mb-8">
                  <span className="text-sm text-gold uppercase tracking-widest">
                    Question {currentQuestion + 1}/4
                  </span>
                  <h3 className="mt-4 font-serif text-3xl font-light text-foreground">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                  {quizQuestions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="group relative overflow-hidden rounded-none border border-border bg-secondary px-6 py-4 text-left transition-all duration-300 hover:border-gold hover:bg-gold/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gold opacity-60 transition-all group-hover:opacity-100">
                          <div className="h-2 w-2 rounded-full bg-gold opacity-0 transition-all group-hover:opacity-100" />
                        </div>
                        <span className="text-foreground transition-colors group-hover:text-gold">
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={resetQuiz}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Recommencer
                  </button>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {currentQuestion + 1} / {quizQuestions.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : recommendedDestination ? (
          /* Result Card */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="rounded-none border border-border bg-card overflow-hidden">
              {/* Result Header */}
              <div className="bg-gradient-to-r from-gold/10 to-transparent p-8 md:p-12 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-gold" />
                  <span className="text-sm uppercase tracking-widest text-gold">
                    Résultat
                  </span>
                </div>
                <h3 className="font-serif text-4xl font-light text-foreground">
                  {recommendedDestination.title}
                </h3>
              </div>

              {/* Result Content */}
              <div className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  {/* Image */}
                  <div className="aspect-video rounded-none border border-border bg-secondary overflow-hidden">
                    <img
                      src={recommendedDestination.image}
                      alt={recommendedDestination.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                      {recommendedDestination.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8 flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">À partir de</span>
                      <span className="font-serif text-4xl text-gold">
                        {recommendedDestination.price.toLocaleString("fr-FR")}€
                      </span>
                      <span className="text-sm text-muted-foreground">par personne</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <a
                        href="/booking"
                        className="flex-1 flex items-center justify-center gap-2 border border-gold bg-gold text-background px-6 py-3 text-sm uppercase tracking-widest transition-all hover:bg-gold/90"
                      >
                        Réserver cette destination
                        <ArrowRight size={16} />
                      </a>
                      <button
                        onClick={resetQuiz}
                        className="border border-gold bg-transparent text-gold px-6 py-3 text-sm uppercase tracking-widest transition-all hover:bg-gold hover:text-background"
                      >
                        Refaire le quiz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
