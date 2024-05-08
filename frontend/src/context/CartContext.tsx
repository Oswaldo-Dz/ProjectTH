
// import { createContext, useState } from 'react';
// import { Product } from '../components/Card';

// interface CartItem {
//   products: Product;
//   quantity: number;
// }

// interface CartContextValue {
//   cart: CartItem[];
//   onAddProduct: (product: Product) => void;
// }

// const CartContext = createContext<CartContextValue>({
//   cart: [],
//   onAddProduct: () => {},
// });

// interface ProviderProps{
//   children: React.ReactNode;
// }
// const CartProvider = ({ children }: ProviderProps) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const onAddProduct = (product: Product) => {
//     console.log('Se agrego correctamente');
//     const existingProductIndex = cart.findIndex((item) => item.products.id === product.id);
//     if (existingProductIndex!== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//       console.log(cart);
//     } else {
//       const newProps: CartItem = { products: product, quantity: 1 };
//       setCart([...cart, newProps]);
//       console.log(...cart);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, onAddProduct }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartProvider, CartContext };









// import React, { createContext, ReactNode, useContext, useState } from 'react';

// interface CartContextProps {
//   cart: any[]; // Replace 'any[]' with the actual type of your cart
//   addToCart: (item: any) => void;
// }

// const CartContext = createContext<CartContextProps>({
//   cart: [],
//   addToCart: () => {},
// });

// interface Props {
//   children: ReactNode;
// }

// export const CartProvider: React.FC<Props> = ({ children }) => {
//   const [cart, setCart] = useState<any[]>([]);

//   const addToCart = (item: any) => {
//     // Implement your add to cart logic here
//     setCart([...cart, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCartContext = () => useContext(CartContext);






import React, { createContext, ReactNode, useContext, useState } from 'react';

interface CartContextProps {
  cart: any[]; // Replace 'any[]' with the actual type of your cart
  addToCart: (item: any) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
});

interface Props {
  children: ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    // Implement your add to cart logic here
    const arr = [];
    arr.push(item);
    setCart(arr);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
