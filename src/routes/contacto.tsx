import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Button } from "@/components/ui/button";
import { contact, whatsappUrl } from "@/config/site";
import hero2 from "@/assets/hero-2.jpg";

type ContactoSearch = { producto?: string | undefined; servicio?: string | undefined };

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): ContactoSearch => ({
    producto: typeof search["producto"] === "string" ? search["producto"] : undefined,
    servicio: typeof search["servicio"] === "string" ? search["servicio"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para consultar precios, presentaciones y pedidos al por mayor de aguaymanto peruano.",
      },
      { property: "og:title", content: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        property: "og:description",
        content: "Atendemos consultas comerciales de empresas, tiendas y distribuidores.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();

  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsappDisplay,
      href: whatsappUrl(),
      external: true,
    },
    { icon: Phone, label: "Teléfono", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "Correo electrónico", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Dirección", value: `${contact.address}, ${contact.city}` },
    { icon: Clock, label: "Horario de atención", value: contact.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        text="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        image={hero2}
        alt="Campo de aguaymanto en los andes peruanos"
      />

      <section className="py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle eyebrow="Datos de contacto" title="Conversemos" />
            <ul className="mt-10 space-y-5">
              {items.map((i) => (
                <Reveal key={i.label} as="li">
                  <div className="border-border bg-card flex items-start gap-4 rounded-xl border p-5">
                    <span className="bg-accent text-primary grid size-11 shrink-0 place-items-center rounded-lg">
                      <i.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                        {i.label}
                      </p>
                      {i.href ? (
                        <a
                          href={i.href}
                          target={i.external ? "_blank" : undefined}
                          rel={i.external ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-leaf mt-1 block font-medium"
                        >
                          {i.value}
                        </a>
                      ) : (
                        <p className="text-foreground mt-1 font-medium">{i.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={150}>
              <Button asChild variant="leaf" size="lg" className="mt-8 w-full">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Consultar por WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>

          <div>
            <SectionTitle eyebrow="Formulario" title="Envíanos tu consulta" />
            <Reveal delay={100} className="mt-10">
              <ContactForm defaultProduct={producto} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="surface-cream py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
