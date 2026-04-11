import Layout from "@/components/Layout";
import { useState } from "react";
import { Upload } from "lucide-react";

const TrabajaConNosotros = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-silver text-center mb-4">
            Trabaja con <span className="text-primary">Nosotros</span>
          </h1>
          <p className="text-center text-muted-foreground mb-10 leading-relaxed">
            ¿Buscas una plataforma profesional, discreta y de confianza? Únete a nuestro equipo exclusivo. 
            Valoramos la elegancia, la profesionalidad y la privacidad.
          </p>

          {submitted ? (
            <div className="text-center py-20 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary text-2xl">✓</span>
              </div>
              <h2 className="font-heading text-2xl text-silver">¡Solicitud enviada!</h2>
              <p className="text-muted-foreground">Revisaremos tu información y nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Nombre", name: "nombre", type: "text", placeholder: "Tu nombre artístico" },
                { label: "Edad", name: "edad", type: "number", placeholder: "Tu edad" },
                { label: "Ciudad", name: "ciudad", type: "text", placeholder: "Ciudad de residencia" },
                { label: "Contacto (teléfono o email)", name: "contacto", type: "text", placeholder: "Cómo podemos contactarte" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm text-silver mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required
                    className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm text-silver mb-1.5">Experiencia</label>
                <textarea
                  name="experiencia"
                  placeholder="Cuéntanos brevemente sobre ti y tu experiencia"
                  rows={4}
                  required
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-silver mb-1.5">Fotos</label>
                <label className="flex items-center justify-center gap-2 w-full bg-card border border-dashed border-border rounded-md py-8 text-sm text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
                  <Upload size={18} />
                  <span>Haz clic para subir tus fotos</span>
                  <input type="file" multiple accept="image/*" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TrabajaConNosotros;
