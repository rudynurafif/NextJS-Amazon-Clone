export interface ProductProps {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}

export interface StoreProduct {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
  quantity: number;
}

export interface StateProps {
  cartData: [];
  favoriteData: [];
  userInfo: null | string;
  next: any;
}
