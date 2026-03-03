import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { Briefcase, Scale, Shield, Building2, Users, Heart, ArrowRight } from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Direito Empresarial", path: "/areas-de-atuacao/empresarial", desc: "Assessoria completa para empresas de todos os portes. Estruturação societária, fusões e aquisições, contratos comerciais, governança corporativa e compliance." },
  { icon: Scale, title: "Direito Trabalhista", path: "/areas-de-atuacao/trabalhista", desc: "Atuação estratégica em demandas trabalhistas, tanto na defesa patronal quanto na proteção de direitos dos trabalhadores. Compliance trabalhista e negociações coletivas." },
  { icon: Shield, title: "Direito Civil", path: "/areas-de-atuacao/civil", desc: "Responsabilidade civil, contratos, obrigações, direito do consumidor e resolução de conflitos. Soluções eficientes para questões civis complexas." },
  { icon: Building2, title: "Direito Imobiliário", path: "/areas-de-atuacao/imobiliario", desc: "Transações imobiliárias, incorporações, locações, regularização fundiária e due diligence imobiliária com segurança jurídica total." },
  { icon: Users, title: "Direito Tributário", path: "/areas-de-atuacao/tributario", desc: "Planejamento tributário estratégico, contencioso administrativo e judicial, recuperação de créditos e consultoria fiscal especializada." },
  { icon: Heart, title: "Direito de Família", path: "/areas-de-atuacao/familia", desc: "Divórcio, inventário, partilha de bens, guarda de filhos, pensão alimentícia e planejamento sucessório com sensibilidade e discrição." },
];

const PracticeAreas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Áreas de Atuação</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6 max-w-3xl">
              Expertise jurídica em diversas frentes
            </h1>
            <div className="divider-gold mb-6" />
            <p className="font-sans text-sm text-champagne/50 max-w-xl leading-relaxed">
              Oferecemos assessoria jurídica completa nas principais áreas do Direito, com profissionais altamente especializados e comprometidos com resultados.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-px">
            {areas.map((area, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <Link
                  to={area.path}
                  className="group block bg-dark p-10 md:p-12 hover:bg-dark-light transition-colors duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    <area.icon size={36} className="text-gold flex-shrink-0" strokeWidth={1} />
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl text-champagne mb-3 group-hover:text-gold transition-colors">{area.title}</h2>
                      <p className="font-sans text-sm text-champagne/40 leading-relaxed max-w-2xl">{area.desc}</p>
                    </div>
                    <ArrowRight size={20} className="text-gold/30 group-hover:text-gold group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default PracticeAreas;
