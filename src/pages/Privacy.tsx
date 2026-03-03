import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Privacy = () => {
  return (
    <Layout>
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl text-champagne mb-6">Política de Privacidade</h1>
            <div className="divider-gold" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="space-y-8 font-sans text-sm text-champagne/50 leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">1. Informações Gerais</h2>
                <p>A Montreval Advocacia, inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX, com sede na Av. Paulista, 1578, 12º andar, São Paulo/SP, é responsável pelo tratamento dos dados pessoais coletados através deste website, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">2. Dados Coletados</h2>
                <p>Coletamos dados pessoais fornecidos voluntariamente por você através de formulários de contato, incluindo: nome completo, endereço de e-mail, número de telefone e mensagens. Também coletamos automaticamente dados de navegação, como endereço IP, tipo de navegador e páginas visitadas.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">3. Finalidade do Tratamento</h2>
                <p>Os dados coletados são utilizados exclusivamente para: responder a consultas e solicitações; agendar reuniões e consultas; enviar informações jurídicas relevantes (mediante consentimento); melhorar a experiência de navegação no site; cumprir obrigações legais e regulatórias.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">4. Compartilhamento de Dados</h2>
                <p>Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprimento de obrigações legais ou mediante seu consentimento expresso. O sigilo profissional inerente à advocacia é rigorosamente observado.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">5. Segurança</h2>
                <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição. Nossos sistemas são continuamente monitorados e atualizados.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">6. Seus Direitos</h2>
                <p>Você tem direito a: acessar seus dados pessoais; solicitar correção de dados incompletos ou incorretos; solicitar a eliminação de dados desnecessários; revogar consentimento a qualquer momento. Para exercer seus direitos, entre em contato pelo e-mail: privacidade@montreval.com.br.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-champagne mb-4">7. Alterações</h2>
                <p>Esta Política pode ser atualizada periodicamente. Recomendamos a consulta regular desta página. A data da última atualização será sempre indicada no final do documento.</p>
              </div>
              <p className="text-champagne/30 text-xs mt-12">Última atualização: Março de 2026</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
