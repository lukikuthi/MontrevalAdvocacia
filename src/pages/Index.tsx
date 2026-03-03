import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import logoWhite from "@/assets/logo-white.png";
import officeImg from "@/assets/office-boardroom.jpg";
import libraryImg from "@/assets/law-library.jpg";
import handshakeImg from "@/assets/handshake.jpg";
import receptionImg from "@/assets/office-reception.jpg";
import { Briefcase, Building2, Users, Scale, Shield, Heart, ArrowRight } from "lucide-react";

const practiceAreas = [
  { icon: Briefcase, title: "Direito Empresarial", path: "/areas-de-atuacao/empresarial", desc: "Estruturação societária, contratos e governança corporativa." },
  { icon: Scale, title: "Direito Trabalhista", path: "/areas-de-atuacao/trabalhista", desc: "Defesa estratégica em demandas trabalhistas e compliance." },
  { icon: Shield, title: "Direito Civil", path: "/areas-de-atuacao/civil", desc: "Responsabilidade civil, contratos e obrigações." },
  { icon: Building2, title: "Direito Imobiliário", path: "/areas-de-atuacao/imobiliario", desc: "Transações imobiliárias, incorporações e locações." },
  { icon: Users, title: "Direito Tributário", path: "/areas-de-atuacao/tributario", desc: "Planejamento fiscal e contencioso tributário." },
  { icon: Heart, title: "Direito de Família", path: "/areas-de-atuacao/familia", desc: "Divórcio, inventário, guarda e sucessões." },
];

const stats = [
  { number: "20+", label: "Anos de Experiência" },
  { number: "2.500+", label: "Casos Resolvidos" },
  { number: "98%", label: "Taxa de Sucesso" },
  { number: "150+", label: "Clientes Ativos" },
];

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <Layout>
      {/* Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.img
                src={logoWhite}
                alt="Montreval"
                className="h-32 w-auto mx-auto mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.p
                className="font-serif text-2xl text-champagne tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Bem-vindo.
              </motion.p>
              <div className="mt-8 w-48 h-px bg-dark-light mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero — Asymmetric */}
      <section className="relative min-h-screen bg-dark overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full min-h-screen">
            {/* Left — Text */}
            <div className="flex flex-col justify-center py-32 lg:py-0 lg:pr-16 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-6">
                  Excelência Jurídica desde 2003
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-champagne mb-8">
                  Advocacia de<br />
                  <span className="text-gold">Alta Performance</span><br />
                  para quem exige<br />
                  resultados.
                </h1>
                <p className="font-sans text-sm text-champagne/50 max-w-md leading-relaxed mb-12">
                  Combinamos tradição, estratégia e profundidade técnica para proteger o que é mais importante para nossos clientes — seus patrimônios, empresas e famílias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contato" className="btn-gold">Agendar Consulta</Link>
                  <Link to="/contato" className="btn-outline-gold">Falar com Advogado</Link>
                </div>
              </motion.div>

              {/* Vertical divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-2/3">
                <motion.div
                  className="w-px bg-gold/20"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 2.8 }}
                />
              </div>
            </div>

            {/* Right — Video */}
            <div className="hidden lg:flex items-center justify-center relative">
              <motion.div
                className="relative w-full h-[70vh] overflow-hidden"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 2.6 }}
              >
                <video
                  ref={videoRef}
                  src="/video/hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onCanPlay={() => setVideoLoaded(true)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/40" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark/60" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <div className="w-px h-12 bg-gold/30 mx-auto animate-pulse" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-dark-medium py-16 border-t border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-gold mb-2">{stat.number}</p>
                  <p className="font-sans text-xs text-champagne/40 tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={receptionImg} alt="Escritório Montreval" className="w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/20" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">O Escritório</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-6 leading-tight">
                Tradição e inovação em cada solução jurídica
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm text-champagne/50 leading-relaxed mb-6">
                A Montreval Advocacia nasceu da convicção de que a advocacia pode — e deve — ser exercida com excelência absoluta. Nosso compromisso é tratar cada caso com a profundidade, a estratégia e a dedicação que ele merece.
              </p>
              <p className="font-sans text-sm text-champagne/50 leading-relaxed mb-8">
                Com uma equipe multidisciplinar altamente qualificada, atuamos nos mais complexos cenários jurídicos do país, oferecendo soluções personalizadas e resultados consistentes.
              </p>
              <Link to="/escritorio" className="text-gold text-xs font-sans tracking-[0.2em] uppercase flex items-center gap-2 hover:gap-4 transition-all duration-300">
                Conheça nossa história <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Áreas de Atuação</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-6">Expertise em diversas frentes do Direito</h2>
              <div className="divider-gold mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {practiceAreas.map((area, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <Link
                  to={area.path}
                  className="block bg-dark-medium p-10 group hover:bg-dark-light transition-colors duration-500"
                >
                  <area.icon size={28} className="text-gold mb-6" strokeWidth={1} />
                  <h3 className="font-serif text-xl text-champagne mb-3 group-hover:text-gold transition-colors duration-300">{area.title}</h3>
                  <p className="font-sans text-xs text-champagne/40 leading-relaxed mb-6">{area.desc}</p>
                  <span className="text-gold text-xs font-sans tracking-[0.15em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Saiba mais <ArrowRight size={12} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={libraryImg} alt="Biblioteca Jurídica" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center px-6">
              <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-4 max-w-2xl">
                "A verdadeira advocacia se mede pela profundidade do compromisso com cada causa."
              </h2>
              <div className="divider-gold mx-auto mt-6" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Por que a Montreval</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-8 leading-tight">
                Diferenciais que fazem a diferença no resultado
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Atendimento Personalizado", desc: "Cada cliente recebe atenção exclusiva e estratégia sob medida para seu caso." },
                  { title: "Equipe Multidisciplinar", desc: "Advogados especializados em diversas áreas, garantindo cobertura completa." },
                  { title: "Sigilo Absoluto", desc: "Confidencialidade e ética como pilares inegociáveis de nossa atuação." },
                  { title: "Resultados Comprovados", desc: "Histórico consistente de decisões favoráveis em casos complexos." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-px bg-gold/30 flex-shrink-0 mt-1" style={{ minHeight: 40 }} />
                    <div>
                      <h4 className="font-serif text-lg text-champagne mb-1">{item.title}</h4>
                      <p className="font-sans text-xs text-champagne/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img src={handshakeImg} alt="Compromisso" className="w-full h-[500px] object-cover" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
