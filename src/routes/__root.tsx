import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <div className="surface-cream flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-gold text-7xl font-semibold">404</p>
        <h1 className="text-primary mt-4 text-2xl">Página no encontrada</h1>
        <p className="text-muted-foreground mt-3 text-sm">
          La página que buscas no existe o fue movida.
        </p>
        <Button asChild variant="gold" className="mt-7">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="surface-cream flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-primary text-2xl">Esta página no se pudo cargar</h1>
        <p className="text-muted-foreground mt-3 text-sm">
          Ocurrió un problema. Puedes intentar nuevamente o volver al inicio.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button
            variant="gold"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Intentar de nuevo
          </Button>
          <Button asChild variant="quiet">
            <a href="/">Ir al inicio</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aguaymanto Perú | Producción y venta de aguaymanto peruano" },
      {
        name: "description",
        content:
          "Empresa peruana dedicada a la producción y comercialización de aguaymanto fresco para clientes particulares, restaurantes, tiendas y distribuidores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_PE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#214D32" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="contenido">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
