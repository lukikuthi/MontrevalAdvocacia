import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import handshakeImg from "@/assets/handshake.jpg";

const cases = [
  { area: "Direito Empresarial", title: "Reestruturação societária de grupo com faturamento de R$ 500 milhões", result: "Conclusão da reestruturação em 8 meses com economia fiscal de 22% e resolução de conflitos entre sócios.", year: "2023" },
  { area: "Direito Trabalhista", title: "Defesa patronal em ação coletiva com 200 reclamantes", result: "Acordo estratégico que reduziu a exposição financeira em 75%, preservando a continuidade das operações.", year: "2022" },
  { area: "Direito Tributário", title: "Recuperação de créditos tributários para indústria farmacêutica", result: "Recuperação de R$ 12 milhões em créditos de PIS/COFINS com compensação integral em 18 meses.", year: "2023" },
  { area: "Direito Imobiliário", title: "Due diligence de portfólio imobiliário com 45 unidades", result: "Identificação de riscos ocultos que evitaram prejuízo estimado em R$ 8 milhões e viabilizaram a aquisição.", year: "2022" },
  { area: "Direito de Família", title: "Planejamento sucessório para família com patrimônio de R$ 200 milhões", result: "Estruturação de holding familiar com economia tributária de 35% na transmissão de bens.", year: "2021" },
  { area: "Direito Civil", title: "Ação de indenização por danos materiais e morais contra construtora", result: "Condenação da ré ao pagamento de R$ 2,5 milhões em danos, valor integral pleiteado na inicial.", year: "2023" },
];

const Cases = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-dark overflow-hidden">
        <img src={handshakeImg} alt="Resultados" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <ScrollReveal>
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Casos e Resultados</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne">Resultados que falam por nós</h1>
              <div className="divider-gold mt-6" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-dark-medium py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-sans text-xs text-champagne/30 italic">
            Os casos apresentados são reais, com detalhes modificados para preservar o sigilo profissional, conforme determina o Código de Ética da OAB.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-px">
            {cases.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-dark-medium p-10 md:p-12 hover:bg-dark-light transition-colors duration-500">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-48 flex-shrink-0">
                      <p className="text-gold text-xs font-sans tracking-[0.15em] uppercase">{c.area}</p>
                      <p className="text-champagne/20 font-serif text-sm mt-1">{c.year}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-champagne mb-4">{c.title}</h3>
                      <div className="flex items-start gap-3">
                        <div className="w-px h-full bg-gold/30 flex-shrink-0 mt-1" style={{ minHeight: 20 }} />
                        <p className="font-sans text-sm text-champagne/50 leading-relaxed">
                          <span className="text-gold text-xs tracking-[0.1em] uppercase">Resultado: </span>
                          {c.result}
                        </p>
                      </div>
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

export default Cases;
