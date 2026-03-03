import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import officeImg from "@/assets/office-boardroom.jpg";
import receptionImg from "@/assets/office-reception.jpg";
import libraryImg from "@/assets/law-library.jpg";
import teamImg from "@/assets/team-lawyers.jpg";

const values = [
  { title: "Ética Inabalável", desc: "A conduta ética é o alicerce de cada decisão e cada orientação jurídica que oferecemos." },
  { title: "Excelência Técnica", desc: "Investimos constantemente na formação de nossos profissionais, garantindo a mais alta qualidade técnica." },
  { title: "Compromisso com o Cliente", desc: "Cada caso é tratado com dedicação total, como se fosse o único." },
  { title: "Confidencialidade", desc: "O sigilo das informações de nossos clientes é inegociável e absoluto." },
  { title: "Inovação Responsável", desc: "Adotamos ferramentas e metodologias modernas sem perder a essência da advocacia tradicional." },
  { title: "Responsabilidade Social", desc: "Acreditamos no papel transformador do Direito e contribuímos ativamente para uma sociedade mais justa." },
];

const timeline = [
  { year: "2003", desc: "Fundação do escritório pelo Dr. Ricardo Montreval na cidade de São Paulo." },
  { year: "2008", desc: "Expansão para o Direito Empresarial e Tributário, com abertura de nova unidade." },
  { year: "2013", desc: "Reconhecimento pela Câmara de Comércio como referência em advocacia corporativa." },
  { year: "2018", desc: "Ampliação da equipe para 30 profissionais e inauguração da sede atual na Av. Paulista." },
  { year: "2023", desc: "Celebração de 20 anos com mais de 2.500 casos resolvidos com sucesso." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-dark overflow-hidden">
        <img src={officeImg} alt="Escritório" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <ScrollReveal>
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">O Escritório</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne">Montreval Advocacia</h1>
              <div className="divider-gold mt-6" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Nossa História</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-6 leading-tight">
                Mais de duas décadas construindo confiança
              </h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-4">
                <p className="font-sans text-sm text-champagne/50 leading-relaxed">
                  Fundada em 2003 pelo Dr. Ricardo Montreval, a Montreval Advocacia nasceu com a missão de oferecer assessoria jurídica de excelência, combinando conhecimento profundo do Direito brasileiro com uma visão estratégica e humanizada.
                </p>
                <p className="font-sans text-sm text-champagne/50 leading-relaxed">
                  Ao longo dos anos, o escritório expandiu sua atuação para diversas áreas do Direito, sempre mantendo o compromisso com a qualidade e o atendimento personalizado que são marcas registradas da casa.
                </p>
                <p className="font-sans text-sm text-champagne/50 leading-relaxed">
                  Hoje, com sede na Avenida Paulista, a Montreval conta com uma equipe multidisciplinar de mais de 30 profissionais dedicados a transformar desafios jurídicos em resultados concretos para seus clientes.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img src={receptionImg} alt="Recepção" className="w-full h-[450px] object-cover" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Nossa Trajetória</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne">Marcos importantes</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-8 pb-12 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gold flex-shrink-0" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-gold font-serif text-xl mb-2">{item.year}</p>
                    <p className="font-sans text-sm text-champagne/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Nossos Valores</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-6">Os princípios que nos guiam</h2>
              <div className="divider-gold mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-dark p-10">
                  <h3 className="font-serif text-xl text-champagne mb-3">{v.title}</h3>
                  <p className="font-sans text-xs text-champagne/40 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={libraryImg} alt="Biblioteca" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/60" />
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
