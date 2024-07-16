export interface TProduct {
  category: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
  rating: number;
  title: string;
  _id: string;
}

export interface TProductCard {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  title: string;
  _id: string;
  quantity: number;
  QAT: number;
}

export type TShoppingCard = {
  name: string;
  price: number;
  quantity: number;
};

export interface TParams extends Record<string, string | undefined> {
  money?: string;
}
