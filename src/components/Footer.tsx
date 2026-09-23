import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card-alt border-t border-silver py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-xl font-bold text-silver mb-4">
          Kalix <span className="text-primary">Scort</span>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Experiencias exclusivas con la máxima discreción y elegancia. Tu privacidad es nuestra prioridad.
        </p>
      </div>

      <div>
        <h4 className="text-silver font-semibold text-sm mb-4 uppercase tracking-wider">Enlaces</h4>
        <ul className="space-y-2 text-sm">
          {[
            { label: "Inicio", path: "/bucaramanga" },
            { label: "Catálogo", path: "/bucaramanga/catalogo" },
            { label: "Trabaja con Nosotros", path: "/trabaja-con-nosotros" },
            { label: "Contacto", path: "/contacto" },
          ].map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-silver font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Aviso Legal</li>
          <li>Política de Privacidad</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Kalix Scort. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
