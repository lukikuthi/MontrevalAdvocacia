import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const CTASection = ({
  title = "Proteja seus interesses com quem entende",
  subtitle = "Agende uma consulta e descubra como a Montreval Advocacia pode transformar sua situação jurídica em resultados concretos.",
  dark = true,
}: CTASectionProps) => {
  return (
    <section className={dark ? "section-dark py-24" : "section-light py-24"}>
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="divider-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6">{title}</h2>
          <p className={`font-sans text-sm max-w-xl mx-auto mb-10 leading-relaxed ${dark ? "text-champagne/60" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contato" className="btn-gold">Agendar Consulta</Link>
            <Link to="/contato" className="btn-outline-gold">Falar com Advogado</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
