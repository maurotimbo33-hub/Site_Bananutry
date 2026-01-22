
import React from 'react';
import { Building2, Users, ShoppingCart, Dumbbell, Store, LayoutGrid, RotateCcw, Award, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wholesale: React.FC = () => {
  // Fix: Leaf is now correctly imported from lucide-react
  const segments = [
    { icon: <Users />, label: 'Distribuidores' },
    { icon: <Store />, label: 'Supermercados' },
    { icon: <Leaf />, label: 'Lojas de produtos naturais' },
    { icon: <Dumbbell />, label: 'Academias' },
    { icon: <ShoppingCart />, label: 'Redes de varejo' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-amber-950 text-white p-12 rounded-[3rem] mb-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Atacado & Distribuidores</h1>
              <p className="text-xl opacity-80 leading-relaxed">
                A Bananutry é fornecedora estratégica para o mercado atacadista, oferecendo produtos com excelente giro, alta aceitação e margens atrativas para revenda.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-8 hidden md:block opacity-20 transform translate-x-1/4 translate-y-1/4">
              <LayoutGrid size={400} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            {/* Target Audience */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-yellow-400 pl-4 uppercase">Atendemos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Users className="text-yellow-600" />, label: 'Distribuidores' },
                  { icon: <Store className="text-yellow-600" />, label: 'Supermercados' },
                  { icon: <Leaf className="text-green-600" />, label: 'Lojas naturais' },
                  { icon: <Dumbbell className="text-yellow-600" />, label: 'Academias' },
                  { icon: <ShoppingCart className="text-yellow-600" />, label: 'Redes de varejo' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <div className="mr-4">{item.icon}</div>
                    <span className="font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Advantages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-yellow-400 pl-4 uppercase">Diferenciais Comerciais</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-3 rounded-xl mr-5">
                    <Building2 className="text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Produção Própria</h3>
                    <p className="text-gray-600">Controle total desde a matéria-prima até a embalagem final.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-3 rounded-xl mr-5">
                    <RotateCcw className="text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Fornecimento Contínuo</h3>
                    <p className="text-gray-600">Estoque garantido e logística eficiente para todo o território nacional.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-3 rounded-xl mr-5">
                    <Award className="text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Marca Consolidada</h3>
                    <p className="text-gray-600">Mais de 20 anos de tradição e reconhecimento no mercado saudável.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="bg-yellow-400 p-10 rounded-3xl text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-950 mb-8 uppercase tracking-tight">Pronto para aumentar suas vendas?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/5500000000000" 
                className="bg-amber-950 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-transform hover:scale-105"
              >
                Falar com o comercial
              </a>
              <Link 
                to="/contato" 
                className="bg-white text-amber-950 border-2 border-amber-950 px-10 py-5 rounded-2xl font-extrabold text-lg transition-transform hover:scale-105"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
