import React, { useEffect, useState } from 'react'
import 'mdb-ui-kit/css/mdb.min.css';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { API_URL } from '../auth/constants';
import DefaultLayout from '../Layout/DefaultLayout';
import { AuthResponseError } from '../types/types';
import Swal from 'sweetalert2';

const TableProduct:React.FC = () => {
  const [datos, setDatos] = useState<any[]>([]);
  const [errorResponse, setErrorResponse] = useState("");

  const handleDeleteProduct = async (idProducto : any) => {
    Swal.fire({
      title: "Seguro que desea eliminar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then(async (result) => {

      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try{
          const response = await fetch(`${API_URL}/deleteproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idProducto
            })
    
        });
        if(response.ok){
          console.log("Se elimino el producto");
          const newData = datos.filter(product => product.id !== idProducto);
          setDatos(newData);
        
          setErrorResponse("");
        }
        else{
          console.log("algo salio mal con la respuesta");
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.body.error);
                return;
        }
        }catch(error){
          Swal.fire("Changes are not saved", "", "info");
        }
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
   
  };

  useEffect(() => {
    fetch(`${API_URL}/getProduct`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
    },
  }) // Reemplaza con la URL de tu API
      .then((response) => response.json())
      .then((data) => {
        const info = data.body.success;
        console.log(info);
        setDatos(info)
      }
    );
  }, []);
  return (
    <>
    <DefaultLayout></DefaultLayout>
    <MDBRow center>
    <MDBCol md='8'>
      
    <MDBContainer fluid >
      <MDBTable align='middle'>
      <MDBTableHead>
      <tr>
            <th>ID</th>
            <th>Product</th>
            <th>$ Precio</th>
            <th>Delete</th>
      </tr>
      </MDBTableHead>
      <MDBTableBody>
        {datos.map((product) => (
          <tr key={product.id}>
            
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
              <MDBIcon fas icon="minus-circle" className="mx-1" size="sm" onClick={() => handleDeleteProduct(product.id)}/>
              </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
    </MDBCol>
    </MDBRow>
    </>
  )
}

export default TableProduct
