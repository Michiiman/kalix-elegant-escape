import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { profiles } from "@/data/profiles";
import { MapPin, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import WhatsAppContactPicker from "@/components/WhatsAppContactPicker";

const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

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

  return (
    <Layout>
      <section className="pt-6 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/catalogo" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Volver al catálogo
          </Link>

          <div className="flex flex-col gap-8 max-w-2xl mx-auto">
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

              {profile.whatsappContacts && profile.whatsappContacts.length > 0 && (
                <WhatsAppContactPicker
                  contacts={profile.whatsappContacts}
                  className="py-3 text-base"
                />
              )}
            </div>

            {/* Photos — vertical stack */}
            <div>
              {profile.images.map((image, i) => (
                <div key={i}>
                  <div className="rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={image.url}
                      alt={image.label}
                      className="w-full block"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground italic px-1">
                    {image.label}
                  </p>
                  {i < profile.images.length - 1 && (
                    <hr className="my-8 border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileDetail;
