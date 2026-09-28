import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { ProductCard, ServiceCard, NewsCard } from "@/components/site/cards";
import { MayoristasSection, WhyUsSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { news } from "@/data/news";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Venta de aguaymanto fresco y al por mayor" },
      {
        name: "description",
        content:
          "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor para restaurantes, tiendas, distribuidores y empresas. Solicita tu cotización.",
      },
      {
        property: "og:title",
        content: "Aguaymanto Perú | Venta de aguaymanto fresco y al por mayor",
      },
      {
        property: "og:description",
        content:
          "Aguaymanto peruano seleccionado, con atención a clientes particulares, restaurantes, tiendas y distribuidores.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Introducción */}
      <section className="py-24" id="sobre-nosotros">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTitle
              eyebrow="Sobre nosotros"
              title="Comprometidos con la calidad del aguaymanto peruano"
              text="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="leaf" size="lg">
                  <Link to="/quienes-somos">Conoce quiénes somos</Link>
                </Button>
                <Button asChild variant="quiet" size="lg">
                  <Link to="/productos">
                    Ver productos <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src={about}
                alt="Productora peruana cosechando aguaymanto en el campo"
                loading="lazy"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="bg-primary text-cream absolute -bottom-6 -left-6 hidden rounded-xl p-6 shadow-[var(--shadow-lift)] sm:block">
                <p className="font-display text-gold-soft text-3xl">100%</p>
                <p className="mt-1 max-w-[9rem] text-xs leading-snug">
                  Aguaymanto de origen peruano
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="surface-cream py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Nuestros productos"
              title="Aguaymanto seleccionado para cada tipo de cliente"
              className="max-w-2xl"
            />
            <Reveal delay={100}>
              <Button asChild variant="quiet">
                <Link to="/productos">
                  Ver catálogo <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Acompañamos cada pedido, del primer contacto a la entrega"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <MayoristasSection />
      <WhyUsSection />

      {/* Galería */}
      <section className="py-24" id="galeria">
        <div className="container-page">
          <SectionTitle
            eyebrow="Galería"
            title="El campo, el fruto y nuestro trabajo"
            align="center"
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="surface-cream py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Noticias y actualidad"
              title="Novedades de la empresa y del aguaymanto"
              className="max-w-2xl"
            />
            <Reveal delay={100}>
              <Button asChild variant="quiet">
                <Link to="/noticias">
                  Ver todas <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {news.map((n, i) => (
              <NewsCard key={n.slug} item={n} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" id="faq">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de comprar"
            text="Si no encuentras la respuesta que buscas, escríbenos y te atendemos directamente."
          />
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
