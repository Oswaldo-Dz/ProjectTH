import React, { useContext } from 'react'
import { useCartContext } from '../context/CartContext';
import { CartContext } from '../context/CartContextValue';


  const Carrito = () => {
    const {cart } = useCartContext();
  
    return (
      <div>
      <h2>Cart:</h2>
      <ul>
        {cart.map((product) => (
           
          <li key={product.products.id}>{product.products.name}</li>
        ))}
      </ul>
    </div>
    );
  };

export default Carrito
