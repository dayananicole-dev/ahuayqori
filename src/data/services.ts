export type Service = {
  slug: string;
  icon:
    | "ShoppingBasket"
    | "Truck"
    | "ChefHat"
    | "Store"
    | "Settings2"
    | "Handshake";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "venta",
    icon: "ShoppingBasket",
    title: "Venta de aguaymanto",
    description: "Venta de producto para clientes particulares y comerciales.",
  },
  {
    slug: "venta-mayorista",
    icon: "Truck",
    title: "Venta al por mayor",
    description: "Atención de pedidos de mayor volumen.",
  },
  {
    slug: "restaurantes",
    icon: "ChefHat",
    title: "Atención a restaurantes",
    description:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
  },
  {
    slug: "tiendas-distribuidores",
    icon: "Store",
    title: "Atención a tiendas y distribuidores",
    description:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
  },
  {
    slug: "pedidos-personalizados",
    icon: "Settings2",
    title: "Pedidos personalizados",
    description:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
  },
  {
    slug: "asesoria-comercial",
    icon: "Handshake",
    title: "Asesoría comercial",
    description:
      "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
  },
];
