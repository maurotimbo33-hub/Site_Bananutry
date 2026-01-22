
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

export const PRODUCTS: StyledProduct[] = [
  {
    id: 'natural',
    name: 'Bananada Natural',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: '100% banana',
    benefits: ['Sem Adição de Açúcar', 'Sem Glúten', '100% Banana'],
    image: '', 
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
