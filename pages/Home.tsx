
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Sparkles, Flame, Zap, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { DIFFERENTIALS } from '../constants';

interface LaunchFlavor {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  subtitle: string;
  description: string;
  image: string;
  icon: 'flame' | 'sparkles' | 'zap';
  packaging: string;
  weight: string;
  targetAudience: string;
  benefits: string[];
  theme: {
    bgGradient: string;
    cardBorder: string;
    textPrimary: string;
    textSecondary: string;
    pillBg: string;
    pillText: string;
    accentBtn: string;
    accentBtnText: string;
    tabActive: string;
    tabInactive: string;
    glowColor: string;
    badgeBg: string;
    badgeText: string;
  };
}

const NEW_LAUNCHES: LaunchFlavor[] = [
  {
    id: 'canela',
    name: 'Bananada com Canela',
    shortName: 'Canela',
    badge: 'Termogênico Natural',
    tagline: 'O Toque Clássico e Aromático da Canela Pura',
    subtitle: 'Com Canela Selecionada',
    description: 'O calor aconchegante da canela em pó pura encontra a doçura natural e maciez da banana madura selecionada. Um doce aromático com ação naturalmente termogênica, ideal para estimular o metabolismo e trazer sensação de bem-estar com energia limpa.',
    image: '/assets/aistudio/image_65eeb16e.png',
    icon: 'flame',
    packaging: 'Pacotes de 280g',
    weight: '28g unid. / 280g pacote',
    targetAudience: 'Metabolismo ativo, amantes de especiarias e pré-treino leve',
    benefits: [
      'Zero Adição de Açúcar',
      'Termogênico Natural',
      'Canela Pura em Pó',
      'Ideal Pré e Pós-Treino',
      'Zero Glúten & Lactose',
      '100% Vegano',
      'Rico em Potássio',
      'Baixo Teor de Sódio'
    ],
    theme: {
      bgGradient: 'bg-gradient-to-br from-[#FFFBEB] via-[#FEF08A] to-[#FACC15]',
      cardBorder: 'border-[#4B3621]/20',
      textPrimary: 'text-[#4B3621]',
      textSecondary: 'text-[#4B3621]/85',
      pillBg: 'bg-[#4B3621]',
      pillText: 'text-white',
      accentBtn: 'bg-[#4B3621] hover:bg-black',
      accentBtnText: 'text-white',
      tabActive: 'bg-[#4B3621] text-white shadow-lg shadow-[#4B3621]/25 ring-2 ring-[#4B3621]',
      tabInactive: 'bg-white hover:bg-amber-50 text-[#4B3621] border border-amber-200',
      glowColor: 'bg-yellow-400/40',
      badgeBg: 'bg-[#4B3621] text-white',
      badgeText: 'text-[#4B3621]'
    }
  },
  {
    id: 'blueberry',
    name: 'Bananada com Blueberry',
    shortName: 'Blueberry',
    badge: 'Superfood Antioxidante',
    tagline: 'O Poder do Mirtilo com Toda a Energia da Banana',
    subtitle: 'Com Blueberry Nobre',
    description: 'A sofisticação do blueberry (mirtilo) em perfeita harmonia com o doce da banana. Uma fonte nobre de antocianinas e antioxidantes que atuam contra os radicais livres, proporcionando um sabor levemente frutado, refrescante e revigorante.',
    image: '/assets/aistudio/image_2d2511a0.png',
    icon: 'sparkles',
    packaging: 'Pacote 28g / Pacotes 280g',
    weight: '28g individual',
    targetAudience: 'Longevidade celular, praticantes de esporte e lanches funcionais',
    benefits: [
      'Zero Adição de Açúcar',
      'Super Antioxidante',
      'Com Blueberry Nobre',
      'Ideal Pré e Pós-Treino',
      'Zero Glúten & Lactose',
      '100% Vegano',
      'Fonte de Energia Limpa',
      'Sem Conservantes'
    ],
    theme: {
      bgGradient: 'bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E3A8A]',
      cardBorder: 'border-blue-500/30',
      textPrimary: 'text-white',
      textSecondary: 'text-blue-100/90',
      pillBg: 'bg-blue-600',
      pillText: 'text-white',
      accentBtn: 'bg-[#F7E500] hover:bg-white',
      accentBtnText: 'text-[#4B3621]',
      tabActive: 'bg-[#1E3A8A] text-white shadow-lg shadow-blue-900/40 ring-2 ring-blue-400',
      tabInactive: 'bg-white hover:bg-blue-50 text-slate-800 border border-slate-200',
      glowColor: 'bg-blue-500/30',
      badgeBg: 'bg-blue-500 text-white',
      badgeText: 'text-blue-300'
    }
  },
  {
    id: 'whey',
    name: 'Bananada com Whey Protein',
    shortName: 'Whey Protein',
    badge: 'Performance & Treino',
    tagline: '10% de Whey Protein com Carboidrato Natural da Fruta',
    subtitle: 'Aporte Proteico & Recuperação Muscular',
    description: 'A revolução para seu pré e pós-treino: a energia de rápida digestão da banana madura associada a 10% de Whey Protein de alta qualidade. Excelente suporte para recuperação de massa muscular, saciedade e rendimento atlético diário.',
    image: '/assets/aistudio/image_71aaa08e.png',
    icon: 'zap',
    packaging: 'Pacotes de 280g',
    weight: '28g unid. / 280g pacote',
    targetAudience: 'Atletas, praticantes de musculação e adeptos do estilo fitness',
    benefits: [
      'Com 10% de Whey Protein',
      'Zero Adição de Açúcar',
      'Ideal Pré e Pós-Treino',
      'Força & Recuperação Muscular',
      'Zero Glúten & Lactose',
      'Rico em Potássio',
      'Baixo Teor de Sódio',
      'Energia de Alto Rendimento'
    ],
    theme: {
      bgGradient: 'bg-gradient-to-br from-[#09090B] via-[#18181B] to-[#27272A]',
      cardBorder: 'border-yellow-500/40',
      textPrimary: 'text-white',
      textSecondary: 'text-zinc-200/90',
      pillBg: 'bg-[#F7E500]',
      pillText: 'text-[#4B3621]',
      accentBtn: 'bg-[#F7E500] hover:bg-yellow-400',
      accentBtnText: 'text-[#4B3621]',
      tabActive: 'bg-[#F7E500] text-[#4B3621] shadow-lg shadow-yellow-500/30 ring-2 ring-yellow-400 font-black',
      tabInactive: 'bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200',
      glowColor: 'bg-yellow-500/25',
      badgeBg: 'bg-[#F7E500] text-[#4B3621]',
      badgeText: 'text-[#F7E500]'
    }
  }
];

