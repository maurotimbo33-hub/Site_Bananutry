
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Award } from 'lucide-react';
import { PRODUCTS, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Estilo Banner Imagem 1 */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#F7E500]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="text-[#4B3621]">
            <span className="inline-block bg-[#4B3621] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">DESDE 2005</span>
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none uppercase">
              BANANUTRY
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 italic">
              Doce de banana sem açúcar.<br/>
              Sabor que nutre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contato" 
                className="bg-[#4B3621] hover:bg-black text-white px-10 py-5 rounded-2xl font-black text-xl text-center transition-all shadow-xl"
              >
                SOLICITAR ORÇAMENTO
              </Link>
              <Link 
                to="/produtos" 
                className="bg-white hover:bg-gray-100 text-[#4B3621] px-10 py-5 rounded-2xl font-black text-xl text-center transition-all shadow-lg"
              >
                VER PRODUTOS
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1543218024-57a70143c369?auto=format&fit=crop&q=80&w=800" 
              alt="Bananutry Health" 
              className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white transform rotate-3"
            />
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
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white shadow-sm border border-gray-100 group">
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
          <div className="bg-[#F7E500] rounded-[4rem] p-12 flex flex-col md:flex-row items-center gap-12 relative">
             <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-[#4B3621]" size={40} />
                  <h2 className="text-3xl font-black text-[#4B3621] uppercase">Lançamento!</h2>
                </div>
                <h3 className="text-5xl font-black text-[#4B3621] mb-6">Balas de Banana</h3>
                <p className="text-xl text-[#4B3621]/80 mb-8 font-medium">
                  A nutrição que você já conhece, agora também na versão de balas. Disponível nos tamanhos 150g, 250g e 500g.
                </p>
                <div className="flex gap-4 mb-8">
                  {['150g', '250g', '500g'].map(size => (
                    <span key={size} className="bg-[#4B3621] text-white px-4 py-2 rounded-lg font-bold">{size}</span>
                  ))}
                </div>
                <Link to="/contato" className="inline-block bg-white text-[#4B3621] px-8 py-4 rounded-xl font-black uppercase shadow-lg">
                  Quero no meu PDV
                </Link>
             </div>
             <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1590080875515-8a03b1447d1a?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-3xl shadow-2xl border-4 border-white transform -rotate-2"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Commercial Banner */}
      <section className="py-24 bg-[#4B3621] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Oportunidade para Atacado</h2>
          <p className="text-xl opacity-80 mb-12">
            A Bananutry é o produto ideal para o seu mix saudável. Alta rotatividade, margens competitivas e aceitação imediata pelos consumidores.
          </p>
          <Link to="/atacado" className="bg-[#F7E500] text-[#4B3621] px-12 py-6 rounded-2xl font-black text-xl uppercase shadow-2xl inline-flex items-center">
            Solicitar Tabela de Preços Atacado
            <ArrowRight className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
