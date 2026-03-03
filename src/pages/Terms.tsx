import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => {
  return (
    <Layout>
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl text-champagne mb-6">Termos de Uso</h1>
            <div className="divider-gold" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="space-y-8 font-sans text-sm text-champagne/50 leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">1. Aceitação dos Termos</h2>
                <p>Ao acessar e utilizar este website, você concorda com estes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize o site.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">2. Natureza do Conteúdo</h2>
                <p>As informações disponibilizadas neste site têm caráter meramente informativo e não constituem aconselhamento jurídico. A relação advogado-cliente somente se estabelece mediante contrato formal de prestação de serviços.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">3. Propriedade Intelectual</h2>
                <p>Todo o conteúdo deste website, incluindo textos, imagens, logotipos, design e código-fonte, é protegido por direitos autorais e pertence à Montreval Advocacia. É vedada a reprodução total ou parcial sem autorização prévia e expressa.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">4. Responsabilidade</h2>
                <p>A Montreval Advocacia não se responsabiliza por decisões tomadas com base exclusivamente nas informações contidas neste site. Para orientação jurídica específica, entre em contato com nossa equipe.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">5. Links Externos</h2>
                <p>Este site pode conter links para websites de terceiros. A Montreval não tem controle sobre o conteúdo desses sites e não se responsabiliza por suas práticas de privacidade ou conteúdo.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">6. Legislação Aplicável</h2>
                <p>Estes Termos são regidos pela legislação brasileira. Qualquer controvérsia será submetida ao foro da Comarca de São Paulo/SP.</p>
              </div>
              <p className="text-champagne/30 text-xs mt-12">Última atualização: Março de 2026</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
