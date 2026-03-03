import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { ArrowLeft } from "lucide-react";

interface AreaData {
  title: string;
  subtitle: string;
  intro: string;
  problems: { title: string; desc: string }[];
  approach: string[];
  faq: { q: string; a: string }[];
}

const areasData: Record<string, AreaData> = {
  empresarial: {
    title: "Direito Empresarial",
    subtitle: "Soluções estratégicas para o crescimento seguro do seu negócio.",
    intro: "O ambiente empresarial brasileiro exige acompanhamento jurídico constante e especializado. Na Montreval, oferecemos assessoria completa para empresas de todos os portes, desde startups até grandes corporações, cobrindo todas as etapas do ciclo empresarial — da constituição à expansão, da reestruturação à sucessão.",
    problems: [
      { title: "Conflitos Societários", desc: "Divergências entre sócios, cláusulas mal redigidas em contratos sociais e disputas sobre distribuição de lucros são questões que podem paralisar uma empresa." },
      { title: "Contratos Comerciais Frágeis", desc: "Contratos sem cláusulas protetivas adequadas expõem a empresa a riscos desnecessários em relações com fornecedores, parceiros e clientes." },
      { title: "Falta de Governança", desc: "Empresas sem estrutura de governança estão mais vulneráveis a fraudes, decisões arbitrárias e problemas de compliance." },
      { title: "Fusões e Aquisições", desc: "Operações de M&A mal conduzidas podem resultar em passivos ocultos, contingências não previstas e perda de valor." },
    ],
    approach: [
      "Diagnóstico completo da estrutura societária e identificação de vulnerabilidades.",
      "Elaboração e revisão de contratos comerciais com cláusulas protetivas estratégicas.",
      "Implementação de programas de governança corporativa e compliance.",
      "Assessoria em operações de fusão, aquisição, cisão e incorporação.",
      "Acompanhamento contínuo das mudanças legislativas que impactam o negócio.",
      "Representação em litígios empresariais e arbitragens.",
    ],
    faq: [
      { q: "Quando devo procurar um advogado empresarial?", a: "Idealmente, desde a fundação da empresa. Contudo, qualquer momento de crescimento, conflito ou reestruturação demanda assessoria especializada." },
      { q: "O escritório atende empresas de que porte?", a: "Atendemos desde startups e pequenas empresas até grandes corporações, adaptando nossa abordagem ao tamanho e complexidade de cada cliente." },
      { q: "Como funciona a assessoria contínua?", a: "Oferecemos planos de assessoria mensal que incluem consultoria preventiva, revisão de contratos, acompanhamento regulatório e suporte em demandas específicas." },
    ],
  },
  trabalhista: {
    title: "Direito Trabalhista",
    subtitle: "Proteção e estratégia nas relações de trabalho.",
    intro: "As relações trabalhistas no Brasil são regidas por uma legislação complexa e em constante evolução. A Montreval atua tanto na defesa patronal quanto na proteção dos direitos dos trabalhadores, sempre com foco em soluções eficientes e juridicamente sólidas.",
    problems: [
      { title: "Passivo Trabalhista Elevado", desc: "Empresas com práticas inadequadas acumulam riscos que podem comprometer sua saúde financeira." },
      { title: "Rescisões Mal Conduzidas", desc: "Erros no processo de desligamento geram reclamações trabalhistas e custos desnecessários." },
      { title: "Assédio e Discriminação", desc: "Ambientes de trabalho tóxicos resultam em ações judiciais e danos reputacionais significativos." },
      { title: "Negociações Coletivas", desc: "Acordos coletivos mal negociados podem gerar obrigações financeiras desproporcional para a empresa." },
    ],
    approach: [
      "Auditoria trabalhista para identificação e mitigação de riscos.",
      "Defesa estratégica em reclamações trabalhistas.",
      "Elaboração de políticas internas e regulamentos empresariais.",
      "Assessoria em negociações coletivas e relações sindicais.",
      "Implementação de programas de compliance trabalhista.",
      "Consultoria em terceirização e contratos de trabalho especiais.",
    ],
    faq: [
      { q: "É possível reduzir o passivo trabalhista da minha empresa?", a: "Sim. Através de auditoria trabalhista preventiva, identificamos irregularidades e implementamos correções antes que se tornem litígios." },
      { q: "O escritório atua na defesa do trabalhador?", a: "Sim, atuamos em ambos os polos da relação trabalhista, sempre com ética e comprometimento." },
      { q: "Como prevenir ações trabalhistas?", a: "Investindo em compliance trabalhista, políticas internas claras e treinamento de gestores. Atuamos na prevenção como estratégia prioritária." },
    ],
  },
  civil: {
    title: "Direito Civil",
    subtitle: "Soluções jurídicas para relações patrimoniais e obrigacionais.",
    intro: "O Direito Civil é a base das relações jurídicas entre particulares. Na Montreval, oferecemos assessoria completa em questões contratuais, responsabilidade civil, direito do consumidor e resolução de conflitos, sempre buscando a solução mais eficiente.",
    problems: [
      { title: "Inadimplemento Contratual", desc: "O descumprimento de obrigações contratuais pode gerar prejuízos financeiros e danos à reputação." },
      { title: "Responsabilidade Civil", desc: "Acidentes, danos materiais e morais demandam apuração precisa e defesa ou reparação adequada." },
      { title: "Disputas de Consumo", desc: "Relações de consumo problemáticas geram ações judiciais e reclamações que exigem resposta estratégica." },
      { title: "Cobranças Indevidas", desc: "Cobranças abusivas ou indevidas requerem ação imediata para proteger direitos e patrimônio." },
    ],
    approach: [
      "Elaboração e revisão de contratos civis com cláusulas protetivas.",
      "Ações de responsabilidade civil, indenizações e reparações.",
      "Defesa e propositura de ações de direito do consumidor.",
      "Mediação e conciliação como alternativas eficientes ao litígio.",
      "Execução de títulos e cobranças judiciais.",
      "Assessoria em questões possessórias e de propriedade.",
    ],
    faq: [
      { q: "Qual o prazo para buscar reparação por danos?", a: "Os prazos prescricionais variam conforme a natureza do dano. Em geral, danos civis prescrevem em 3 anos, mas há exceções importantes." },
      { q: "É possível resolver um conflito sem ir a juízo?", a: "Sim. Incentivamos soluções extrajudiciais como mediação e conciliação, que são mais rápidas e menos onerosas." },
      { q: "Como proteger meu patrimônio preventivamente?", a: "Através de contratos bem elaborados, cláusulas de proteção e planejamento patrimonial estratégico." },
    ],
  },
  imobiliario: {
    title: "Direito Imobiliário",
    subtitle: "Segurança jurídica em transações e empreendimentos imobiliários.",
    intro: "O mercado imobiliário brasileiro envolve transações de alto valor e complexidade jurídica. A Montreval oferece assessoria completa para compradores, vendedores, incorporadores e investidores, garantindo segurança em cada operação.",
    problems: [
      { title: "Vícios Ocultos na Compra", desc: "Imóveis com problemas estruturais, documentais ou ambientais não identificados na negociação." },
      { title: "Irregularidades Documentais", desc: "Imóveis com matrícula irregular, pendências judiciais ou restrições não informadas." },
      { title: "Conflitos em Condomínios", desc: "Disputas entre condôminos, problemas com administradora e questões de uso de áreas comuns." },
      { title: "Incorporações Problemáticas", desc: "Atrasos na entrega, divergências na planta e problemas com o memorial descritivo." },
    ],
    approach: [
      "Due diligence imobiliária completa antes de qualquer transação.",
      "Assessoria em compra, venda, locação e permuta de imóveis.",
      "Consultoria para incorporadoras e construtoras.",
      "Regularização de imóveis e retificação de registros.",
      "Assessoria em financiamento imobiliário e garantias.",
      "Representação em litígios imobiliários e ações possessórias.",
    ],
    faq: [
      { q: "O que é due diligence imobiliária?", a: "É uma investigação detalhada da situação jurídica, fiscal e documental do imóvel antes da transação, evitando surpresas desagradáveis." },
      { q: "Preciso de advogado para comprar um imóvel?", a: "Altamente recomendável. Um advogado identifica riscos que corretor e cartório não analisam, protegendo seu investimento." },
      { q: "Como regularizar um imóvel irregular?", a: "O processo varia conforme o tipo de irregularidade. Pode envolver retificação de matrícula, usucapião ou regularização fundiária." },
    ],
  },
  tributario: {
    title: "Direito Tributário",
    subtitle: "Estratégia fiscal inteligente para otimizar sua carga tributária.",
    intro: "O sistema tributário brasileiro é um dos mais complexos do mundo. A Montreval oferece assessoria tributária que combina conhecimento técnico profundo com visão estratégica, ajudando empresas e pessoas físicas a otimizar sua carga tributária dentro da legalidade.",
    problems: [
      { title: "Carga Tributária Excessiva", desc: "Muitas empresas pagam mais impostos do que deveriam por falta de planejamento adequado." },
      { title: "Autuações Fiscais", desc: "Fiscalizações que resultam em autos de infração com multas e penalidades elevadas." },
      { title: "Créditos Tributários Não Recuperados", desc: "Empresas deixam de recuperar valores pagos indevidamente ou a maior por desconhecimento." },
      { title: "Mudanças Legislativas Constantes", desc: "A legislação tributária brasileira muda frequentemente, exigindo acompanhamento especializado." },
    ],
    approach: [
      "Planejamento tributário estratégico e elisão fiscal.",
      "Contencioso administrativo perante CARF e tribunais administrativos estaduais.",
      "Contencioso judicial tributário em todas as instâncias.",
      "Recuperação de créditos tributários e compensações.",
      "Consultoria em operações de reorganização societária com impacto fiscal.",
      "Acompanhamento de mudanças legislativas e impactos tributários.",
    ],
    faq: [
      { q: "O que é planejamento tributário?", a: "É a organização das atividades empresariais de forma a otimizar a carga tributária dentro dos limites legais, sem configurar evasão." },
      { q: "É possível recuperar impostos pagos a mais?", a: "Sim. Existem diversas teses tributárias que permitem a recuperação de valores pagos indevidamente, com correção monetária." },
      { q: "Recebi uma autuação fiscal. O que fazer?", a: "É fundamental analisar o auto de infração imediatamente e preparar defesa administrativa dentro do prazo legal, que geralmente é de 30 dias." },
    ],
  },
  familia: {
    title: "Direito de Família",
    subtitle: "Sensibilidade e discrição nas questões mais importantes da vida.",
    intro: "Questões familiares demandam não apenas conhecimento jurídico, mas sensibilidade e compreensão humana. Na Montreval, tratamos cada caso de família com a discrição, o respeito e a dedicação que momentos delicados exigem.",
    problems: [
      { title: "Divórcio Conflituoso", desc: "Separações com disputas sobre partilha de bens, guarda de filhos e pensão alimentícia." },
      { title: "Inventário Complexo", desc: "Inventários com múltiplos herdeiros, bens em diferentes estados e disputas sobre quinhões." },
      { title: "Alienação Parental", desc: "Situações em que um dos genitores manipula os filhos contra o outro, prejudicando a convivência familiar." },
      { title: "Planejamento Sucessório", desc: "Famílias que não se preparam para a transmissão de patrimônio enfrentam conflitos e custos desnecessários." },
    ],
    approach: [
      "Divórcio consensual e litigioso com proteção patrimonial.",
      "Ações de guarda, visitação e regulamentação de convivência.",
      "Fixação, revisão e execução de pensão alimentícia.",
      "Inventário judicial e extrajudicial.",
      "Planejamento sucessório com instrumentos como holding familiar e testamento.",
      "Medidas protetivas e ações relacionadas à alienação parental.",
    ],
    faq: [
      { q: "Quanto tempo demora um divórcio?", a: "O divórcio consensual extrajudicial pode ser concluído em poucos dias. Já o litigioso pode levar meses ou anos, dependendo da complexidade." },
      { q: "É possível fazer inventário sem ir à Justiça?", a: "Sim, desde que todos os herdeiros sejam maiores e capazes e haja consenso sobre a partilha. Neste caso, o inventário pode ser feito em cartório." },
      { q: "O que é holding familiar?", a: "É uma empresa constituída para administrar e proteger o patrimônio familiar, facilitando a sucessão e oferecendo vantagens tributárias." },
    ],
  },
};

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? areasData[slug] : null;

  if (!area) {
    return (
      <Layout>
        <section className="bg-dark min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-champagne mb-4">Área não encontrada</h1>
            <Link to="/areas-de-atuacao" className="btn-gold">Ver todas as áreas</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Link to="/areas-de-atuacao" className="inline-flex items-center gap-2 text-gold text-xs font-sans tracking-[0.15em] uppercase mb-8 hover:gap-4 transition-all duration-300">
              <ArrowLeft size={14} /> Áreas de Atuação
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6">{area.title}</h1>
            <div className="divider-gold mb-6" />
            <p className="font-sans text-lg text-champagne/60 max-w-2xl font-light">{area.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <p className="font-sans text-sm text-champagne/50 leading-[2] text-center">{area.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Problems */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Problemas Comuns</p>
            <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-12">Situações que exigem atenção especializada</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
            {area.problems.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-dark p-10">
                  <h3 className="font-serif text-xl text-champagne mb-3">{p.title}</h3>
                  <p className="font-sans text-xs text-champagne/40 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Nossa Atuação</p>
            <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-12">Como a Montreval pode ajudar</h2>
          </ScrollReveal>
          <div className="max-w-2xl space-y-6">
            {area.approach.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <p className="font-sans text-sm text-champagne/50 leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">FAQ</p>
              <h2 className="font-serif text-3xl md:text-4xl text-champagne">Perguntas Frequentes</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {area.faq.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-b border-gold/10 pb-8">
                  <h3 className="font-serif text-lg text-champagne mb-3">{item.q}</h3>
                  <p className="font-sans text-sm text-champagne/40 leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Precisa de assessoria em ${area.title}?`} />
    </Layout>
  );
};

export default PracticeAreaDetail;
