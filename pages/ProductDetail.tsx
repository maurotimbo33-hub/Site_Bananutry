
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { CheckCircle2, ArrowLeft, MessageSquare, ShoppingBag, Leaf, ShieldCheck, Zap } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (!product) {
      navigate('/produtos');
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Olá! Gostaria de mais informações e preços sobre a ${product.name}.`);
    window.open(`https://wa.me/5561999993281?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb / Back Link */}
        <Link to="/produtos" className="inline-flex items-center text-[#4B3621] font-black uppercase text-xs tracking-widest mb-10 hover:gap-4 transition-all">
          <ArrowLeft size={16} className="mr-2" /> Voltar para produtos
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Product Image Section */}
          <div className="relative group">
            <div 
              className="absolute inset-0 rounded-[4rem] blur-3xl opacity-20 transform scale-90 group-hover:scale-100 transition-transform duration-700"
              style={{ backgroundColor: product.accentColor }}
            ></div>
            <div className="relative bg-gray-50 rounded-[4rem] p-12 border-4 border-dashed border-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain max-w-md transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-8 right-8 bg-[#4B3621] text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-tighter">
                {product.weight} • {product.packaging}
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-[#F7E500]"></span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Linha Saudável</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-[#4B3621] uppercase tracking-tighter leading-none mb-6">
                {product.name}
              </h1>
              <p className="text-xl font-bold text-gray-500 italic">
                "{product.subtitle}"
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-black text-xs uppercase text-[#4B3621]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Ingredients & Indicated */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#4B3621] mb-4 flex items-center gap-2">
                  <Leaf size={14} className="text-[#F7E500]" /> Ingredientes
                </h3>
                <p className="text-sm font-bold text-gray-500 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#4B3621] mb-4 flex items-center gap-2">
                  <Zap size={14} className="text-[#F7E500]" /> Indicado para
                </h3>
                <ul className="space-y-2">
                  {product.indicatedFor.map((item, i) => (
                    <li key={i} className="text-xs font-bold text-gray-500 flex items-start gap-2">
                      <span className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Differentials */}
            <div className="bg-[#4B3621] p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#F7E500] mb-6 flex items-center gap-2">
                <ShieldCheck size={14} /> Diferenciais Bananutry
              </h3>
              <div className="space-y-3">
                {product.differentials.map((diff, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold opacity-90">
                    <div className="w-5 h-5 bg-[#F7E500] rounded-full flex items-center justify-center text-[#4B3621] shrink-0">
                      <CheckCircle2 size={12} />
                    </div>
                    {diff}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleWhatsApp}
                className="flex-grow bg-[#25D366] hover:bg-[#1fb355] text-white py-6 rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare size={20} /> Orçar no WhatsApp
              </button>
              <Link 
                to="/contato"
                className="flex-grow bg-[#F7E500] hover:bg-[#4B3621] text-[#4B3621] hover:text-white py-6 rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-transparent hover:border-[#F7E500]"
              >
                <ShoppingBag size={20} /> Tabela para Atacado
              </Link>
            </div>
          </div>
        </div>

        {/* Outros Sabores Section */}
        <div className="mt-32 pt-20 border-t border-gray-100">
           <h4 className="text-center text-xs font-black uppercase tracking-[0.4em] text-gray-300 mb-16">Explore Outros Sabores</h4>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {PRODUCTS.filter(p => p.id !== product.id).map(other => (
                <Link key={other.id} to={`/produtos/${other.id}`} className="group block text-center">
                  <div className="aspect-square bg-gray-50 rounded-3xl p-6 mb-4 border-2 border-transparent group-hover:border-[#F7E500] transition-all overflow-hidden flex items-center justify-center">
                    <img src={other.image} alt={other.name} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="font-black uppercase text-[10px] tracking-widest text-[#4B3621] opacity-60 group-hover:opacity-100 transition-opacity">
                    {other.name}
                  </p>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
