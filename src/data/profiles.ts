export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  shortDesc: string;
  fullDesc: string;
  services: string[];
  location: string;
  images: string[];
  featured: boolean;
}

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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: false,
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: false,
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: false,
  },
];

export const cities = [...new Set(profiles.map((p) => p.city))];
