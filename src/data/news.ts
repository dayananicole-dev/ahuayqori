import n1 from "@/assets/noticia-1.jpg";
import n2 from "@/assets/noticia-2.jpg";
import n3 from "@/assets/noticia-3.jpg";

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
};

/** Noticias de ejemplo — editables o eliminables. */
export const news: NewsItem[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-08-12",
    dateLabel: "12 de agosto, 2026",
    author: "[AUTOR]",
    excerpt:
      "El interés por el aguaymanto peruano continúa creciendo entre compradores que buscan productos naturales y de origen definido.",
    image: n1,
    alt: "Aguaymanto peruano exhibido en una feria comercial de alimentos",
    content: [
      "El aguaymanto es uno de los frutos peruanos que más atención ha recibido en los últimos años por parte de compradores que buscan productos naturales, versátiles y con un origen claramente identificado.",
      "Para una empresa productora y comercializadora, esto significa una oportunidad y también una responsabilidad: mantener una calidad constante, una presentación cuidada y una comunicación clara con cada cliente.",
      "Este contenido es un texto de ejemplo y puede reemplazarse por información real de la empresa.",
    ],
  },
  {
    slug: "cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-07-03",
    dateLabel: "3 de julio, 2026",
    author: "[AUTOR]",
    excerpt:
      "El manejo del cultivo influye directamente en el sabor, el color y la presentación final del fruto.",
    image: n2,
    alt: "Plantas de aguaymanto en un campo agrícola con riego por goteo",
    content: [
      "El aguaymanto se desarrolla en zonas con condiciones específicas de clima y altitud. El manejo del cultivo, el riego y el momento de la cosecha influyen directamente en la calidad del fruto.",
      "Un manejo ordenado permite obtener frutos con mejor color, firmeza y presentación, aspectos que valoran tanto el consumidor final como el cliente comercial.",
      "Este contenido es un texto de ejemplo y puede reemplazarse por información real de la empresa.",
    ],
  },
  {
    slug: "calidad-y-produccion-responsable",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-06-18",
    dateLabel: "18 de junio, 2026",
    author: "[AUTOR]",
    excerpt:
      "Trabajamos en procesos de selección y control que buscan mantener un estándar constante en cada entrega.",
    image: n3,
    alt: "Equipo seleccionando aguaymanto en una mesa de control de calidad",
    content: [
      "La calidad no depende de una sola etapa: comienza en el campo y continúa en la selección, el empaque y la coordinación de la entrega.",
      "Por eso trabajamos en procesos ordenados que nos permitan mantener un estándar constante y responder con claridad a lo que cada cliente necesita.",
      "Este contenido es un texto de ejemplo y puede reemplazarse por información real de la empresa.",
    ],
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);
