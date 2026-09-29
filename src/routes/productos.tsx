import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, QualitySection, MayoristasSection } from "@/components/site/sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y formatos especiales según requerimiento.",
      },
      { property: "og:title", content: "Productos | Aguaymanto fresco y presentaciones" },
      {
        property: "og:description",
        content: "Aguaymanto peruano seleccionado para clientes particulares y comerciales.",
      },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano seleccionado"
        text="Cada presentación se coordina según el uso final, el volumen y la disponibilidad del producto."
        image={hero1}
        alt="Aguaymanto fresco peruano sobre una mesa de madera"
      />

      <section className="py-24" id="aguaymanto-fresco">
        <div className="container-page">
          <SectionTitle
            eyebrow="Catálogo"
            title="Presentaciones disponibles"
            text="Consulta por cualquiera de nuestras presentaciones: te respondemos con disponibilidad y condiciones."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Fichas detalladas */}
      <section className="surface-cream py-24" id="presentaciones">
        <div className="container-page">
          <SectionTitle eyebrow="Fichas de producto" title="Detalle de cada presentación" />
          <div className="mt-14 space-y-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} as="article">
                <div className="border-border bg-card grid overflow-hidden rounded-xl border shadow-[var(--shadow-card)] lg:grid-cols-[0.8fr_1.2fr]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full min-h-[14rem] w-full object-cover"
                  />
                  <div className="p-8 sm:p-10">
                    <h3 className="text-primary text-2xl">{p.name}</h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{p.description}</p>
                    <dl className="border-border mt-7 grid gap-x-8 gap-y-4 border-t pt-7 sm:grid-cols-2">
                      {p.specs.map((s) => (
                        <div key={s.label}>
                          <dt className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                            {s.label}
                          </dt>
                          <dd className="text-foreground mt-1 text-sm font-medium">{s.value}</dd>
                        </div>
                      ))}
                      <div>
                        <dt className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                          Ficha técnica
                        </dt>
                        <dd className="text-foreground mt-1 text-sm font-medium">
                          Disponible a solicitud
                        </dd>
                      </div>
                    </dl>
                    <Button asChild variant="gold" className="mt-8">
                      <Link to="/contacto" search={{ producto: p.slug }}>
                        {p.cta}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QualitySection />
      <MayoristasSection />
    </>
  );
}
