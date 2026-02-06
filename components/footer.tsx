import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-serif text-lg tracking-wider text-foreground">
                TimeTravel Agency
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Pioneering luxury temporal experiences since 2024. Licensed by the
              Temporal Regulatory Commission.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {["Destinations", "Experiences", "Safety", "FAQ", "About"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={14} className="text-gold" />
                contact@timetravelagency.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={14} className="text-gold" />
                +33 1 42 00 2089
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 text-gold" />
                <span>
                  42 Rue du Temps
                  <br />
                  75008 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2024 TimeTravel Agency. All timelines reserved."}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Temporal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
