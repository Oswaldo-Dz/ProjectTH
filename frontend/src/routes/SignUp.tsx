import { useContext, useState } from "react";
import { AuthContext } from '../auth/AuthProvider'
import DefaultLayout from "../Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constants";
import { useAuth } from "../auth/AuthProvider";
import { AuthResponseError } from "../types/types";
import LogOutLayout from "../Layout/LogOutLayout";
import { MDBCol, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Swal from "sweetalert2";


export default function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const { isAuthenticated} = useContext(AuthContext);


    const auth = useAuth();
    const goTo = useNavigate();
    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })

            });
            if(response.ok){
                Swal.fire({
                    title: "Cuenta creada!",
                    text: "Disfrute de su cuenta socio!",
                    icon: "success"
                  });
                console.log("Se creo correctamente");
                setErrorResponse("");
                if(auth.isAuthenticated){
                    goTo("/");
                }
        }else{
            console.log("algo salio mal con la respuesta");
            Swal.fire({
                title: "error",
                text: "Ah ocurrido un problema",
                icon: "warning"
              });
            const json = await response.json() as AuthResponseError;
            setErrorResponse(json.body.error);
            return;
            //setErrorResponse(json.message);

        }
    }
        catch(error){
            console.log(error);
        }
        //auth.signUp(username, email, password);
    }

    
    return (
        <>
        <header>
         {isAuthenticated ? <DefaultLayout/> : <LogOutLayout />}
         </header>
         <MDBContainer className='my-5 w-50'>
         
         <MDBCol center >
         <h2 className="text-center">Crear Cuenta</h2>
            <form className="form" onSubmit={handleSubmit}>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
            <div className="mb-3">
                <MDBInput label="Usuario"  type="text" className="form-control" id="user" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
                <MDBInput label="Email address"  type="Password" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
            <MDBInput className=''label="Password create" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Crear Usuario</button>
            </form>
            </MDBCol>
            </MDBContainer>
        </>
      );
}