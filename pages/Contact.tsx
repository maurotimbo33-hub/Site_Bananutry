
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, MessageSquare, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    empresa: '',
    localidade: '',
    whatsapp: '',
    volume: '',
    mensagem: ''
  });

  // O Formspree enviará para maurotimbo33@gmail.com
  // IMPORTANTE: Na primeira vez que você enviar, o Formspree mandará um e-mail para você pedindo para confirmar.
  // Você DEVE clicar no link de confirmação que chegará no seu e-mail para ativar o recebimento.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/maurotimbo33@gmail.com"; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      // 1. Preparar dados para o E-mail
      const emailPayload = {
        ...formData,
        _subject: `NOVO ORÇAMENTO: ${formData.empresa} - ${formData.nome}`,
        _replyto: formData.whatsapp // Permite responder direto pelo e-mail
      };

      // 2. Enviar por E-mail via Formspree (AJAX)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      // 3. Preparar o WhatsApp
      const textoWhatsapp = `*Novo Orçamento Site Bananutry*%0A%0A` +
        `*Nome:* ${formData.nome}%0A` +
        `*Empresa:* ${formData.empresa}%0A` +
        `*Localidade:* ${formData.localidade}%0A` +
        `*WhatsApp:* ${formData.whatsapp}%0A` +
        `*Volume:* ${formData.volume}%0A` +
        `*Mensagem:* ${formData.mensagem || 'Sem observações'}`;

      const whatsappUrl = `https://wa.me/5561999913281?text=${textoWhatsapp}`;

      // 4. Abre o WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Se o e-mail falhar, ainda mostramos sucesso pois o WhatsApp foi disparado
        console.warn("E-mail não pôde ser enviado via Formspree, verifique se confirmou o endpoint.");
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Erro técnico no envio:", err);
      // Fallback radical: Se o fetch travar (CORS ou rede), abre só o WhatsApp
      window.open(`https://wa.me/5561999913281`, '_blank');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
                  Nossa fábrica em Brasília atende todo o território nacional. Preencha os dados abaixo e receba nossa proposta comercial completa no seu e-mail e WhatsApp.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-[#F7E500] p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-[#4B3621]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4B3621] uppercase text-xs tracking-widest mb-1">Comercial / WhatsApp</h4>
                    <p className="text-gray-600 font-bold">(61) 99991-3281</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-[#F7E500] p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-[#4B3621]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4B3621] uppercase text-xs tracking-widest mb-1">E-mail Corporativo</h4>
                    <p className="text-gray-600 font-bold">maurotimbo33@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-[#F7E500] p-4 rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="text-[#4B3621]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4B3621] uppercase text-xs tracking-widest mb-1">Sede da Fábrica</h4>
                    <p className="text-gray-600 font-bold">Zona Industrial (Guará) - Brasília/DF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco do Formulário */}
            <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border-4 border-[#F7E500]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Mail size={120} className="text-[#4B3621]" />
              </div>

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 border-4 border-green-50">
                    <CheckCircle2 size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black text-[#4B3621] mb-4 uppercase italic">Pedido Enviado!</h3>
                  <p className="text-gray-600 max-w-sm font-medium mb-8">
                    Enviamos uma cópia para <strong>maurotimbo33@gmail.com</strong> e seu WhatsApp foi solicitado. Respondemos em até 24h.
                  </p>
                  <div className="flex flex-col gap-4 w-full max-w-xs">
                    <button 
                      onClick={() => window.open(`https://wa.me/5561999913281`, '_blank')}
                      className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black uppercase text-sm flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all"
                    >
                      <MessageSquare size={20} /> Abrir WhatsApp Agora
                    </button>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[#4B3621] font-black uppercase text-[10px] tracking-[0.2em] hover:underline"
                    >
                      Enviar novo formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Nome</label>
                      <input 
                        required 
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-bold text-[#4B3621]" 
                        placeholder="Nome completo" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Empresa</label>
                      <input 
                        required 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-bold text-[#4B3621]" 
                        placeholder="Nome da sua loja/rede" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Cidade / UF</label>
                      <input 
                        required 
                        name="localidade"
                        value={formData.localidade}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-bold text-[#4B3621]" 
                        placeholder="Ex: São Paulo/SP" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">WhatsApp de Contato</label>
                      <input 
                        required 
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        type="tel" 
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-bold text-[#4B3621]" 
                        placeholder="(00) 00000-0000" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Volume Mensal Estimado</label>
                    <select 
                      required 
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-black text-[#4B3621] uppercase text-xs"
                    >
                      <option value="">Selecione seu perfil</option>
                      <option value="Revendedor Iniciante">Revendedor Iniciante</option>
                      <option value="Atacado Regional">Atacado Regional</option>
                      <option value="Distribuidora">Distribuidora</option>
                      <option value="Rede Supermercado">Rede Supermercado</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#4B3621] uppercase tracking-widest px-1">Sua Mensagem</label>
                    <textarea 
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={3} 
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#F7E500]/20 focus:border-[#F7E500] outline-none transition-all font-medium text-[#4B3621]" 
                      placeholder="Gostaria de saber mais sobre..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#4B3621] hover:bg-black text-white font-black text-lg py-5 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-[#4B3621]/30 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin mr-3" />
                        ENVIANDO...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        ENVIAR PARA maurotimbo33@gmail.com
                      </>
                    )}
                  </button>
                  <p className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                    * Verifique sua caixa de entrada e pasta de Spam.<br/>
                    A abertura do WhatsApp é automática após o clique.
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
