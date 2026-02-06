"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">Contact Our Time Agents</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <p className="mb-6 text-muted-foreground">
                Have questions about your temporal journey? Our experienced time
                agents are here to help you plan the perfect destination across
                the centuries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/50">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:info@timetravelagency.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    info@timetravelagency.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/50">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/50">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Office
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    1889 Temporal Boulevard
                    <br />
                    Paris, Timeline 01
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-foreground focus:border-gold focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-foreground focus:border-gold focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-foreground focus:border-gold focus:outline-none"
                  placeholder="Your subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-foreground focus:border-gold focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex items-center gap-2 border border-gold bg-transparent px-6 py-3 text-xs uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background"
              >
                <Send size={14} />
                Send Message
              </button>

              {submitted && (
                <div className="rounded border border-gold/50 bg-gold/10 p-4 text-sm text-gold">
                  Thank you! Your message has been sent. We'll get back to you
                  soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
