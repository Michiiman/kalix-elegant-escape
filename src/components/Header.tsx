import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/img/Kalix_scort_logo-removebg-preview.png";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Catálogo", path: "/catalogo" },
  { label: "Trabaja con Nosotros", path: "/trabaja-con-nosotros" },
  { label: "Contacto", path: "/contacto" },
  { label: "Términos y Condiciones", path: "/terminos-y-condiciones" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-silver">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Kalix Scort" className="h-10 w-auto object-contain" />
          <span className="font-heading text-2xl font-bold tracking-wider text-silver">
            Kalix <span className="text-primary">Scort</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-silver"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-silver hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-t border-silver animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium tracking-wide border-b border-border transition-colors hover:bg-secondary ${
                location.pathname === item.path ? "text-primary" : "text-silver"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
