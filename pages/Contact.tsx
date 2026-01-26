
import React, { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    empresa: '',
    localidade: '',
    whatsapp: '',
    volume: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textoWhatsapp = `*Novo Orçamento Bananutry*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Empresa:* ${formData.empresa}%0A` +
      `*Cidade:* ${formData.localidade}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Volume:* ${formData.volume}%0A` +
      `*Mensagem:* ${formData.mensagem || 'Sem observações'}`;

    const whatsappUrl = `https://wa.me/5561999993281?text=${textoWhatsapp}`;

    // Abre o WhatsApp imediatamente para o cliente
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h1 className="text-4xl font-black text-[#4B3621] mb-6 uppercase tracking-tighter italic">Fale Conosco</h1>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Nossa fábrica está pronta para atender seu pedido. Receba nossa tabela de preços e condições de frete direto no seu WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:border-[#F7E500] transition-colors">
                  <div className="bg-[#F7E500] p-4 rounded-2xl text-[#4B3621]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">WhatsApp Comercial</span>
                    <span className="text-lg font-black text-[#4B3621]">(61) 99999-3281</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:border-[#F7E500] transition-colors">
                  <div className="bg-[#F7E500] p-4 rounded-2xl text-[#4B3621]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Localização</span>
                    <span className="text-lg font-black text-[#4B3621]">Guará - Brasília/DF</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border-4 border-[#F7E500]/10">
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black text-[#4B3621] mb-4 uppercase">Solicitação Enviada!</h3>
                  <p className="text-gray-600 font-medium mb-10 max-w-xs mx-auto">
                    Obrigado pelo interesse! O WhatsApp comercial foi aberto com seus dados preenchidos para agilizar seu atendimento.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => window.open(`https://wa.me/5561999993281`, '_blank')}
                      className="bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase text-sm shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                    >
                      <MessageSquare size={20} /> Abrir WhatsApp Novamente
                    </button>
                    
                    <button onClick={() => setSubmitted(false)} className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#4B3621] mt-4">
                      Enviar novo formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest ml-2">Seu Nome</label>
                      <input required name="nome" value={formData.nome} onChange={handleChange} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-[#F7E500] outline-none font-bold text-[#4B3621] transition-all" placeholder="Nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest ml-2">Sua Empresa</label>
                      <input required name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-[#F7E500] outline-none font-bold text-[#4B3621] transition-all" placeholder="Razão social ou fantasia" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest ml-2">Cidade/UF</label>
                      <input required name="localidade" value={formData.localidade} onChange={handleChange} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-[#F7E500] outline-none font-bold text-[#4B3621] transition-all" placeholder="Ex: Brasília/DF" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest ml-2">WhatsApp</label>
                      <input required name="whatsapp" value={formData.whatsapp} onChange={handleChange} type="tel" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-[#F7E500] outline-none font-bold text-[#4B3621] transition-all" placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest ml-2">Tipo de Negócio</label>
                    <select required name="volume" value={formData.volume} onChange={handleChange} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-[#F7E500] outline-none font-black text-[#4B3621] uppercase text-xs">
                      <option value="">Selecione...</option>
                      <option value="Distribuidor">Distribuidora</option>
                      <option value="Supermercado">Rede de Supermercados</option>
                      <option value="Lojista">Lojista (Revenda)</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest ml-2">Mensagem</label>
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={3} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-[#F7E500] outline-none font-medium text-[#4B3621]" placeholder="Diga-nos o que precisa..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#4B3621] hover:bg-black text-white font-black text-lg py-5 rounded-2xl flex items-center justify-center transition-all shadow-xl group"
                  >
                    <Send size={20} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    SOLICITAR ORÇAMENTO VIA WHATSAPP
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <ShieldCheck size={12} /> Seus dados estão seguros conosco
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
