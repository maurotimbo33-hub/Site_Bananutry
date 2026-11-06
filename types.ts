
export interface Product {
  id: string;
  name: string;
  weight: string;
  packaging: string;
  ingredients: string;
  benefits: string[];
  image: string;
  subtitle: string;
  description: string;
  indicatedFor: string[];
  differentials: string[];
  isNew?: boolean;
  badge?: string;
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  localidade: string;
  whatsapp: string;
  volume: string;
  mensagem?: string;
}
