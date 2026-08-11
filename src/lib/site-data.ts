/**
 * Données du site Goulet Immobilier.
 *
 * Toutes les informations ci-dessous proviennent du site actuel
 * (gouletimmobilier.com). Aucune statistique, récompense ni témoignage
 * n'a été inventé. Les éléments non vérifiés sont explicitement marqués
 * comme placeholders (`placeholder: true`).
 *
 * La structure des propriétés est prête pour une future intégration
 * Centris / MLS / API immobilière (voir `Property`).
 */

import heroImg from "@/assets/hero.jpg";
import acheterImg from "@/assets/acheter.jpg";
import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import secteursImg from "@/assets/secteurs.jpg";
import simonImg from "@/assets/simon.png";
import sylvainImg from "@/assets/sylvain.png";

export const images = {
  hero: heroImg,
  acheter: acheterImg,
  secteurs: secteursImg,
  simon: simonImg,
  sylvain: sylvainImg,
};

export const agency = {
  name: "Goulet Immobilier",
  brokerage: "Groupe Sutton-Actuel inc.",
  promise: "Vous servir comme on aime être servi.",
  city: "Boucherville",
  facebook: "https://www.facebook.com/gouletimmobilier",
  instagram: "https://www.instagram.com/",
  site: "https://gouletimmobilier.com",
};

export type Broker = {
  slug: string;
  firstName: string;
  name: string;
  title: string;
  phone: string;
  phoneHref: string;
  email: string;
  base: string;
  image: string;
  bio: string[];
};

export const brokers: Broker[] = [
  {
    slug: "simon-goulet",
    firstName: "Simon",
    name: "Simon Goulet",
    title: "Courtier immobilier résidentiel et commercial",
    phone: "438 399-4934",
    phoneHref: "tel:+14383994934",
    email: "goulets@sutton.com",
    base: "Boucherville · Rive-Sud de Montréal",
    image: simonImg,
    bio: [
      "Simon accompagne les vendeurs, les acheteurs et les investisseurs sur la Rive-Sud de Montréal et dans la grande région métropolitaine, en résidentiel comme en commercial.",
      "Son approche est simple : comprendre d'abord votre situation, puis bâtir une stratégie claire, appuyée sur une lecture attentive de votre secteur et sur une communication franche à chaque étape.",
    ],
  },
  {
    slug: "sylvain-goulet",
    firstName: "Sylvain",
    name: "Sylvain Goulet",
    title: "Courtier immobilier",
    phone: "514 604-7695",
    phoneHref: "tel:+15146047695",
    email: "sylvaingoulet.courtier@gmail.com",
    base: "Granby · Estrie",
    image: sylvainImg,
    bio: [
      "Installé à Granby, en Estrie — d'où il est natif —, Sylvain accompagne les gens qui souhaitent vendre ou acquérir une propriété dans la région, tout en collaborant étroitement avec Simon sur la Rive-Sud.",
      "Fort de plus de 20 années d'expérience en immobilier, il met l'accent sur la transparence, la connaissance du marché et un service réellement personnalisé.",
    ],
  },
];

export const simon: Broker = brokers[0]!;
export const sylvain: Broker = brokers[1]!;

/** Repères de confiance — uniquement des informations présentes sur le site actuel. */
export const trustPoints = [
  { value: "20 +", label: "années d'expérience en immobilier" },
  { value: "2", label: "générations de courtiers" },
  { value: "Résidentiel", label: "et commercial" },
  { value: "Rive-Sud", label: "et Estrie" },
];

export type PropertyStatus = "a-vendre" | "vendu";
export type PropertyCategory = "residentiel" | "commercial";

export type Property = {
  /** Identifiant interne (prêt pour un mapping Centris / MLS). */
  slug: string;
  /** Numéro de référence Centris tel que publié. */
  centris: string;
  status: PropertyStatus;
  category: PropertyCategory;
  type: string;
  price: number | null;
  priceLabel: string;
  city: string;
  district: string;
  address: string;
  units?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  image: string;
  /** URL de l'inscription officielle. */
  source: string;
};

