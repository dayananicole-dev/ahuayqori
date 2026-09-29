import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Tag, User } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { getNews, news } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const item = getNews(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Noticia no encontrada" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.title} | Aguaymanto Perú` },
        { name: "description", content: item.excerpt },
        { property: "og:title", content: item.title },
        { property: "og:description", content: item.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: Noticia,
});

function NoticiaNoEncontrada() {
  return (
    <div className="container-page py-40 text-center">
      <h1 className="text-primary text-3xl">Noticia no encontrada</h1>
      <Button asChild variant="gold" className="mt-7">
        <Link to="/noticias">Ver todas las noticias</Link>
      </Button>
    </div>
  );
}

function Noticia() {
  const { item } = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="surface-cream pt-40 pb-14">
          <div className="container-page max-w-3xl">
            <Link
              to="/noticias"
              className="text-leaf hover:text-primary inline-flex items-center gap-2 text-sm font-semibold"
            >
              <ArrowLeft className="size-4" /> Volver a noticias
            </Link>
            <h1 className="text-primary mt-6 text-4xl leading-[1.12] text-balance sm:text-5xl">
              {item.title}
            </h1>
            <div className="text-muted-foreground mt-7 flex flex-wrap items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <CalendarDays className="size-4" aria-hidden="true" />
                <time dateTime={item.date}>{item.dateLabel}</time>
              </span>
              <span className="flex items-center gap-2">
                <User className="size-4" aria-hidden="true" /> {item.author}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="size-4" aria-hidden="true" /> {item.category}
              </span>
            </div>
          </div>
        </header>

        <div className="container-page max-w-4xl -translate-y-8">
          <img
            src={item.image}
            alt={item.alt}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
          />
        </div>

        <div className="container-page max-w-3xl pb-20">
          <div className="text-foreground/85 space-y-5 leading-relaxed">
            {item.content.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="bg-accent mt-12 rounded-xl p-8 text-center">
            <p className="text-primary font-display text-xl">
              ¿Te interesa nuestro aguaymanto?
            </p>
            <Button asChild variant="gold" className="mt-5">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="surface-cream py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Noticias relacionadas" title="Sigue leyendo" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {related.map((n, i) => (
              <NewsCard key={n.slug} item={n} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
