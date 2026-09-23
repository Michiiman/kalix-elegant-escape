import Layout from "@/components/Layout";
import { User, MapPin, Phone, FileText, Camera, Hash } from "lucide-react";
import WhatsAppContactPicker from "@/components/WhatsAppContactPicker";
import SEO from "@/components/SEO";
import { AGENCY_CONTACT } from "@/data/profiles";

const REQUIRED_INFO = [
  { icon: User,     text: "Nombre o nombre artístico" },
  { icon: Hash,     text: "Edad" },
  { icon: MapPin,   text: "Ciudad de residencia" },
  { icon: Phone,    text: "Medio de contacto" },
  { icon: FileText, text: "Breve descripción de tu experiencia" },
  { icon: Camera,   text: "Fotografías recientes" },
];

const TrabajaConNosotros = () => (
  <Layout>
    <SEO
      title="Trabaja con Nosotros"
      description="Únete a Kalix Scort. Conoce los requisitos para formar parte de nuestro equipo selecto."
      path="/trabaja-con-nosotros"
    />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-silver text-center mb-10">
          Trabaja con <span className="text-primary">Nosotros</span>
        </h1>

        <div className="bg-card border border-gold/20 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(212,175,55,0.08)] p-8 space-y-7">

          {/* Intro */}
          <div className="text-center space-y-3">
            <h2 className="font-heading text-xl font-semibold text-silver">
              ¿Quieres formar parte de nuestro equipo?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Envíanos tu información directamente por WhatsApp. Nuestro equipo revisará
              tu perfil de manera <span className="text-silver">confidencial</span> y se
              pondrá en contacto contigo si tu perfil se ajusta a nuestras necesidades.
            </p>
          </div>

          <hr className="border-border/60" />

          {/* Lista de información requerida */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              Incluye en tu mensaje
            </p>
            <ul className="space-y-2.5">
              {REQUIRED_INFO.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon size={13} className="text-gold" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-border/60" />

          {/* Botón WhatsApp */}
          <WhatsAppContactPicker
            contacts={[AGENCY_CONTACT]}
            className="py-3 text-base"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default TrabajaConNosotros;
