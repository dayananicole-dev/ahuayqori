import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { reasons } from "@/data/company";
import { qualityAttributes } from "@/data/products";
import { whatsappUrl } from "@/config/site";

/** Sección orientada a clientes mayoristas y empresas. */
export function MayoristasSection() {
  const bullets = [
    "Pedidos por volumen",
    "Atención personalizada",
    "Presentaciones comerciales",
    "Coordinación de entregas",
    "Cotizaciones",
  ];

  return (
    <section className="bg-primary relative overflow-hidden py-24" id="mayoristas">
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
        <SectionTitle
          eyebrow="Clientes mayoristas"
          tone="dark"
          title="¿Buscas un proveedor de aguaymanto?"
          text="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
        />
        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="border-cream/15 bg-cream/5 text-cream flex items-center gap-3 rounded-lg border px-4 py-4 text-sm"
              >
                <span className="bg-gold text-gold-foreground grid size-6 shrink-0 place-items-center rounded-full">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="surface-cream py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="¿Por qué elegirnos?"
          title="Razones para trabajar con nosotros"
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="border-border bg-card card-lift h-full rounded-xl border p-6">
                <span className="bg-gold text-gold-foreground grid size-9 place-items-center rounded-full text-sm font-semibold">
                  {i + 1}
                </span>
                <h3 className="text-primary mt-4 text-base">{r.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection() {
  return (
    <section className="py-24" id="calidad">
      <div className="container-page">
        <SectionTitle
          eyebrow="Calidad que se nota"
          title="Atributos que cuidamos en cada entrega"
          text="Nuestro trabajo se apoya en procesos simples y consistentes que buscan mantener un producto uniforme."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {qualityAttributes.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div className="bg-card hover:bg-accent h-full p-8 transition-colors duration-400">
                <span className="text-gold font-display text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-primary mt-3 text-lg">{a.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-20">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 size-full object-cover"
        width={1920}
        height={1088}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="container-page">
        <p className="text-gold-soft mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase">
          <span className="bg-gold inline-block h-px w-10" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="text-cream max-w-3xl text-4xl leading-[1.08] text-balance sm:text-5xl">
          {title}
        </h1>
        {text ? (
          <p className="text-cream/80 mt-5 max-w-2xl text-base leading-relaxed">{text}</p>
        ) : null}
      </div>
    </section>
  );
}
