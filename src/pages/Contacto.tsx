import Layout from "@/components/Layout";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import TermsModal from "@/components/TermsModal";

const AGENCY_CONTACTS = [
  { name: "Asesor Comercial", role: "Reservas y tarifas", phone: "+573155140200" },
  { name: "Coordinador", role: "Disponibilidad y agenda", phone: "+573155140201" },
];

const Contacto = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-silver text-center mb-4">
            <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-center text-muted-foreground mb-10">
            ¿Tienes alguna consulta? Escríbenos y te responderemos con total discreción.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={() => setShowTerms(true)}
              className="w-full sm:w-auto px-10 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <MessageCircle size={18} /> Comunicarse por WhatsApp
            </button>
          </div>
        </div>
      </section>

      <TermsModal
        open={showTerms}
        onClose={() => setShowTerms(false)}
        contacts={AGENCY_CONTACTS}
      />
    </Layout>
  );
};

export default Contacto;
