import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import SEO, { SITE_NAME, SITE_URL } from "@/components/SEO";
import { profiles } from "@/data/profiles";
import { Shield, Eye, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: "Agencia profesional de acompañantes exclusivas en Bucaramanga. Compañía selecta, perfiles verificados, servicio de escort confiable.",
  url: `${SITE_URL}/bucaramanga`,
  telephone: "+573182309780",
  areaServed: {
    "@type": "City",
    name: "Bucaramanga",
    "address": {
      "@type": "PostalAddress",
      addressLocality: "Bucaramanga",
      addressRegion: "Santander",
      addressCountry: "CO",
    },
  },
  sameAs: [SITE_URL],
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Escorts y Acompañantes en Bucaramanga"
        description="Kalix Scort: escorts, acompañantes y damas de compañía en Bucaramanga. Perfiles verificados, servicio profesional, discreción y atención de confianza."
        keywords="escorts Bucaramanga, scorts Bucaramanga, acompañantes Bucaramanga, damas de compañía Bucaramanga, agencia de escort, perfiles verificados"
        path="/bucaramanga"
        jsonLd={localBusinessJsonLd}
      />

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[85vh] bg-gradient-to-b from-background via-card to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06)_0%,_transparent_70%)]" />
        <div className="relative text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-silver animate-fade-in leading-tight">
            Acompañantes Exclusivas en <span className="text-primary">Bucaramanga</span>
            <br />
            Compañía Selecta y Profesional
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl animate-fade-in-delay leading-relaxed">
            Kalix Scort: escorts, acompañantes y damas de compañía en Bucaramanga. Perfiles verificados, servicio profesional, máxima discreción, privacidad y elegancia garantizada.
          </p>
          <Link
            to="/bucaramanga/catalogo"
            className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-3.5 rounded-md font-medium text-base transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)] animate-fade-in-delay-2"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card-alt">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: "Servicio Profesional", desc: "Agencia de acompañantes verificadas. Protocolos estrictos de confianza y profesionalismo." },
            { icon: Star, title: "Compañía Selecta", desc: "Acompañantes exclusivas, cuidadosamente seleccionadas. Experiencias premium garantizadas." },
            { icon: Eye, title: "Máxima Discreción", desc: "Privacidad absoluta en cada cita. Citas discretas y confidenciales en Bucaramanga." },
          ].map((v) => (
            <div key={v.title} className="space-y-3">
              <v.icon className="mx-auto text-primary" size={32} />
              <h3 className="font-heading text-lg font-semibold text-silver">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profiles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-silver mb-12">
            Acompañantes Exclusivas <span className="text-primary">Disponibles</span>
          </h2>
          <div className="relative px-6 md:px-14">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {profiles.map((p, index) => (
                  <CarouselItem key={p.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <ProfileCard profile={p} priority={index === 0} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-10" />
              <CarouselNext className="-right-4 md:-right-10" />
            </Carousel>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
