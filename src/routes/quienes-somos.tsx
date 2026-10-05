import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, Leaf, Target, Users } from "lucide-react";
import { PageHero, WhyUsSection } from "@/components/site/sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard } from "@/components/site/cards";
import { Gallery } from "@/components/site/Gallery";
import { Button } from "@/components/ui/button";
import { commitments, mission, timeline, values, vision } from "@/data/company";
import hero2 from "@/assets/hero-2.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa, historia, misión, visión, valores y compromiso con la producción y comercialización de aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano, dedicada al aguaymanto de calidad.",
      },
    ],
  }),
  component: QuienesSomos,
});

const commitmentIcons = [Leaf, Users, HeartHandshake];

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        text="Producción, selección y comercialización de aguaymanto con una forma de trabajo simple, ordenada y cercana al cliente."
        image={hero2}
        alt="Plantación de aguaymanto en los andes peruanos"
      />

      {/* Nuestra empresa */}
      <section className="py-24" id="nuestra-empresa">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={about}
              alt="Productora seleccionando aguaymanto recién cosechado"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionTitle eyebrow="Nuestra empresa" title="Quiénes somos y qué hacemos" />
            <Reveal delay={100}>
              <div className="text-muted-foreground mt-6 space-y-4 text-sm leading-relaxed sm:text-base">
                <p>
                  Somos una empresa peruana dedicada a la producción, comercialización y venta de
                  aguaymanto. Trabajamos con el fruto desde el campo hasta la entrega, cuidando su
                  selección, presentación y frescura.
                </p>
                <p>
                  Atendemos a clientes particulares y también a restaurantes, tiendas,
                  distribuidores y empresas que requieren aguaymanto de forma puntual o recurrente.
                </p>
                <p>
                  Lo que nos diferencia es una atención directa y una forma de trabajo ordenada:
                  entendemos el requerimiento, evaluamos la disponibilidad y proponemos la
                  presentación adecuada para cada caso.
                </p>
                <p>
                  Nuestro compromiso es mantener un estándar de calidad constante y relaciones
                  comerciales claras y duraderas.
                </p>
              </div>
              <Button asChild variant="leaf" size="lg" className="mt-8">
                <Link to="/productos">Conocer nuestros productos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="surface-cream py-24" id="nuestra-historia">
        <div className="container-page">
          <SectionTitle
            eyebrow="Nuestra historia"
            title="Una trayectoria en construcción"
            text="Estos textos son iniciales y pueden reemplazarse por la historia real de la empresa."
            align="center"
          />
          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.step} delay={i * 100} as="li">
                <div className="border-border bg-card relative h-full rounded-xl border p-7">
                  <span
                    className="bg-gold absolute -top-px left-7 h-1 w-12 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="font-display text-gold text-3xl">{t.step}</span>
                  <h3 className="text-primary mt-3 text-lg">{t.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-24" id="mision-vision">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="bg-primary text-cream h-full rounded-xl p-10">
              <span className="bg-gold text-gold-foreground grid size-14 place-items-center rounded-lg">
                <Target className="size-7" aria-hidden="true" />
              </span>
              <h2 className="text-cream mt-7 text-2xl">Nuestra Misión</h2>
              <p className="text-cream/80 mt-4 leading-relaxed">{mission}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="border-border bg-card h-full rounded-xl border p-10 shadow-[var(--shadow-card)]">
              <span className="bg-accent text-leaf grid size-14 place-items-center rounded-lg">
                <Compass className="size-7" aria-hidden="true" />
              </span>
              <h2 className="text-primary mt-7 text-2xl">Nuestra Visión</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="surface-cream py-24" id="valores">
        <div className="container-page">
          <SectionTitle eyebrow="Nuestros valores" title="Lo que guía nuestro trabajo" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <ValueCard key={v.title} title={v.title} text={v.text} index={i} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="py-24" id="compromiso">
        <div className="container-page">
          <SectionTitle eyebrow="Nuestro compromiso" title="Tres pilares que sostienen la empresa" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {commitments.map((c, i) => {
              const Icon = commitmentIcons[i] ?? Leaf;
              return (
                <Reveal key={c.title} delay={i * 100}>
                  <article className="border-border bg-card card-lift h-full rounded-xl border p-8">
                    <span className="bg-accent text-primary grid size-12 place-items-center rounded-lg">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-primary mt-6 text-lg">{c.title}</h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <WhyUsSection />

      <section className="py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" align="center" />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
