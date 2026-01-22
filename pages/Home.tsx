
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Award } from 'lucide-react';
import { PRODUCTS, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Estilo Banner Imagem 1 */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#F7E500]">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Coluna de Texto - Mais larga para evitar truncamento */}
          <div className="lg:col-span-7 text-[#4B3621]">
            <span className="inline-block bg-[#4B3621] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">DESDE 2005</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none uppercase tracking-tighter">
              BANANUTRY
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 italic opacity-90">
              Doce de banana sem açúcar.<br/>
              Sabor que nutre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contato" 
                className="bg-[#4B3621] hover:bg-black text-white px-10 py-5 rounded-2xl font-black text-xl text-center transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                SOLICITAR ORÇAMENTO
              </Link>
              <Link 
                to="/produtos" 
                className="bg-white hover:bg-gray-100 text-[#4B3621] px-10 py-5 rounded-2xl font-black text-xl text-center transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                VER PRODUTOS
              </Link>
            </div>
          </div>

          {/* Coluna da Imagem - Redimensionada para não truncar o nome */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-full">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl transform scale-150"></div>
              <img 
                src="https://images.unsplash.com/photo-1543218024-57a70143c369?auto=format&fit=crop&q=80&w=800" 
                alt="Bananutry Health" 
                className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              {/* Selo de Qualidade sobreposto */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border-2 border-[#F7E500] hidden md:block animate-bounce">
                <Award className="text-[#4B3621]" size={32} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Curva de transição */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-50 rounded-t-[5rem] z-0"></div>
      </section>

      {/* Differentials - Imagem 4 Estilo */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {diff.icon}
                </div>
                <p className="font-black text-[#4B3621] text-xs uppercase tracking-tight leading-tight">
                  {diff.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lançamento Section - Inspirado na Imagem 4 */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-[#F7E500] rounded-[4rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative border-4 border-[#4B3621]/5">
             <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-[#4B3621]" size={40} />
                  <h2 className="text-3xl font-black text-[#4B3621] uppercase">Lançamento!</h2>
                </div>
                <h3 className="text-5xl font-black text-[#4B3621] mb-6 leading-tight">Balas de Banana</h3>
                <p className="text-xl text-[#4B3621]/80 mb-8 font-medium">
                  A nutrição que você já conhece, agora também na versão de balas. Disponível nos tamanhos 150g, 250g e 500g.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {['150g', '250g', '500g'].map(size => (
                    <span key={size} className="bg-[#4B3621] text-white px-5 py-2 rounded-xl font-black text-sm">{size}</span>
                  ))}
                </div>
                <Link to="/contato" className="inline-block bg-white hover:bg-black hover:text-white text-[#4B3621] px-10 py-5 rounded-2xl font-black uppercase shadow-lg transition-all">
                  Quero no meu PDV
                </Link>
             </div>
             <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1590080875515-8a03b1447d1a?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-3xl shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  alt="Balas de Banana"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Commercial Banner */}
      <section className="py-24 bg-[#4B3621] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Oportunidade para Atacado</h2>
          <p className="text-xl opacity-80 mb-12 font-medium leading-relaxed">
            A Bananutry é o produto ideal para o seu mix saudável. Alta rotatividade, margens competitivas e aceitação imediata pelos consumidores em todo o território nacional.
          </p>
          <Link to="/atacado" className="bg-[#F7E500] hover:bg-white text-[#4B3621] px-12 py-6 rounded-2xl font-black text-xl uppercase shadow-2xl inline-flex items-center transition-all group">
            Solicitar Tabela de Preços Atacado
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
