import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase mb-4">Contato</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6">Entre em contato</h1>
            <div className="divider-gold" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-dark-medium py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-champagne/40 text-xs font-sans tracking-[0.1em] uppercase block mb-2">Nome</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-dark border border-gold/10 px-4 py-3 text-champagne font-sans text-sm focus:border-gold/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-champagne/40 text-xs font-sans tracking-[0.1em] uppercase block mb-2">E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-dark border border-gold/10 px-4 py-3 text-champagne font-sans text-sm focus:border-gold/40 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-champagne/40 text-xs font-sans tracking-[0.1em] uppercase block mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-dark border border-gold/10 px-4 py-3 text-champagne font-sans text-sm focus:border-gold/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-champagne/40 text-xs font-sans tracking-[0.1em] uppercase block mb-2">Assunto</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full bg-dark border border-gold/10 px-4 py-3 text-champagne font-sans text-sm focus:border-gold/40 outline-none transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option>Direito Empresarial</option>
                      <option>Direito Trabalhista</option>
                      <option>Direito Civil</option>
                      <option>Direito Imobiliário</option>
                      <option>Direito Tributário</option>
                      <option>Direito de Família</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-champagne/40 text-xs font-sans tracking-[0.1em] uppercase block mb-2">Mensagem</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    required
                    className="w-full bg-dark border border-gold/10 px-4 py-3 text-champagne font-sans text-sm focus:border-gold/40 outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full md:w-auto">Enviar Mensagem</button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-2xl text-champagne mb-6">Informações</h3>
                  <div className="divider-gold mb-8" />
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-sm text-champagne mb-1">Endereço</p>
                    <p className="font-sans text-xs text-champagne/40">Av. Paulista, 1578 — 12º andar<br />Bela Vista, São Paulo — SP<br />CEP 01310-200</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-sm text-champagne mb-1">Telefone</p>
                    <p className="font-sans text-xs text-champagne/40">(11) 3456-7890</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-sm text-champagne mb-1">E-mail</p>
                    <p className="font-sans text-xs text-champagne/40">contato@montreval.com.br</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-sm text-champagne mb-1">Horário de Atendimento</p>
                    <p className="font-sans text-xs text-champagne/40">Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h (com agendamento)</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="w-full h-[400px]">
        <iframe
          title="Localização Montreval Advocacia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098!2d-46.6559!3d-23.5647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c0776a!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(80%) contrast(1.1) brightness(0.8)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </Layout>
  );
};

export default Contact;
