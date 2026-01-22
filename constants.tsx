
import React from 'react';
import { Leaf, ShieldCheck, Factory, Package, TrendingUp } from 'lucide-react';
import { Product } from './types';

export const COLORS = {
  primary: '#F7E500', // Amarelo Bananutry vibrante
  secondary: '#4B3621', // Marrom Escuro Industrial
  accent: '#059669', // Verde Saudável
};

export interface StyledProduct extends Product {
  accentColor: string;
  bgColor: string;
}

/**
 * COMO ADICIONAR IMAGENS:
 * 1. Suba sua foto para um serviço de hospedagem (Imgur, Cloudinary, ou o próprio GitHub).
 * 2. Cole o link direto da imagem na propriedade 'image' abaixo.
 * 3. Se deixar vazio (''), o site mostrará automaticamente o ícone de "Espaço para Foto".
 */
export const PRODUCTS: StyledProduct[] = [
  {
    id: 'natural',
    name: 'Bananada Natural',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: '100% banana',
    benefits: ['Sem Adição de Açúcar', 'Sem Glúten', '100% Banana'],
    image: 'https://www.instagram.com/p/DIvC6TiuMxZ/?img_index=3', // Exemplo de imagem populada
    accentColor: '#F7E500',
    bgColor: '#FEFCE8'
  },
  {
    id: 'ameixa',
    name: 'Bananada com Ameixa',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana e Ameixa',
    benefits: ['Fonte de Fibras', 'Sem Glúten', 'Sem Adição de Açúcar'],
    image: 'https://www.instagram.com/p/DIvC6TiuMxZ/?img_index=5', // Deixando vazio para mostrar o placeholder
    accentColor: '#E11D48',
    bgColor: '#FFF1F2'
  },
  {
    id: 'uva-passa',
    name: 'Bananada com Uva Passa',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana e Uva Passa',
    benefits: ['Sem Adição de Açúcar', 'Fonte de Fibras', 'Sem Glúten'],
    image: 'https://www.instagram.com/p/DIvC6TiuMxZ/?img_index=4',
    accentColor: '#7C3AED',
    bgColor: '#F5F3FF'
  },
  {
    id: 'acai',
    name: 'Bananada com Açaí',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana e Polpa de Açaí',
    benefits: ['Energia Natural', 'Sem Glúten', 'Baixo Sódio'],
    image: 'https://www.instagram.com/p/DIvC6TiuMxZ/?img_index=1',
    accentColor: '#4C1D95',
    bgColor: '#F3E8FF'
  },
  {
    id: 'castanha',
    name: 'Bananada com Castanha-do-Pará',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana e Castanha-do-Pará',
    benefits: ['Fonte de Potássio', 'Sem Glúten', 'Sabor Premium'],
    image: 'https://www.instagram.com/p/DIvC6TiuMxZ/?img_index=2',
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
