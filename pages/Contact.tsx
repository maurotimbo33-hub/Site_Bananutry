
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de processamento para melhor UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Formata a mensagem para o WhatsApp
    const textoWhatsapp = `*Novo Contato Site Bananutry*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Empresa:* ${formData.empresa}%0A` +
      `*Localidade:* ${formData.localidade}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Volume Mensal:* ${formData.volume}%0A` +
      `*Mensagem:* ${formData.mensagem || 'Sem observações'}`;

    const whatsappUrl = `https://wa.me/5561999913281?text=${textoWhatsapp}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            
            {/* Informações de Contato */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h1 className="text-4xl font-black text-[#4B3621] mb-6 uppercase tracking-tighter">Fale Conosco</h1>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                  Nossa fábrica está pronta para atender grandes volumes e parcerias de distribuição. Preencha o formulário e receba nossa tabela de preços atualizada.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-[#F7E500] p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-[#4B3621]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4B3621] uppercase text-xs tracking-widest mb-1">WhatsApp Comercial</h4>
                    <p className="text-gray-600 font-bold">(61) 99991-3281</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-[#F7E500] p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-[#4B3621]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4B3621] uppercase text-xs tracking-widest mb-1">E-mail Direto</h4>
                    <p className="text-gray-600 font-bold">comercial.bananutry@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-[#F7E500] p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="text-[#4B3621]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4B3621] uppercase text-xs tracking-widest mb-1">Fábrica</h4>
                    <p className="text-gray-600 font-bold">Zona Industrial (Guará) - Brasília-DF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-[#F7E500]/10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black text-[#4B3621] mb-4 uppercase">Solicitação Iniciada!</h3>
                  <p className="text-gray-600 max-w-sm font-medium mb-8">
                    Seu pedido de contato foi gerado. Se o WhatsApp não abriu automaticamente, clique no botão abaixo para falar com nosso consultor.
                  </p>
                  <div className="flex flex-col gap-4 w-full">
                    <button 
                      onClick={() => window.open(`https://wa.me/5561999913281`, '_blank')}
                      className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black uppercase text-sm flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform"
                    >
                      <MessageSquare size={20} /> Reabrir WhatsApp
                    </button>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[#4B3621] font-black uppercase text-[10px] tracking-[0.2em] hover:underline"
                    >
                      Voltar ao formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Nome do Responsável</label>
                      <input 
                        required 
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-medium" 
                        placeholder="Ex: João Silva" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Empresa / Razão Social</label>
                      <input 
                        required 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-medium" 
                        placeholder="Nome do seu negócio" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Cidade / Estado</label>
                      <input 
                        required 
                        name="localidade"
                        value={formData.localidade}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-medium" 
                        placeholder="Onde você está localizado?" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Seu WhatsApp</label>
                      <input 
                        required 
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        type="tel" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-medium" 
                        placeholder="(00) 00000-0000" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Expectativa de Pedido Mensal</label>
                    <select 
                      required 
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-bold text-[#4B3621]"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Iniciando agora">Varejo (Iniciando agora)</option>
                      <option value="Até 1000 unidades">Pequeno Atacado (Até 1.000 un/mês)</option>
                      <option value="Acima de 3000 unidades">Distribuidor (Acima de 3.000 un/mês)</option>
                      <option value="Rede de Supermercados">Rede de Supermercados</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Informações Adicionais</label>
                    <textarea 
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={3} 
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-medium" 
                      placeholder="Alguma dúvida específica ou produto de interesse?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#4B3621] hover:bg-black text-white font-black text-lg py-5 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-[#4B3621]/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin mr-3" />
                    ) : (
                      <Send size={20} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                    {loading ? 'PROCESSANDO...' : 'SOLICITAR COTAÇÃO AGORA'}
                  </button>
                  <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Resposta em até 24h úteis via WhatsApp
                  </p>
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
