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
  phone: "[TELÉFONO]",
  phoneHref: "tel:+51999999999",
  email: "[CORREO]",
  address: "[DIRECCIÓN]",
  city: "[CIUDAD], Perú",
  hours: "[HORARIO]",
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
