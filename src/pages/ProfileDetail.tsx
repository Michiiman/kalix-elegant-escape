import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { profiles } from "@/data/profiles";
import { ArrowLeft } from "lucide-react";
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

  const stats = [
    { label: "Edad", value: `${profile.age} años` },
    { label: "Estatura", value: profile.height },
    { label: "Peso", value: profile.weight },
    { label: "Ojos", value: profile.eyes },
    { label: "Cabello", value: profile.hair },
    { label: "Busto", value: profile.bust },
  ];

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
              </div>

              <div>
                <h3 className="text-silver font-semibold text-sm uppercase tracking-wider mb-3">Ficha Técnica</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {stats.map((s) => (
                    <li key={s.label} className="text-sm text-muted-foreground bg-secondary rounded-md px-3 py-2">
                      <span className="text-silver">{s.label}:</span> {s.value}
                    </li>
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
                      alt={`Fotografía de ${profile.name}${profile.images.length > 1 ? ` ${i + 1}` : ""}`}
                      className="w-full block"
                    />
                  </div>
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
