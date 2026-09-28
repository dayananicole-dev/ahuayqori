import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChefHat,
  Handshake,
  Settings2,
  ShoppingBasket,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import type { Product } from "@/data/products";
import type { Service } from "@/data/services";
import type { NewsItem } from "@/data/news";

const icons: Record<Service["icon"], LucideIcon> = {
  ShoppingBasket,
  Truck,
  ChefHat,
  Store,
  Settings2,
  Handshake,
};

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay} as="article">
      <div className="group border-border bg-card card-lift flex h-full flex-col overflow-hidden rounded-xl border shadow-[var(--shadow-card)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="bg-cream/95 text-primary absolute top-4 left-4 rounded-full px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
            Producto
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="text-primary text-xl">{product.name}</h3>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{product.summary}</p>
          <ul className="mt-5 space-y-2 text-sm">
            {product.features.map((f) => (
              <li key={f} className="text-foreground/80 flex items-center gap-2">
                <span className="bg-gold size-1.5 rounded-full" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-7 pt-1">
            <Button asChild variant="quiet" className="w-full">
              <Link to="/contacto" search={{ producto: product.slug }}>
                {product.cta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = icons[service.icon];
  return (
    <Reveal delay={delay} as="article">
      <div className="group border-border bg-card card-lift flex h-full flex-col rounded-xl border p-8 shadow-[var(--shadow-card)]">
        <span
          className="bg-accent text-primary group-hover:bg-gold grid size-14 place-items-center rounded-lg transition-colors duration-400"
          aria-hidden="true"
        >
          <Icon className="size-6" />
        </span>
        <h3 className="text-primary mt-6 text-lg">{service.title}</h3>
        <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
          {service.description}
        </p>
        <Link
          to="/contacto"
          search={{ servicio: service.slug }}
          className="text-leaf hover:text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
        >
          Consultar
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}

export function ValueCard({
  title,
  text,
  index,
  delay = 0,
}: {
  title: string;
  text: string;
  index: number;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} as="article">
      <div className="border-border bg-card card-lift h-full rounded-xl border p-7">
        <span className="font-display text-gold text-2xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-primary mt-3 text-lg">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{text}</p>
      </div>
    </Reveal>
  );
}

export function NewsCard({ item, delay = 0 }: { item: NewsItem; delay?: number }) {
  return (
    <Reveal delay={delay} as="article">
      <div className="group border-border bg-card card-lift flex h-full flex-col overflow-hidden rounded-xl border shadow-[var(--shadow-card)]">
        <Link to="/noticias/$slug" params={{ slug: item.slug }} className="block overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-1 flex-col p-7">
          <div className="text-muted-foreground flex items-center gap-3 text-xs">
            <span className="bg-accent text-primary rounded-full px-3 py-1 font-semibold tracking-wide uppercase">
              {item.category}
            </span>
            <time dateTime={item.date}>{item.dateLabel}</time>
          </div>
          <h3 className="text-primary mt-4 text-lg leading-snug">
            <Link to="/noticias/$slug" params={{ slug: item.slug }} className="hover:text-leaf">
              {item.title}
            </Link>
          </h3>
          <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
            {item.excerpt}
          </p>
          <Link
            to="/noticias/$slug"
            params={{ slug: item.slug }}
            className="text-leaf hover:text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Leer más
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
