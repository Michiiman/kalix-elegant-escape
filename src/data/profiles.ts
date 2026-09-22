export interface WhatsAppContact {
  name: string;
  role?: string;
  phone: string;
}

export interface ProfileImage {
  url: string;
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
}

const PROFILE_INFO: ProfileInfo[] = [
  { id: "anahi", folder: "anahi", name: "Anahi", order: 1, age: 25, height: "1.70 m", weight: "65 kg", eyes: "marrón claro", hair: "rojizo", bust: "34A" },
  { id: "daniela", folder: "daniela", name: "Daniela", order: 2, age: 22, height: "1.65 m", weight: "60 kg", eyes: "cafés", hair: "negro", bust: "34A" },
  { id: "natasha", folder: "natasha", name: "Natasha", order: 3, age: 25, height: "1.65 m", weight: "55 kg", eyes: "marrón", hair: "naranja", bust: "32A" },
  { id: "jhulieth", folder: "julieth", name: "Jhulieth", order: 4, age: 22, height: "1.65 m", weight: "70 kg", eyes: "marrones", hair: "negro", bust: "36A" },
  { id: "celeste", folder: "celeste", name: "Celeste", order: 5, age: 20, height: "1.60 m", weight: "55 kg", eyes: "café", hair: "castaño oscuro", bust: "32A" },
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
    whatsappContacts: [AGENCY_CONTACT],
  }));

