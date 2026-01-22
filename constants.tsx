
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

/**
 * IMPORTANTE SOBRE AS FOTOS:
 * O Instagram não permite que você use os links deles aqui (eles bloqueiam imagens externas).
 * 
 * O QUE FAZER:
 * 1. Use o site https://postimages.org (é grátis e não precisa de conta).
 * 2. Faça o upload da sua foto lá.
 * 3. Copie o "LINK DIRETO" (ele deve terminar em .jpg ou .png).
 * 4. Cole esse link direto entre as aspas na propriedade 'image' abaixo.
 */
export const PRODUCTS: StyledProduct[] = [
  {
    id: 'natural',
    name: 'Bananada Natural',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: '100% banana',
    benefits: ['Sem Adição de Açúcar', 'Sem Glúten', '100% Banana'],
    image: 'https://images.unsplash.com/photo-1528825876-01087782d558?auto=format&fit=crop&q=80&w=600', 
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
    image: 'https://images.unsplash.com/photo-1628114004690-36696775691e?auto=format&fit=crop&q=80&w=600', 
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
    image: 'https://images.unsplash.com/photo-1590483736622-39da8af7ecb1?auto=format&fit=crop&q=80&w=600',
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
    image: 'https://images.unsplash.com/photo-1518534873429-89285a344d5e?auto=format&fit=crop&q=80&w=600',
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
    image: 'https://images.unsplash.com/photo-1590080873974-9a38586fab57?auto=format&fit=crop&q=80&w=600',
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
