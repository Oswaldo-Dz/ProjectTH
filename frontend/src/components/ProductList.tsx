import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './Card';
import { API_URL } from '../auth/constants';
import './Card.css'
import { MDBInput } from 'mdb-react-ui-kit';

const ListaCards: React.FC = () => {
  const [datos, setDatos] = useState<any[]>([]);
  const [category, setCategory] = useState<string>('');
  useEffect(() => {
    fetch(`${API_URL}/getProduct`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
        const info = data.body.success;
        console.log(info);
        setDatos(info)
      }
    );
  }, []);
  return (
    
  <div className='containerList'>
    <div className="justify-content-end">
        <MDBInput  size="md" type="text" placeholder="Busqueda por categoría" onChange={(event) => setCategory(event.target.value)} style={{marginBottom:15}} />
    </div>
    <div className="lista-cards">
    
      <div className='row'>
        {datos
          .filter((product: any) => !category || product.brand.toLowerCase().includes(category.toLowerCase()))
          .map((product: any) => (
            <div key={product.id} style={{ width: '300px' }}>
              <ProductCard key={product.id} products={product} quantity={0}  />
            </div>
          ))}
      </div>
    </div>
  </div>
  );
};

export default ListaCards;