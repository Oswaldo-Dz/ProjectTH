import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Props, Product } from './Card';
import Car from './Car';

export interface CartProps {
  product: Product;
}

const ListCart: React.FC<CartProps> = () => {
    const { cart } = useContext(CartContext);
 ;

  return (
    <>
    <div>
       <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.products.name} x {item.quantity}
            <Car key={item.products.id}  product={item.products}/>
          </li>
          
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default ListCart;