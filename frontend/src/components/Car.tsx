import React from 'react'
import { MDBBtn, MDBIcon, MDBRipple, MDBCard,MDBCardBody,MDBCardTitle,MDBCardText, MDBCardImage, MDBAccordion, MDBAccordionItem, } from 'mdb-react-ui-kit';
import { Product, Props } from './Card';
import { CartItem } from '../types/types';
import { CartProps } from './ListCar';

const Car = ({product}: CartProps) => {
    function onAddProduct(arg0: Product): void {
        throw new Error('Function not implemented.');
    }

  return (
    <>
    <MDBCard style={{height:'400px', marginBottom:15}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='text-center' src={product.image} alt={product.name} width="250" height="250" fluid />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{product.name}</MDBCardTitle>
        {/* <MDBCardText className='text-center'>{products.description}</MDBCardText> */}
        <MDBAccordion flush initialActive={0}>
        <MDBAccordionItem  className='text-center' collapseId={1} headerTitle='Description'>
        {product.description}
      </MDBAccordionItem>
       </MDBAccordion>
        <MDBCardText >Precio: ${product.price}</MDBCardText>
        <MDBBtn onClick={() => onAddProduct((product))}><MDBIcon fas icon="shopping-cart" />ADD</MDBBtn>
      </MDBCardBody>
    </MDBCard>
   </>
  )
}

export default Car
