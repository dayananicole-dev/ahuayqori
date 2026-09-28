import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** [LOGO DE LA EMPRESA] — logotipo temporal de texto. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      aria-label="Ir al inicio"
      className="group inline-flex items-center gap-3 focus-visible:ring-ring rounded-md focus-visible:ring-2 focus-visible:outline-none"
    >
      <span
        className="grid size-10 shrink-0 place-items-center rounded-full"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor">
          <path
            d="M12 3c2.6 2 4 4.4 4 7a4 4 0 1 1-8 0c0-2.6 1.4-5 4-7Z"
            className="text-primary"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 14v7M8.5 18.5 12 21l3.5-2.5" className="text-primary" strokeWidth="1.6" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "font-display block text-[1.05rem] font-semibold tracking-tight",
            tone === "dark" ? "text-cream" : "text-primary",
          )}
        >
          AGUAYMANTO PERÚ
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.62rem] font-medium tracking-[0.28em] uppercase",
            tone === "dark" ? "text-gold-soft" : "text-leaf",
          )}
        >
          Producción y comercio
        </span>
      </span>
    </Link>
  );
}
