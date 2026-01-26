
import React, { useState } from 'react';
import { Banana, CheckCircle2, Zap, Star, Award, ImagePlus, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

// Sub-componente para gerenciar o carregamento de imagens com fallback
const ImageWithFallback = ({ src, alt, productName }: { src: string, alt: string, productName: string }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="text-center p-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <ImagePlus className="text-gray-300 group-hover:text-[#F7E500]" size={32} />
        </div>
        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
          {error ? 'Link Inválido' : 'Espaço para Foto'}
        </p>
        <p className="text-[9px] font-bold text-gray-300 uppercase mt-1">{productName}</p>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)}
      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
    />
  );
};

const Products: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-[#FFFBEB] min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Banner Superior */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#4B3621] px-12 py-3 rounded-xl shadow-xl transform -rotate-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest relative z-10">
              Catálogo de Produtos
            </h2>
            <p className="text-[#F7E500] text-center text-sm font-bold uppercase relative z-10">Qualidade Industrial • Sabor Natural</p>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-[3rem] p-6 border-2 border-transparent hover:border-[#F7E500] transition-all shadow-lg hover:shadow-2xl group flex flex-col h-full">
                
                {/* Imagem do Produto com Fallback Automático */}
                <Link to={`/produtos/${product.id}`} className="relative aspect-square mb-8 bg-gray-50 rounded-[2.5rem] border-4 border-dashed border-gray-100 flex items-center justify-center overflow-hidden group-hover:bg-yellow-50/50 transition-colors cursor-pointer">
                  <ImageWithFallback src={product.image} alt={product.name} productName={product.name} />
                  
                  {/* Badge de Peso */}
                  <div className="absolute top-4 right-4 bg-[#4B3621] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {product.weight}
                  </div>
                </Link>

                {/* Info do Produto */}
                <div className="flex-grow text-center px-4">
                  <div className="flex justify-center mb-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-[#F7E500] text-[#F7E500]" />)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-[#4B3621] uppercase leading-tight mb-2 group-hover:text-amber-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{product.packaging}</p>
                  
                  <div className="space-y-2 mb-8">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-center justify-center gap-2 text-[11px] font-black text-[#4B3621]/70 uppercase">
                        <CheckCircle2 size={12} className="text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Detalhes */}
                <Link 
                  to={`/produtos/${product.id}`} 
                  className="mt-auto bg-gray-50 hover:bg-[#F7E500] text-[#4B3621] py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all border-2 border-gray-100 hover:border-[#F7E500] flex items-center justify-center gap-2"
                >
                  <Eye size={14} />
                  Ver Detalhes do Sabor
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Banner de Impacto */}
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center bg-white/50 p-12 rounded-[4rem] border-2 border-white mb-20">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="mb-4 flex items-center justify-center lg:justify-start gap-4">
              <p className="text-[#4B3621] font-black italic uppercase text-xl tracking-wide">
                Qualidade Industrial
              </p>
              <div className="h-[2px] w-12 bg-[#F7E500]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#4B3621] uppercase tracking-tighter mb-4">
              BANANUTRY
            </h1>
            <p className="text-lg font-medium text-gray-600 mb-8 max-w-md">
              Processos controlados e matéria-prima selecionada para garantir o melhor doce de banana do mercado.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
               <div className="bg-[#4B3621] text-[#F7E500] px-6 py-3 rounded-full font-black uppercase text-xs flex items-center gap-2">
                 <Award size={18} /> Fornecedor Ouro
               </div>
               <div className="bg-[#F7E500] text-[#4B3621] px-6 py-3 rounded-full font-black uppercase text-xs">
                 100% Nacional
               </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#F7E500]/20 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
              <img 
                src="https://i.postimg.cc/Jn4pQGW5/Banana.jpg" 
                alt="Produção Bananutry" 
                className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-10 border-t-2 border-[#4B3621]/10 text-center">
           <h4 className="font-black uppercase text-[#4B3621] mb-10 tracking-[0.3em] text-xs">Excelência e Tradição na linha de Doces Premium</h4>
           <Link to="/contato" className="bg-[#4B3621] text-white px-10 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform inline-block shadow-xl">
              Falar com nosso time comercial agora
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
