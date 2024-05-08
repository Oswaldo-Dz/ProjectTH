import DefaultLayout from '../Layout/DefaultLayout';
import {  useContext, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { AuthResponseError } from '../types/types';
import { API_URL } from '../auth/constants';
import Swal from 'sweetalert2';
import Cart from '../components/ListCar';
import Car from '../components/Car';
import ListCart from '../components/ListCar';


interface CreateProduct{
          name: string;
          image: string;
          price: number;
          description: string;
          category: string;
          brand: string;
}
const CreateProduct: React.FC = () => {
    
    const [errorResponse, setErrorResponse] = useState("");
    const [datosProduct, setDatosProduct] = useState<CreateProduct>({
          name: '',
          image: '',
          price: 0,
          description: '',
          category: '',
          brand: ''
    });


    const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
        const response = await fetch(`${API_URL}/createProduct`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosProduct)
        });
        if(response.ok){
            Swal.fire({
                title: "Listo!",
                text: "Se ha agregado el producto!",
                icon: "success"
              });
            console.log('Datos enviados correctamente:', response.json());
            setDatosProduct({
                name: '',
                image: '',
                price: 0,
                description: '',
                category: '',
                brand: ''
            });
        }else{
            console.log("algo salio mal con la respuesta");
            const json = await response.json() as AuthResponseError;
            setErrorResponse(json.body.error);
            return;
            //setErrorResponse(json.message);

        }
        
        
      } catch (error) {
        console.error('Error al enviar datos:', error);
        alert('Error al enviar datos.');
      }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDatosProduct({ ...datosProduct, [name]: value });
      };
        //auth.signUp(username, email, password);
    
    return (
        <>
        <DefaultLayout>
        <div className='container p-3 my-5 d-flex flex-column w-50 center'>
        <form className="form" autoComplete='off'>
            <h1 className='text-center'>Agregar Producto</h1>
            
            <div className="mb-3">
                <label className="form-label">Nombre del producto</label>
                <input type="text" className="form-control" id="productName" name='name'  
               value={datosProduct.name} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">URL DE LA IMAGEN</label>
                <input type="text" className="form-control" id="imageUrl" name='image'  
               value={datosProduct.image} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Precio</label>
                <input type="number" className="form-control" id="price" name='price' value={datosProduct.price} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="descript" name='description' value={datosProduct.description} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Categoria</label>
                <input type="text" className="form-control" id="category" name='category' value={datosProduct.category} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Brand</label>
                <input type="text" className="form-control" id="brand" name='brand' value={datosProduct.brand}  onChange={handleChange} required/>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">Guardar</button>
            </form>
            </div>
        </DefaultLayout>
        </>
      );
    }
export default CreateProduct;