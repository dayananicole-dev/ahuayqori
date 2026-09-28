import fresco from "@/assets/hero-1.jpg";
import distribucion from "@/assets/hero-3.jpg";
import especiales from "@/assets/producto-3.jpg";

export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  specs: { label: string; value: string }[];
  features: string[];
};

/** Catálogo editable. Agrega nuevos productos a este arreglo. */
export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    summary:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    description:
      "Aguaymanto fresco seleccionado en campo y revisado antes de su despacho, cuidando color, firmeza y presentación del cáliz.",
    image: fresco,
    alt: "Aguaymanto fresco con cáliz abierto sobre mesa de madera",
    cta: "Solicitar información",
    specs: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "Según cotización" },
    ],
    features: ["Selección manual", "Producto fresco", "Empaque adecuado"],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    summary: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    description:
      "Formatos pensados para tiendas, distribuidores y negocios que requieren volumen constante y una presentación uniforme.",
    image: distribucion,
    alt: "Cajas de aguaymanto listas para distribución comercial",
    cta: "Consultar",
    specs: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "Según volumen" },
    ],
    features: ["Pedidos por volumen", "Coordinación de entregas", "Atención comercial"],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    summary: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    description:
      "Evaluamos requerimientos específicos de presentación y formato según el uso final del cliente y la disponibilidad del producto.",
    image: especiales,
    alt: "Presentaciones especiales de aguaymanto en frascos y empaques de papel kraft",
    cta: "Consultar presentación",
    specs: [
      { label: "Presentación", value: "[A COORDINAR]" },
      { label: "Peso", value: "[A COORDINAR]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "Según requerimiento" },
    ],
    features: ["Formatos a medida", "Asesoría previa", "Ficha técnica a solicitud"],
  },
];

export const qualityAttributes = [
  {
    title: "Selección cuidadosa",
    text: "Revisamos el fruto para mantener una presentación uniforme.",
  },
  { title: "Frescura", text: "Cuidamos los tiempos entre cosecha y despacho." },
  { title: "Presentación", text: "Buscamos un producto ordenado y atractivo." },
  { title: "Control de calidad", text: "Verificamos el producto antes de su entrega." },
  { title: "Empaque adecuado", text: "Usamos empaques que protegen el fruto." },
  { title: "Atención al cliente", text: "Acompañamos cada pedido con atención directa." },
];
