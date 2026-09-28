import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { company, contact, nav, socials, whatsappUrl } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-primary text-cream/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            <span className="text-cream block font-medium">{company.name}</span>
            {company.tagline}
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="text-cream text-sm font-semibold tracking-[0.18em] uppercase">Enlaces</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold-soft transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-cream text-sm font-semibold tracking-[0.18em] uppercase">
            Información
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-soft flex items-start gap-3 transition-colors"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="hover:text-gold-soft flex items-start gap-3 transition-colors"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-gold-soft flex items-start gap-3 transition-colors"
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contact.address}, {contact.city}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contact.hours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-cream text-sm font-semibold tracking-[0.18em] uppercase">
            Redes sociales
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-cream/15 border-t">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© 2026 {company.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidad" className="hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
