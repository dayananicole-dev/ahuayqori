import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, MayoristasSection, WhyUsSection } from "@/components/site/sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta mayorista de aguaymanto en Perú" },
      {
        name: "description",
        content:
          "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Servicios | Venta mayorista de aguaymanto en Perú" },
      {
        property: "og:description",
        content: "Atención comercial para restaurantes, tiendas, distribuidores y empresas.",
      },
    ],
  }),
  component: Servicios,
});

const steps = [
  { title: "Cuéntanos tu requerimiento", text: "Producto, cantidad aproximada y ciudad de entrega." },
  { title: "Evaluamos disponibilidad", text: "Revisamos presentación, volumen y tiempos posibles." },
  { title: "Enviamos la cotización", text: "Recibes condiciones claras para tomar una decisión." },
  { title: "Coordinamos la entrega", text: "Acordamos fechas y seguimiento del pedido." },
];

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales alrededor del aguaymanto"
        text="Atendemos desde consultas puntuales hasta pedidos recurrentes de volumen."
        image={hero3}
        alt="Aguaymanto empacado listo para su distribución comercial"
      />

      <section className="py-24" id="venta">
        <div className="container-page">
          <SectionTitle eyebrow="Qué ofrecemos" title="Servicios para cada tipo de cliente" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="surface-cream py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Cómo trabajamos"
            title="Un proceso simple y ordenado"
            align="center"
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} as="li">
                <div className="border-border bg-card h-full rounded-xl border p-7">
                  <span className="bg-gold text-gold-foreground grid size-9 place-items-center rounded-full text-sm font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="text-primary mt-4 text-base">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200} className="mt-12 text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <MayoristasSection />
      <WhyUsSection />
    </>
  );
}
