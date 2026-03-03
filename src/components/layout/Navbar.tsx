import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "O Escritório", path: "/escritorio" },
  { label: "Áreas de Atuação", path: "/areas-de-atuacao" },
  { label: "Equipe", path: "/equipe" },
  { label: "Casos e Resultados", path: "/casos" },
  { label: "Conteúdos", path: "/conteudos" },
  { label: "Contato", path: "/contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-sm py-3" : "bg-dark py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src={logoWhite} alt="Montreval Advocacia" className="h-16 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-sans tracking-[0.15em] uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-champagne hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-champagne">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark border-t border-gold/10 mt-2">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-sans tracking-[0.15em] uppercase py-2 transition-colors ${
                  location.pathname === link.path ? "text-gold" : "text-champagne hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
