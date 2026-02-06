"use client";

import { useState } from "react";
import { Calendar, Users, MapPin, AlertCircle, CheckCircle } from "lucide-react";

const destinations = [
  {
    id: "paris-1889",
    name: "Paris 1889",
    subtitle: "Belle Epoque",
    price: 12500,
  },
  {
    id: "cretaceous",
    name: "Cretaceous -65M",
    subtitle: "Age of Dinosaurs",
    price: 24000,
  },
  {
    id: "florence-1504",
    name: "Florence 1504",
    subtitle: "Renaissance",
    price: 15800,
  },
];

interface BookingForm {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: string;
  name: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

export function Booking() {
  const [formData, setFormData] = useState<BookingForm>({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "1",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.destination) {
      newErrors.destination = "Veuillez sélectionner une destination";
    }
    if (!formData.startDate) {
      newErrors.startDate = "La date de départ est requise";
    }
    if (!formData.endDate) {
      newErrors.endDate = "La date de retour est requise";
    }
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (end <= start) {
        newErrors.endDate =
          "La date de retour doit être après la date de départ";
      }
    }
    if (!formData.travelers) {
      newErrors.travelers = "Le nombre de voyageurs est requis";
    }
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Veuillez entrer un nom valide";
    }
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Calculate estimated price
    if (name === "destination" || name === "travelers") {
      const dest = destinations.find(
        (d) => d.id === (name === "destination" ? value : formData.destination)
      );
      if (dest) {
        const travelers = parseInt(
          name === "travelers" ? value : formData.travelers
        );
        setEstimatedPrice(dest.price * travelers);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          destination: "",
          startDate: "",
          endDate: "",
          travelers: "1",
          name: "",
          email: "",
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="booking" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            Réserver Maintenant
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-4xl">
            <span className="text-balance">Formulaire de Réservation</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12"
        >
          {/* Destination Selection */}
          <div>
            <label
              htmlFor="destination"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
            >
              <MapPin size={14} className="inline mr-2 text-gold" />
              Destination
            </label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full rounded border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
            >
              <option value="">Sélectionnez une destination...</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name} - {dest.subtitle} (à partir de ${dest.price.toLocaleString()})
                </option>
              ))}
            </select>
            {errors.destination && (
              <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
                <AlertCircle size={14} />
                {errors.destination}
              </p>
            )}
          </div>

          {/* Dates Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="startDate"
                className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
              >
                <Calendar size={14} className="inline mr-2 text-gold" />
                Date de Départ
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full rounded border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
              {errors.startDate && (
                <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle size={14} />
                  {errors.startDate}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
              >
                <Calendar size={14} className="inline mr-2 text-gold" />
                Date de Retour
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full rounded border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
              {errors.endDate && (
                <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle size={14} />
                  {errors.endDate}
                </p>
              )}
            </div>
          </div>

          {/* Travelers */}
          <div>
            <label
              htmlFor="travelers"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
            >
              <Users size={14} className="inline mr-2 text-gold" />
              Nombre de Voyageurs
            </label>
            <select
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full rounded border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Voyageur" : "Voyageurs"}
                </option>
              ))}
            </select>
            {errors.travelers && (
              <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
                <AlertCircle size={14} />
                {errors.travelers}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
            >
              Nom Complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className="w-full rounded border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
            />
            {errors.name && (
              <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
                <AlertCircle size={14} />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
            >
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vous@example.com"
              className="w-full rounded border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
            />
            {errors.email && (
              <p className="mt-2 flex items-center gap-2 text-xs text-red-500">
                <AlertCircle size={14} />
                {errors.email}
              </p>
            )}
          </div>

          {/* Price Summary */}
          {estimatedPrice > 0 && (
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Prix Estimé ({formData.travelers} voyageur
                  {parseInt(formData.travelers) > 1 ? "s" : ""})
                </span>
                <span className="font-serif text-2xl text-gold">
                  ${estimatedPrice.toLocaleString()}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Assurance temporelle et guide inclus
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full rounded border border-gold bg-gold px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest text-background transition-all hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? "Réservation Confirmée ✓" : "Réserver Maintenant"}
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
              <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-green-500" />
              <div>
                <p className="text-sm font-semibold text-green-500">
                  Réservation Reçue!
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Merci {formData.name}! Nous vous enverrons un email de
                  confirmation à {formData.email} dans quelques instants.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
