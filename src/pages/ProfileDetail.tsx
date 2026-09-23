import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { profiles } from "@/data/profiles";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import WhatsAppContactPicker from "@/components/WhatsAppContactPicker";
import SEO, { SITE_URL } from "@/components/SEO";

const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!profile) {
    return (
      <Layout>
        <SEO
          title="Perfil no encontrado"
          description="El perfil que buscas no está disponible."
          path={`/bucaramanga/catalogo/${id ?? ""}`}
          noIndex
        />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-muted-foreground">Perfil no encontrado.</p>
          <Link to="/bucaramanga/catalogo" className="text-primary hover:underline text-sm">Volver al catálogo</Link>
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
    { label: "Tatuajes", value: profile.tattoos ? "Sí" : "No" },
  ];

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${SITE_URL}/bucaramanga/catalogo/${profile.id}`,
    image: profile.images[0]?.url,
  };

  return (
    <Layout>
      <SEO
        title={`${profile.name} | Acompañante Exclusiva en Bucaramanga`}
        description={`${profile.name}: acompañante exclusiva y profesional en Bucaramanga. Compañía selecta, experiencias discretas y privadas. Reserva en línea disponible.`}
        keywords={`${profile.name}, acompañante Bucaramanga, escort verificada, compañía selecta, cita discreta, experiencia exclusiva`}
        path={`/bucaramanga/catalogo/${profile.id}`}
        image={profile.images[0]?.url}
        jsonLd={profileJsonLd}
      />
      <section className="pt-6 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/bucaramanga/catalogo" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Volver al catálogo
          </Link>

          <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            <h1 className="font-heading text-3xl font-bold text-gold-gradient text-center">{profile.name}</h1>

            {/* Rasgos */}
            <div>
              <h3 className="text-silver font-semibold text-sm uppercase tracking-wider mb-3">Ficha Técnica</h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                {stats.map((s) => (
                  <li key={s.label}>
                    <span className="text-silver">{s.label}:</span> {s.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarifas */}
            {profile.pricing && profile.pricing.length > 0 && (
              <div>
                <h3 className="text-gold-gradient font-semibold text-sm uppercase tracking-wider mb-3">Precio de planes por tiempo</h3>
                <ul className="space-y-2">
                  {profile.pricing.map((p) => (
                    <li key={p.plan} className="flex items-center justify-between gap-3 text-sm bg-secondary rounded-md px-3 py-2">
                      <span className="text-muted-foreground">{p.plan}</span>
                      <span className="text-gold font-heading font-semibold whitespace-nowrap">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.whatsappContacts && profile.whatsappContacts.length > 0 && (
              <WhatsAppContactPicker
                contacts={profile.whatsappContacts}
                className="py-3 text-base"
              />
            )}

            {/* Fotos */}
            <div>
              {profile.images.map((image, i) => (
                <div key={i}>
                  {i > 0 && <hr className="my-8 border-border" />}
                  <div className="rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={image.url}
                      alt={`Fotografía de ${profile.name}${profile.images.length > 1 ? ` ${i + 1}` : ""}`}
                      className="w-full block"
                    />
                  </div>
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
