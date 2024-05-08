import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find((item) => item.product.id === product.id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    setCartItems(cartItems.filter((item) => item.product.id !== product.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart