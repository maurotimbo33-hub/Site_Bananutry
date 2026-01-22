
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 uppercase">Fale Conosco</h1>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Entre em contato com nosso time comercial e saiba como revender os produtos Bananutry em sua região. Atendimento especializado para atacado e varejo.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-4 rounded-2xl mr-6">
                    <Phone className="text-amber-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">WhatsApp / SAC</h4>
                    <p className="text-gray-600">(61) 99991-3281</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 p-4 rounded-2xl mr-6">
                    <Mail className="text-amber-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">E-mail Comercial</h4>
                    <p className="text-gray-600">comercial.bananutry@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 p-4 rounded-2xl mr-6">
                    <MapPin className="text-amber-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Endereço da Fábrica</h4>
                    <p className="text-gray-600">Zona Industrial (Guará) - Brasília-DF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 size={80} className="text-green-500 mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-600 max-w-sm">
                    Agradecemos seu interesse. Nosso time comercial entrará em contato em breve via WhatsApp.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-yellow-600 font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Nome Completo</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Empresa</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="Razão social" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Cidade / Estado</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="Ex: Brasília - DF" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">WhatsApp</label>
                      <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="(61) 99991-3281" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Volume de interesse mensal</label>
                    <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-yellow-400 outline-none transition-all">
                      <option value="">Selecione um volume</option>
                      <option value="pequeno">Até 500 unidades</option>
                      <option value="medio">500 a 2000 unidades</option>
                      <option value="grande">Acima de 2000 unidades</option>
                      <option value="distribuidor">Quero ser um distribuidor regional</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Mensagem (opcional)</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="Conte um pouco sobre seu negócio..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-amber-950 font-extrabold text-lg py-5 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-yellow-200"
                  >
                    <Send size={20} className="mr-3" />
                    Solicitar Contato Comercial
                  </button>
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
