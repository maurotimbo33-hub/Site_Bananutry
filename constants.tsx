
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
    id: 'canela',
    name: 'Bananada com Canela',
    subtitle: 'O equilíbrio aromático e acolhedor da banana madura com canela pura selecionada.',
    description: 'Nossa Bananada com Canela combina o sabor aconchegante e as propriedades naturalmente termogênicas da canela pura com a maciez da banana madura selecionada. Um doce aromático com digestão leve, que estimula o metabolismo e fornece energia limpa e prolongada para os seus treinos e rotina diária. Zero adição de açúcar, zero glúten e zero lactose.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura selecionada e canela em pó pura. Não contém glúten. Sem adição de açúcares.',
    benefits: ['Zero Adição de Açúcar', 'Ação Termogênica Natural', 'Canela Pura em Pó', 'Ideal para Pré e Pós-Treino', 'Zero Glúten & Lactose', '100% Vegano', 'Rico em Potássio'],
    indicatedFor: ['Praticantes de atividade física (pré e pós-treino)', 'Pessoas que buscam estímulo metabólico natural', 'Lanche saudável e funcional para o dia a dia', 'Consumidores com restrição ao consumo de açúcar'],
    differentials: ['Canela pura de alta qualidade e aroma marcante', 'Propriedades digestivas e antioxidantes naturais', '100% natural, sem corantes ou conservantes químicos'],
    image: 'https://i.postimg.cc/T208Lcyt/Canela.png',
    accentColor: '#D97706',
    bgColor: '#FFFBEB',
    isNew: true,
    badge: 'Lançamento'
  },
  {
    id: 'blueberry',
    name: 'Bananada com Blueberry',
    subtitle: 'A potência antioxidante do mirtilo unida à energia pura da banana.',
    description: 'A união requintada do blueberry nobre (mirtilo) com o tradicional doce de banana 100% natural. O mirtilo é mundialmente reconhecido como um superalimento rico em antocianinas, que combate os radicais livres e revigora a saúde celular. Com um toque levemente frutado e refrescante, é o snack ideal para quem valoriza longevidade celular, bem-estar e saúde cardiovascular.',
    weight: '28g',
    packaging: 'Pacote 28g / Pacotes 280g',
    ingredients: 'Banana madura selecionada e polpa de blueberry (mirtilo) selecionado. Não contém glúten. Sem adição de açúcares.',
    benefits: ['Zero Adição de Açúcar', 'Alto Poder Antioxidante', 'Blueberry Selecionado', 'Ideal para Pré e Pós-Treino', 'Zero Glúten & Lactose', '100% Vegano', 'Fonte de Energia Limpa'],
    indicatedFor: ['Praticantes de exercícios físicos e corredores', 'Pessoas focadas em longevidade e combate ao estresse oxidativo', 'Substituição sofisticada de sobremesas tradicionais', 'Dietas com restrição a açúcares adicionados'],
    differentials: ['Blueberry nobre com alto teor de antocianinas', 'Sabor frutado equilibrado e refrescante', 'Energia limpa e duradoura da própria fruta'],
    image: 'https://i.postimg.cc/jqcVwhWc/Bluebarry.png',
    accentColor: '#2563EB',
    bgColor: '#EFF6FF',
    isNew: true,
    badge: 'Lançamento'
  },
  {
    id: 'whey',
    name: 'Bananada com Whey Protein',
    subtitle: '10% de Whey Protein associado aos carboidratos nobres da banana madura.',
    description: 'Desenvolvida especialmente para atletas, praticantes de musculação e entusiastas da boa forma física. Combina os carboidratos naturais de rápida absorção e potássio da banana madura com 10% de Whey Protein concentrado de alta qualidade. Oferece o suporte energético e o aporte proteico ideais para impulsionar a performance no treino e acelerar a recuperação muscular pós-exercício.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura selecionada e proteína concentrada do soro do leite (Whey Protein). Não contém glúten. Sem adição de açúcares. Contém derivados de leite.',
    benefits: ['Com 10% de Whey Protein', 'Zero Adição de Açúcar', 'Ideal para Pré e Pós-Treino', 'Força & Recuperação Muscular', 'Rico em Potássio', 'Zero Glúten'],
    indicatedFor: ['Praticantes de musculação, crossfit e esportes de alto rendimento', 'Atletas que necessitam de reposição proteica prática', 'Pessoas que buscam saciedade prolongada e manutenção de massa magra', 'Lanche proteico rápido sem complicação'],
    differentials: ['10% de Whey Protein de alto valor biológico', 'Zero adição de açúcar refinado ou xaropes', 'Textura macia que não resseca'],
    image: 'https://i.postimg.cc/44PC71KB/Whey.png',
    accentColor: '#B45309',
    bgColor: '#FEFCE8',
    isNew: true,
    badge: 'Lançamento'
  },
  {
    id: 'nibs-cacau',
    name: 'Bananada com Nibs de Cacau',
    subtitle: 'A doçura natural da banana com a intensidade do cacau 100% puro e a crocância dos nibs.',
    description: 'Nossa Bananada com Nibs de Cacau 100% é a fusão perfeita entre a doçura natural da banana madura selecionada e a intensidade sofisticada do puro cacau. A adição de nibs de cacau traz uma textura crocante surpreendente e um sabor nobre ao doce de banana tradicional. Rica em potássio, magnésio e antioxidantes, ela é a escolha ideal para dar energia de verdade no seu pré e pós-treino ou como um lanche sofisticado e nutritivo a qualquer hora do dia.',
    weight: '28g',
    packaging: 'Pacotes de 280g',
    ingredients: 'Banana madura selecionada, cacau em pó 100% puro e nibs de cacau. Não contém glúten. Sem adição de açúcares.',
    benefits: ['Zero Adição de Açúcar', 'Cacau 100% Puro', 'Com Nibs Crocantes', 'Ideal para Pré/Pós-Treino', 'Fonte de Energia', 'Rico em Potássio'],
    indicatedFor: ['Praticantes de atividades físicas (Pré e Pós-treino)', 'Amantes de chocolate amargo e lanches saudáveis', 'Substituição saudável de doces ultraprocessados', 'Pessoas com restrição ao consumo de açúcar, glúten e lactose'],
    differentials: ['Pedaços crocantes de nibs de cacau de verdade', 'Cacau 100% de origem controlada', 'Sem aditivos, corantes ou conservantes químicos'],
    image: 'https://i.postimg.cc/rFpb98XZ/Nibs-Cacau-frente.jpg',
    accentColor: '#4B3621',
    bgColor: '#FFFBEB'
  },
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
    image: 'https://i.postimg.cc/285JxzR0/Natural-frente.jpg', 
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
    image: 'https://i.postimg.cc/4N3M1Jkw/Ameixa-frente.jpg', 
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
    image: 'https://i.postimg.cc/dt0X9qPH/Uva-Passas-frente.jpg',
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
    image: 'https://i.postimg.cc/dt0X9qP6/Acai-frente.jpg',
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
    image: 'https://i.postimg.cc/L6s7VHKN/Castanha-frente.jpg',
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
