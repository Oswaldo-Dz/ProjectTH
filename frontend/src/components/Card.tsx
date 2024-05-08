import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Card.css'
import { MDBBtn, MDBIcon, MDBRipple, MDBCard,MDBCardBody,MDBCardTitle,MDBCardText, MDBCardImage, MDBAccordion, MDBAccordionItem, } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';

//import {ProductItem, ProductListProps} from '../types/types';
export interface Product {
  id: number; // Assuming product has an ID
  name: string;
  image: string;
  price: number;
  brand: string;
  category: string;
  description: string; 
  user_id?: number; // Optional user_id property
}
export interface Props  {
  products: Product;
  quantity: number;
}


 

const ProductCard = ({products}: Props) => {

  const { cart, addToCart } = useCartContext();
  //const[cart,setCart] = useState<Props[]>([]);

const onAddProduct = (product: Product) => {
  const newProps: Props = { products: product, quantity: 1 };
 
 addToCart([...cart, newProps]);
 console.log('Se agrego correctamente');
 console.log(cart);
//  const existingProductIndex = cart.findIndex((item) => item.products.id === product.id);
//  if (existingProductIndex !== -1) {
//   const updatedCart = [...cart];
//   updatedCart[existingProductIndex].quantity += 1;
//   addToCart(updatedCart);
//   console.log(cart);
// } else {
//   // Si el producto es nuevo, agregarlo al carrito con cantidad 1
  
//   addToCart([...cart, newProps]);
//   console.log(...cart);
// }

};

  return (
    <>
    <MDBCard style={{height:'400px', marginBottom:15}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='text-center' src={products.image} alt={products.name} width="250" height="250" fluid />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{products.name}</MDBCardTitle>
        {/* <MDBCardText className='text-center'>{products.description}</MDBCardText> */}
        <MDBAccordion flush initialActive={0}>
        <MDBAccordionItem  className='justify-content-end' collapseId={1} headerTitle='Description'>
        {products.description}
      </MDBAccordionItem>
       </MDBAccordion>
       <MDBCardText >Categoría: {products.brand}</MDBCardText>
        <MDBCardText >Costo: ${products.price}</MDBCardText>
        <MDBBtn onClick={() => onAddProduct((products))}><MDBIcon fas icon="shopping-cart" />ADD</MDBBtn>
      </MDBCardBody>
    </MDBCard>
   </>
  );
};

export default ProductCard;