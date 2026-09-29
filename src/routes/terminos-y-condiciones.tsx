import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/config/site";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio web y de las consultas comerciales realizadas a través de él.",
      },
      { property: "og:title", content: "Términos y condiciones | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio y de las consultas comerciales.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <div className="container-page max-w-3xl pt-40 pb-24">
      <h1 className="text-primary text-4xl">Términos y condiciones</h1>
      <div className="text-muted-foreground mt-8 space-y-5 leading-relaxed">
        <p>
          Este documento es un texto inicial editable. Debe ser revisado y adaptado por{" "}
          {company.name} antes de su publicación definitiva.
        </p>
        <h2 className="text-primary pt-4 text-xl">Uso del sitio</h2>
        <p>
          El contenido de este sitio tiene fines informativos y comerciales. La información sobre
          productos, presentaciones y disponibilidad puede variar y se confirma en cada cotización.
        </p>
        <h2 className="text-primary pt-4 text-xl">Cotizaciones y pedidos</h2>
        <p>
          Las consultas enviadas a través del sitio no constituyen un contrato de compraventa. Los
          precios, plazos y condiciones se confirman por escrito en la cotización correspondiente.
        </p>
        <h2 className="text-primary pt-4 text-xl">Propiedad intelectual</h2>
        <p>
          Los textos, imágenes y elementos gráficos del sitio pertenecen a {company.name}, salvo
          indicación en contrario.
        </p>
        <h2 className="text-primary pt-4 text-xl">Modificaciones</h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. La versión vigente es la publicada
          en esta página.
        </p>
      </div>
    </div>
  );
}
