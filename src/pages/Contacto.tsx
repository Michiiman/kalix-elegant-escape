import Layout from "@/components/Layout";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const Contacto = () => {
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
            <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-center text-muted-foreground mb-10">
            ¿Tienes alguna consulta? Escríbenos y te responderemos con total discreción.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="mailto:contacto@kalixscort.com"
              className="flex-1 flex items-center justify-center gap-2 bg-card border border-border text-silver py-3 rounded-md font-medium transition-all duration-300 hover:border-primary/50"
            >
              <Mail size={18} /> contacto@kalixscort.com
            </a>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary text-2xl">✓</span>
              </div>
              <h2 className="font-heading text-2xl text-silver">¡Mensaje enviado!</h2>
              <p className="text-muted-foreground">Te responderemos lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-silver mb-1.5">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-silver mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-silver mb-1.5">Mensaje</label>
                <textarea
                  placeholder="Tu mensaje..."
                  rows={5}
                  required
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
