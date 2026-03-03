import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import { Mail, Phone, MapPin } from "lucide-react";

const practiceAreas = [
  { label: "Direito Empresarial", path: "/areas-de-atuacao/empresarial" },
  { label: "Direito Trabalhista", path: "/areas-de-atuacao/trabalhista" },
  { label: "Direito Civil", path: "/areas-de-atuacao/civil" },
  { label: "Direito Imobiliário", path: "/areas-de-atuacao/imobiliario" },
  { label: "Direito Tributário", path: "/areas-de-atuacao/tributario" },
  { label: "Direito de Família", path: "/areas-de-atuacao/familia" },
];

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gold/10">
          {/* Brand */}
          <div>
            <img src={logoWhite} alt="Montreval Advocacia" className="h-16 w-auto mb-6" />
            <p className="text-champagne/60 text-sm leading-relaxed font-sans">
              Excelência jurídica com tradição e sofisticação. Há mais de 20 anos defendendo os interesses de nossos clientes com dedicação e resultados.
            </p>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Áreas de Atuação</h4>
            <div className="flex flex-col gap-3">
              {practiceAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors duration-300"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Institucional</h4>
            <div className="flex flex-col gap-3">
              <Link to="/escritorio" className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors">O Escritório</Link>
              <Link to="/equipe" className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors">Equipe</Link>
              <Link to="/casos" className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors">Casos e Resultados</Link>
              <Link to="/conteudos" className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors">Conteúdos</Link>
              <Link to="/privacidade" className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors">Política de Privacidade</Link>
              <Link to="/termos" className="text-champagne/60 text-sm font-sans hover:text-gold transition-colors">Termos de Uso</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="text-champagne/60 text-sm font-sans">
                  Av. Paulista, 1578 — 12º andar<br />São Paulo — SP, 01310-200
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <p className="text-champagne/60 text-sm font-sans">(11) 3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <p className="text-champagne/60 text-sm font-sans">contato@montreval.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-champagne/30 text-xs font-sans tracking-wider">
            © {new Date().getFullYear()} Montreval Advocacia. Projeto para Portfolio feito pelo melhor.
          </p>
          <p className="text-champagne/30 text-xs font-sans tracking-wider">
            Lucas Kikuthi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
