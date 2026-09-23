export interface WhatsAppContact {
  name: string;
  role?: string;
  phone: string;
}

export interface ProfileImage {
  url: string;
}

export interface PricingPlan {
  plan: string;
  price: string;
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  weight: string;
  eyes: string;
  hair: string;
  bust: string;
  images: ProfileImage[];
  order: number;
  pricing?: PricingPlan[];
  whatsappContacts?: WhatsAppContact[];
}

/** Único contacto de WhatsApp de la agencia, reutilizado en todo el sitio. */
export const AGENCY_CONTACT: WhatsAppContact = {
  name: "Reservas Kalix",
  phone: "+573182309780",
};

/**
 * Fuente de verdad de cada persona del catálogo. `folder` relaciona cada
 * perfil con su carpeta real dentro de src/img/scorts, y `order` controla
 * el orden explícito de aparición (no depende del alfabeto ni del bundler).
 */
interface ProfileInfo {
  id: string;
  folder: string;
  name: string;
  order: number;
  age: number;
  height: string;
  weight: string;
  eyes: string;
  hair: string;
  bust: string;
  pricing?: PricingPlan[];
}

const planPricing = (
  inicial: string,
  minutos90: string,
  vip2h: string,
  vip3h: string,
  noche6h: string
): PricingPlan[] => [
  { plan: "Plan inicial mínimo", price: inicial },
  { plan: "Plan 90 minutos", price: minutos90 },
  { plan: "Plan VIP 2 horas", price: vip2h },
  { plan: "Plan VIP 3 horas", price: vip3h },
  { plan: "Plan VIP Noche (6 horas)", price: noche6h },
];

const PROFILE_INFO: ProfileInfo[] = [
  { id: "anahi", folder: "anahi", name: "Anahi", order: 1, age: 25, height: "1.70 m", weight: "65 kg", eyes: "marrón claro", hair: "rojizo", bust: "34A", pricing: planPricing("300 mil COP", "400 mil COP", "500 mil COP", "650 mil COP", "900 mil COP") },
  { id: "daniela", folder: "daniela", name: "Daniela", order: 2, age: 22, height: "1.65 m", weight: "60 kg", eyes: "cafés", hair: "negro", bust: "34A", pricing: planPricing("350 mil COP", "450 mil COP", "550 mil COP", "700 mil COP", "1.100 mil COP") },
  { id: "natasha", folder: "natasha", name: "Natasha", order: 3, age: 25, height: "1.65 m", weight: "55 kg", eyes: "marrón", hair: "naranja", bust: "32A", pricing: planPricing("280 mil COP", "380 mil COP", "450 mil COP", "600 mil COP", "900 mil COP") },
  { id: "jhulieth", folder: "julieth", name: "Jhulieth", order: 4, age: 22, height: "1.65 m", weight: "70 kg", eyes: "marrones", hair: "negro", bust: "36A", pricing: planPricing("250 mil COP", "350 mil COP", "400 mil COP", "550 mil COP", "800 mil COP") },
  { id: "celeste", folder: "celeste", name: "Celeste", order: 5, age: 20, height: "1.60 m", weight: "55 kg", eyes: "café", hair: "castaño oscuro", bust: "32A", pricing: planPricing("250 mil COP", "350 mil COP", "400 mil COP", "550 mil COP", "800 mil COP") },
];

// Importa en tiempo de build todas las imágenes existentes bajo cada carpeta de persona.
const imageModules = import.meta.glob<{ default: string }>(
  "/src/img/scorts/*/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const getFolderImages = (folder: string): ProfileImage[] => {
  const entries = Object.keys(imageModules)
    .filter((path) => path.includes(`/scorts/${folder}/`))
    .sort((a, b) => {
      const aCover = /portada/i.test(a) ? 0 : 1;
      const bCover = /portada/i.test(b) ? 0 : 1;
      if (aCover !== bCover) return aCover - bCover;
      return a.localeCompare(b, undefined, { numeric: true });
    });

  return entries.map((path) => ({ url: imageModules[path].default }));
};

export const profiles: Profile[] = PROFILE_INFO
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((info) => ({
    id: info.id,
    name: info.name,
    age: info.age,
    height: info.height,
    weight: info.weight,
    eyes: info.eyes,
    hair: info.hair,
    bust: info.bust,
    order: info.order,
    images: getFolderImages(info.folder),
    pricing: info.pricing,
    whatsappContacts: [AGENCY_CONTACT],
  }));