const Home: React.FC = () => {
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const currentLaunch = NEW_LAUNCHES[activeFlavorIndex];

  const handleNext = () => {
    setActiveFlavorIndex((prev) => (prev + 1) % NEW_LAUNCHES.length);
  };

  const handlePrev = () => {
    setActiveFlavorIndex((prev) => (prev - 1 + NEW_LAUNCHES.length) % NEW_LAUNCHES.length);
  };

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

      {/* Card Lançamento Section - Atualizado com os 3 Novos Sabores: Canela, Blueberry e Whey Protein */}
      <section className="py-24 bg-white overflow-hidden" id="lancamentos">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header da Seção de Lançamentos */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-[#F7E500] text-[#4B3621] px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-sm mb-4">
              <Sparkles size={16} />
              <span>Novidades Bananutry</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4B3621] uppercase tracking-tight">
              Novos Lançamentos!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-4 font-medium">
              Apresentamos os 3 novos sabores que chegaram para transformar seu treino e alimentação saudável: <strong className="text-[#4B3621]">Canela</strong>, <strong className="text-[#4B3621]">Blueberry</strong> e <strong className="text-[#4B3621]">Whey Protein</strong>.
            </p>

            {/* Abas Interativas de Seleção de Sabores */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {NEW_LAUNCHES.map((flavor, idx) => {
                const isActive = activeFlavorIndex === idx;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => setActiveFlavorIndex(idx)}
                    className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wide transition-all cursor-pointer ${
                      isActive ? flavor.theme.tabActive : flavor.theme.tabInactive
                    }`}
                  >
                    {flavor.icon === 'flame' && <Flame size={18} className={isActive ? 'text-white' : 'text-amber-600'} />}
                    {flavor.icon === 'sparkles' && <Sparkles size={18} className={isActive ? 'text-white' : 'text-blue-600'} />}
                    {flavor.icon === 'zap' && <Zap size={18} className={isActive ? 'text-[#4B3621]' : 'text-yellow-600'} />}
                    <span>{flavor.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card Principal em Destaque (Spotlight) */}
          <div className={`${currentLaunch.theme.bgGradient} rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 lg:p-16 relative border-4 ${currentLaunch.theme.cardBorder} shadow-2xl transition-all duration-500 overflow-hidden`}>
            
            {/* Efeito Glow de Fundo */}
            <div className={`absolute -right-20 -bottom-20 w-96 h-96 ${currentLaunch.theme.glowColor} rounded-full blur-3xl pointer-events-none`}></div>
            <div className={`absolute -left-20 -top-20 w-80 h-80 ${currentLaunch.theme.glowColor} rounded-full blur-3xl pointer-events-none`}></div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Lado do Conteúdo / Informações */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                
                {/* Header do Card com Badge e Controles */}
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider ${currentLaunch.theme.badgeBg}`}>
                      {currentLaunch.icon === 'flame' && <Flame size={14} />}
                      {currentLaunch.icon === 'sparkles' && <Sparkles size={14} />}
                      {currentLaunch.icon === 'zap' && <Zap size={14} />}
                      {currentLaunch.badge}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider opacity-80 ${currentLaunch.theme.textPrimary}`}>
                      Embalagem {currentLaunch.packaging}
                    </span>
                  </div>

                  {/* Botões de Navegação Anterior/Próximo */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Sabor anterior"
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer text-current"
                    >
                      <ChevronLeft size={20} className={currentLaunch.theme.textPrimary} />
                    </button>
                    <span className={`text-xs font-black ${currentLaunch.theme.textPrimary} px-1`}>
                      {activeFlavorIndex + 1} / {NEW_LAUNCHES.length}
                    </span>
                    <button
                      onClick={handleNext}
                      aria-label="Próximo sabor"
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer text-current"
                    >
                      <ChevronRight size={20} className={currentLaunch.theme.textPrimary} />
                    </button>
                  </div>
                </div>

                {/* Título do Produto */}
                <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black ${currentLaunch.theme.textPrimary} mb-2 leading-tight uppercase tracking-tight`}>
                  {currentLaunch.name}
                </h3>
                
                <h4 className={`text-xl sm:text-2xl font-black mb-4 italic opacity-95 ${currentLaunch.theme.textPrimary}`}>
                  {currentLaunch.tagline}
                </h4>

                <p className={`text-base sm:text-lg mb-6 leading-relaxed font-medium ${currentLaunch.theme.textSecondary}`}>
                  {currentLaunch.description}
                </p>

                {/* Grid de Benefícios do Produto */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                  {currentLaunch.benefits.map((benefit) => (
                    <div 
                      key={benefit} 
                      className="flex items-center gap-2 bg-black/10 backdrop-blur-sm px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide border border-white/10"
                    >
                      <Check size={14} className="shrink-0 text-emerald-400" />
                      <span className={currentLaunch.theme.textPrimary}>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Tags de Especificação */}
                <div className="flex flex-wrap items-center gap-3 mb-8 pt-4 border-t border-current/15">
                  <div className="text-xs">
                    <span className={`block font-bold opacity-75 ${currentLaunch.theme.textPrimary}`}>Formato / Peso:</span>
                    <span className={`font-black ${currentLaunch.theme.textPrimary}`}>{currentLaunch.weight}</span>
                  </div>
                  <div className="h-6 w-px bg-current/20 hidden sm:block"></div>
                  <div className="text-xs">
                    <span className={`block font-bold opacity-75 ${currentLaunch.theme.textPrimary}`}>Indicação de Consumo:</span>
                    <span className={`font-black ${currentLaunch.theme.textPrimary}`}>{currentLaunch.targetAudience}</span>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contato" 
                    className={`${currentLaunch.theme.accentBtn} ${currentLaunch.theme.accentBtnText} px-8 py-4 rounded-2xl font-black uppercase shadow-xl hover:scale-105 active:scale-95 transition-all text-sm tracking-wide text-center flex items-center justify-center gap-2`}
                  >
                    <span>Quero no meu PDV</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link 
                    to="/atacado" 
                    className="bg-white/90 hover:bg-white text-[#4B3621] px-8 py-4 rounded-2xl font-black uppercase shadow-lg hover:scale-105 active:scale-95 transition-all text-sm tracking-wide text-center"
                  >
                    Tabela de Atacado
                  </Link>
                </div>
              </div>

              {/* Lado da Imagem com Moldura Premium */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative group max-w-[360px] md:max-w-[420px] w-full">
                  
                  {/* Aura luminosa sob a imagem */}
                  <div className="absolute inset-0 bg-white/20 rounded-[2.5rem] blur-2xl transform scale-105 transition-all group-hover:scale-110"></div>
                  
                  {/* Imagem Real da Embalagem enviada */}
                  <div className="relative z-10 bg-black/5 p-3 sm:p-4 rounded-[2.5rem] border-4 border-white/60 shadow-2xl backdrop-blur-sm overflow-hidden">
                    <img 
                      src={currentLaunch.image} 
                      alt={currentLaunch.name}
                      className="w-full h-auto max-h-[500px] object-contain rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>

                  {/* Selo Flutuante */}
                  <div className="absolute -bottom-4 -right-4 z-20 bg-white text-[#4B3621] p-3.5 rounded-2xl shadow-xl border-2 border-[#F7E500] flex items-center gap-2">
                    <Award size={24} className="text-[#F7E500]" />
                    <div className="text-left">
                      <span className="block text-[10px] font-black uppercase leading-tight tracking-wider text-gray-500">Garantia</span>
                      <span className="block text-xs font-black uppercase leading-tight text-[#4B3621]">100% Natural</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Grid com os 3 Novos Lançamentos Lado a Lado para visualização rápida */}
          <div className="mt-14">
            <h4 className="text-center text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
              Clique em um sabor para ver todos os detalhes acima:
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {NEW_LAUNCHES.map((flavor, index) => {
                const isSelected = activeFlavorIndex === index;
                return (
                  <div
                    key={flavor.id}
                    onClick={() => {
                      setActiveFlavorIndex(index);
                      const el = document.getElementById('lancamentos');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border-2 bg-white flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 ${
                      isSelected 
                        ? 'border-[#4B3621] shadow-xl ring-4 ring-[#F7E500]/50' 
                        : 'border-gray-100 hover:border-gray-300 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Thumbnail da Embalagem */}
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-3 mb-5 border border-gray-100">
                        <img 
                          src={flavor.image} 
                          alt={flavor.name} 
                          className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className={`absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-lg ${flavor.theme.badgeBg}`}>
                          {flavor.badge}
                        </span>
                        {isSelected && (
                          <span className="absolute top-3 right-3 bg-[#4B3621] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow">
                            Visualizando
                          </span>
                        )}
                      </div>

                      <h5 className="text-xl font-black text-[#4B3621] uppercase mb-1">
                        {flavor.name}
                      </h5>
                      <p className="text-xs font-bold text-gray-500 mb-3 italic">
                        {flavor.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                        {flavor.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-black text-[#4B3621]">
                        {flavor.packaging}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-black text-[#4B3621] group-hover:translate-x-1 transition-transform">
                        <span>Ver detalhes</span>
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                );
              })}
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
