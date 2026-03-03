import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "Reforma Tributária 2025: Impactos para Empresas Brasileiras", category: "Direito Tributário", date: "28 Fev 2026", excerpt: "Análise detalhada das principais mudanças trazidas pela reforma tributária e como as empresas podem se preparar para a nova realidade fiscal do país." },
  { title: "Holding Familiar: Proteção Patrimonial e Planejamento Sucessório", category: "Direito de Família", date: "15 Fev 2026", excerpt: "Entenda como a constituição de uma holding familiar pode proteger seu patrimônio, otimizar a carga tributária e facilitar a transmissão de bens." },
  { title: "LGPD nas Empresas: Adequação e Compliance", category: "Direito Empresarial", date: "02 Fev 2026", excerpt: "Um guia prático sobre como adequar sua empresa à Lei Geral de Proteção de Dados, evitando multas e preservando a confiança de seus clientes." },
  { title: "Terceirização e os Limites da Lei: O que Mudou", category: "Direito Trabalhista", date: "20 Jan 2026", excerpt: "As recentes decisões do STF sobre terceirização e os cuidados que as empresas devem adotar para evitar passivos trabalhistas." },
  { title: "Due Diligence Imobiliária: Por que é Indispensável", category: "Direito Imobiliário", date: "08 Jan 2026", excerpt: "Descubra por que a análise jurídica detalhada antes de uma transação imobiliária pode evitar prejuízos milionários e garantir a segurança do seu investimento." },
  { title: "Mediação e Arbitragem: Alternativas Eficientes ao Judiciário", category: "Direito Civil", date: "22 Dez 2025", excerpt: "Como os métodos alternativos de resolução de conflitos podem economizar tempo e dinheiro, sem abrir mão da qualidade da decisão." },
];

const Blog = () => {
  return (
    <Layout>
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Conteúdos Jurídicos</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6">Conhecimento que transforma</h1>
            <div className="divider-gold mb-6" />
            <p className="font-sans text-sm text-champagne/50 max-w-xl leading-relaxed">
              Artigos, análises e insights sobre as principais questões jurídicas que impactam empresas e indivíduos no Brasil.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-px">
            {articles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-dark p-10 md:p-12 group hover:bg-dark-light transition-colors duration-500 cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-40 flex-shrink-0">
                      <p className="text-gold text-xs font-sans tracking-[0.1em] uppercase">{article.category}</p>
                      <p className="text-champagne/20 font-sans text-xs mt-2">{article.date}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-champagne mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                      <p className="font-sans text-xs text-champagne/40 leading-relaxed mb-4">{article.excerpt}</p>
                      <span className="text-gold text-xs font-sans tracking-[0.15em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                        Ler artigo <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Blog;