/** Inscriptions actives et vendues telles que publiées sur le site actuel. */
export const properties: Property[] = [
  {
    slug: "990-rue-napoleon-plateau-mont-royal",
    centris: "26207026",
    status: "a-vendre",
    category: "residentiel",
    type: "Appartement",
    price: 549000,
    priceLabel: "549 000 $",
    city: "Montréal",
    district: "Le Plateau-Mont-Royal",
    address: "990 Rue Napoléon, Le Plateau-Mont-Royal",
    units: "1 unité",
    image: prop1,
    source:
      "https://gouletimmobilier.com/fr/inscriptions/appartement-a-vendre-le-plateau-mont-royal-montreal--5796002",
  },
  {
    slug: "1325-rue-blainville-vieux-longueuil",
    centris: "12942087",
    status: "a-vendre",
    category: "residentiel",
    type: "Maison",
    price: 499900,
    priceLabel: "499 900 $",
    city: "Longueuil",
    district: "Le Vieux-Longueuil",
    address: "1325 Rue Blainville, Le Vieux-Longueuil",
    units: "1 unité",
    image: prop2,
    source:
      "https://gouletimmobilier.com/fr/inscriptions/maison-a-vendre-le-vieux-longueuil-longueuil--5755012",
  },
  {
    slug: "50-rue-du-bord-de-leau-vieux-longueuil",
    centris: "19914407",
    status: "a-vendre",
    category: "residentiel",
    type: "Appartement",
    price: 329000,
    priceLabel: "329 000 $",
    city: "Longueuil",
    district: "Le Vieux-Longueuil",
    address: "50 Rue du Bord-de-l'Eau E., Le Vieux-Longueuil",
    units: "1 unité",
    image: prop3,
    source:
      "https://gouletimmobilier.com/fr/inscriptions/appartement-a-vendre-le-vieux-longueuil-longueuil--5662854",
  },
  {
    slug: "maison-la-presentation",
    centris: "—",
    status: "vendu",
    category: "residentiel",
    type: "Maison",
    price: null,
    priceLabel: "Vendu",
    city: "La Présentation",
    district: "La Présentation",
    address: "Adresse non publiée",
    image: prop2,
    source:
      "https://gouletimmobilier.com/fr/inscriptions/maison-a-vendre-la-presentation--5716976",
  },
];

export const featuredProperties = properties.filter((p) => p.status === "a-vendre");

export const propertyTypes = ["Maison", "Appartement", "Condo", "Immeuble à revenus", "Terrain", "Propriété commerciale"];
export const priceRanges = [
  "Moins de 300 000 $",
  "300 000 $ – 500 000 $",
  "500 000 $ – 750 000 $",
  "750 000 $ – 1 M$",
  "Plus de 1 M$",
];
export const timelines = [
  "Dès que possible",
  "D'ici 3 mois",
  "D'ici 6 mois",
  "D'ici un an",
  "Je m'informe seulement",
];

export type Testimonial = {
  slug: string;
  author: string;
  title: string;
  year?: string;
  quote: string;
  stars?: number;
  source: string;
};

/** Témoignages authentiques publiés sur le site actuel (ponctuation légèrement ajustée). */
export const testimonials: Testimonial[] = [
  {
    slug: "c-est-un-2-pour-1",
    author: "Client — achat et vente de condo",
    title: "C'est un 2 pour 1",
    year: "2020",
    stars: 5,
    quote:
      "En 2020, j'ai eu le plaisir d'avoir Simon Goulet et Sylvain Goulet sur mon chemin pour l'achat et la vente d'un condo. Ils ont fait preuve d'une grande écoute.",
    source: "https://gouletimmobilier.com/fr/temoignages/c-est-un-2-pour-1--5756",
  },
  {
    slug: "impressionnes",
    author: "Clients référés par une connaissance",
    title: "Impressionnés",
    quote:
      "Nous avons été référés par une connaissance. Hésitants, nous avons rencontré M. Goulet afin qu'il nous explique sa démarche. Nous avons signé sur le champ. Transparence, connaissances et professionnalisme.",
    source: "https://gouletimmobilier.com/fr/temoignages/impressionnes--5710",
  },
  {
    slug: "c-est-fait",
    author: "Cliente — vente de condo",
    title: "C'est fait !",
    quote:
      "J'ai vendu mon condo grâce à Simon Goulet. Je vous le recommande à 100 % pour son écoute, mais aussi sa grande patience.",
    source: "https://gouletimmobilier.com/fr/temoignages/c-est-fait--5766",
  },
  {
    slug: "merci",
    author: "Clients — achat de propriété",
    title: "Merci",
    quote:
      "On a beaucoup aimé Simon, car il a à cœur de satisfaire et de respecter nos besoins. Il a le souci de trouver une propriété à un prix juste, sans tomber dans la surenchère.",
    source: "https://gouletimmobilier.com/fr/temoignages/merci--7512",
  },
  {
    slug: "merci-encore",
    author: "Client — vente de maison",
    title: "Merci encore",
    quote:
      "J'ai eu la chance de travailler avec lui pour vendre ma maison et son service est vraiment personnalisé et très efficace. Merci encore Sylvain.",
    source: "https://gouletimmobilier.com/fr/temoignages/merci-encore--5850",
  },
];

export type Sector = {
  slug: string;
  name: string;
  region: string;
  note: string;
};

export const sectors: Sector[] = [
  { slug: "longueuil", name: "Longueuil", region: "Rive-Sud", note: "Le Vieux-Longueuil, Greenfield Park, Saint-Hubert." },
  { slug: "boucherville", name: "Boucherville", region: "Rive-Sud", note: "Notre place d'affaires, point névralgique entre Montréal et la Rive-Sud." },
  { slug: "brossard", name: "Brossard", region: "Rive-Sud", note: "Secteurs familiaux et accès rapide au centre-ville." },
  { slug: "saint-bruno-de-montarville", name: "Saint-Bruno-de-Montarville", region: "Rive-Sud", note: "Quartiers boisés et milieu de vie recherché." },
  { slug: "varennes", name: "Varennes", region: "Rive-Sud", note: "Bord du fleuve et développements résidentiels." },
  { slug: "vercheres", name: "Verchères", region: "Rive-Sud", note: "Village riverain, propriétés avec terrain." },
  { slug: "montreal", name: "Montréal", region: "Grande région métropolitaine", note: "Plateau-Mont-Royal, quartiers centraux et immeubles à revenus." },
  { slug: "granby", name: "Granby", region: "Estrie", note: "Le secteur de Sylvain, natif de la région." },
  { slug: "estrie", name: "Estrie", region: "Estrie", note: "Accompagnement pour vendre ou acquérir dans la région." },
];

