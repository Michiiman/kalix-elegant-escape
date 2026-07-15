export interface WhatsAppContact {
  name: string;
  role?: string;
  phone: string;
}

export interface ProfileImage {
  url: string;
  label: string;
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  shortDesc: string;
  fullDesc: string;
  services: string[];
  location: string;
  images: ProfileImage[];
  featured: boolean;
  whatsappContacts?: WhatsAppContact[];
}

const PROFILE_IMAGES: ProfileImage[] = [
  {
    url: "https://www.nuevamujer.com/resizer/v2/3BMEJU3TBRHZJA232Q2TMXWZOY.png?auth=5d971fb55d0b7a9d301ce589a61c4b04e8c2beb88a170d041602cf7ee7acf3d2&width=800&height=1082",
    label: "Fotografía de presentación principal",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlFFpdkEcdIAF3j6XcqvJNmLzsvk8PdKwL9OtXPTORK6NcV-aG8-bObb0&s=10",
    label: "Fotografía de perfil",
  },
  {
    url: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/M56Y7RBSLBB7HE6MJJWC7J2V3Q.png",
    label: "Fotografía adicional",
  },
];

export const profiles: Profile[] = [
  {
    id: "valentina",
    name: "Valentina",
    age: 24,
    city: "Madrid",
    shortDesc: "Elegancia y sofisticación en cada encuentro.",
    fullDesc: "Con una personalidad encantadora y una presencia cautivadora, Valentina ofrece momentos de compañía exclusiva. Su elegancia natural y su conversación refinada la convierten en la acompañante ideal para cualquier ocasión especial.",
    services: ["Cenas de gala", "Eventos corporativos", "Compañía exclusiva", "Viajes de negocios"],
    location: "Madrid Centro",
    images: PROFILE_IMAGES,
    featured: true,
    whatsappContacts: [
      { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
      { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
    ],
  },
  {
    id: "isabella",
    name: "Isabella",
    age: 27,
    city: "Barcelona",
    shortDesc: "Discreción y clase en estado puro.",
    fullDesc: "Isabella combina inteligencia y belleza de manera única. Profesional y discreta, es la compañera perfecta para quienes valoran la privacidad y el buen gusto. Su dominio de varios idiomas la hace ideal para eventos internacionales.",
    services: ["Eventos sociales", "Cenas privadas", "Acompañamiento VIP", "Viajes internacionales"],
    location: "Barcelona, Eixample",
    images: PROFILE_IMAGES,
    featured: true,
    whatsappContacts: [
      { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
      { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
    ],
  },
  {
    id: "camila",
    name: "Camila",
    age: 25,
    city: "Valencia",
    shortDesc: "Carisma y encanto natural.",
    fullDesc: "Camila destaca por su calidez y autenticidad. Con un estilo fresco y moderno, sabe adaptarse a cualquier ambiente con naturalidad. Su energía positiva y su sonrisa contagiosa hacen de cada momento una experiencia memorable.",
    services: ["Compañía para eventos", "Cenas exclusivas", "Paseos privados", "Ocio premium"],
    location: "Valencia Centro",
    images: PROFILE_IMAGES,
    featured: true,
    whatsappContacts: [
      { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
      { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
    ],
  },
  {
    id: "sofia",
    name: "Sofía",
    age: 23,
    city: "Madrid",
    shortDesc: "Juventud y elegancia refinada.",
    fullDesc: "Sofía es la definición de frescura y sofisticación. Su presencia ilumina cualquier estancia, y su capacidad para conectar con las personas la convierte en una acompañante excepcional.",
    services: ["Eventos de lujo", "Compañía selecta", "Cenas románticas", "Arte y cultura"],
    location: "Madrid Norte",
    images: PROFILE_IMAGES,
    featured: false,
    whatsappContacts: [
      { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
      { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
    ],
  },
  {
    id: "lucia",
    name: "Lucía",
    age: 26,
    city: "Sevilla",
    shortDesc: "Pasión mediterránea con clase.",
    fullDesc: "Lucía encarna el espíritu del sur con una elegancia innata. Su personalidad vibrante y su gusto exquisito la hacen perfecta para quienes buscan una experiencia auténtica y memorable.",
    services: ["Eventos sociales", "Gastronomía premium", "Compañía cultural", "Escapadas de fin de semana"],
    location: "Sevilla Centro",
    images: PROFILE_IMAGES,
    featured: false,
    whatsappContacts: [
      { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
      { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
    ],
  },
  {
    id: "martina",
    name: "Martina",
    age: 28,
    city: "Barcelona",
    shortDesc: "Sofisticación cosmopolita.",
    fullDesc: "Martina es una mujer de mundo con un sentido impecable del estilo. Su experiencia en ambientes internacionales y su cultura la convierten en la compañía ideal para los más exigentes.",
    services: ["Viajes de lujo", "Eventos corporativos", "Cenas de negocios", "Acompañamiento premium"],
    location: "Barcelona, Diagonal",
    images: PROFILE_IMAGES,
    featured: false,
    whatsappContacts: [
      { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
      { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
    ],
  },
];

export const cities = [...new Set(profiles.map((p) => p.city))];

