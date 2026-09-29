import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/cards";
import { news } from "@/data/news";
import n1 from "@/assets/noticia-1.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Novedades de la empresa, información sobre el cultivo del aguaymanto, mercado y producción responsable.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Novedades de la empresa y del sector del aguaymanto peruano.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias y actualidad"
        title="Novedades de la empresa y del aguaymanto"
        text="Contenido informativo sobre nuestro trabajo, el cultivo y el mercado del aguaymanto peruano."
        image={n1}
        alt="Aguaymanto peruano presentado en una feria comercial"
      />

      <section className="py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Últimas publicaciones" title="Lo más reciente" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n, i) => (
              <NewsCard key={n.slug} item={n} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
