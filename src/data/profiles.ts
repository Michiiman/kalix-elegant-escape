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
  tattoos: boolean;
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
 * Datos que cada persona declara en su propio `profile.json`, dentro de su
 * carpeta en src/img/scorts/<carpeta>/. Agregar una persona nueva solo
 * requiere crear esa carpeta con sus fotos y su profile.json; quitarla basta
 * con eliminar la carpeta. No hay ninguna lista de personas en el código.
 */
interface ProfileJson {
  name: string;
  order?: number;
  age: number;
  height: string;
  weight: string;
  eyes: string;
  hair: string;
  bust: string;
  tattoos?: boolean;
  pricing?: PricingPlan[];
}

// Detecta en tiempo de build todas las carpetas de persona a partir de su profile.json.
const profileJsonModules = import.meta.glob<{ default: ProfileJson }>(
  "/src/img/scorts/*/profile.json",
  { eager: true }
);

// Importa en tiempo de build todas las imágenes existentes bajo cada carpeta de persona.
const imageModules = import.meta.glob<{ default: string }>(
  "/src/img/scorts/*/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const getFolderName = (path: string): string => {
  const match = path.match(/\/scorts\/([^/]+)\//);
  return match ? match[1] : path;
};

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

export const profiles: Profile[] = Object.entries(profileJsonModules)
  .map(([path, mod]) => {
    const folder = getFolderName(path);
    const data = mod.default;
    return {
      id: folder,
      name: data.name,
      age: data.age,
      height: data.height,
      weight: data.weight,
      eyes: data.eyes,
      hair: data.hair,
      bust: data.bust,
      tattoos: data.tattoos ?? false,
      order: data.order ?? Number.MAX_SAFE_INTEGER,
      images: getFolderImages(folder),
      pricing: data.pricing,
      whatsappContacts: [AGENCY_CONTACT],
    };
  })
  .sort((a, b) => (a.order !== b.order ? a.order - b.order : a.name.localeCompare(b.name)));

