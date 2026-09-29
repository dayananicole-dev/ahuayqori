import { createFileRoute } from "@tanstack/react-router";
import { company, contact } from "@/config/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Política de privacidad sobre el tratamiento de los datos personales enviados a través del formulario de contacto del sitio.",
      },
      { property: "og:title", content: "Política de privacidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Cómo tratamos los datos personales enviados desde nuestro sitio web.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="container-page max-w-3xl pt-40 pb-24">
      <h1 className="text-primary text-4xl">Política de privacidad</h1>
      <div className="text-muted-foreground mt-8 space-y-5 leading-relaxed">
        <p>
          Este documento es un texto inicial editable. Debe ser revisado y adaptado por{" "}
          {company.name} antes de su publicación definitiva.
        </p>
        <h2 className="text-primary pt-4 text-xl">Datos que recopilamos</h2>
        <p>
          Recopilamos únicamente los datos que el usuario envía voluntariamente a través del
          formulario de contacto: nombre, empresa, correo electrónico, teléfono, ciudad, tipo de
          cliente, producto de interés, cantidad aproximada, asunto y mensaje.
        </p>
        <h2 className="text-primary pt-4 text-xl">Finalidad</h2>
        <p>
          Los datos se utilizan exclusivamente para responder consultas comerciales, elaborar
          cotizaciones y dar seguimiento a la solicitud del usuario.
        </p>
        <h2 className="text-primary pt-4 text-xl">Conservación y terceros</h2>
        <p>
          No compartimos los datos con terceros ajenos a la atención de la consulta. [DETALLAR
          PLAZO DE CONSERVACIÓN]
        </p>
        <h2 className="text-primary pt-4 text-xl">Derechos del usuario</h2>
        <p>
          El usuario puede solicitar el acceso, la rectificación o la eliminación de sus datos
          escribiendo a {contact.email}.
        </p>
      </div>
    </div>
  );
}
