
import React from 'react';
import { Leaf, ShieldCheck, Factory, Package, TrendingUp } from 'lucide-react';
import { Product } from './types';

export const COLORS = {
  primary: '#F7E500', 
  secondary: '#4B3621', 
  accent: '#059669', 
};

export interface StyledProduct extends Product {
  accentColor: string;
  bgColor: string;
}

export const PRODUCTS: StyledProduct[] = [
  {
    id: 'natural',
    name: 'Bananada Natural',
    subtitle: 'A essência da fruta em sua forma mais pura e tradicional.',
    description: 'Nossa Bananada Natural é o coração da Bananutry. Elaborada através de um processo de cozimento lento que concentra o açúcar natural da própria fruta (frutose), ela entrega uma textura macia e um sabor intenso. É o snack perfeito para quem busca energia rápida sem abrir mão da saudabilidade.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura selecionada. Não contém glúten. Sem adição de açúcares.',
    benefits: ['Zero Adição de Açúcar', 'Rico em Potássio', '100% Vegano'],
    indicatedFor: ['Atletas em pré-treino', 'Lanche escolar das crianças', 'Pessoas com restrição ao consumo de açúcar', 'Quem busca um doce saudável após as refeições'],
    differentials: ['Sem conservantes químicos', 'Frutas selecionadas direto do produtor', 'Mais de 20 anos de tradição na receita'],
    image: 'https://i.postimg.cc/y6DJSsZR/Sabor-natural.jpg', 
    accentColor: '#F7E500',
    bgColor: '#FEFCE8'
  },
  {
    id: 'ameixa',
    name: 'Bananada com Ameixa',
    subtitle: 'O equilíbrio perfeito entre a doçura da banana e o frescor da ameixa.',
    description: 'Unimos os benefícios da banana com as propriedades funcionais da ameixa seca. O resultado é um doce com sabor sofisticado e levemente ácido, que auxilia no bom funcionamento do organismo enquanto sacia o desejo por doces de forma inteligente.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura e polpa de ameixa desidratada. Não contém glúten.',
    benefits: ['Fonte Natural de Fibras', 'Auxilia na Digestão', 'Sem Açúcar Adicionado'],
    indicatedFor: ['Pessoas que buscam regulação intestinal', 'Dietas de controle de peso', 'Consumidores que preferem sabores menos enjoativos'],
    differentials: ['Polpa de ameixa de alta qualidade', 'Textura aveludada única', 'Combinação funcional comprovada'],
    image: 'https://i.postimg.cc/1RFmQtFR/Sabor-ameixa.jpg', 
    accentColor: '#E11D48',
    bgColor: '#FFF1F2'
  },
  {
    id: 'uva-passa',
    name: 'Bananada com Uva Passa',
    subtitle: 'Energia em dobro com a combinação clássica de frutas secas.',
    description: 'A doçura natural da uva passa potencializa o sabor da banana, criando uma experiência sensorial rica. É um produto denso em nutrientes, ideal para quem precisa de um aporte calórico saudável e rápido durante o dia.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura e uvas passas selecionadas. Não contém glúten.',
    benefits: ['Energia Prolongada', 'Rico em Antioxidantes', 'Sabor Naturalmente Doce'],
    indicatedFor: ['Praticantes de atividades físicas intensas', 'Estudantes em período de provas', 'Substituição de doces ultraprocessados'],
    differentials: ['Uvas passas sem semente', 'Sem xaropes ou melados', 'Embalagem prática para levar na bolsa'],
    image: 'https://i.postimg.cc/Wpq318Bk/Sabor-uvas-passas.jpg',
    accentColor: '#7C3AED',
    bgColor: '#F5F3FF'
  },
  {
    id: 'acai',
    name: 'Bananada com Açaí',
    subtitle: 'A força da Amazônia unida à cremosidade da banana.',
    description: 'Inovamos ao trazer o "superalimento" brasileiro para nossa linha. O açaí confere uma cor vibrante e um sabor exótico ao doce de banana, além de adicionar uma carga potente de antocianinas, essenciais para o combate aos radicais livres.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura e polpa de açaí puro. Não contém glúten.',
    benefits: ['Poder Antioxidante', 'Superfood Brasileiro', 'Ação Anti-inflamatória'],
    indicatedFor: ['Amantes de açaí', 'Pessoas focadas em longevidade', 'Público jovem e fitness'],
    differentials: ['Açaí de origem sustentável', 'Sabor equilibrado e refrescante', 'Livre de corantes artificiais'],
    image: 'https://i.postimg.cc/dtBKsTV2/Sabor-acai.jpg',
    accentColor: '#4C1D95',
    bgColor: '#F3E8FF'
  },
  {
    id: 'castanha',
    name: 'Bananada com Castanha-do-Pará',
    subtitle: 'A crocância da castanha em um doce de banana premium.',
    description: 'Para quem não abre mão de textura, nossa versão com Castanha-do-Pará oferece pequenos pedaços crocantes em meio à maciez da banana. Além do sabor refinado, você consome uma importante fonte de selênio e gorduras boas para o coração.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura e pedaços de Castanha-do-Pará. Não contém glúten.',
    benefits: ['Fonte de Selênio', 'Gorduras Saudáveis (Ômega-3)', 'Textura Crocante'],
    indicatedFor: ['Paladares exigentes', 'Pessoas que buscam saciedade prolongada', 'Mix de nutrição completa'],
    differentials: ['Castanhas sempre frescas', 'Corte ideal para não perder a crocância', 'Produto tipo exportação'],
    image: 'https://i.postimg.cc/50CVb7XX/Sabor-castanha.jpg',
    accentColor: '#78350F',
    bgColor: '#FEF3C7'
  }
];

export const DIFFERENTIALS = [
  { icon: <ShieldCheck size={32} className="text-[#4B3621]" />, text: 'Zero adição de açúcar' },
  { icon: <Leaf size={32} className="text-green-600" />, text: 'Produto 100% Natural' },
  { icon: <Package size={32} className="text-orange-600" />, text: 'Pacotes Atacado 280g' },
  { icon: <Factory size={32} className="text-gray-600" />, text: 'Fabricação Própria' },
  { icon: <TrendingUp size={32} className="text-yellow-600" />, text: 'Produto de Alto Giro' },
];
