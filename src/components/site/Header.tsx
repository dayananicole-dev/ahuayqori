import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { nav, contact } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "bg-primary text-cream/80 hidden text-xs transition-all duration-500 lg:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100",
        )}
      >
        <div className="container-page flex h-9 items-center justify-between">
          <p>Aguaymanto peruano seleccionado · Atención a empresas, tiendas y distribuidores</p>
          <div className="flex items-center gap-5">
            <a href={contact.phoneHref} className="hover:text-gold-soft flex items-center gap-2">
              <Phone className="size-3.5" aria-hidden="true" />
              {contact.phone}
            </a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${contact.email}`} className="hover:text-gold-soft">
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "bg-background/95 border-border border-b shadow-[var(--shadow-card)] backdrop-blur"
            : "bg-background/85 border-b border-transparent backdrop-blur-sm",
        )}
      >
        <nav
          className="container-page flex items-center justify-between gap-6 py-3"
          aria-label="Navegación principal"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "bg-gold absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild variant="gold" className="hidden sm:inline-flex">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="border-border text-primary hover:border-gold grid size-11 place-items-center rounded-md border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <div
          id="menu-movil"
          className={cn(
            "border-border overflow-hidden border-t transition-[max-height,opacity] duration-400 lg:hidden",
            open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0",
          )}
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-foreground hover:bg-accent hover:text-primary block rounded-md px-3 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="gold" size="lg" className="w-full">
                <Link to="/contacto">Solicitar cotización</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
