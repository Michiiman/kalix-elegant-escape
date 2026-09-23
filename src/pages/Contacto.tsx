import Layout from "@/components/Layout";
import WhatsAppContactPicker from "@/components/WhatsAppContactPicker";
import { AGENCY_CONTACT } from "@/data/profiles";

const Contacto = () => {
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

          <div className="flex flex-col gap-2 items-center mt-10">
            <h2 className="font-heading text-xl font-semibold text-silver">{AGENCY_CONTACT.name}</h2>
            <p className="text-sm text-muted-foreground mb-2">3182309780</p>
            <div className="w-full sm:w-auto sm:min-w-[280px]">
              <WhatsAppContactPicker contacts={[AGENCY_CONTACT]} className="py-3 text-base" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
