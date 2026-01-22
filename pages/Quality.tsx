
import React from 'react';
import { Check, Leaf } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#4B3621] uppercase tracking-tighter mb-4">
              Informação Nutricional
            </h1>
            <div className="w-24 h-2 bg-[#F7E500] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Seção de Selos e Atributos */}
            <div className="space-y-6">
              <div className="bg-white p-10 rounded-[3rem] border-2 border-gray-100 shadow-xl">
                <h2 className="text-2xl font-black text-[#4B3621] mb-6 uppercase italic">Nossos Diferenciais</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                  Nossa receita preserva as propriedades naturais da fruta, garantindo um produto rico em sabor e energia, sem adição de açúcares químicos.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-yellow-50 border-2 border-[#F7E500] rounded-full px-8 py-4 shadow-sm">
                    <span className="font-black text-[#4B3621] uppercase text-xs tracking-wider">Zero Adição de Açúcar</span>
                    <Check className="text-amber-600" size={20} strokeWidth={4} />
                  </div>
                  <div className="flex items-center justify-between bg-green-50 border-2 border-green-500 rounded-full px-8 py-4 shadow-sm">
                    <span className="font-black text-green-700 uppercase text-xs tracking-wider">Produto 100% Vegano</span>
                    <Leaf className="text-green-600" size={20} />
                  </div>
                  <div className="flex items-center justify-between bg-blue-50 border-2 border-blue-500 rounded-full px-8 py-4 shadow-sm">
                    <span className="font-black text-blue-700 uppercase text-xs tracking-wider">Baixo Teor de Sódio</span>
                    <Check className="text-blue-600" size={20} strokeWidth={4} />
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 border-2 border-[#4B3621] rounded-full px-8 py-4 shadow-sm">
                    <span className="font-black text-[#4B3621] uppercase text-xs tracking-wider">Livre de Colesterol</span>
                    <Check className="text-[#4B3621]" size={20} strokeWidth={4} />
                  </div>
                </div>
              </div>
            </div>

            {/* Tabela Nutricional Fiel à Imagem com 3 colunas */}
            <div className="bg-white border-4 border-[#4B3621] rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="bg-[#4B3621] p-8 text-center border-b-4 border-[#F7E500]">
                <h3 className="text-white text-2xl font-black uppercase tracking-widest">INFORMAÇÃO NUTRICIONAL</h3>
                <p className="text-[#F7E500] text-sm font-bold mt-2 uppercase tracking-widest">Cada 28g do Produto Contém</p>
              </div>

              <div className="p-4 md:p-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-4 border-[#4B3621] text-[11px] md:text-[12px] font-black uppercase text-[#4B3621]">
                      <th className="py-4 px-2" colSpan={2}>QUANTIDADE POR PORÇÃO</th>
                      <th className="py-4 px-2 text-right">% VD(*)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-gray-800">
                    <TableRow label="Valor energético" value="68kcal = 287KJ" vd="3,3%" />
                    <TableRow label="Carboidratos" value="16g" vd="5,6%" />
                    <TableRow label="Proteínas" value="0,9g" vd="0,7%" />
                    <TableRow label="Gorduras totais" value="0g" vd="0%" />
                    <TableRow label="Gorduras trans" value="0g" vd="0%" />
                    <TableRow label="Gorduras satur." value="0g" vd="**" />
                    <TableRow label="Colesterol" value="0g" vd="0%" />
                    <TableRow label="Fibra alimentar" value="1,0g" vd="4,7%" />
                    <TableRow label="Sódio" value="22mg" vd="1,2%" isLast />
                  </tbody>
                </table>

                <div className="mt-8 pt-6 border-t-2 border-gray-100">
                  <p className="text-[10px] md:text-[11px] text-gray-500 leading-snug font-medium italic">
                    *%Valores diários com base em uma dieta de 2.000kcal ou 8.400 KJ. 
                    Seus Valores diários podem ser maiores ou menores dependendo de sua necessidades energéticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ label, value, vd, isLast = false }: { label: string, value: string, vd: string, isLast?: boolean }) => (
  <tr className={`${isLast ? '' : 'border-b border-gray-200'} transition-colors hover:bg-gray-50 group`}>
    <td className="py-3 px-2 font-black text-[#4B3621] text-sm md:text-base border-r border-gray-100">
      {label}
    </td>
    <td className="py-3 px-2 text-gray-600 font-bold text-center text-sm md:text-base border-r border-gray-100">
      {value}
    </td>
    <td className="py-3 px-2 text-right text-sm md:text-base font-black text-[#4B3621]">
      {vd}
    </td>
  </tr>
);

export default Quality;
