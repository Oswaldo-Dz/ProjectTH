import { useContext } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import LogOutLayout from "../Layout/LogOutLayout";
import ListaCards from "../components/ProductList";
import { MDBCol } from "mdb-react-ui-kit";
export default function Dashboard(){
    // const { isAuthenticated} = useContext(AuthContext);
    return( 
    <>
    <header>
          <DefaultLayout />
    </header>
    <div className="container mb-3">
        <div className="text-center">
            <MDBCol><h1>Menú de Productos</h1></MDBCol>
            
        </div>
        <MDBCol><ListaCards></ListaCards></MDBCol>
    </div>
    </>
    )
}