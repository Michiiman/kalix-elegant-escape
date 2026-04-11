import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { profiles } from "@/data/profiles";
import { MapPin, ArrowLeft, MessageCircle } from "lucide-react";
import { useState } from "react";

const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!profile) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-muted-foreground">Perfil no encontrado.</p>
          <Link to="/catalogo" className="text-primary hover:underline text-sm">Volver al catálogo</Link>
        </div>
      </Layout>
    );
  }

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Hola, estoy interesado/a en el perfil de ${profile.name} en Kalix Scort.`)}`;

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/catalogo" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Volver al catálogo
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery */}
            <div className="space-y-3">
              <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                <img src={profile.images[activeImg]} alt={profile.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2">
                {profile.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-20 rounded overflow-hidden border-2 transition-colors ${i === activeImg ? "border-primary" : "border-border hover:border-primary/50"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-heading text-3xl font-bold text-silver">{profile.name}</h1>
                <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span>{profile.age} años</span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {profile.location}</span>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">{profile.fullDesc}</p>

              <div>
                <h3 className="text-silver font-semibold text-sm uppercase tracking-wider mb-3">Servicios</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {profile.services.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground bg-secondary rounded-md px-3 py-2">{s}</li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                <MessageCircle size={18} /> Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileDetail;
