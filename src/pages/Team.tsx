import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import teamImg from "@/assets/team-lawyers.jpg";

const lawyers = [
  { name: "Dr. Ricardo Montreval", role: "Sócio Fundador", oab: "OAB/SP 123.456", areas: "Direito Empresarial, Fusões e Aquisições", bio: "Com mais de 25 anos de experiência, o Dr. Ricardo é referência em direito empresarial e governança corporativa. Formado pela USP com pós-graduação em Harvard." },
  { name: "Dra. Isabela Ferreira", role: "Sócia", oab: "OAB/SP 234.567", areas: "Direito Trabalhista, Compliance", bio: "Especialista em relações trabalhistas e compliance empresarial. Atua há 18 anos com foco em gestão preventiva de riscos trabalhistas." },
  { name: "Dr. Henrique Almeida", role: "Sócio", oab: "OAB/SP 345.678", areas: "Direito Tributário", bio: "Mestre em Direito Tributário pela PUC-SP, com vasta experiência em planejamento fiscal e contencioso tributário em todas as instâncias." },
  { name: "Dra. Camila Santos", role: "Associada Sênior", oab: "OAB/SP 456.789", areas: "Direito Civil, Imobiliário", bio: "Especialista em transações imobiliárias e responsabilidade civil, com mais de 12 anos de atuação no mercado imobiliário de São Paulo." },
  { name: "Dr. Felipe Rocha", role: "Associado Sênior", oab: "OAB/SP 567.890", areas: "Direito de Família, Sucessões", bio: "Atua com sensibilidade e estratégia em questões familiares e sucessórias, sempre priorizando soluções consensuais e a proteção do patrimônio familiar." },
  { name: "Dra. Marina Costa", role: "Associada", oab: "OAB/SP 678.901", areas: "Direito Empresarial, Contratos", bio: "Especialista em contratos comerciais e direito societário, com formação complementar em arbitragem pela FGV." },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-dark overflow-hidden">
        <img src={teamImg} alt="Equipe Montreval" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <ScrollReveal>
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Nossa Equipe</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne">Profissionais de excelência</h1>
              <div className="divider-gold mt-6" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-dark-medium py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <ScrollReveal>
            <p className="font-sans text-sm text-champagne/50 leading-relaxed">
              A Montreval reúne profissionais com formação nas melhores instituições do país e experiência comprovada em casos de alta complexidade. Cada membro da equipe compartilha o compromisso com a excelência e a ética.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {lawyers.map((lawyer, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-dark p-10 h-full">
                  <div className="w-20 h-20 rounded-full bg-dark-light mb-6 flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold">
                      {lawyer.name.split(" ").filter((_, idx) => idx === 0 || idx === lawyer.name.split(" ").length - 1).map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-champagne mb-1">{lawyer.name}</h3>
                  <p className="text-gold text-xs font-sans tracking-[0.1em] uppercase mb-1">{lawyer.role}</p>
                  <p className="text-champagne/30 text-xs font-sans mb-4">{lawyer.oab}</p>
                  <p className="font-sans text-xs text-champagne/40 leading-relaxed mb-3">{lawyer.bio}</p>
                  <p className="text-xs text-gold/60 font-sans">{lawyer.areas}</p>
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

export default Team;
