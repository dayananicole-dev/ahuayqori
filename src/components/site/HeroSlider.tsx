import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "gold" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: hero1,
    alt: "Aguaymanto fresco peruano con su cáliz abierto sobre madera",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: hero2,
    alt: "Plantación de aguaymanto en los andes peruanos al amanecer",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    image: hero3,
    alt: "Aguaymanto seleccionado y empacado listo para su comercialización",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => setIndex((n + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), 5000);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="relative isolate h-[92svh] min-h-[560px] w-full overflow-hidden"
      aria-roledescription="carrusel"
      aria-label="Presentación de la empresa"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={cn(
              "size-full object-cover",
              i === index && "animate-slow-zoom",
            )}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-end pb-24 sm:items-center sm:pb-0">
        <div className="container-page pt-28">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={cn(
                "max-w-3xl transition-all duration-700",
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute translate-y-6 opacity-0",
              )}
              aria-hidden={i !== index}
            >
              <p className="text-gold-soft mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase">
                <span className="bg-gold inline-block h-px w-10" aria-hidden="true" />
                Aguaymanto del Perú
              </p>
              {i === 0 ? (
                <h1 className="text-cream text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
              ) : (
                <p className="font-display text-cream text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
                  {slide.title}
                </p>
              )}
              {slide.text ? (
                <p className="text-cream/85 mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
                  {slide.text}
                </p>
              ) : null}
              <div className="mt-9 flex flex-wrap gap-3">
                {slide.actions.map((a) => (
                  <Button key={a.label} asChild variant={a.variant} size="lg" tabIndex={i === index ? 0 : -1}>
                    <Link to={a.to}>{a.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20">
        <div className="container-page flex items-center justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Indicadores del carrusel">
            {slides.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index ? "bg-gold w-12" : "bg-cream/50 hover:bg-cream w-6",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(index - 1)}
              aria-label="Diapositiva anterior"
              className="border-cream/40 text-cream hover:bg-cream hover:text-primary grid size-11 place-items-center rounded-full border backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Siguiente diapositiva"
              className="border-cream/40 text-cream hover:bg-cream hover:text-primary grid size-11 place-items-center rounded-full border backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
