import React from 'react';
import { Product } from '../components/Card';
export interface Props {
  products: Product;
  quantity: number;
}

export interface CartContextValue {
  items: Props[];
  agregarItem: (nuevoItem: Product, quantity: number) => void;
  eliminarItem: (id: number) => void;
}

export const CartContext = React.createContext<CartContextValue>({
  items: [],
  agregarItem: () => {},
  eliminarItem: () => {},
});