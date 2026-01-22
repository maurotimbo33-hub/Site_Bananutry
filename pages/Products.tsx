
import React from 'react';
import { Banana, CheckCircle2, Zap, Star, Award } from 'lucide-react';

const Products: React.FC = () => {
  const flavors = [
    "Bananada Natural",
    "Bananada com Ameixa",
    "Bananada com Uva-Passa",
    "Bananada com Açaí",
    "Bananada com Castanha-do-Pará"
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FFFBEB] min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Banner Superior - Pacotes de 280g */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#4B3621] px-12 py-3 rounded-xl shadow-xl transform -rotate-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest relative z-10">
              Pacotes de 280g
            </h2>
            <p className="text-[#F7E500] text-center text-sm font-bold uppercase relative z-10">Em todos os sabores</p>
          </div>
        </div>

        {/* Layout Principal Estilo Infográfico Aberto */}
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna Esquerda: Sabores Principais */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[#4B3621] font-black uppercase text-xl mb-4 border-b-4 border-[#F7E500] inline-block">
              Nossos Sabores
            </h3>
            <div className="space-y-6">
              {flavors.map((flavor, index) => (
                <div key={index} className="flex items-center group cursor-default">
                  <div className="bg-[#4B3621] text-[#F7E500] p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Banana size={20} />
                  </div>
                  <span className="font-black text-[#4B3621] uppercase text-sm md:text-base leading-tight group-hover:text-amber-700 transition-colors">
                    {flavor}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white/50 p-6 rounded-3xl border-2 border-dashed border-[#4B3621]/20 inline-block shadow-sm">
               <p className="text-[10px] font-black uppercase text-[#4B3621] opacity-60 mb-1">Unidades de:</p>
               <span className="text-3xl font-black text-[#4B3621]">28g</span>
            </div>
          </div>

          {/* Coluna Central: Marca e Imagem de Impacto */}
          <div className="lg:col-span-6 flex flex-col items-center py-10 relative">
            {/* Elementos de Marca Decoupled */}
            <div className="text-center z-10 flex flex-col items-center w-full">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#4B3621]/30"></div>
                <p className="text-[#4B3621] font-black italic uppercase text-xl tracking-wide leading-none">
                  Sabor que nutre
                </p>
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#4B3621]/30"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[#4B3621] uppercase tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] leading-tight mb-2">
                BANANUTRY
              </h1>
              
              <p className="text-[#4B3621]/40 font-black uppercase tracking-[0.6em] mb-10 text-xs md:text-sm">
                QUALIDADE DESDE 2005
              </p>

              {/* Selo PRODUTOS PRÊMIOS */}
              <div className="mb-12 bg-[#4B3621] text-[#F7E500] px-10 py-4 rounded-full font-black uppercase text-base tracking-[0.25em] shadow-2xl flex items-center gap-3 transform -rotate-1 hover:rotate-0 transition-all border-b-4 border-black/20 active:translate-y-1">
                <span className="bg-amber-400 p-1 rounded-full"><Award size={20} className="text-[#4B3621]" /></span>
                PRODUTOS PRÊMIOS
              </div>
              
              {/* Imagem de Bananas de ALTO IMPACTO */}
              <div className="relative w-full max-w-lg aspect-video group">
                <div className="absolute inset-0 bg-[#F7E500]/30 rounded-full blur-[120px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1528825876-01087782d558?auto=format&fit=crop&q=80&w=1200" 
                  alt="Bananas Premium Bananutry" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-all duration-700 ease-out cursor-zoom-in"
                />
              </div>

              <div className="mt-20 text-[#4B3621] font-black uppercase tracking-[0.4em] bg-white/80 backdrop-blur-md px-14 py-6 rounded-full border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(247,229,0,0.2)] transition-shadow">
                 O doce da fruta em sua melhor forma
              </div>
            </div>
          </div>

          {/* Coluna Direita: Lançamento Balas */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-[3rem] border-4 border-[#F7E500] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={200} className="text-[#4B3621]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-[#4B3621]" fill="#4B3621" size={24} />
                  <h3 className="text-[#4B3621] font-black uppercase text-xl">Lançamento!</h3>
                </div>
                
                <h4 className="text-3xl font-black text-[#4B3621] uppercase mb-4 leading-none group-hover:text-amber-800 transition-colors">
                  Balas de Banana
                </h4>
                
                <p className="text-xs font-bold text-gray-500 mb-6 uppercase leading-tight">
                  A nutrição que você já conhece, agora também na versão de balas
                </p>

                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase text-[#4B3621] opacity-60">Nos tamanhos:</p>
                  <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-xl border border-yellow-100 hover:border-yellow-400 transition-colors cursor-default">
                    <span className="font-black text-[#4B3621]">150g</span>
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                  <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-xl border border-yellow-100 hover:border-yellow-400 transition-colors cursor-default">
                    <span className="font-black text-[#4B3621]">250g</span>
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                  <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-xl border border-yellow-100 hover:border-yellow-400 transition-colors cursor-default">
                    <span className="font-black text-[#4B3621]">500g</span>
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Selo Zero Açúcar (Canto Inferior Direito) */}
            <div className="bg-[#4B3621] p-6 rounded-[2rem] text-center transform rotate-2 shadow-2xl hover:rotate-0 transition-transform cursor-pointer border-2 border-white/10 group">
               <div className="text-[#F7E500] font-black italic text-3xl leading-none mb-1 group-hover:scale-105 transition-transform">Zero Açúcar</div>
               <div className="text-white font-black uppercase text-[10px] tracking-widest opacity-80">Adicionado</div>
            </div>
          </div>

        </div>

        {/* Footer da Página de Produtos - Lista Final */}
        <div className="mt-24 pt-10 border-t-2 border-[#4B3621]/10">
           <h4 className="text-center font-black uppercase text-[#4B3621] mb-10 tracking-[0.3em] text-xs">Excelência e Tradição na linha de Doces Premium</h4>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {flavors.map((f, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <CheckCircle2 size={14} className="text-[#F7E500] group-hover:scale-125 transition-transform" />
                  <span className="text-[11px] font-black uppercase text-[#4B3621] group-hover:text-amber-700 transition-colors">{f}</span>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
