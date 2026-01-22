
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Quem Somos</h1>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <span className="font-bold text-amber-800">Bananutry</span> é uma fábrica brasileira especializada na produção de doce de banana sem adição de açúcar. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Atuando desde <span className="font-bold">2005</span>, a empresa nasceu com o propósito de oferecer alimentos naturais, saborosos e nutritivos, respeitando a saúde do consumidor.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl italic text-amber-900">
                "Nosso compromisso é transformar a fruta natural em um snack prático e saudável para o dia a dia."
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1543218024-57a70143c369?auto=format&fit=crop&q=80&w=800" 
                alt="Produção Industrial" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-amber-900 text-sm mr-4">✓</span>
              Nosso Modelo de Negócio
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Trabalhamos com produção própria, controle de qualidade rigoroso e fornecimento contínuo para o mercado atacadista em todo o Brasil. Nossa infraestrutura permite atender desde pequenas redes até grandes centros de distribuição.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="text-3xl font-extrabold text-yellow-600 mb-1">20+</div>
                <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">Anos de Mercado</div>
              </div>
              <div className="text-center p-4 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="text-3xl font-extrabold text-yellow-600 mb-1">100%</div>
                <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">Produção Própria</div>
              </div>
              <div className="text-center p-4 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="text-3xl font-extrabold text-yellow-600 mb-1">Zero</div>
                <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">Açúcar Adicionado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
