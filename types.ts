
export interface Product {
  id: string;
  name: string;
  weight: string;
  packaging: string;
  ingredients: string;
  benefits: string[];
  image: string;
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  localidade: string;
  whatsapp: string;
  volume: string;
}
