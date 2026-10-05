import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import about from "@/assets/about.jpg";
import n2 from "@/assets/noticia-2.jpg";
import n3 from "@/assets/noticia-3.jpg";

const items = [
  { src: hero2, alt: "Campos y plantaciones de aguaymanto en los andes peruanos", span: "row-span-2" },
  { src: about, alt: "Productora cosechando aguaymanto en el campo", span: "" },
  { src: hero1, alt: "Aguaymanto fresco recién seleccionado", span: "" },
  { src: n3, alt: "Selección y control de calidad del aguaymanto", span: "" },
  { src: n2, alt: "Plantas de aguaymanto en cultivo", span: "" },
  { src: hero3, alt: "Aguaymanto empacado listo para su distribución", span: "md:col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, i) => (
          <Reveal key={item.alt} delay={i * 60} className={item.span}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group focus-visible:ring-ring h-full w-full overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:outline-none"
              aria-label={`Ampliar imagen: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full min-h-[10rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          className="animate-fade-soft fixed inset-0 z-[60] grid place-items-center bg-[oklch(0.2_0.02_155_/_0.92)] p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Cerrar"
            className="text-cream border-cream/40 hover:bg-cream hover:text-primary absolute top-5 right-5 grid size-11 place-items-center rounded-full border"
          >
            <X className="size-5" />
          </button>
          <img
            src={items[open]!.src}
            alt={items[open]!.alt}
            className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
