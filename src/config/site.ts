/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: aparecen en todo el sitio.
 */

export const company = {
  name: "[NOMBRE DE LA EMPRESA]",
  shortName: "Aguaymanto Perú",
  tagline: "Calidad y compromiso desde el campo peruano.",
  legalName: "[NOMBRE DE LA EMPRESA]",
  foundedLabel: "[AÑO]",
};

export const contact = {
  whatsapp: "51999999999", // [WHATSAPP] solo dígitos, con código de país
  whatsappDisplay: "[WHATSAPP]",
  phone: "+51 943 569 100",
  phoneHref: "tel:+51943569100",
  email: "contacto@ahuayqori.com",
  address: "Comunidad Sauseda S/N",
  city: "Limatambo - Anta - Cusco, Perú",
  hours: "Lunes a Sábado, 8:00 a.m. – 6:00 p.m.",
};

export const whatsappMessage =
  "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.";

export const whatsappUrl = (message: string = whatsappMessage) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const socials = [
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "TikTok", url: "#" },
  { name: "LinkedIn", url: "#" },
] as const;

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const SITE_URL = "https://aguaymanto-peru.lovable.app";
