
export interface Product {
  id: string;
  name: string;
  weight: string;
  packaging: string;
  ingredients: string;
  benefits: string[];
  image: string;
  // Novos campos para páginas individuais
  subtitle: string;
  description: string;
  indicatedFor: string[];
  differentials: string[];
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  localidade: string;
  whatsapp: string;
  volume: string;
  mensagem?: string;
}
