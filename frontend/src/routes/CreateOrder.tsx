import DefaultLayout from '../Layout/DefaultLayout';
import {  useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { AuthResponseError } from '../types/types';
import { API_URL } from '../auth/constants';
import Swal from 'sweetalert2';
import Carrito from './Carrito';

interface FormsOrder{
    cp: number;
    user_id: number;
    colonia: string;
    estado: string;
    ciudad: string;
    num_ext: string;
    pais: string;
}
const CreateOrder: React.FC = () => {
    const [errorResponse, setErrorResponse] = useState("");
    const [datosProduct, setDatosProduct] = useState<FormsOrder>({
          cp: 0,
          user_id: 3,
          colonia: '',
          estado: '',
          ciudad: '',
          num_ext: '',
          pais: ''
    });

    const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
        const response = await fetch(`${API_URL}/createOrder`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosProduct)
        });
        if(response.ok){
            Swal.fire({
                title: "Se ha generado su orden!",
                text: "Trabajamos lo más rápido posible para usted!",
                icon: "success"
              });
            console.log('Datos enviados correctamente:', response.json());
            setDatosProduct({
                    cp:0,
                    user_id: 3,
                    colonia: '',
                    estado: '',
                    ciudad: '',
                    num_ext: '',
                    pais: ''
                  
            });
        }else{
            Swal.fire({
                title: "Error",
                text: "Trabajamos lo más rápido posible para usted!",
                icon: "info"
              });
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
        <Carrito></Carrito>
        <form className="form" autoComplete='off'>
            <h1>Datos  envío</h1>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
            <div className="mb-3" hidden>
                <label className="form-label">Id del Usuario</label>
                <input type="number" className="form-control" id="user_id" name='user_id'  
               defaultValue={3}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Codigo Postal</label>
                <input type="number" className="form-control" id="cp" name='cp' value={datosProduct.cp} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Colonia</label>
                <input type="text" className="form-control" id="colonia" name='colonia' value={datosProduct.colonia} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Estado</label>
                <input type="text" className="form-control" id="estado" name='estado' value={datosProduct.estado} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="ciudad" name='ciudad' value={datosProduct.ciudad} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label"># Exterior</label>
                <input type="text" className="form-control" id="num_ext" name='num_ext' value={datosProduct.num_ext} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Pais</label>
                <input type="text" className="form-control" id="pais" name='pais' value={datosProduct.pais} onChange={handleChange} required/>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">Guardar</button>
            </form>
            </div>
            
        </DefaultLayout>
        </>
      );
    }
export default CreateOrder;