export const processSteps = [
  {
    number: "01",
    title: "Écouter",
    text: "Comprendre votre situation, vos priorités et votre échéancier.",
  },
  {
    number: "02",
    title: "Conseiller",
    text: "Vous présenter une stratégie claire, appuyée par une connaissance approfondie du marché.",
  },
  {
    number: "03",
    title: "Valoriser ou rechercher",
    text: "Mettre votre propriété en valeur ou trouver les occasions correspondant réellement à vos critères.",
  },
  {
    number: "04",
    title: "Négocier et sécuriser",
    text: "Défendre vos intérêts et vous accompagner dans les aspects importants de la transaction.",
  },
];

export const commitments = [
  { title: "Une écoute réelle", text: "Prendre le temps de comprendre votre projet avant de proposer quoi que ce soit." },
  { title: "Un service personnalisé et complet", text: "Un accompagnement adapté à votre réalité, du premier échange jusqu'à la signature." },
  { title: "Des critères élevés d'excellence", text: "Rigueur dans la préparation, la mise en marché et le suivi de chaque dossier." },
  { title: "Une présence à toutes les étapes", text: "Des réponses claires et une disponibilité constante tout au long de la transaction." },
  { title: "Une collaboration de confiance", text: "Un réseau de professionnels reconnus : inspection, notariat, financement, rénovation." },
  { title: "Une implication dans la communauté", text: "Un engagement sincère envers le milieu où nous vivons et travaillons." },
];

/** Texte vérifiable publié sur le site actuel. */
export const dansLaRue = {
  title: "Un don à l'organisme Dans la rue, à chaque transaction",
  text: "Depuis janvier 2015, pour chacune de nos transactions, un don est remis à l'organisme Dans la rue par nos courtiers, franchisés, ainsi que par groupe sutton – québec. À ce jour, au-dessus de 400 000 $ ont été versés, et les fonds permettent aux jeunes sans-abri de 12 à 21 ans d'obtenir l'hébergement d'urgence au Bunker.",
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  /** Contenu de démonstration : à remplacer par les articles réels. */
  placeholder: boolean;
  body: string[];
};

export const articleCategories = ["Vendre", "Acheter", "Marché immobilier", "Investissement", "Vie de quartier"];

export const articles: Article[] = [
  {
    slug: "preparer-la-vente-de-sa-propriete",
    category: "Vendre",
    title: "Préparer la vente de sa propriété : les décisions qui comptent",
    excerpt:
      "Avant la première visite, quelques choix simples influencent la perception des acheteurs et le délai de vente.",
    readingTime: "5 min",
    image: blog1,
    placeholder: true,
    body: [
      "Contenu de démonstration à remplacer par l'article réel de Goulet Immobilier.",
      "La préparation d'une propriété commence bien avant la mise en marché : état des lieux, documents, corrections mineures et positionnement de prix. Chaque décision se prend en fonction de votre secteur et de votre échéancier.",
    ],
  },
  {
    slug: "mise-en-valeur-avant-les-visites",
    category: "Marché immobilier",
    title: "Mise en valeur : ce que les acheteurs remarquent vraiment",
    excerpt:
      "Lumière, dégagement, entretien : les détails qui rassurent un acheteur lors d'une première visite.",
    readingTime: "4 min",
    image: blog2,
    placeholder: true,
    body: [
      "Contenu de démonstration à remplacer par l'article réel de Goulet Immobilier.",
      "Une propriété bien présentée ne demande pas nécessairement de grands travaux. Elle demande de la cohérence, de la clarté et un entretien visible.",
    ],
  },
  {
    slug: "choisir-son-quartier-sur-la-rive-sud",
    category: "Vie de quartier",
    title: "Choisir son quartier sur la Rive-Sud : par quoi commencer",
    excerpt:
      "Déplacements, écoles, services et perspectives à long terme : comment comparer les secteurs sans se perdre.",
    readingTime: "6 min",
    image: blog3,
    placeholder: true,
    body: [
      "Contenu de démonstration à remplacer par l'article réel de Goulet Immobilier.",
      "Le bon quartier est celui qui correspond à votre quotidien, pas seulement au prix affiché. Nous prenons le temps de comparer les secteurs avec vous.",
    ],
  },
];

export const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Propriétés", to: "/proprietes" },
  { label: "Vendre", to: "/vendre" },
  { label: "Acheter", to: "/acheter" },
  { label: "Notre équipe", to: "/equipe" },
  { label: "Témoignages", to: "/temoignages" },
  { label: "Conseils", to: "/blogue" },
  { label: "Contact", to: "/contact" },
] as const;
